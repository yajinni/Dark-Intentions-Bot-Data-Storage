# Devourer Demon Hunter Knowledge Base (Midnight 12.0.5) - RAID FOCUS

## 1. Hero-Specific Consumables & Equipment
| Category | **Annihilator Profile (Haste)** | **Void-Scarred Profile (Mastery)** |
| :--- | :--- | :--- |
| **Flask** | **Flask of the Blood Knights** | **Flask of the Magisters** |
| **Food** | **Harandar Celebration** | **Royal Roast** |
| **Gems** | **Flawless Quick Amethyst** | **Flawless Masterful Garnet** |
| **Weapon Oil** | **Thalassian Phoenix Oil** | **Thalassian Phoenix Oil** |
| **Unique Gem** | **Indecipherable Eversong Diamond** | **Indecipherable Eversong Diamond** |

### **Gear Enchants Table**
| Slot | Recommended Enchant | Notes |
| :--- | :--- | :--- |
| **Weapon (MH)** | **Enchant Weapon - Arcane Mastery** | Primary DPS proc. |
| **Weapon (OH)** | **Enchant Weapon - Berserker's Rage** | Secondary DPS proc. |
| **Alternative Weapon**| **Enchant Weapon - Acuity of the Ren'dorei** | Mastery focus (Budget/Alternative). |
| **Helm** | **Enchant Helm - Empowered Rune of Avoidance** | Utility/Avoidance focus. |
| **Shoulders** | **Enchant Shoulders - Amirdrassil's Grace** | Utility/Survival focus. |
| **Chest** | **Enchant Chest - Mark of the Worldsoul** | Primary Stat (Intellect). |
| **Legs** | **Sunfire Silk Spellthread** | Intellect + Stamina. |
| **Boots** | **Enchant Boots - Lynx's Dexterity** | Utility/Agility/Intellect. |
| **Rings** | **Enchant Ring - Eyes of the Eagle** | Mastery focus. |

---

## 2. Stat Priority Split
*   **Annihilator Build:** Intellect > **Haste** > Mastery > Crit = Vers.
*   **Void-Scarred Build:** Intellect > **Mastery** > Haste > Crit = Vers.

---

## 3. Hero Talents Deep Dive

### **Annihilator (Infinite Demon)**
*   **Core Mechanic:** **Collapsing Star** (Soul consumer).
*   **Gameplay Effect:** Focuses on extending **Void Metamorphosis** by using "drain-pausing" spells (*Void Ray* and *Collapsing Star*).
*   **Why Pick?** Superior for long, sustained raid encounters where high Metamorphosis uptime is possible.

### **Void-Scarred (Void Burst)**
*   **Core Mechanic:** **Voidsurge** (Multiplied burst windows).
*   **Gameplay Effect:** High-intensity burst windows triggered by specific spell sequences (*Voidblade* -> *Metamorphosis* -> *Pierce the Veil*).
*   **Why Pick?** Superior for burst-heavy encounters or fights with frequent downtime/target switching.

---

## 4. Deep Dive: Raid Rotation
The bot must switch audit logic based on the active Hero Spec.

### **A. Global Devourer Logic (Ranged)**
1.  **Soul Immolation:** Maintain 100% uptime.
2.  **Void Metamorphosis:** Activate at **> 50 Souls**.
3.  **Void Ray:** Use at **100+ Fury** outside transformation to load Souls.
4.  **Cull:** Spender for *Voidfall* stacks.

### **B. Annihilator Specific Priority (Drain Management)**
1.  **Void Ray:** Use on cooldown while transformed. (CRITICAL: Pauses Fury Drain).
2.  **Collapsing Star:** Use immediately at **30 Souls**. (CRITICAL: Pauses Fury Drain).
3.  **Devour:** Primary transformed filler.
4.  **Audit Flag:** Casting *Devour* while *Collapsing Star* is available at 30+ Souls is a "Sustain Error."

### **C. Void-Scarred Specific Priority (Burst Management)**
1.  **Voidsurge Prep:** Cast **Voidblade** immediately before entering Metamorphosis.
2.  **Voidsurge Trigger:** Cast **Pierce the Veil** immediately after transforming (within 2s).
3.  **Void Ray:** Primary spender.
4.  **Devour:** Primary filler.
5.  **Audit Flag:** Entering transformation without a *Voidblade* charge is a "Burst Efficiency Error."

---

## 5. Major Cooldowns Breakdown (Strict Whitelist)
*   **Void Metamorphosis:** Core specialization cooldown.
*   **Collapsing Star:** Soul-spender available during Metamorphosis.
*   **Rolling Torment:** Increases Soul and Fury generation for a 12s window.
