
## Frost Death Knight Knowledge Base (Patch 12.1) - RAID/M+ FOCUS

### Current 12.1 Source Snapshot
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

### Stat Priority (Patch 12.1, parser table)
| Build | Priority / guidance |
| :--- | :--- |
| Current guide | Critical Strike > Haste > Mastery > Versatility, with Deathbringer generally using less Haste. Use sims for the final balance. |

### Enchants and Weapon Augment (Patch 12.1, parser table)
| Slot | Primary recommendation | Alternatives / notes |
| :--- | :--- | :--- |
| head | Empowered Rune of Avoidance | See current guide and sim |
| shoulders | Amirdrassil's Grace | See current guide and sim |
| chest | Mark of the Worldsoul | See current guide and sim |
| legs | Forest Hunter's Armor Kit | See current guide and sim |
| feet | Lynx's Dexterity | See current guide and sim |
| ring | Eyes of the Eagle | See current guide and sim |

### Gems (Patch 12.1, parser table)
| Type | Primary recommendation | Alternatives / notes |
| :--- | :--- | :--- |
| unique gem | Indecipherable Eversong Diamond | See current guide and sim |
| gems | Flawless Quick Garnet | Quick Garnet, Flawless Masterful Garnet, Masterful Garnet |

### Consumables (Patch 12.1, parser table)
| Category | Primary recommendation | Alternatives / notes |
| :--- | :--- | :--- |
| unique gem | Indecipherable Eversong Diamond | See current guide and sim |
| gems | Flawless Quick Garnet | Quick Garnet, Flawless Masterful Garnet, Masterful Garnet |
| potion | Potion of Recklessness | Light's Potential |
| weapon oil | Thalassian Phoenix Oil | See current guide and sim |

---

### Spell Classifications & Major Cooldowns Breakdown
#### **Core Spells (Group under Core Spells)**
*   **Obliterate**
*   **Howling Blast**
*   **Frost Strike**
*   **Remorseless Winter**
*   **Exterminate**
*   **Death's Caress**
*   **Reaper's Mark**

#### **Major Cooldowns (Group under Major Cooldowns)**
*   **Breath of Sindragosa**: 2-minute CD. The primary throughput engine.
*   **Pillar of Frost**: 1-minute CD. Primary strength buff.
*   **Empower Rune Weapon**: Aligns with Breath and Pillar for resource overflow.
*   **Apocalypse Now (Rider)**: 1.5-minute CD. Summons the Four Horsemen.
*   **Frostwyrm's Fury**: Used as a massive burst finisher during Pillar of Frost windows.

#### **Defensives (Group under Defensives)**
*   **Anti-Magic Shell**
*   **Anti-Magic Zone**
*   **Icebound Fortitude**
*   **Lichborne**
*   **Vampiric Blood**
*   **Rune Tap**
*   **Tombstone**

#### **Misc Spells (Group under Misc)**
*   **Melee**

#### **Utility (Group under Utility)**
*   **Mind Freeze**
*   **Death Grip**
*   **Asphyxiate**
*   **Death's Advance**
*   **Raise Allied Undead**
*   **Control Undead**
*   **Chains of Ice**
*   **Abomination Limb**
*   **Blinding Sleet**

### Spec-Specific Audit Instructions

#### **Buff & Uptime Management (Group under Buff & Uptime)**
*   None listed.
Track Resources: [5, 6] // 5 = Runes (ID 105), 6 = Runic Power (ID 106)

#### **Resource Management & Overcapping**
- **Trigger:** Only create this table if `<RESOURCE_WASTE_DATA>` is provided.
- **Table Headers:** | Resource | The Player | The Reference | Overcapping Analysis |
- **Formatting Rule:** For each resource, you MUST show `Generated: [Total] • Wasted: [Wasted] ([Waste%]%)`.
- **Logic:**
    1.  **Runes (Type 5 / ID 105):** Audited via **"Rune Spending Discipline"**.
        - **Metric:** Compare the **Spending Discipline %** (Percentage of rune-spending casts performed while at **4 or fewer** runes) between the Player and the Reference.
        - **Audit Rule:** If the player's Spending Discipline is **> 10% lower** than the reference, mention this as a rotational efficiency failure. Explain that they are waiting too long to spend runes, causing regeneration stalls.
    2.  **Runic Power (Type 6 / ID 106):** Critical for **Breath of Sindragosa** uptime. Overcapping RP outside of Breath is less severe than starving during Breath.

#### **Breath of Sindragosa Audit**
- **Trigger:** Check for `Breath of Sindragosa` casts.
- **Logic:**
    1.  **RP Waste (During Breath):** Casting **Frost Strike** or **Death Coil** while Breath is active is a catastrophic failure (waste of RP that should sustain the Breath).
    2.  **Starvation:** Ending a Breath with > 40 RP indicates the player likely stopped spending Runes on Obliterate, which is a rotational error.

#### **Compare Cooldowns**
Compare Cooldowns: [
  {
    "name": "Pillar of Frost",
    "id": 51271,
    "type": "buff"
  }
]



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
