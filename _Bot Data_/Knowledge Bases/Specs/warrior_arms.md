
## Arms Warrior Knowledge Base (Patch 12.1) - RAID/M+ FOCUS

### Current 12.1 Source Snapshot
Source verification date: **2026-09-17**. Current guide pages: [guide](https://www.icy-veins.com/wow/arms-warrior-pve-dps-guide) · [talents](https://www.icy-veins.com/wow/arms-warrior-pve-dps-spec-builds-talents) · [stats](https://www.icy-veins.com/wow/arms-warrior-pve-dps-stat-priority) · [enchants](https://www.icy-veins.com/wow/arms-warrior-pve-dps-gems-enchants-consumables) · [rotation](https://www.icy-veins.com/wow/arms-warrior-pve-dps-rotation-cooldowns-abilities).

The Icy Veins 12.1 recommendations below supersede the former gearing and rotation summary. Character-specific simulations and item level take priority whenever the guide calls out close or fluid stats.

**Talent and Hero Tree recommendation**
- Slayer is the single-target, raid and most Mythic+ default; Colossus is the multi-target burst alternative with lower single-target output.

**Stat priority**
- Item Level > Critical Strike > Haste > Mastery > Versatility.

**Gems**
- Powerful Eversong Diamond plus one each color while avoiding Lapis when possible, or Indecipherable Diamond; use Quick Garnet/Deadly Peridot by sim.

**Enchants and weapon augment**
- Berserker's Rage weapon enchant; Empowered Hex of Leeching; Akil'zon's Swiftness; Mark of the Worldsoul; Blood Knight's Armor Kit; Lynx's Dexterity; Eyes of the Eagle.

**Consumables**
- Blood Knights or Shattered Sun flask by stat profile; Potion of Recklessness with Crit highest and Versatility low, Light's Potential as the safe alternative; health potion, Harandar/Royal Roast and Void-Touched Augment Rune.

**Rotation and audit focus**
- Stay in Battle Stance, maintain the single-target or multi-target priority, and align Colossus Smash/Avatar/Bladestorm/Ravager/Demolish. Use Charge and the correct opening sequence without delaying Mortal Strike or wasting Rage.

### Stat Priority (Patch 12.1, parser table)
| Build | Priority / guidance |
| :--- | :--- |
| Current guide | Item Level > Critical Strike > Haste > Mastery > Versatility. |

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
| unique gem | Powerful Eversong Diamond | See current guide and sim |
| gems | Quick Garnet | Deadly Peridot |

### Consumables (Patch 12.1, parser table)
| Category | Primary recommendation | Alternatives / notes |
| :--- | :--- | :--- |
| unique gem | Powerful Eversong Diamond | See current guide and sim |
| gems | Quick Garnet | Deadly Peridot |
| flask | Flask of the Blood Knights | Flask of the Shattered Sun |
| potion | Potion of Recklessness | Light's Potential |
| food | Royal Roast | See current guide and sim |

---

### Spell Classifications & Major Cooldowns Breakdown
#### **Core Spells (Group under Core Spells)**
*   **Mortal Strike**
*   **Overpower**
*   **Execute**
*   **Slam**
*   **Rend**

#### **Major Cooldowns (Group under Major Cooldowns)**
*   **Avatar**: 1.5-minute CD. Increases all damage by 20%.
*   **Colossus Smash**: 45s CD. Increases damage taken by the target by 30%.
*   **Bladestorm**: 1.5-minute CD. High physical area damage.
*   **Thunder Clap**: (If talented for Rend) Used to apply/refresh Rend in AoE.

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
*   **Sweeping Strikes**: Cleave utility for 2 targets.
*   **Pummel**
*   **Shockwave**
*   **Storm Bolt**
*   **Intimidating Shout**
*   **Berserker Rage**
*   **Intervene**
*   **Heroic Leap**
*   **Charge**

### Spec-Specific Audit Instructions

#### **Buff & Uptime Management (Group under Buff & Uptime)**
*   None listed.
Track Resources: [2] // 2 = Rage (ID 101)

#### **Resource Management & Overcapping**
- **Trigger:** Only create this table if `<RESOURCE_WASTE_DATA>` is provided.
- **Table Headers:** | Resource | The Player | The Reference | Overcapping Analysis |
- **Formatting Rule:** For each resource, you MUST show `Generated: [Total] • Wasted: [Wasted] ([Waste%]%)`.
- **Logic:**
    1.  **Rage (Type 2 / ID 101):** Arms Warriors must balance Rage generation from auto-attacks and Overpower with consumption from Mortal Strike, Execute, and Slam. Wasting Rage (capping at 100) indicates missed casts or excessive pooling.

#### **Compare Cooldowns**
Compare Cooldowns: [
  {
    "name": "Avatar",
    "id": 107574,
    "type": "buff"
  },
  {
    "name": "Colossus Smash",
    "id": 167105,
    "type": "cast",
    "duration": 10
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
