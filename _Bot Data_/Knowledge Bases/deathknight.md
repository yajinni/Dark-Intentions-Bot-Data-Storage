# Death Knight

<details open>
<summary>## Blood (Click to Colapse)</summary>

### Blood Death Knight Knowledge Base (Patch 12.1) - RAID/M+ FOCUS

#### Current 12.1 Source Snapshot
Source verification date: **2026-09-17**. Current guide pages: [guide](https://www.icy-veins.com/wow/blood-death-knight-pve-tank-guide) · [talents](https://www.icy-veins.com/wow/blood-death-knight-pve-tank-spec-builds-talents) · [stats](https://www.icy-veins.com/wow/blood-death-knight-pve-tank-stat-priority) · [enchants](https://www.icy-veins.com/wow/blood-death-knight-pve-tank-gems-enchants-consumables) · [rotation](https://www.icy-veins.com/wow/blood-death-knight-pve-tank-rotation-cooldowns-abilities).

The Icy Veins 12.1 recommendations below supersede the former gearing and rotation summary. Character-specific simulations and item level take priority whenever the guide calls out close or fluid stats.

**Talent and Hero Tree recommendation**
- San'layn is the default for sustained second-target damage and most Mythic+; Deathbringer is the simpler pure single-target alternative.

**Stat priority**
- Deathbringer: Strength > Critical Strike > Mastery > Versatility > Haste. For San'layn or defensive gearing, item level and character-specific simulations take priority.

**Gems**
- Indecipherable Eversong Diamond. Use Masterful Garnet for Deathbringer or Quick Garnet for San'layn, then sim the remaining sockets.

**Enchants and weapon augment**
- Head Empowered Blessing of Speed; shoulders Akil'zon's Swiftness; chest Mark of the Worldsoul; legs Forest Hunter's Armor Kit; feet Farstrider's Hunt; rings Silvermoon's Tenacity (Deathbringer) or Nature's Fury (San'layn); weapon Rune of Sanguination, with Rune of Fallen Crusader for high-target Deathbringer; Thalassian Phoenix Oil.

**Consumables**
- Flask of the Shattered Sun or Blood Knights by stat profile; Potion of Recklessness is the default. Avoid Draught of Rampant Abandon on a tank when its silence zone is unsafe. Use Harandar Celebration/Blooming Feast, a Royal Roast or Champion's Bento, and a Void-Touched Augment Rune.

**Rotation and audit focus**
- Pre-place Death and Decay, apply Death's Caress, then align Reaper's Mark, Raise Dead, Dancing Rune Weapon and Blood Boil. Keep Bone Shield active, use Marrowrend to maintain it, and spend Runic Power on Death Strike while using Blood Boil/Heart Strike without overcapping resources.

#### Stat Priority (Patch 12.1, parser table)
| Build | Priority / guidance |
| :--- | :--- |
| Current guide | Deathbringer: Strength > Critical Strike > Mastery > Versatility > Haste. For San'layn or defensive gearing, item level and character-specific simulations take priority. |

#### Enchants and Weapon Augment (Patch 12.1, parser table)
| Slot | Primary recommendation | Alternatives / notes |
| :--- | :--- | :--- |
| head | Empowered Blessing of Speed | See current guide and sim |
| shoulders | Akil'zon's Swiftness | See current guide and sim |
| chest | Mark of the Worldsoul | See current guide and sim |
| legs | Forest Hunter's Armor Kit | See current guide and sim |
| feet | Farstrider's Hunt | See current guide and sim |
| ring | Nature's Fury | See current guide and sim |

#### Gems (Patch 12.1, parser table)
| Type | Primary recommendation | Alternatives / notes |
| :--- | :--- | :--- |
| unique gem | Indecipherable Eversong Diamond | See current guide and sim |
| gems | Masterful Garnet | Quick Garnet |

#### Consumables (Patch 12.1, parser table)
| Category | Primary recommendation | Alternatives / notes |
| :--- | :--- | :--- |
| unique gem | Indecipherable Eversong Diamond | See current guide and sim |
| gems | Masterful Garnet | Quick Garnet |
| flask | Flask of the Shattered Sun | Flask of the Blood Knights |
| potion | Potion of Recklessness | Draught of Rampant Abandon |
| food | Harandar Celebration | Blooming Feast, Royal Roast, Champion's Bento |
| weapon oil | Thalassian Phoenix Oil | See current guide and sim |

---

#### Spell Classifications & Major Cooldowns Breakdown
##### **Core Spells (Group under Core Spells)**
*   **Death Strike**
*   **Heart Strike**
*   **Marrowrend**
*   **Blood Boil**
*   **Death and Decay**
*   **Exterminate**
*   **Death's Caress**
*   **Reaper's Mark**

##### **Major Cooldowns (Group under Major Cooldowns)**
*   **Dancing Rune Weapon**: 40% Parry and mirrors attacks. Primary hybrid CD.
*   **Empower Rune Weapon**: 15% Haste and instant resource generation.

##### **Defensives (Group under Defensives)**
*   **Vampiric Blood**: Increases Max HP and Healing Received by 30%.
*   **Icebound Fortitude**: 30% Damage Reduction.
*   **Anti-Magic Shell**: Absorbs magic damage.
*   **Lichborne**: Leech and Fear/Sleep immunity.
*   **Purgatory**: Prevents death once every 4 minutes.
*   **Anti-Magic Zone**
*   **Rune Tap**
*   **Tombstone**

##### **Misc Spells (Group under Misc)**
*   **Raise Dead**: Minor utility/summon spell. Must be placed under Misc (not under Major Cooldowns or Core Spells).
*   **Melee**

##### **Utility (Group under Utility)**
*   **Mind Freeze**
*   **Death Grip**
*   **Asphyxiate**
*   **Death's Advance**
*   **Raise Allied Undead**
*   **Control Undead**
*   **Chains of Ice**
*   **Abomination Limb**
*   **Blinding Sleet**

#### Spec-Specific Audit Instructions

##### **Buff & Uptime Management (Group under Buff & Uptime)**
*   None listed.
Track Resources: [5, 6] // 5 = Runes (ID 105), 6 = Runic Power (ID 106)
Track Buff Drops: [
  {
    "buffId": 195181,
    "name": "boneShieldDrops",
    "displayName": "Bone Shield Drops"
  }
]

##### **Resource Management & Overcapping**
- **Trigger:** Only create this table if `<RESOURCE_WASTE_DATA>` is provided.
- **Table Headers:** | Resource | The Player | The Reference | Overcapping Analysis |
- **Formatting Rule:** For each resource, you MUST show `Generated: [Total] • Wasted: [Wasted] ([Waste%]%)`.
- **Logic:**
    1.  **Runes (Type 5 / ID 105):** Audited via **"Rune Spending Discipline"**. 
        - **Metric:** Compare the **Spending Discipline %** (Percentage of rune-spending casts performed while at **4 or fewer** runes) between the Player and the Reference.
        - **Audit Rule:** If the player's Spending Discipline is **> 10% lower** than the reference, mention this as a rotational efficiency failure. Explain that they are waiting too long to spend runes, causing regeneration stalls.
    2.  **Runic Power (Type 6 / ID 106):** Spent on Death Strike for survival. Overcapping RP (> 75-80) is a survival error as it represents missed healing and potential death.

##### **Spec-Specific Efficiency Audit**
- **Trigger:** Only create this table if `boneShieldDrops` is provided in `<RESOURCE_WASTE_DATA>`.
- **Table Headers:** | Metric | The Player | The Reference | Efficiency Analysis |
- **Logic:**
    1.  **Bone Shield Drops:** Check when boneshield stacks drop to 0, this happens when boneshield has a Remove Buff event. Look at the `boneShieldDrops` counts in `<RESOURCE_WASTE_DATA>`. Display the drops count clearly for both (e.g., '1 drop' vs. '0 drops').
        - **If the player has more drops than the reference:** Explain that dropping this buff is a massive failure of their rotation and makes them extremely vulnerable.
        - **If the player matches the reference (equal number of drops):** Say that the fight flow or mechanics probably led to some drops.

##### **Compare Cooldowns**
Compare Cooldowns: [
  {
    "name": "Dancing Rune Weapon",
    "id": 49028,
    "type": "buff",
    "duration": 12
  }
]

</details>

<details open>
<summary>## Frost (Click to Colapse)</summary>

### Frost Death Knight Knowledge Base (Patch 12.1) - RAID/M+ FOCUS

#### Current 12.1 Source Snapshot
Source verification date: **2026-09-17**. Current guide pages: [guide](https://www.icy-veins.com/wow/frost-death-knight-pve-dps-guide) · [talents](https://www.icy-veins.com/wow/frost-death-knight-pve-dps-spec-builds-talents) · [stats](https://www.icy-veins.com/wow/frost-death-knight-pve-dps-stat-priority) · [enchants](https://www.icy-veins.com/wow/frost-death-knight-pve-dps-gems-enchants-consumables) · [rotation](https://www.icy-veins.com/wow/frost-death-knight-pve-dps-rotation-cooldowns-abilities).

The Icy Veins 12.1 recommendations below supersede the former gearing and rotation summary. Character-specific simulations and item level take priority whenever the guide calls out close or fluid stats.

**Talent and Hero Tree recommendation**
- Dual-wield Breath of Sindragosa is the current core setup. Rider of the Apocalypse leads raid/single-target; Deathbringer is a strong Mythic+ alternative.

**Stat priority**
- Critical Strike > Haste > Mastery > Versatility, with Deathbringer generally using less Haste. Use sims for the final balance.

**Gems**
- Indecipherable Eversong Diamond, then Flawless Quick Garnet or Flawless Masterful Garnet to correct the weakest secondary.

**Enchants and weapon augment**
- Rune of Fallen Crusader for the standard two-handed weapon; Breathbane Razorice or the dual-wield runeforge combinations for the selected build. Use Empowered Rune of Avoidance, Amirdrassil's Grace, Mark of the Worldsoul, Forest Hunter's Armor Kit, Lynx's Dexterity, Eyes of the Eagle, and Thalassian Phoenix Oil.

**Consumables**
- Potion of Recklessness by default; Light's Potential is the safe alternative when it supplies a better stat profile. Use Harandar/Silvermoon feasts or the matching personal food and a Void-Touched Augment Rune.

**Rotation and audit focus**
- Spend Killing Machine on Obliterate in single target or Frostscythe in AoE; spend Rime on Howling Blast. Use Empower Rune Weapon to avoid wasting a Killing Machine proc and spend Runic Power on Frost Strike or Glacial Advance.

#### Stat Priority (Patch 12.1, parser table)
| Build | Priority / guidance |
| :--- | :--- |
| Current guide | Critical Strike > Haste > Mastery > Versatility, with Deathbringer generally using less Haste. Use sims for the final balance. |

#### Enchants and Weapon Augment (Patch 12.1, parser table)
| Slot | Primary recommendation | Alternatives / notes |
| :--- | :--- | :--- |
| head | Empowered Rune of Avoidance | See current guide and sim |
| shoulders | Amirdrassil's Grace | See current guide and sim |
| chest | Mark of the Worldsoul | See current guide and sim |
| legs | Forest Hunter's Armor Kit | See current guide and sim |
| feet | Lynx's Dexterity | See current guide and sim |
| ring | Eyes of the Eagle | See current guide and sim |

#### Gems (Patch 12.1, parser table)
| Type | Primary recommendation | Alternatives / notes |
| :--- | :--- | :--- |
| unique gem | Indecipherable Eversong Diamond | See current guide and sim |
| gems | Flawless Quick Garnet | Quick Garnet, Flawless Masterful Garnet, Masterful Garnet |

#### Consumables (Patch 12.1, parser table)
| Category | Primary recommendation | Alternatives / notes |
| :--- | :--- | :--- |
| unique gem | Indecipherable Eversong Diamond | See current guide and sim |
| gems | Flawless Quick Garnet | Quick Garnet, Flawless Masterful Garnet, Masterful Garnet |
| potion | Potion of Recklessness | Light's Potential |
| weapon oil | Thalassian Phoenix Oil | See current guide and sim |

---

#### Spell Classifications & Major Cooldowns Breakdown
##### **Core Spells (Group under Core Spells)**
*   **Obliterate**
*   **Howling Blast**
*   **Frost Strike**
*   **Remorseless Winter**
*   **Exterminate**
*   **Death's Caress**
*   **Reaper's Mark**

##### **Major Cooldowns (Group under Major Cooldowns)**
*   **Breath of Sindragosa**: 2-minute CD. The primary throughput engine.
*   **Pillar of Frost**: 1-minute CD. Primary strength buff.
*   **Empower Rune Weapon**: Aligns with Breath and Pillar for resource overflow.
*   **Apocalypse Now (Rider)**: 1.5-minute CD. Summons the Four Horsemen.
*   **Frostwyrm's Fury**: Used as a massive burst finisher during Pillar of Frost windows.

##### **Defensives (Group under Defensives)**
*   **Anti-Magic Shell**
*   **Anti-Magic Zone**
*   **Icebound Fortitude**
*   **Lichborne**
*   **Vampiric Blood**
*   **Rune Tap**
*   **Tombstone**

##### **Misc Spells (Group under Misc)**
*   **Melee**

##### **Utility (Group under Utility)**
*   **Mind Freeze**
*   **Death Grip**
*   **Asphyxiate**
*   **Death's Advance**
*   **Raise Allied Undead**
*   **Control Undead**
*   **Chains of Ice**
*   **Abomination Limb**
*   **Blinding Sleet**

#### Spec-Specific Audit Instructions

##### **Buff & Uptime Management (Group under Buff & Uptime)**
*   None listed.
Track Resources: [5, 6] // 5 = Runes (ID 105), 6 = Runic Power (ID 106)

##### **Resource Management & Overcapping**
- **Trigger:** Only create this table if `<RESOURCE_WASTE_DATA>` is provided.
- **Table Headers:** | Resource | The Player | The Reference | Overcapping Analysis |
- **Formatting Rule:** For each resource, you MUST show `Generated: [Total] • Wasted: [Wasted] ([Waste%]%)`.
- **Logic:**
    1.  **Runes (Type 5 / ID 105):** Audited via **"Rune Spending Discipline"**. 
        - **Metric:** Compare the **Spending Discipline %** (Percentage of rune-spending casts performed while at **4 or fewer** runes) between the Player and the Reference.
        - **Audit Rule:** If the player's Spending Discipline is **> 10% lower** than the reference, mention this as a rotational efficiency failure. Explain that they are waiting too long to spend runes, causing regeneration stalls.
    2.  **Runic Power (Type 6 / ID 106):** Critical for **Breath of Sindragosa** uptime. Overcapping RP outside of Breath is less severe than starving during Breath. 

##### **Breath of Sindragosa Audit**
- **Trigger:** Check for `Breath of Sindragosa` casts.
- **Logic:**
    1.  **RP Waste (During Breath):** Casting **Frost Strike** or **Death Coil** while Breath is active is a catastrophic failure (waste of RP that should sustain the Breath).
    2.  **Starvation:** Ending a Breath with > 40 RP indicates the player likely stopped spending Runes on Obliterate, which is a rotational error.

##### **Compare Cooldowns**
Compare Cooldowns: [
  {
    "name": "Pillar of Frost",
    "id": 51271,
    "type": "buff"
  }
]

</details>

<details open>
<summary>## Unholy (Click to Colapse)</summary>

### Unholy Death Knight Knowledge Base (Patch 12.1) - RAID/M+ FOCUS

#### Current 12.1 Source Snapshot
Source verification date: **2026-09-17**. Current guide pages: [guide](https://www.icy-veins.com/wow/unholy-death-knight-pve-dps-guide) · [talents](https://www.icy-veins.com/wow/unholy-death-knight-pve-dps-spec-builds-talents) · [stats](https://www.icy-veins.com/wow/unholy-death-knight-pve-dps-stat-priority) · [enchants](https://www.icy-veins.com/wow/unholy-death-knight-pve-dps-gems-enchants-consumables) · [rotation](https://www.icy-veins.com/wow/unholy-death-knight-pve-dps-rotation-cooldowns-abilities).

The Icy Veins 12.1 recommendations below supersede the former gearing and rotation summary. Character-specific simulations and item level take priority whenever the guide calls out close or fluid stats.

**Talent and Hero Tree recommendation**
- Rider of the Apocalypse is the current single-target raid/minion build; San'layn is preferred for Mythic+ and its Blightfall plague profile.

**Stat priority**
- Critical Strike > Mastery > Haste > Versatility.

**Gems**
- Indecipherable Eversong Diamond, followed by Quick Garnet or Masterful Garnet according to the weakest secondary.

**Enchants and weapon augment**
- Empowered Rune of Avoidance; Amirdrassil's Grace; Mark of the Worldsoul; Forest Hunter's Armor Kit; Lynx's Dexterity; Eyes of the Eagle; Rune of Apocalypse and Thalassian Phoenix Oil.

**Consumables**
- Flask of the Shattered Sun or Magisters by stat profile; Potion of Recklessness; Harandar/Silvermoon feast or Royal Roast/Impossibly Royal Roast; Void-Touched Augment Rune.

**Rotation and audit focus**
- Open with Outbreak, Festering Strike twice, Army of the Dead, Dark Transformation and your burst items. Maintain diseases, use Putrefy during Dark Transformation, time Soul Reaper around the execute threshold or the Reaping window, and spend Death Coil on Sudden Doom/Forbidden Knowledge or San'layn priority.

#### Stat Priority (Patch 12.1, parser table)
| Build | Priority / guidance |
| :--- | :--- |
| Current guide | Critical Strike > Mastery > Haste > Versatility. |

#### Enchants and Weapon Augment (Patch 12.1, parser table)
| Slot | Primary recommendation | Alternatives / notes |
| :--- | :--- | :--- |
| head | Empowered Rune of Avoidance | See current guide and sim |
| shoulders | Amirdrassil's Grace | See current guide and sim |
| chest | Mark of the Worldsoul | See current guide and sim |
| legs | Forest Hunter's Armor Kit | See current guide and sim |
| feet | Lynx's Dexterity | See current guide and sim |
| ring | Eyes of the Eagle | See current guide and sim |

#### Gems (Patch 12.1, parser table)
| Type | Primary recommendation | Alternatives / notes |
| :--- | :--- | :--- |
| unique gem | Indecipherable Eversong Diamond | See current guide and sim |
| gems | Quick Garnet | Masterful Garnet |

#### Consumables (Patch 12.1, parser table)
| Category | Primary recommendation | Alternatives / notes |
| :--- | :--- | :--- |
| unique gem | Indecipherable Eversong Diamond | See current guide and sim |
| gems | Quick Garnet | Masterful Garnet |
| flask | Flask of the Shattered Sun | Flask of the Magisters |
| potion | Potion of Recklessness | See current guide and sim |
| food | Royal Roast | See current guide and sim |
| weapon oil | Thalassian Phoenix Oil | See current guide and sim |

---

#### Spell Classifications & Major Cooldowns Breakdown
##### **Core Spells (Group under Core Spells)**
*   **Festering Strike**
*   **Scourge Strike**
*   **Clawing Shadows**
*   **Death Coil**
*   **Exterminate**
*   **Death's Caress**
*   **Reaper's Mark**

##### **Major Cooldowns (Group under Major Cooldowns)**
*   **Army of the Dead**: 8-minute base CD (reduced by Death Coil). Your primary burst window opener.
*   **Apocalypse**: 1.5-minute CD. Consumes 4 Festering Wounds to summon ghouls.
*   **Dark Transformation**: 1-minute CD. Empowers your ghoul.
*   **Abomination Limb**: Use for burst damage and grip utility.
*   **Summon Gargoyle**: (If talented) High priority burst CD.
*   **Empower Rune Weapon**: Use to supplement resource flooding during Army windows.

##### **Defensives (Group under Defensives)**
*   **Anti-Magic Shell**
*   **Anti-Magic Zone**
*   **Icebound Fortitude**
*   **Lichborne**
*   **Vampiric Blood**
*   **Rune Tap**
*   **Tombstone**

##### **Misc Spells (Group under Misc)**
*   **Melee**

##### **Utility (Group under Utility)**
*   **Mind Freeze**
*   **Death Grip**
*   **Asphyxiate**
*   **Death's Advance**
*   **Raise Allied Undead**
*   **Control Undead**
*   **Chains of Ice**
*   **Blinding Sleet**

#### Spec-Specific Audit Instructions

##### **Buff & Uptime Management (Group under Buff & Uptime)**
*   None listed.
Track Resources: [5, 6] // 5 = Runes (ID 105), 6 = Runic Power (ID 106)

##### **Resource Management & Overcapping**
- **Trigger:** Only create this table if `<RESOURCE_WASTE_DATA>` is provided.
- **Table Headers:** | Resource | The Player | The Reference | Overcapping Analysis |
- **Formatting Rule:** For each resource, you MUST show `Generated: [Total] • Wasted: [Wasted] ([Waste%]%)`.
- **Logic:**
    1.  **Runes (Type 5 / ID 105):** Audited via **"Rune Spending Discipline"**. 
        - **Metric:** Compare the **Spending Discipline %** (Percentage of rune-spending casts performed while at **4 or fewer** runes) between the Player and the Reference.
        - **Audit Rule:** If the player's Spending Discipline is **> 10% lower** than the reference, mention this as a rotational efficiency failure. Explain that they are waiting too long to spend runes, causing regeneration stalls.
    2.  **Runic Power (Type 6 / ID 106):** Spent on **Death Coil** to trigger **Runic Corruption** (which increases rune recharge speed). Overcapping RP (> 80) means lost Runic Corruption uptime.

##### **Festering Wound Audit**
- **Trigger:** Check for `Festering Strike` and `Scourge Strike` / `Clawing Shadows` casts.
- **Logic:**
    1.  **Wound Overcapping:** Casting **Festering Strike** when the target already has 6+ Festering Wounds is a significant waste of Runes.
    2.  **Sudden Doom Efficiency:** Ensure **Death Coil** is used on procs to avoid wasting free RP spenders.

##### **Compare Cooldowns**
Compare Cooldowns: [
  {
    "name": "Unholy Assault",
    "id": 207289,
    "type": "buff"
  },
  {
    "name": "Summon Gargoyle",
    "id": 49206,
    "type": "cast",
    "duration": 20
  },
  {
    "name": "Dark Transformation",
    "id": 63560,
    "type": "cast",
    "duration": 15
  }
]

</details>

## Utility

The following spells are classified as Utility for the deathknight class and should be grouped under the **3.2 Utility** section in performance reports:

- [Mind Freeze](https://www.wowhead.com/spell=47528)
- [Death Grip](https://www.wowhead.com/spell=49576)
- [Asphyxiate](https://www.wowhead.com/spell=108194)
- [Death's Advance](https://www.wowhead.com/spell=96268)
- [Raise Allied Undead](https://www.wowhead.com/spell=61999)
- [Control Undead](https://www.wowhead.com/spell=111673)
- [Chains of Ice](https://www.wowhead.com/spell=45524)
- [Abomination Limb](https://www.wowhead.com/spell=383005)
- [Blinding Sleet](https://www.wowhead.com/spell=108199)

## Defensive

The following spells are classified as Defensive for the deathknight class and should be grouped under the **3.4 Defensive Usage** section in performance reports:

- [Anti-Magic Shell](https://www.wowhead.com/spell=48707)
- [Anti-Magic Zone](https://www.wowhead.com/spell=51052)
- [Icebound Fortitude](https://www.wowhead.com/spell=48792)
- [Lichborne](https://www.wowhead.com/spell=49039)
- [Vampiric Blood](https://www.wowhead.com/spell=55233)
- [Rune Tap](https://www.wowhead.com/spell=194679)
- [Tombstone](https://www.wowhead.com/spell=219809)

