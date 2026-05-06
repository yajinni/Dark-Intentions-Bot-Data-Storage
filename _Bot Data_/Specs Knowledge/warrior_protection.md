# Protection Warrior Knowledge Base (Midnight 12.0.5) - RAID FOCUS

## 1. Consumables & Equipment (Unified Guide Approach)
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

### **Gear Enchants Table (Global)**
| Slot | Recommended Enchant | Notes |
| :--- | :--- | :--- |
| **Weapon** | **Enchant Weapon - Berserker's Rage** | Standard tanking enchant. |
| **Helm** | **Empowered Blessing of Speed** | Utility/Speed. |
| **Shoulders** | **Akil'zon's Swiftness** | Versatility/Haste focus. |
| **Chest** | **Mark of the Worldsoul** | Primary Strength buff. |
| **Legs** | **Thunderous Armor Kit** | Strength + Stamina. |
| **Boots** | **Farstrider's Hunt** | Mastery/Speed focus. |

---

## 2. Stat Priority Split
*   **All Builds:** Strength / Item Level > Haste > Versatility = Critical Strike > Mastery.

---

## 3. Hero Talents Deep Dive

### **Mountain Thane**
*   **Core Focus:** **Thunder Blast** & **Ground Current**.
*   **Gameplay Effect:** Introduces *Thunder Blast* (empowered Thunder Clap) as your primary damage and threat generator. Focuses on area-of-effect pressure and lightning synergy.
*   **Why Pick?** Superior for raid throughput and consistent area defense in 12.0.5.

### **Colossus**
*   **Core Mechanic:** **Demolish** & **Colossal Might**.
*   **Gameplay Effect:** Increases your single-target survivability and physical damage.
*   **Why Pick?** Superior for pure single-target survival and physical-heavy encounters.

---

## 4. Deep Dive: Raid Rotation
Focus: **Shield Block Uptime** and **Rage Efficiency**.

### **A. Active Mitigation Audit (The 100% Rule)**
1.  **Shield Block:** Maintain **100% uptime** during all physical intake.
2.  **Audit Flag:** Tanking any physical target without **Shield Block** active is a critical survival failure.

### **B. Rage Dump Audit (The Ignore Pain Rule)**
1.  **Ignore Pain:** Use to spend excess Rage and prevent capping. 
2.  **Audit Flag:** Letting Rage cap at **100** while **Ignore Pain** is available and off-GCD is a catastrophic failure of the survival engine.

### **C. Priority List**
1.  **Shield Slam:** Top priority generator. Use on cooldown.
2.  **Thunder Blast (Mountain Thane):** Use immediately on proc.
3.  **Shield Charge / Ravager:** Use on cooldown for resource generation.
4.  **Thunder Clap:** Primary filler and generator.
5.  **Revenge:** Use only on free procs or to dump excess Rage if Ignore Pain is at its cap.
6.  **Audit Flag:** Casting *Revenge* (spent Rage) when Shield Block is about to expire is a critical error.

---

## 5. Major Cooldowns Breakdown (Strict Whitelist)
*   **Shield Wall:** 4-minute CD. 40% Damage Reduction. Use for lethal hits.
*   **Last Stand:** 3-minute CD. Increases health and block chance.
*   **Demoralizing Shout:** 45s CD. 20% Damage Reduction from all targets.
*   **Avatar:** 1.5-minute CD. Increases damage and Rage generation.
*   **Spell Reflection:** Essential utility for magic damage mitigation.
*   **Shield Charge:** 45s CD. Gap closer and heavy generator.

---

## 6. Spec-Specific Audit Instructions (Report Section 4)
Track Resources: [2] // 2 = Rage (ID 101)

*AI Instruction:* Include the following tables as sub-sections (4.1, 4.2) within **4. Rotational Efficiency & Spell Priority**.

### **4.1 Resource Management & Overcapping**
- **Trigger:** Only create this table if `<RESOURCE_WASTE_DATA>` is provided.
- **Table Headers:** | Resource | The Player | The Reference | Overcapping Analysis |
- **Formatting Rule:** For each resource, you MUST show `Generated: [Total] • Wasted: [Wasted] ([Waste%]%)`.
- **Logic:**
    1.  **Rage (Type 2 / ID 101):** Protection Warriors use Rage for Active Mitigation (Shield Block) and survival (Ignore Pain). Wasting Rage at 100 is a critical survival error, as it indicates the player is not maintaining their defensive shell properly.
