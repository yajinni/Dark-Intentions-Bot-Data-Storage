# Warrior

<details open>
<summary>## Arms (Click to Colapse)</summary>

### Arms Warrior Knowledge Base (Midnight 12.0.5) - RAID FOCUS

#### Consumables & Equipment (Unified Guide Approach)
The guide recommends a unified approach for both Slayer and Colossus builds.

| Category | **Primary Recommendation** | **Valid Alternatives / Situational** |
| :--- | :--- | :--- |
| **Ring Enchant** | **Enchant Ring - Eyes of the Eagle** | None listed. |
| **Flask** | **Flask of the Shattered Sun** (Crit) | **Flask of the Blood Knights** (Haste). |
| **Potion** | **Potion of Recklessness** (primary, requires high Crit) | **Light's Potential** (simpler/safer alternative). |
| **Food** | **Harandar Celebration** (Strength Feast) | **Royal Roast** (Valid if Feast is not provided). |
| **Weapon Oil** | **Thalassian Phoenix Oil** | None listed. |
| **Unique Gem** | **Indecipherable Eversong Diamond** | Must be socketed first. |
| **Gems** | **Flawless Quick Garnet** | **Flawless Deadly Peridot** (Mastery alternative). |

##### **Gear Enchants Table (Global)**
| Slot | Recommended Enchant | Notes |
| :--- | :--- | :--- |
| **Weapon** | **Enchant Weapon - Berserker's Rage** | Standard DPS enchant. |
| **Weapon (Alternative)** | **Jan'alai's Precision** | **Valid Alternative** for preference. |
| **Helm** | **Empowered Blessing of Speed** | Utility/Speed. |
| **Shoulders** | **Akil'zon's Swiftness** | Critical Strike focus. |
| **Chest** | **Mark of the Worldsoul** | Primary Strength buff. |
| **Legs** | **Thunderous Armor Kit** | Strength + Stamina. |
| **Boots** | **Farstrider's Hunt** | Mastery/Speed focus. |

---

#### Stat Priority
*   **General Priority:** Strength > Critical Strike > Haste > Mastery > Versatility.
*   *Note: Slayer benefits slightly more from Crit, while Colossus values Mastery, but the general priority remains consistent for raiding.*

---

#### Hero Talents Deep Dive

##### **Slayer**
*   **Core Focus:** **Slayer's Strike** & **Marked for Execution**.
*   **Gameplay Effect:** Significantly increases the damage and frequency of your *Execute* phase. Focuses on single-target pressure and bleed amplification.
*   **Why Pick?** Superior for pure single-target boss encounters in 12.0.5.

##### **Colossus**
*   **Core Mechanic:** **Demolish** & **Colossal Might**.
*   **Gameplay Effect:** Adds a massive physical burst component to your rotation. Requires stacking *Colossal Might* before using *Demolish*.
*   **Why Pick?** Superior for multi-target cleave and priority target burst.

---

#### Deep Dive: Raid Rotation
Focus: **Colossus Smash Windows** and **Execute Priority**.

##### **A. The Burst Audit (The CS Window)**
1.  **Avatar:** Use on cooldown (align with Colossus Smash).
2.  **Colossus Smash (or Warbreaker):** Top priority burst window trigger.
3.  **Bladestorm:** Use immediately inside the CS window (if talented).
4.  **Audit Flag:** Casting **Slam** or **Overpower** during the *Colossus Smash* window while **Mortal Strike** or **Execute** is available is a catastrophic throughput failure.

##### **B. Primary Priority List (Strict Whitelist)**
1.  **Execute:** Top priority whenever available (including *Sudden Death* procs).
2.  **Mortal Strike:** Primary generator and damage source. Use on cooldown.
3.  **Overpower:** Use to generate *Dreadnaught* stacks and bridge gaps.
4.  **Rend:** Maintain 100% uptime on the primary target.
5.  **Slam:** Use ONLY as a filler if at **> 60 Rage** and no other abilities are available.
6.  **Audit Flag:** Letting **Deep Wounds** or **Rend** fall off the primary target is a baseline loss error.

---

#### Spell Classifications & Major Cooldowns Breakdown
##### **Core Spells (Group under Core Spells)**
*   **Mortal Strike**
*   **Overpower**
*   **Execute**
*   **Slam**
*   **Rend**

##### **Major Cooldowns (Group under Major Cooldowns)**
*   **Avatar**: 1.5-minute CD. Increases all damage by 20%.
*   **Colossus Smash**: 45s CD. Increases damage taken by the target by 30%.
*   **Bladestorm**: 1.5-minute CD. High physical area damage.
*   **Thunder Clap**: (If talented for Rend) Used to apply/refresh Rend in AoE.

##### **Defensives (Group under Defensives)**
*   **Shield Wall**
*   **Last Stand**
*   **Spell Reflection**
*   **Enraged Regeneration**
*   **Die by the Sword**
*   **Rallying Cry**
*   **Ignore Pain**
*   **Shield Block**

##### **Misc Spells (Group under Misc)**
*   **Melee**

##### **Utility (Group under Utility)**
*   **Sweeping Strikes**: Cleave utility for 2 targets.
*   **Pummel**
*   **Shockwave**
*   **Storm Bolt**
*   **Intimidating Shout**
*   **Berserker Rage**
*   **Intervene**
*   **Heroic Leap**
*   **Charge**

#### Spec-Specific Audit Instructions

##### **Buff & Uptime Management (Group under Buff & Uptime)**
*   None listed.
Track Resources: [2] // 2 = Rage (ID 101)

##### **Resource Management & Overcapping**
- **Trigger:** Only create this table if `<RESOURCE_WASTE_DATA>` is provided.
- **Table Headers:** | Resource | The Player | The Reference | Overcapping Analysis |
- **Formatting Rule:** For each resource, you MUST show `Generated: [Total] • Wasted: [Wasted] ([Waste%]%)`.
- **Logic:**
    1.  **Rage (Type 2 / ID 101):** Arms Warriors must balance Rage generation from auto-attacks and Overpower with consumption from Mortal Strike, Execute, and Slam. Wasting Rage (capping at 100) indicates missed casts or excessive pooling.

##### **Compare Cooldowns**
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

</details>

<details open>
<summary>## Fury (Click to Colapse)</summary>

### Fury Warrior Knowledge Base (Midnight 12.0.5) - RAID FOCUS

#### Consumables & Equipment (Unified Guide Approach)
The guide recommends a unified approach for both Slayer and Mountain Thane builds.

| Category | **Primary Recommendation** | **Valid Alternatives / Situational** |
| :--- | :--- | :--- |
| **Ring Enchant** | **Enchant Ring - Zul'jin's Mastery** | **Enchant Ring - Silvermoon's Alacrity** (Haste). |
| **Flask** | **Flask of the Magisters** (Mastery) | **Flask of the Shattered Sun** (Crit). |
| **Potion** | **Potion of Recklessness** (primary) | **Light's Potential** (alternative). |
| **Food** | **Silvermoon Parade** (Strength Feast) | **Royal Roast** (Valid if Feast is not provided). |
| **Weapon Oil** | **Thalassian Phoenix Oil** | None listed. |
| **Unique Gem** | **Indecipherable Eversong Diamond** | **Powerful Eversong Diamond**. |
| **Gems** | **Flawless Quick Amethyst** | **Flawless Masterful Peridot** (Mastery alternative). |

##### **Gear Enchants Table (Global)**
| Slot | Recommended Enchant | Notes |
| :--- | :--- | :--- |
| **Weapon** | **Enchant Weapon - Arcane Mastery** | **Enchant Weapon - Berserker's Rage** (Alternative). |
| **Helm** | **Enchant Helm - Empowered Hex of Leeching** | **Enchant Helm - Empowered Rune of Avoidance** (Alternative). |
| **Shoulders** | **Enchant Shoulders - Amirdrassil's Grace** | **Enchant Shoulders - Thalassian Recovery** (Alternative). |
| **Chest** | **Enchant Chest - Mark of the Worldsoul** | **Enchant Chest - Mark of Nalorakk** (Alternative). |
| **Legs** | **Blood Knight's Armor Kit** | **Forest Hunter's Armor Kit** (Alternative). |
| **Boots** | **Enchant Boots - Lynx's Dexterity** | **Enchant Boots - Shaladrassil's Roots** (Alternative). |

---

#### Stat Priority Split
*   **All Builds:** Strength > Mastery > Haste > Versatility > Critical Strike.

---

#### Hero Talents Deep Dive

##### **Slayer**
*   **Core Focus:** **Slayer's Strike** & **Bladestorm**.
*   **Gameplay Effect:** Introduces *Bladestorm* into the core rotation. Focuses on high-intensity physical burst and *Execute* resets.
*   **Why Pick?** Superior for pure single-target and priority target damage in 12.0.5.

##### **Mountain Thane**
*   **Core Mechanic:** **Thunder Blast** & **Lightning Strikes**.
*   **Gameplay Effect:** Adds a massive lightning damage component to your *Thunder Clap* and *Bloodthirst*. 
*   **Why Pick?** Superior for multi-target cleave and area-of-effect pressure.

---

#### Deep Dive: Raid Rotation
Focus: **Rage Management** and **Enrage Uptime**.

##### **A. The Rage Audit (The 100-Rage Rule)**
1.  **Rule:** **NEVER** cap at 100 Rage. Spend via **Rampage** immediately.
2.  **Audit Flag:** Casting **Raging Blow** or **Bloodthirst** while at 100 Rage is a catastrophic resource failure.

##### **B. Enrage Audit (100% Uptime)**
1.  **Requirement:** Maintain 100% uptime on the **Enrage** buff through consistent *Rampage* and *Recklessness* usage.
2.  **Audit Flag:** Letting **Enrage** fall off during active combat is a critical failure of the spec's core engine.

##### **C. Primary Priority List**
1.  **Rampage:** Top priority spender. Use at **80+ Rage** or whenever not Enraged.
2.  **Execute:** Use on cooldown whenever available.
3.  **Bloodthirst (or Bloodbath):** Use to maintain Enrage and generate Rage.
4.  **Raging Blow (or Crushing Blow):** Primary generator.
5.  **Audit Flag:** Casting *Raging Blow* when **Execute** is available is a throughput error.

---

#### Spell Classifications & Major Cooldowns Breakdown
##### **Core Spells (Group under Core Spells)**
*   **Bloodthirst**
*   **Raging Blow**
*   **Execute**
*   **Rampage**
*   **Whirlwind**

##### **Major Cooldowns (Group under Major Cooldowns)**
*   **Recklessness**: 1.5-minute CD. Increases Rage generation and Crit.
*   **Avatar**: 1.5-minute CD. Aligned with Recklessness.
*   **Odyn's Fury**: 45s CD. Massive physical burst and bleed.
*   **Thunder Clap**: (If talented for Mountain Thane) Primary engine trigger.
*   **Ravager**: (If talented) High-intensity physical area damage.

##### **Defensives (Group under Defensives)**
*   **Shield Wall**
*   **Last Stand**
*   **Spell Reflection**
*   **Enraged Regeneration**
*   **Die by the Sword**
*   **Rallying Cry**
*   **Ignore Pain**
*   **Shield Block**

##### **Misc Spells (Group under Misc)**
*   **Melee**

##### **Utility (Group under Utility)**
*   **Pummel**
*   **Shockwave**
*   **Storm Bolt**
*   **Intimidating Shout**
*   **Berserker Rage**
*   **Intervene**
*   **Heroic Leap**
*   **Charge**

#### Spec-Specific Audit Instructions
Track Resources: [2] // 2 = Rage (ID 101)

##### **Resource Management & Overcapping**
- **Trigger:** Only create this table if `<RESOURCE_WASTE_DATA>` is provided.
- **Table Headers:** | Resource | The Player | The Reference | Overcapping Analysis |
- **Formatting Rule:** For each resource, you MUST show `Generated: [Total] • Wasted: [Wasted] ([Waste%]%)`.
- **Logic:**
    1.  **Rage (Type 2 / ID 101):** Fury Warriors generate Rage extremely fast via Bloodthirst and Raging Blow. Capping at 100 Rage is a severe error that delays Rampage casts and reduces Enrage uptime.

##### **Buff & Uptime Management (Group under Buff & Uptime)**
*   **Recklessness** (Critical Fury Warrior buff. Uptime is extremely important for throughput. The AI must explicitly analyze its uptime in Section 8, compare it to the reference log, and provide actionable rotational advice on maximizing its active duration through correct Avatar-Recklessness alignment and relentless resource generation).

##### **Compare Cooldowns**
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

</details>

<details open>
<summary>## Protection (Click to Colapse)</summary>

### Protection Warrior Knowledge Base (Midnight 12.0.5) - RAID FOCUS

#### Consumables & Equipment (Unified Guide Approach)
The guide recommends a unified approach for both Mountain Thane and Colossus builds.

| Category | **Primary Recommendation** | **Valid Alternatives / Situational** |
| :--- | :--- | :--- |
| **Ring Enchant** | **Enchant Ring - Eyes of the Eagle** | **Enchant Ring - Silvermoon's Alacrity** (Haste). |
| **Flask** | **Flask of the Blood Knights** (Haste) | **Flask of the Shattered Sun** (Crit). |
| **Potion** | **Light's Potential** (primary tank) | **Potion of Recklessness** (alternative). |
| **Food** | **Silvermoon Parade** (Strength Feast) | **Royal Roast** (Valid if Feast is not provided). |
| **Weapon Oil** | **Thalassian Phoenix Oil** | None listed. |
| **Unique Gem** | **Indecipherable Eversong Diamond** | Must be socketed first. |
| **Gems** | **Flawless Quick Amethyst** | **Flawless Masterful Peridot** (Mastery alternative). |

##### **Gear Enchants Table (Global)**
| Slot | Recommended Enchant | Notes |
| :--- | :--- | :--- |
| **Weapon** | **Enchant Weapon - Berserker's Rage** | Standard tanking enchant. |
| **Helm** | **Empowered Blessing of Speed** | Utility/Speed. |
| **Shoulders** | **Akil'zon's Swiftness** | Versatility/Haste focus. |
| **Chest** | **Mark of the Worldsoul** | Primary Strength buff. |
| **Legs** | **Thunderous Armor Kit** | Strength + Stamina. |
| **Boots** | **Farstrider's Hunt** | Mastery/Speed focus. |

---

#### Stat Priority Split
*   **All Builds:** Strength / Item Level > Haste > Versatility = Critical Strike > Mastery.

---

#### Hero Talents Deep Dive

##### **Mountain Thane**
*   **Core Focus:** **Thunder Blast** & **Ground Current**.
*   **Gameplay Effect:** Introduces *Thunder Blast* (empowered Thunder Clap) as your primary damage and threat generator. Focuses on area-of-effect pressure and lightning synergy.
*   **Why Pick?** Superior for raid throughput and consistent area defense in 12.0.5.

##### **Colossus**
*   **Core Mechanic:** **Demolish** & **Colossal Might**.
*   **Gameplay Effect:** Increases your single-target survivability and physical damage.
*   **Why Pick?** Superior for pure single-target survival and physical-heavy encounters.

---

#### Deep Dive: Raid Rotation
Focus: **Shield Block Uptime** and **Rage Efficiency**.

##### **A. Active Mitigation Audit (The 100% Rule)**
1.  **Shield Block:** Maintain **100% uptime** during all physical intake.
2.  **Audit Flag:** Tanking any physical target without **Shield Block** active is a critical survival failure.

##### **B. Rage Dump Audit (The Ignore Pain Rule)**
1.  **Ignore Pain:** Use to spend excess Rage and prevent capping. 
2.  **Audit Flag:** Letting Rage cap at **100** while **Ignore Pain** is available and off-GCD is a catastrophic failure of the survival engine.

##### **C. Priority List**
1.  **Shield Slam:** Top priority generator. Use on cooldown.
2.  **Thunder Blast (Mountain Thane):** Use immediately on proc.
3.  **Shield Charge / Ravager:** Use on cooldown for resource generation.
4.  **Thunder Clap:** Primary filler and generator.
5.  **Revenge:** Use only on free procs or to dump excess Rage if Ignore Pain is at its cap.
6.  **Audit Flag:** Casting *Revenge* (spent Rage) when Shield Block is about to expire is a critical error.

---

#### Spell Classifications & Major Cooldowns Breakdown
##### **Core Spells (Group under Core Spells)**
*   **Shield Slam**
*   **Thunder Clap**
*   **Revenge**
*   **Devastate**
*   **Execute**
*   **Ignore Pain**

##### **Major Cooldowns (Group under Major Cooldowns)**
*   **Last Stand**: 3-minute CD. Increases health and block chance.
*   **Avatar**: 1.5-minute CD. Increases damage and Rage generation.

##### **Defensives (Group under Defensives)**
*   **Shield Wall**: 4-minute CD. 40% Damage Reduction. Use for lethal hits.
*   **Demoralizing Shout**: 45s CD. 20% Damage Reduction from all targets.
*   **Shield Charge**: 45s CD. Gap closer and heavy generator.
*   **Spell Reflection**
*   **Enraged Regeneration**
*   **Die by the Sword**
*   **Rallying Cry**
*   **Shield Block**

##### **Misc Spells (Group under Misc)**
*   **Melee**

##### **Utility (Group under Utility)**
*   **Spell Reflection**: Essential utility for magic damage mitigation.
*   **Pummel**
*   **Shockwave**
*   **Storm Bolt**
*   **Intimidating Shout**
*   **Berserker Rage**
*   **Intervene**
*   **Heroic Leap**

#### Spec-Specific Audit Instructions

##### **Buff & Uptime Management (Group under Buff & Uptime)**
*   None listed.
Track Resources: [2] // 2 = Rage (ID 101)

##### **Resource Management & Overcapping**
- **Trigger:** Only create this table if `<RESOURCE_WASTE_DATA>` is provided.
- **Table Headers:** | Resource | The Player | The Reference | Overcapping Analysis |
- **Formatting Rule:** For each resource, you MUST show `Generated: [Total] • Wasted: [Wasted] ([Waste%]%)`.
- **Logic:**
    1.  **Rage (Type 2 / ID 101):** Protection Warriors use Rage for Active Mitigation (Shield Block) and survival (Ignore Pain). Wasting Rage at 100 is a critical survival error, as it indicates the player is not maintaining their defensive shell properly.
</details>

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

