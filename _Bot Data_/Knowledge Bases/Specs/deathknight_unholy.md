
## Unholy Death Knight Knowledge Base (Patch 12.1) - RAID/M+ FOCUS

### Current 12.1 Source Snapshot
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

### Stat Priority (Patch 12.1, parser table)
| Build | Priority / guidance |
| :--- | :--- |
| Current guide | Critical Strike > Mastery > Haste > Versatility. |

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
| gems | Quick Garnet | Masterful Garnet |

### Consumables (Patch 12.1, parser table)
| Category | Primary recommendation | Alternatives / notes |
| :--- | :--- | :--- |
| unique gem | Indecipherable Eversong Diamond | See current guide and sim |
| gems | Quick Garnet | Masterful Garnet |
| flask | Flask of the Shattered Sun | Flask of the Magisters |
| potion | Potion of Recklessness | See current guide and sim |
| food | Royal Roast | See current guide and sim |
| weapon oil | Thalassian Phoenix Oil | See current guide and sim |

---

### Spell Classifications & Major Cooldowns Breakdown
#### **Core Spells (Group under Core Spells)**
*   **Festering Strike**
*   **Scourge Strike**
*   **Clawing Shadows**
*   **Death Coil**
*   **Exterminate**
*   **Death's Caress**
*   **Reaper's Mark**

#### **Major Cooldowns (Group under Major Cooldowns)**
*   **Army of the Dead**: 8-minute base CD (reduced by Death Coil). Your primary burst window opener.
*   **Apocalypse**: 1.5-minute CD. Consumes 4 Festering Wounds to summon ghouls.
*   **Dark Transformation**: 1-minute CD. Empowers your ghoul.
*   **Abomination Limb**: Use for burst damage and grip utility.
*   **Summon Gargoyle**: (If talented) High priority burst CD.
*   **Empower Rune Weapon**: Use to supplement resource flooding during Army windows.

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
    2.  **Runic Power (Type 6 / ID 106):** Spent on **Death Coil** to trigger **Runic Corruption** (which increases rune recharge speed). Overcapping RP (> 80) means lost Runic Corruption uptime.

#### **Festering Wound Audit**
- **Trigger:** Check for `Festering Strike` and `Scourge Strike` / `Clawing Shadows` casts.
- **Logic:**
    1.  **Wound Overcapping:** Casting **Festering Strike** when the target already has 6+ Festering Wounds is a significant waste of Runes.
    2.  **Sudden Doom Efficiency:** Ensure **Death Coil** is used on procs to avoid wasting free RP spenders.

#### **Compare Cooldowns**
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
