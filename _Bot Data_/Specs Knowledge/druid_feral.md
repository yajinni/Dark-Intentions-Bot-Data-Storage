# Feral Druid Knowledge Base (Midnight 12.0.5) - RAID FOCUS

## 1. Consumables & Equipment (Unified Guide Approach)
The guide recommends a unified approach for both Wildstalker and Druid of the Claw builds.

| Category | **Primary Recommendation** | **Valid Alternatives / Situational** |
| :--- | :--- | :--- |
| **Ring Enchant** | **Enchant Ring - Eyes of the Eagle** | **Enchant Ring - Nature's Fury** (Haste). |
| **Flask** | **Flask of the Magisters** (Mastery) | **Flask of the Shattered Sun** (Crit). |
| **Potion** | **Light's Potential** (primary for melee) | **Potion of Recklessness** (alternative, sim-dependent). |
| **Food** | **Silvermoon Parade** (Agility Feast) | **Royal Roast** (Valid if Feast is not provided). |
| **Weapon Oil** | **Thalassian Phoenix Oil** | None listed. |
| **Unique Gem** | **Indecipherable Eversong Diamond** | Must be socketed first. |
| **Gems** | **Flawless Masterful Peridot** | **Flawless Quick Amethyst** (Haste alternative). |

### **Gear Enchants Table (Global)**
| Slot | Recommended Enchant | Notes |
| :--- | :--- | :--- |
| **Weapon** | **Acuity of the Ren'dorei** | Mastery/Agility proc. |
| **Helm** | **Empowered Blessing of Speed** | Utility/Speed. |
| **Shoulders** | **Akil'zon's Swiftness** | Mastery focus. |
| **Chest** | **Mark of the Worldsoul** | Primary Agility buff. |
| **Legs** | **Forest Hunter's Armor Kit** | Agility + Stamina. |
| **Boots** | **Lynx's Dexterity** | Mastery/Agility focus. |

---

## 2. Stat Priority Split
*   **Wildstalker:** Agility > Haste > Mastery > Critical Strike > Versatility.
*   **Druid of the Claw:** Agility > Critical Strike > Mastery > Haste > Versatility.

---

## 3. Hero Talents Deep Dive

### **Wildstalker**
*   **Core Focus:** **Rip** & **Unseen Predator**.
*   **Gameplay Effect:** Focuses on bleed-damage amplification. High dependency on maintaining DoTs for *Symbiotic Blooms*.
*   **Why Pick?** Superior single-target performance in 12.0.5.

### **Druid of the Claw**
*   **Core Mechanic:** **Ravage** (Empowered Ferocious Bite).
*   **Gameplay Effect:** Shifts the rotation towards high-intensity **Ferocious Bite** burst windows.
*   **Why Pick?** Superior for burst damage and target-swapping.

---

## 4. Deep Dive: Raid Rotation
Focus: **Bleed Snapshotting** and **Tiger's Fury** alignment.
> **Note:** Bloodtalons no longer exists in Midnight (12.0.5). It was a talent from previous expansions and must **not** be referenced in audits or recommendations.

### **A. Snapshotting (The Tiger's Fury Audit)**
1.  **Tiger's Fury:** Use BEFORE applying or refreshing **Rip** and **Rake**.
2.  **Combo Point Pooling:** Build to **5 Combo Points** before spending on finishers. Never spend below 5 CP.
3.  **Audit Flag:** Casting *Rip* or *Ferocious Bite* at fewer than **5 Combo Points** is a major throughput error.

### **B. Primary Priority List**
1.  **Rip:** Maintain at 5 Combo Points (Snapshotted with Tiger's Fury).
2.  **Rake:** Maintain 100% uptime (Snapshotted with TF).
3.  **Ferocious Bite:** Use at **5 Combo Points** and **50+ Energy** (to maximize the damage multiplier).
4.  **Shred:** Primary generator while at < 5 Combo Points.
5.  **Audit Flag:** Using *Ferocious Bite* at < 50 Energy or < 5 CP is a significant resource inefficiency error.

---

## 6. Spec-Specific Audit Instructions (Report Section 4)
Audit Resource: 22568 { "minCP": 5, "minEnergy": 50 } // Ferocious Bite
Audit Resource: 441591 { "minCP": 5, "minEnergy": 50 } // Ravage (Hero Talent FB)
Audit Resource: 1079 { "minCP": 5 } // Rip
Track Resources: [3, 4] // 3 = Energy, 4 = Combo Points

*AI Instruction:* Include the following tables as sub-sections (4.1, 4.2) within **4. Rotational Efficiency & Spell Priority**.

### **4.1 Resource Management & Overcapping**
- **Trigger:** Only create this table if `<RESOURCE_WASTE_DATA>` is provided.
- **Table Headers:** | Resource | The Player | The Reference | Overcapping Analysis |
- **Formatting Rule:** For each resource, you MUST show \`Generated: [Total] • Wasted: [Wasted] ([Waste%]%)\`.
- **Logic:**
    1.  **Energy (Type 3):** Feral is a "pooling" spec. High energy waste often comes from improper **Tiger's Fury** usage or not spending energy fast enough during Berserk.
    2.  **Combo Points (Type 4):** Wasting CP (generating at 5 CP) is a severe error. 

### **4.2 Finisher Quality Audit**
- **Trigger:** Only create this table if `<RESOURCE_AUDIT_DATA>` is provided.
- **Table Headers:** | Metric | The Player | The Reference | Analysis |
- **Formatting Rule:** For metrics provided (Low CP %, Under-Energized %), format as \`X / Total (Y%)\`.
- **Audit Rules & Reasoning:**
    1.  **Ferocious Bite / Ravage:**
        - **CP Limit (5):** Must be cast at 5 Combo Points for maximum efficiency.
        - **Energy Limit (50):** These abilities drain up to 50 *additional* energy to deal double damage. Casting at < 50 energy is a major DPS loss.
        - **Apex Predator's Craving (Free Procs):** Counted as \`freeProcs\`. They have zero cost and are excluded from errors. Mention them as a positive rotational benefit.
    2.  **Rip:**
        - **CP Limit (5):** Must be cast at 5 Combo Points.


### **Data Interpretation Rules:**
1.  **Apex Predator's Craving:** These are free Ferocious Bite procs. The data excludes these from "Low CP" counts automatically. You should mention the proc count as a sign of rotational benefit, but do not audit them for energy/CP efficiency.
2.  **The 50 Energy Rule (Ferocious Bite):** Ferocious Bite drains up to 50 *additional* energy for 100% bonus damage. Casting at < 50 energy is a direct DPS loss.
    - **Audit:** Flag any cast where the player had < 50 energy at the moment of cast.
3.  **The 5 CP Rule (Rip & FB):** Finishers should ONLY be cast at 5 Combo Points.
    - **Audit:** Flag any cast with < 5 CP as a "Low CP Finisher".

### **Audit Severity:**
*   **Low CP Rate > 5%:** Major Rotational Error.
*   **Under-Energized FB Rate > 15%:** Significant Resource Management Error.

---

## 7. Major Cooldowns Breakdown (Strict Whitelist)
*   **Berserk / Incarnation:** 3-minute CD. Reduces Energy costs and increases CP generation.
*   **Tiger's Fury:** 30s CD. Core damage buff and Energy generator.
*   **Convoke the Spirits:** 1-minute CD (if talented). Rapid-fire burst.
*   **Feral Frenzy:** 45s CD. Generates 5 Combo Points and applies a heavy bleed.
