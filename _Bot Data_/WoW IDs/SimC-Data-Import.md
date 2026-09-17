# SimCraft data import guide

This document describes how to update the WoW ID files used by the bot from
[SimulationCraft](https://github.com/simulationcraft/simc), and which IDs must
be preserved because they match the shape of Warcraft Logs data.

The data files are generated from a specific WoW build. Always record the
SimulationCraft branch, commit, and WoW build used for an update. The files in
the `midnight` branch currently contain generated data for a 12.1 build, but
that will change as the branch moves forward.

## Upstream sources

Use the same SimCraft revision for all files in one update.

| Data | Source |
| --- | --- |
| Human-readable class spell dumps | [`SpellDataDump`](https://github.com/simulationcraft/simc/tree/midnight/SpellDataDump) |
| Spell IDs and names | [`spell_id_list.txt`](https://raw.githubusercontent.com/simulationcraft/simc/midnight/SpellDataDump/spell_id_list.txt) |
| Talent entry/definition/spec data | [`trait_data.inc`](https://raw.githubusercontent.com/simulationcraft/simc/midnight/engine/dbc/generated/trait_data.inc) |
| Item-to-effect mappings | [`item_effect.inc`](https://raw.githubusercontent.com/simulationcraft/simc/midnight/engine/dbc/generated/item_effect.inc) |
| Permanent enchant mappings | [`permanent_enchant.inc`](https://raw.githubusercontent.com/simulationcraft/simc/midnight/engine/dbc/generated/permanent_enchant.inc) |
| Item names and item metadata | [`item_data.inc`](https://raw.githubusercontent.com/simulationcraft/simc/midnight/engine/dbc/generated/item_data.inc) and the other files in [`engine/dbc/generated`](https://github.com/simulationcraft/simc/tree/midnight/engine/dbc/generated) |
| Canonical consumable names/tier suffixes | SimCraft class APLs and the [`ActionLists` wiki page](https://github.com/simulationcraft/simc/wiki/ActionLists) |

The [SpellDataDump README](https://raw.githubusercontent.com/simulationcraft/simc/midnight/SpellDataDump/README.md)
explains that these are generated, human-readable views of the Blizzard game
data consumed by SimCraft. They are not already in the bot's JSON/TypeScript
format.

## Why the ID types matter

There are several different ID types in a Warcraft Logs response. Do not
replace one with another merely because they refer to the same ability.

| Warcraft Logs field | Meaning | Bot data field |
| --- | --- | --- |
| `event.abilityGameID` | Spell/effect ID on cast, buff, damage, and other events | `Class Spells/*.json[].id`, talent `id`, or consumable `id` when the consumable is represented by its aura/effect |
| Performance/casts table `guid` | Spell/effect ID | Same spell ID fields as above |
| `combatantInfo.talentTree[].id` | Talent trait entry ID selected in the player's tree | Talent `entryIds[]` |
| `combatantInfo.talentTree[].rank` | Selected rank | Used with the talent entry; do not use it as the spell ID |
| `combatantInfo.talentTree[].nodeID` | Talent-tree node ID | Informational; not currently the lookup key used by the bot |
| `combatantInfo.gear[].id` | Equipped item ID | Item ID; do not confuse it with a spell/effect ID |
| `gear[].gems[].id` | Socketed gem item ID | `Consumables/gems.ts[].id` |
| `gear[].permanentEnchant` / `temporaryEnchant` | Enchant effect ID reported by the log | `Consumables/enchants.ts[].effectId` |
| `buffs[].guid` | Buff/aura spell ID | Consumable or spell effect ID when the bot needs it |

The current bot uses these relationships directly:

- GCD analysis builds a map from `Class Spells[].id` and looks up each cast's
  `event.abilityGameID`. `gcd` must therefore be numeric seconds, with `0`
  meaning the spell is off the GCD.
- Talent comparison reads `talentTree[].id` and searches `entryIds[]`. The
  talent's `id` is then used as the linked spell ID.
- Potion detection compares performance/buff names against the potion mapping.
  The stored potion ID is the potion's effect spell ID, not the item ID.
- Flask and food detection is based on buff names. Food entries intentionally
  use names such as `Well Fed` and `Hearty Well Fed`, because that is what the
  aura data exposes rather than the crafted food's item name.

## Target formats

### Class spells

Files such as `Class Spells/Rogue.json` contain records like:

```json
{
  "name": "Backstab",
  "id": 53,
  "gcd": 1,
  "castTime": 0
}
```

Convert each selected SimCraft spell to `name`, `id`, `gcd`, and `castTime`.
Keep separate records when the same name has different spell IDs. Deduplicate
by numeric spell ID, not by name.

Do not blindly copy every row from a class dump. SimCraft dumps include passive,
background, rank, set-bonus, and helper spells. Preserve the existing file's
inclusion policy, then add new IDs needed by current logs and current class
data.

### Class talents

Files such as `Class Talents/rogue.ts` use this shape:

```ts
TALENT_KEY: {
  id: 381828,                 // talent spell ID
  name: 'Ace Up Your Sleeve',
  icon: '...',
  maxRanks: 2,
  entryIds: [112555],         // IDs found in combatantInfo.talentTree[].id
  definitionIds: [{
    id: 117560,
    specId: 260,
  }],
}
```

Build these fields as follows:

1. Use the class SpellDataDump to identify the talent name, talent spell ID,
   tree, row, column, and maximum rank.
2. Use `trait_data.inc` for the trait entry ID, trait definition ID, spell ID,
   rank, and specialization association. It is a generated C++ table, so parse
   its rows using SimCraft's `trait_data_t` field definition; do not guess the
   meaning of positional columns.
3. Put the trait entry ID in `entryIds[]`. This is the ID Warcraft Logs returns
   in `talentTree[].id`.
4. Put the trait definition ID and specialization ID together in
   `definitionIds[]`.
5. Group rank/spec variants under the same semantic talent only when the
   existing file does so. Some Midnight talents are intentionally separate
   keys because they have separate spell IDs or rank behavior.
6. Keep the existing icon convention or source icons separately. SimCraft's
   generated trait data is not a ready-made icon mapping.

### Consumables

The `Consumables` directory contains potions, flasks, food, gems, and enchants.
They do not all use the same kind of ID.

#### Potions, flasks, and food

`item_effect.inc` rows begin with an item ID followed by the effect spell ID.
For these files, the target `id` is the effect spell ID because that is what
appears in aura/cast data and what the current mappings use.

```text
SimCraft item_effect row:  item_id, effect_spell_id, ...  // name
Target consumable record:  id = effect_spell_id
```

Conversion rules:

- Match the item/effect name to the canonical name used in SimCraft APLs and
  the log aura/cast data.
- Store the effect spell ID in `id`.
- If several item IDs share one effect spell ID, deduplicate by effect spell ID.
  Keep the item IDs in importer notes or an intermediate file if they are
  needed later.
- Preserve the target's exact food names (`Well Fed` and `Hearty Well Fed`)
  when the bot uses those aura names for matching.
- Add icons separately or retain the existing icon when the spell/item data
  does not provide the target icon-string format.

#### Enchants

Enchants are the exception currently documented in `enchants.ts`:

- `id` = enchant item ID, used for the item's Wowhead link.
- `effectId` = small enchant effect ID reported in
  `gear[].permanentEnchant`/`temporaryEnchant`.
- `craftQuality` identifies the rank where applicable.

Use `permanent_enchant.inc` to update this mapping. Never replace `effectId`
with the item ID.

#### Gems

Gem IDs in `gear[].gems[].id` are item IDs. Use the gem item ID for
`gems.ts[].id`; use item metadata for the name and icon.

## Recommended import pipeline

Keep the raw SimCraft checkout outside the generated data directory and produce
an intermediate normalized dataset before writing the bot files.

```text
SimCraft generated data
        |
        +-- SpellDataDump/<class>.txt  -> Class Spells/*.json
        |
        +-- trait_data.inc             -> Class Talents/*.ts
        |
        +-- item_effect.inc            -> potion/flask/food effect IDs
        +-- permanent_enchant.inc      -> enchants id/effectId
        +-- item_data.inc              -> gem item IDs and metadata
        |
        +-- icon/name normalization   -> target icon/name conventions
```

The importer should also write a small metadata record containing:

- SimCraft repository and branch;
- SimCraft commit SHA;
- WoW build number from the generated-file header;
- import timestamp;
- any manual name/icon overrides.

## Validation checklist

Before accepting an update:

- Parse every class-spell JSON file and verify that all `id` values are numeric
  and unique within the file.
- Verify that every talent entry ID used by a recent log resolves through
  `entryIds[]`.
- Verify that every recent cast's `abilityGameID` needed by GCD analysis is in
  the appropriate class spell file.
- Verify that every logged gem item ID resolves in `gems.ts`.
- Verify that every logged enchant effect ID resolves through `effectId`.
- Verify potion/flask/food names using the same case-insensitive name matching
  used by `item-mappings.js` and `audit-formatting.js`.
- Compare the generated files against a recent Warcraft Logs response before
  removing old IDs. A log is a validation contract, not a complete catalog.
- Run the bot tests and inspect at least one generated audit for missing spell,
  talent, and consumable links.

The existing bot implementation is the final authority for behavior. When a
new upstream field conflicts with an existing target field, update the
conversion rule only after confirming which value appears in the logs and
which value the consuming code looks up.

## Local updater

The bot repository includes `scripts/update-wow-ids.mjs`. Place one downloaded
SimCraft snapshot in `scratch/simc-midnight-import` (or pass `--source=...`),
then run:

```powershell
node scripts/update-wow-ids.mjs --write --add-current-consumables
```

Without `--write` the command is a dry run. The updater merges current class
spells and talent mappings, preserves older IDs for historical logs, keeps
manual icons and resource-cost fields, and adds only current consumable effect
spells that can be identified from generated spell data. New entries receive
`inv_misc_questionmark` so their icon can be enriched separately. It records
the source build and commit in `SimC-Data-Import.json`.
