#!/usr/bin/env node

/**
 * Refresh the bot's WoW ID data from one SimCraft generated-data snapshot.
 *
 * The importer deliberately merges instead of deleting. Warcraft Logs can
 * contain older IDs, so removing an entry just because the current SimCraft
 * dump no longer advertises it would make historical audits regress.
 *
 * Usage:
 *   node scripts/update-wow-ids.mjs                 # report only
 *   node scripts/update-wow-ids.mjs --write         # write data files
 *   node scripts/update-wow-ids.mjs --write --add-current-consumables
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DEFAULT_SOURCE = path.join(ROOT, 'scratch', 'simc-midnight-import');
const DATA_ROOT = path.join(ROOT, '_Bot Data_', 'WoW IDs');

const classes = [
  { slug: 'deathknight', display: 'Death Knight', json: 'DeathKnight.json', talent: 'deathknight.ts', classId: 6 },
  { slug: 'demonhunter', display: 'Demon Hunter', json: 'DemonHunter.json', talent: 'demonhunter.ts', classId: 12 },
  { slug: 'druid', display: 'Druid', json: 'Druid.json', talent: 'druid.ts', classId: 11 },
  { slug: 'evoker', display: 'Evoker', json: 'Evoker.json', talent: 'evoker.ts', classId: 13 },
  { slug: 'hunter', display: 'Hunter', json: 'Hunter.json', talent: 'hunter.ts', classId: 3 },
  { slug: 'mage', display: 'Mage', json: 'Mage.json', talent: 'mage.ts', classId: 8 },
  { slug: 'monk', display: 'Monk', json: 'Monk.json', talent: 'monk.ts', classId: 10 },
  { slug: 'paladin', display: 'Paladin', json: 'Paladin.json', talent: 'paladin.ts', classId: 2 },
  { slug: 'priest', display: 'Priest', json: 'Priest.json', talent: 'priest.ts', classId: 5 },
  { slug: 'rogue', display: 'Rogue', json: 'Rogue.json', talent: 'rogue.ts', classId: 4 },
  { slug: 'shaman', display: 'Shaman', json: 'Shaman.json', talent: 'shaman.ts', classId: 7 },
  { slug: 'warlock', display: 'Warlock', json: 'Warlock.json', talent: 'warlock.ts', classId: 9 },
  { slug: 'warrior', display: 'Warrior', json: 'Warrior.json', talent: 'warrior.ts', classId: 1 },
];

const args = process.argv.slice(2);
const write = args.includes('--write');
const addCurrentConsumables = args.includes('--add-current-consumables');
const sourceArg = args.find((arg) => arg.startsWith('--source='));
const dataArg = args.find((arg) => arg.startsWith('--data='));
const commitArg = args.find((arg) => arg.startsWith('--commit='));
const sourceRoot = path.resolve(sourceArg ? sourceArg.slice('--source='.length) : DEFAULT_SOURCE);
const dataRoot = path.resolve(dataArg ? dataArg.slice('--data='.length) : DATA_ROOT);

const report = {
  mode: write ? 'write' : 'dry-run',
  sourceRoot,
  sourceBuild: null,
  sourceCommit: null,
  spells: [],
  talents: [],
  consumables: [],
  warnings: [],
};

function read(file) {
  return fs.readFileSync(file, 'utf8').replace(/^\uFEFF/, '');
}

function exists(file) {
  return fs.existsSync(file);
}

function eolOf(text) {
  return text.includes('\r\n') ? '\r\n' : '\n';
}

function writeIfChanged(file, original, updated) {
  if (original === updated) return false;
  if (write) fs.writeFileSync(file, updated, 'utf8');
  return true;
}

function uniqueNumbers(values) {
  return [...new Set(values.map(Number).filter(Number.isFinite))];
}

function uniqueDefinitions(values) {
  const seen = new Set();
  return values.filter(({ id, specId }) => {
    const key = `${id}:${specId}`;
    if (!Number.isFinite(id) || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function parseSpellBlocks(text) {
  const starts = [...text.matchAll(/^Name\s+:\s+(.+?)\s+\(id=(\d+)\)/gm)];
  return starts.map((match, index) => {
    const end = starts[index + 1]?.index ?? text.length;
    const block = text.slice(match.index, end);
    const gcd = block.match(/^GCD\s+:\s+(-?\d+(?:\.\d+)?)\s+seconds/im);
    const castTime = block.match(/^Cast Time\s+:\s+(-?\d+(?:\.\d+)?)\s+seconds/im);
    return {
      id: Number(match[2]),
      name: match[1].trim(),
      gcd: gcd ? Number(gcd[1]) : 0,
      castTime: castTime ? Number(castTime[1]) : 0,
      isTalent: /^Talent Entry\s*:/im.test(block),
      block,
    };
  });
}

function parseGeneratedSpellData(text) {
  const result = new Map();
  for (const line of text.split(/\r?\n/)) {
    const match = line.match(/^\s*\{\s*"((?:\\.|[^"\\])*)"\s*,\s*(\d+)\s*,/);
    if (!match) continue;
    result.set(Number(match[2]), match[1].replace(/\\"/g, '"'));
  }
  return result;
}

function parseTraitRows(text) {
  const rows = [];
  const rowPattern = /^\s*\{\s*(\d+),\s*(\d+),\s*(\d+),\s*(\d+),\s*(\d+),\s*(\d+),\s*(\d+),\s*(\d+),\s*(\d+),\s*(\d+),\s*(-?\d+),\s*(-?\d+),\s*(-?\d+),\s*"((?:\\.|[^"\\])*)",\s*\{([^}]*)\},\s*\{([^}]*)\},\s*(\d+),\s*(\d+)\s*\},/;
  const vector = (value) => value.split(',').map((part) => Number(part.trim())).filter(Number.isFinite);

  for (const line of text.split(/\r?\n/)) {
    const match = line.match(rowPattern);
    if (!match) continue;
    rows.push({
      treeIndex: Number(match[1]),
      classId: Number(match[2]),
      entryId: Number(match[3]),
      nodeId: Number(match[4]),
      maxRanks: Number(match[5]),
      reqPoints: Number(match[6]),
      definitionId: Number(match[7]),
      spellId: Number(match[8]),
      replaceSpell: Number(match[9]),
      overrideSpell: Number(match[10]),
      row: Number(match[11]),
      col: Number(match[12]),
      selectionIndex: Number(match[13]),
      name: match[14].replace(/\\"/g, '"'),
      specIds: vector(match[15]),
      starterSpecIds: vector(match[16]),
      subtreeId: Number(match[17]),
      nodeType: Number(match[18]),
    });
  }
  return rows;
}

function parseTalentBlocks(text) {
  const blocks = [];
  const pattern = /^  ([A-Z][A-Z0-9_]*): \{\r?\n([\s\S]*?)^  \},/gm;
  for (const match of text.matchAll(pattern)) {
    const block = match[0];
    const id = block.match(/^\s+id:\s*(\d+)\s*,/m);
    const name = block.match(/^\s+name:\s*(['"])(.*?)\1\s*,/m);
    const entries = block.match(/^\s+entryIds:\s*\[([^\]]*)\]/m);
    const definitions = [...block.matchAll(/\{\s*id:\s*(\d+)\s*,\s*specId:\s*(\d+)\s*\}/g)].map((item) => ({
      id: Number(item[1]),
      specId: Number(item[2]),
    }));
    blocks.push({
      key: match[1],
      id: id ? Number(id[1]) : null,
      name: name ? name[2] : null,
      entryIds: entries ? uniqueNumbers(entries[1].split(',')) : [],
      definitionIds: definitions,
      start: match.index,
      end: match.index + block.length,
      block,
    });
  }
  return blocks;
}

function formatTsString(value) {
  if (!value.includes("'")) return `'${value.replaceAll('\\', '\\\\')}'`;
  return `"${value.replaceAll('\\', '\\\\').replaceAll('"', '\\"')}"`;
}

function replaceProperty(block, property, value) {
  const pattern = new RegExp(`^(\\s+)${property}:.*$`, 'm');
  const match = block.match(pattern);
  if (!match) return block;
  return block.replace(pattern, `${match[1]}${property}: ${value},`);
}

function updateTalentBlock(block, data) {
  let result = block;
  result = replaceProperty(result, 'id', String(data.id));
  result = replaceProperty(result, 'name', formatTsString(data.name));
  result = replaceProperty(result, 'maxRanks', String(data.maxRanks));
  result = replaceProperty(result, 'entryIds', `[${data.entryIds.join(', ')}]`);
  result = replaceProperty(result, 'definitionIds', `[${data.definitionIds.map(({ id, specId }) => `{ id: ${id}, specId: ${specId} }`).join(', ')}]`);
  return result;
}

function makeTalentBlock(key, data, eol) {
  const definitions = data.definitionIds.map(({ id, specId }) => `{ id: ${id}, specId: ${specId} }`).join(', ');
  return [
    `  ${key}: {`,
    `    id: ${data.id},`,
    `    name: ${formatTsString(data.name)},`,
    `    icon: 'inv_misc_questionmark',`,
    `    maxRanks: ${data.maxRanks},`,
    `    entryIds: [${data.entryIds.join(', ')}],`,
    `    definitionIds: [${definitions}],`,
    `  },`,
  ].join(eol);
}

function makeConsumableBlock(key, data, eol) {
  const lines = [
    `  ${key}: {`,
    `    id: ${data.id},`,
    `    name: ${formatTsString(data.name)},`,
    `    icon: 'inv_misc_questionmark',`,
  ];
  if (data.craftQuality !== undefined) lines.push(`    craftQuality: ${data.craftQuality},`);
  lines.push('  },');
  return lines.join(eol);
}

function insertBeforeExport(text, blocks, eol) {
  if (!blocks.length) return text;
  const marker = text.search(/^\} satisfies Record<string, (?:Talent|Spell|CraftedItem|Enchant)>;/m);
  if (marker < 0) throw new Error('Could not locate TypeScript export marker');
  const prefix = text.slice(0, marker);
  const separator = prefix.endsWith(eol) || prefix.length === 0 ? '' : eol;
  return `${prefix}${separator}${blocks.join(eol)}${eol}${text.slice(marker)}`;
}

function sanitizeKey(name, prefix, used) {
  const base = `${prefix}_${name}`
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '') || `${prefix}_ENTRY`;
  let key = base;
  let suffix = 2;
  while (used.has(key)) key = `${base}_${suffix++}`;
  used.add(key);
  return key;
}

function parseConsumableBlocks(text) {
  const blocks = [];
  const pattern = /^  ([A-Z][A-Z0-9_]*): \{\r?\n([\s\S]*?)^  \},/gm;
  for (const match of text.matchAll(pattern)) {
    const block = match[0];
    const id = block.match(/^\s+id:\s*(\d+)\s*,/m);
    const name = block.match(/^\s+name:\s*(['"])(.*?)\1\s*,/m);
    const effectId = block.match(/^\s+effectId:\s*(\d+)\s*,/m);
    const craftQuality = block.match(/^\s+craftQuality:\s*(\d+)\s*,/m);
    blocks.push({
      key: match[1],
      id: id ? Number(id[1]) : null,
      name: name ? name[2] : null,
      effectId: effectId ? Number(effectId[1]) : null,
      craftQuality: craftQuality ? Number(craftQuality[1]) : undefined,
      start: match.index,
      end: match.index + block.length,
      block,
    });
  }
  return blocks;
}

function replaceBlocks(text, blocks, replacements) {
  let result = text;
  for (let index = blocks.length - 1; index >= 0; index -= 1) {
    const replacement = replacements.get(blocks[index].key);
    if (replacement === undefined) continue;
    result = `${result.slice(0, blocks[index].start)}${replacement}${result.slice(blocks[index].end)}`;
  }
  return result;
}

function buildTalentData(rows, spellNames, existing, classId) {
  const grouped = new Map();
  for (const row of rows) {
    if (row.classId !== classId || row.spellId <= 0) continue;
    const data = grouped.get(row.spellId) ?? {
      id: row.spellId,
      name: spellNames.get(row.spellId) || row.name,
      maxRanks: 0,
      entryIds: [],
      definitionIds: [],
      unscopedDefinitions: [],
    };
    data.name = spellNames.get(row.spellId) || data.name;
    data.maxRanks = Math.max(data.maxRanks, row.maxRanks);
    data.entryIds.push(row.entryId);
    const specs = row.specIds.filter((value) => value > 0);
    if (specs.length) {
      data.definitionIds.push(...specs.map((specId) => ({ id: row.definitionId, specId })));
    } else {
      data.unscopedDefinitions.push(row.definitionId);
    }
    grouped.set(row.spellId, data);
  }

  const defaultSpecCounts = new Map();
  for (const item of existing) {
    for (const definition of item.definitionIds) {
      if (definition.specId > 0) defaultSpecCounts.set(definition.specId, (defaultSpecCounts.get(definition.specId) || 0) + 1);
    }
  }
  const defaultSpecId = [...defaultSpecCounts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] || 0;

  for (const data of grouped.values()) {
    const specId = defaultSpecId;
    data.definitionIds.push(...data.unscopedDefinitions.filter((id) => id > 0).map((id) => ({ id, specId })));
    data.entryIds = uniqueNumbers(data.entryIds);
    data.definitionIds = uniqueDefinitions(data.definitionIds);
    delete data.unscopedDefinitions;
  }
  return grouped;
}

function refreshSpells(sourceByClass) {
  const dir = path.join(dataRoot, 'Class Spells');
  for (const item of classes) {
    const file = path.join(dir, item.json);
    const original = read(file);
    const records = JSON.parse(original);
    const source = sourceByClass.get(item.slug) || new Map();
    const originalCount = records.length;
    const deduplicated = [];
    const seenIds = new Set();
    for (const record of records) {
      const id = Number(record.id);
      if (seenIds.has(id)) continue;
      seenIds.add(id);
      deduplicated.push(record);
    }
    records.splice(0, records.length, ...deduplicated);
    const byId = new Map(records.map((record) => [Number(record.id), record]));
    let updated = 0;
    let added = 0;

    for (const [id, sourceRecord] of source) {
      const target = byId.get(id);
      if (target) {
        if (target.name !== sourceRecord.name || Number(target.gcd) !== sourceRecord.gcd || Number(target.castTime) !== sourceRecord.castTime) updated += 1;
        target.name = sourceRecord.name;
        target.gcd = sourceRecord.gcd;
        target.castTime = sourceRecord.castTime;
      } else {
        const record = { name: sourceRecord.name, id, gcd: sourceRecord.gcd, castTime: sourceRecord.castTime };
        records.push(record);
        byId.set(id, record);
        added += 1;
      }
    }

    const eol = eolOf(original);
    const updatedText = JSON.stringify(records, null, 2).replaceAll('\n', eol) + eol;
    writeIfChanged(file, original, updatedText);
    report.spells.push({ file: item.json, existing: records.length - added, updated, added, duplicatesRemoved: originalCount - records.length + added });
  }
}

function refreshTalents(sourceTalentIds, traitRows, spellNames) {
  const dir = path.join(dataRoot, 'Class Talents');
  for (const item of classes) {
    const file = path.join(dir, item.talent);
    const original = read(file);
    const parsedExisting = parseTalentBlocks(original);
    const existing = [];
    const existingById = new Map();
    const replacements = new Map();
    for (const entry of parsedExisting) {
      if (entry.id === null || !existingById.has(entry.id)) {
        existing.push(entry);
        if (entry.id !== null) existingById.set(entry.id, entry);
        continue;
      }
      const primary = existingById.get(entry.id);
      primary.entryIds = uniqueNumbers([...primary.entryIds, ...entry.entryIds]);
      primary.definitionIds = uniqueDefinitions([...primary.definitionIds, ...entry.definitionIds]);
      primary.block = updateTalentBlock(primary.block, {
        id: primary.id,
        name: primary.name,
        maxRanks: primary.block.match(/^\s+maxRanks:\s*(\d+)/m)?.[1] || 1,
        entryIds: primary.entryIds,
        definitionIds: primary.definitionIds,
      });
      replacements.set(primary.key, primary.block);
      replacements.set(entry.key, '');
    }
    const rows = traitRows.filter((row) => sourceTalentIds.get(item.slug)?.has(row.spellId));
    const source = buildTalentData(rows, spellNames, existing, item.classId);
    let updated = 0;
    let added = 0;
    const usedKeys = new Set(parsedExisting.map((entry) => entry.key));

    for (const [id, sourceData] of source) {
      const target = existingById.get(id);
      if (target) {
        const entryIds = uniqueNumbers([...target.entryIds, ...sourceData.entryIds]);
        const definitionIds = uniqueDefinitions([...target.definitionIds, ...sourceData.definitionIds]);
        const data = {
          ...sourceData,
          entryIds,
          definitionIds: definitionIds.length ? definitionIds : target.definitionIds,
        };
        const replacement = updateTalentBlock(target.block, data);
        replacements.set(target.key, replacement);
        if (replacement !== target.block) updated += 1;
      } else {
        const key = sanitizeKey(sourceData.name, 'TALENT', usedKeys);
        const data = {
          ...sourceData,
          definitionIds: sourceData.definitionIds.length ? sourceData.definitionIds : [{ id: 0, specId: 0 }],
        };
        replacements.set(`__new__${key}`, makeTalentBlock(key, data, eolOf(original)));
        added += 1;
      }
    }

    let updatedText = replaceBlocks(original, parsedExisting, replacements);
    const newBlocks = [...replacements.entries()]
      .filter(([key]) => key.startsWith('__new__'))
      .map(([, value]) => value);
    updatedText = insertBeforeExport(updatedText, newBlocks, eolOf(original));
    writeIfChanged(file, original, updatedText);
    report.talents.push({ file: item.talent, existing: existing.length, sourceRows: rows.length, updated, added, duplicatesRemoved: parsedExisting.length - existing.length });
  }
}

function parsePermanentEnchantRows(text) {
  const rows = [];
  for (const line of text.split(/\r?\n/)) {
    const match = line.match(/^\s*\{\s*(\d+),\s*(\d+),[^\r\n]*?"([^"]+)"/);
    if (match) rows.push({ effectId: Number(match[1]), rank: Number(match[2]), token: match[3] });
  }
  return rows;
}

function refreshConsumableFile(fileName, category, generatedSpellNames, addCandidates) {
  const file = path.join(dataRoot, 'Consumables', fileName);
  const original = read(file);
  const eol = eolOf(original);
  const blocks = parseConsumableBlocks(original);
  const replacements = new Map();
  const existingIds = new Set(blocks.map((entry) => entry.id));
  const existingNames = new Set(blocks.map((entry) => entry.name));
  const usedKeys = new Set(blocks.map((entry) => entry.key));
  let updated = 0;
  let added = 0;

  for (const entry of blocks) {
    const sourceName = generatedSpellNames.get(entry.id);
    if (!sourceName || category === 'food') continue;
    if (sourceName === entry.name) continue;
    replacements.set(entry.key, replaceProperty(entry.block, 'name', formatTsString(sourceName)));
    updated += 1;
  }

  const newBlocks = [];
  if (addCurrentConsumables) {
    for (const candidate of addCandidates) {
      if (existingIds.has(candidate.id)) continue;
      if (category !== 'food' && existingNames.has(candidate.name)) continue;
      const key = sanitizeKey(candidate.name, 'SIMC', usedKeys);
      newBlocks.push(makeConsumableBlock(key, candidate, eol));
      existingIds.add(candidate.id);
      existingNames.add(candidate.name);
      added += 1;
    }
  }

  let updatedText = replaceBlocks(original, blocks, replacements);
  updatedText = insertBeforeExport(updatedText, newBlocks, eol);
  writeIfChanged(file, original, updatedText);
  report.consumables.push({ file: fileName, category, existing: blocks.length, updated, added });
}

function refreshGems(itemNames) {
  const file = path.join(dataRoot, 'Consumables', 'gems.ts');
  const original = read(file);
  const blocks = parseConsumableBlocks(original);
  const replacements = new Map();
  let updated = 0;
  for (const entry of blocks) {
    const sourceName = itemNames.get(entry.id);
    if (!sourceName || sourceName === entry.name) continue;
    replacements.set(entry.key, replaceProperty(entry.block, 'name', formatTsString(sourceName)));
    updated += 1;
  }
  const updatedText = replaceBlocks(original, blocks, replacements);
  writeIfChanged(file, original, updatedText);
  report.consumables.push({ file: 'gems.ts', category: 'gems', existing: blocks.length, updated, added: 0 });
}

function validateEnchantEffectIds(sourceRows) {
  const sourceIds = new Set(sourceRows.map((row) => row.effectId));
  const file = path.join(dataRoot, 'Consumables', 'enchants.ts');
  const blocks = parseConsumableBlocks(read(file));
  const missing = blocks.filter((entry) => entry.effectId !== null && !sourceIds.has(entry.effectId)).map((entry) => `${entry.key}:${entry.effectId}`);
  if (missing.length) report.warnings.push(`Enchant effect IDs not present in this SimC snapshot (preserved for log compatibility): ${missing.join(', ')}`);
  report.consumables.push({ file: 'enchants.ts', category: 'enchants', existing: blocks.length, updated: 0, added: 0, sourceEffectIds: sourceIds.size, missingEffectIds: missing.length });
}

function candidatesFromGeneratedSpells(spellNames, category) {
  const result = [];
  const seenNames = new Set();
  for (const [id, name] of spellNames) {
    if (id < 1_230_000) continue;
    const isFood = name === 'Well Fed' || name === 'Hearty Well Fed';
    const isPotion = /potion|draught|extract|serum/i.test(name) && !/prepare|cauldron|recipe|research|training/i.test(name);
    const isFlask = /flask|phial/i.test(name) && !/prepare|cauldron|recipe|research|training/i.test(name);
    const matches = category === 'food' ? isFood : category === 'potions' ? isPotion : isFlask;
    if (!matches || (category !== 'food' && seenNames.has(name))) continue;
    result.push({ id, name });
    seenNames.add(name);
  }
  return result;
}

function loadSource() {
  if (!exists(sourceRoot)) throw new Error(`Source directory does not exist: ${sourceRoot}`);
  const buildFile = path.join(sourceRoot, 'SpellDataDump_build_info.txt');
  if (exists(buildFile)) report.sourceBuild = read(buildFile).trim();
  const commitFile = path.join(sourceRoot, 'simc_commit.txt');
  if (exists(commitFile)) report.sourceCommit = read(commitFile).trim();

  const sourceByClass = new Map();
  const sourceTalentIds = new Map();
  const allSpellNames = new Map();
  for (const item of classes) {
    const file = path.join(sourceRoot, `SpellDataDump_${item.slug}.txt`);
    const blocks = parseSpellBlocks(read(file));
    const classSpells = new Map();
    const talentIds = new Set();
    for (const spell of blocks) {
      if (!allSpellNames.has(spell.id)) allSpellNames.set(spell.id, spell.name);
      if (spell.isTalent) talentIds.add(spell.id);
      if (!spell.block.includes(`${item.display} Spells`)) continue;
      classSpells.set(spell.id, { name: spell.name, gcd: spell.gcd, castTime: spell.castTime });
    }
    sourceByClass.set(item.slug, classSpells);
    sourceTalentIds.set(item.slug, talentIds);
  }

  const traitFile = exists(path.join(sourceRoot, 'engine_dbc_generated_trait_data.inc'))
    ? path.join(sourceRoot, 'engine_dbc_generated_trait_data.inc')
    : path.join(sourceRoot, 'trait_data.inc');
  const traitRows = parseTraitRows(read(traitFile));
  if (!traitRows.length) throw new Error(`No trait rows parsed from ${traitFile}`);

  const scSpellFile = path.join(sourceRoot, 'engine_dbc_generated_sc_spell_data.inc');
  const generatedSpellNames = parseGeneratedSpellData(read(scSpellFile));
  const itemFile = path.join(sourceRoot, 'engine_dbc_generated_item_data.inc');
  const itemNames = new Map();
  for (const line of read(itemFile).split(/\r?\n/)) {
    const match = line.match(/^\s*\{\s*"((?:\\.|[^"\\])*)"\s*,\s*(\d+)\s*,/);
    if (match) itemNames.set(Number(match[2]), match[1].replace(/\\"/g, '"'));
  }
  const enchantFile = path.join(sourceRoot, 'engine_dbc_generated_permanent_enchant.inc');
  const enchantRows = parsePermanentEnchantRows(read(enchantFile));

  return { sourceByClass, sourceTalentIds, allSpellNames, traitRows, generatedSpellNames, itemNames, enchantRows };
}

function writeMetadata() {
  const file = path.join(dataRoot, 'SimC-Data-Import.json');
  const original = exists(file) ? read(file) : null;
  const metadata = {
    source: 'https://github.com/simulationcraft/simc',
    branch: 'midnight',
    commit: report.sourceCommit || 'unknown',
    build: report.sourceBuild || 'unknown',
    importedAt: new Date().toISOString(),
    logIdContracts: {
      spellAndAura: 'event.abilityGameID / buffs[].guid -> spell id',
      talentSelection: 'combatantInfo.talentTree[].id -> talent entryIds[]',
      gem: 'gear[].gems[].id -> gem id',
      enchant: 'gear[].permanentEnchant / temporaryEnchant -> enchants.effectId',
    },
  };
  const updated = `${JSON.stringify(metadata, null, 2)}\n`;
  if (original === null || original !== updated) {
    if (write) fs.writeFileSync(file, updated, 'utf8');
    report.metadata = { file: 'SimC-Data-Import.json', written: true };
  }
}

try {
  const source = loadSource();
  if (commitArg) report.sourceCommit = commitArg.slice('--commit='.length);
  report.sourceCommit ||= 'unknown';
  refreshSpells(source.sourceByClass);
  refreshTalents(source.sourceTalentIds, source.traitRows, source.allSpellNames);
  refreshConsumableFile('potions.ts', 'potions', source.generatedSpellNames, candidatesFromGeneratedSpells(source.generatedSpellNames, 'potions'));
  refreshConsumableFile('flasks.ts', 'flasks', source.generatedSpellNames, candidatesFromGeneratedSpells(source.generatedSpellNames, 'flasks'));
  refreshConsumableFile('food.ts', 'food', source.generatedSpellNames, candidatesFromGeneratedSpells(source.generatedSpellNames, 'food'));
  refreshGems(source.itemNames);
  validateEnchantEffectIds(source.enchantRows);
  writeMetadata();
  console.log(JSON.stringify(report, null, 2));
} catch (error) {
  console.error(error instanceof Error ? error.stack : error);
  process.exitCode = 1;
}
