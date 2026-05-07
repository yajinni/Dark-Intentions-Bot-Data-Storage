# Blood Death Knight Knowledge Base (Midnight 12.0.5) - RAID FOCUS

## 1. Hero-Specific Consumables & Equipment
| Category | **Deathbringer Profile (Crit/Vers)** | **San'layn Profile (Haste)** |
| :--- | :--- | :--- |
| **Flask** | **Flask of the Shattered Sun** (Haste) | **Flask of the Shattered Sun** (Haste) |
| **Alternative Flask** | **Flask of Thalassian Resistance** (Vers) | **Flask of the Blood Knights** (Mastery) |
| **Food** | **Royal Roast** (Primary/Vers) | **Harandar Celebration** (Haste) |
| **Potion** | **Light's Potential** (tank default) | **Potion of Recklessness** (alternative). |
| **Gems** | **Flawless Masterful Garnet** | **Flawless Quick Amethyst** |
| **Ring Enchants** | **Enchant Ring - Silvermoon's Tenacity** | **Enchant Ring - Nature's Fury** |
| **Weapon Rune** | **Rune of Sanguination** (ST) / **Fallen Crusader** (5+) | **Rune of Sanguination** (ST/AoE) |
| **Weapon Oil** | **Thalassian Phoenix Oil** | **Thalassian Phoenix Oil** |
| **Unique Gem** | **Indecipherable Eversong Diamond** | **Indecipherable Eversong Diamond** |

### **Gear Enchants Table (Global)**
| Slot | Recommended Enchant | Notes |
| :--- | :--- | :--- |
| **Helm** | **Empowered Blessing of Speed** | Utility/Speed. |
| **Shoulders** | **Akil'zon's Swiftness** | Versatility focus. |
| **Chest** | **Mark of the Worldsoul** | Primary Strength buff. |
| **Legs** | **Blood Knight's Armor Kit** | Strength + Stamina. |
| **Boots** | **Farstrider's Hunt** | Versatility/Speed. |

---

## 2. Stat Priority Split
*   **Deathbringer Build:** Strength > Crit = Versatility = Mastery > Haste.
*   **San'layn Build:** Strength > **Haste** > Crit = Versatility = Mastery.

---

## 3. Hero Talents Deep Dive

### **Deathbringer**
*   **Core Mechanic:** **Reaper's Mark** (Timed explosion).
*   **Gameplay Effect:** Introduces a "Burst Window" after the mark expires where your physical damage reduction is peaked.
*   **Why Pick?** Superior for physical-heavy bosses and high burst damage mitigation.

### **San'layn**
*   **Core Mechanic:** **Vampiric Strike** (Replaces Heart Strike).
*   **Gameplay Effect:** Massive Haste increases and self-healing loops via **Essence of the Blood Queen**.
*   **Why Pick?** Superior for sustained damage encounters and high self-healing requirements.

---

## 4. Deep Dive: Raid Rotation
The bot must switch audit logic based on the active Hero Spec.

### **A. Global Tank Priorities (Both Specs)**
1.  **Bone Shield:** Use **Marrowrend** if stacks are **< 7**.
2.  **Ossuary:** Never drop below **5 stacks** (Critical RP efficiency rule).
3.  **Death Strike:** 
    *   **Reactive:** Use after hits > 25% Max HP.
    *   **Proactive:** Use to avoid Runic Power capping (> 75 RP).
4.  **Death and Decay:** Keep active for cleave and damage reduction.

### **B. Deathbringer Specific Priority**
1.  **Reaper's Mark:** Use on cooldown.
2.  **Exterminate:** Cast immediately after the Mark expires.
3.  **Blood Boil:** Use to maintain Blood Plague.
4.  **Heart Strike:** Filler to generate RP.

### **C. San'layn Specific Priority**
1.  **Vampiric Strike:** Use whenever available (Priority #1).
2.  **Essence of the Blood Queen:** Maintain 10 stacks via consistent Vampiric Strike casts.
3.  **Blood Boil:** Use to maintain Blood Plague.
4.  **Heart Strike:** Only use if Vampiric Strike is NOT active.

### **D. Utility & Positioning**
1.  **Sanguine Ground:** Always maintain high uptime by standing in your **Death and Decay**. This provides 5% increased damage and healing, and is critical for "Per Cast" value across all abilities. 
    *   **Audit Rule:** If the **Sanguine Ground** uptime difference is **> 10%** compared to the reference, you MUST mention this in the **Audit Conclusions** as a critical positioning failure. Explain that they are losing the 5% damage/healing bonus by not standing in their Death and Decay.

---

## 5. Major Cooldowns Breakdown (Strict Whitelist)
*   **Dancing Rune Weapon:** 40% Parry and mirrors attacks. Primary hybrid CD.
*   **Vampiric Blood:** Increases Max HP and Healing Received by 30%.
*   **Icebound Fortitude:** 30% Damage Reduction.
*   **Anti-Magic Shell:** Absorbs magic damage.
*   **Lichborne:** Leech and Fear/Sleep immunity.
*   **Purgatory:** Prevents death once every 4 minutes.
*   **Empower Rune Weapon:** 15% Haste and instant resource generation.

---

## 6. Spec-Specific Audit Instructions (Report Section 4)
Track Resources: [5, 6] // 5 = Runes (ID 105), 6 = Runic Power (ID 106)

*AI Instruction:* Include the following tables as sub-sections (4.1, 4.2) within **4. Rotational Efficiency & Spell Priority**.

### **4.1 Resource Management & Overcapping**
- **Trigger:** Only create this table if `<RESOURCE_WASTE_DATA>` is provided.
- **Table Headers:** | Resource | The Player | The Reference | Overcapping Analysis |
- **Formatting Rule:** For each resource, you MUST show `Generated: [Total] • Wasted: [Wasted] ([Waste%]%)`.
- **Logic:**
    1.  **Runes (Type 5 / ID 105):** Audited via **"Rune Spending Discipline"**. 
        - **Metric:** Report the **Spending Discipline %** (Percentage of rune-spending casts performed while at **4 or fewer** runes).
        - **Goal:** Aim for > 95%. Spending runes at 5 or 6 runes available is a rotational error (stalling regeneration).
    2.  **Runic Power (Type 6 / ID 106):** Spent on Death Strike for survival. Overcapping RP (> 75-80) is a survival error as it represents missed healing and potential death.

### **4.2 Spec-Specific Efficiency Audit**
- **Trigger:** Compare `Marrowrend` casts in the `<PLAYER_DATA>` targets table.
- **Table Headers:** | Metric | The Player | The Reference | Efficiency Analysis |
- **Logic:**
    1.  **Bone Shield Waste:** Marrowrend should only be cast when Bone Shield is < 7 stacks. Casting at 7+ stacks is a significant waste of 2 Runes that should have been Heart Strike or Vampiric Strike.
