
## Fury Warrior Knowledge Base (Patch 12.1) - RAID/M+ FOCUS

### Current 12.1 Source Snapshot
Source verification date: **2026-09-17**. Current guide pages: [guide](https://www.icy-veins.com/wow/fury-warrior-pve-dps-guide) · [talents](https://www.icy-veins.com/wow/fury-warrior-pve-dps-spec-builds-talents) · [stats](https://www.icy-veins.com/wow/fury-warrior-pve-dps-stat-priority) · [enchants](https://www.icy-veins.com/wow/fury-warrior-pve-dps-gems-enchants-consumables) · [rotation](https://www.icy-veins.com/wow/fury-warrior-pve-dps-rotation-cooldowns-abilities).

The Icy Veins 12.1 recommendations below supersede the former gearing and rotation summary. Character-specific simulations and item level take priority whenever the guide calls out close or fluid stats.

**Talent and Hero Tree recommendation**
- Slayer is the raid/single-target and general multi-target default; Mountain Thane is the current Mythic+ and heavier AoE alternative.

**Stat priority**
- Item Level > Mastery > Haste > Versatility > Critical Strike.

**Gems**
- Powerful or Indecipherable Diamond, then Quick Garnet or Masterful Peridot; avoid Lapis unless a sim specifically favors it.

**Enchants and weapon augment**
- Berserker's Rage weapon enchant; Empowered Hex of Leeching; Akil'zon's Swiftness; Mark of the Worldsoul; Blood Knight's Armor Kit; Lynx's Dexterity; Eyes of the Eagle.

**Consumables**
- Magisters or Blood Knights by stat profile; Potion of Recklessness when Mastery is highest and Versatility is low, Light's Potential as the safe alternative; health potion, Harandar/Royal Roast and Void-Touched Augment Rune.

**Rotation and audit focus**
- Stay in Berserker Stance, use Whirlwind to maintain Improved Whirlwind/Rend, spend Rampage, and align Recklessness, Bladestorm and Odyn's Fury. Season 2 bonuses extend Recklessness through Raging Blow/Bloodthirst, so avoid emptying the window.

### Stat Priority (Patch 12.1, parser table)
| Build | Priority / guidance |
| :--- | :--- |
| Current guide | Item Level > Mastery > Haste > Versatility > Critical Strike. |

### Enchants and Weapon Augment (Patch 12.1, parser table)
| Slot | Primary recommendation | Alternatives / notes |
| :--- | :--- | :--- |
| head | Empowered Hex of Leeching | See current guide and sim |
| shoulders | Akil'zon's Swiftness | See current guide and sim |
| chest | Mark of the Worldsoul | See current guide and sim |
| legs | Blood Knight's Armor Kit | See current guide and sim |
| feet | Lynx's Dexterity | See current guide and sim |
| ring | Eyes of the Eagle | See current guide and sim |
| weapon | Berserker's Rage | See current guide and sim |

### Gems (Patch 12.1, parser table)
| Type | Primary recommendation | Alternatives / notes |
| :--- | :--- | :--- |
| gems | Quick Garnet | Masterful Peridot |

### Consumables (Patch 12.1, parser table)
| Category | Primary recommendation | Alternatives / notes |
| :--- | :--- | :--- |
| gems | Quick Garnet | Masterful Peridot |
| flask | Flask of the Magisters | Flask of the Blood Knights |
| potion | Potion of Recklessness | Light's Potential |
| food | Royal Roast | See current guide and sim |

---

### Spell Classifications & Major Cooldowns Breakdown
#### **Core Spells (Group under Core Spells)**
*   **Bloodthirst**
*   **Raging Blow**
*   **Execute**
*   **Rampage**
*   **Whirlwind**

#### **Major Cooldowns (Group under Major Cooldowns)**
*   **Recklessness**: 1.5-minute CD. Increases Rage generation and Crit.
*   **Avatar**: 1.5-minute CD. Aligned with Recklessness.
*   **Odyn's Fury**: 45s CD. Massive physical burst and bleed.
*   **Thunder Clap**: (If talented for Mountain Thane) Primary engine trigger.
*   **Ravager**: (If talented) High-intensity physical area damage.

#### **Defensives (Group under Defensives)**
*   **Shield Wall**
*   **Last Stand**
*   **Spell Reflection**
*   **Enraged Regeneration**
*   **Die by the Sword**
*   **Rallying Cry**
*   **Ignore Pain**
*   **Shield Block**

#### **Misc Spells (Group under Misc)**
*   **Melee**

#### **Utility (Group under Utility)**
*   **Pummel**
*   **Shockwave**
*   **Storm Bolt**
*   **Intimidating Shout**
*   **Berserker Rage**
*   **Intervene**
*   **Heroic Leap**
*   **Charge**

### Spec-Specific Audit Instructions
Track Resources: [2] // 2 = Rage (ID 101)

#### **Resource Management & Overcapping**
- **Trigger:** Only create this table if `<RESOURCE_WASTE_DATA>` is provided.
- **Table Headers:** | Resource | The Player | The Reference | Overcapping Analysis |
- **Formatting Rule:** For each resource, you MUST show `Generated: [Total] • Wasted: [Wasted] ([Waste%]%)`.
- **Logic:**
    1.  **Rage (Type 2 / ID 101):** Fury Warriors generate Rage extremely fast via Bloodthirst and Raging Blow. Capping at 100 Rage is a severe error that delays Rampage casts and reduces Enrage uptime.

#### **Buff & Uptime Management (Group under Buff & Uptime)**
*   **Recklessness** (Critical Fury Warrior buff. Uptime is extremely important for throughput. The AI must explicitly analyze its uptime in Section 8, compare it to the reference log, and provide actionable rotational advice on maximizing its active duration through correct Avatar-Recklessness alignment and relentless resource generation).

#### **Compare Cooldowns**
Compare Cooldowns: [
  {
    "name": "Avatar",
    "id": 107574,
    "type": "buff"
  },
  {
    "name": "Recklessness",
    "id": 1719,
    "type": "buff"
  }
]



## Utility


The following spells are classified as Utility for the warrior class and should be grouped under the **3.2 Utility** section in performance reports:

- [Pummel](https://www.wowhead.com/spell=6552)
- [Shockwave](https://www.wowhead.com/spell=46968)
- [Storm Bolt](https://www.wowhead.com/spell=107570)
- [Intimidating Shout](https://www.wowhead.com/spell=5246)
- [Berserker Rage](https://www.wowhead.com/spell=18499)
- [Intervene](https://www.wowhead.com/spell=3411)
- [Heroic Leap](https://www.wowhead.com/spell=6544)
- [Charge](https://www.wowhead.com/spell=100)


## Defensive


The following spells are classified as Defensive for the warrior class and should be grouped under the **3.4 Defensive Usage** section in performance reports:

- [Shield Wall](https://www.wowhead.com/spell=871)
- [Last Stand](https://www.wowhead.com/spell=12975)
- [Spell Reflection](https://www.wowhead.com/spell=23920)
- [Enraged Regeneration](https://www.wowhead.com/spell=184364)
- [Die by the Sword](https://www.wowhead.com/spell=118038)
- [Rallying Cry](https://www.wowhead.com/spell=97462)
- [Ignore Pain](https://www.wowhead.com/spell=190456)
- [Shield Block](https://www.wowhead.com/spell=2565)
