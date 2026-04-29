# Frost Death Knight Knowledge Base (Midnight 12.0.5) - RAID FOCUS

## 1. Hero-Specific Consumables & Equipment
| Category | **Deathbringer Profile (Raid Meta)** | **Rider of the Apocalypse Profile** |
| :--- | :--- | :--- |
| **Weapon Enchant** | **Rune of the Fallen Crusader** | **Rune of the Fallen Crusader** |
| **Ring Enchant** | **Enchant Ring - Cursed Mastery** | **Enchant Ring - Cursed Mastery** |
| **Flask** | **Flask of the Shattered Sun** (Crit) | **Flask of the Shattered Sun** (Crit) |
| **Food** | **Royal Roast** (Strength) | **Royal Roast** (Strength) |
| **Weapon Oil** | **Thalassian Phoenix Oil** | **Thalassian Phoenix Oil** |
| **Unique Gem** | **Indecipherable Eversong Diamond** | **Indecipherable Eversong Diamond** |

### **Gear Enchants Table (Global)**
| Slot | Recommended Enchant | Notes |
| :--- | :--- | :--- |
| **Helm** | **Empowered Blessing of Speed** | Utility/Speed. |
| **Shoulders** | **Akil'zon's Swiftness** | Mastery/Crit focus. |
| **Chest** | **Mark of the Worldsoul** | Primary Strength buff. |
| **Legs** | **Thunderous Armor Kit** | Strength + Stamina. |
| **Boots** | **Farstrider's Hunt** | Mastery/Speed. |

---

## 2. Stat Priority Split
*   **All Builds:** Strength > Mastery > Critical Strike > Haste > Versatility.

---

## 3. Hero Talents Deep Dive

### **Deathbringer**
*   **Core Mechanic:** **Reaper's Mark** (45s Burst Cycle).
*   **Gameplay Effect:** Heavily prioritizes a high-intensity window every 45 seconds where shadow damage is amplified.
*   **Why Pick?** Superior Single-Target throughput for boss encounters.

### **Rider of the Apocalypse**
*   **Core Mechanic:** **Apocalypse Now** (Summons Horsemen).
*   **Gameplay Effect:** Provides passive minion support and extreme mobility via **Death Charge**.
*   **Why Pick?** Superior for high-movement encounters or fights requiring consistent utility.

---

## 4. Deep Dive: Raid Rotation (Breath focus)
The bot must switch audit logic based on whether **Breath of Sindragosa** is active.

### **A. During Breath of Sindragosa (The Sustain Window)**
1.  **Sustain Rule:** Keep Runic Power above 40 at all times.
2.  **Obliterate:** Primary spender (triggers Killing Machine).
3.  **Howling Blast:** Use ONLY with **Rime** procs.
4.  **Audit Flag:** Casting **Frost Strike** or **Death Coil** while Breath is active is a catastrophic "RP Waste" error.

### **B. Outside Breath (The Resource Loading)**
1.  **Pillar of Frost:** Use on cooldown (align with Reaper's Mark).
2.  **Remorseless Winter:** Keep 100% uptime.
3.  **Frost Strike:** Primary Runic Power spender to fish for **Runic Empowerment** procs.
4.  **Obliterate:** Use to spend Runes and generate RP.

---

## 5. Major Cooldowns Breakdown (Strict Whitelist)
*   **Breath of Sindragosa:** 2-minute CD. The primary throughput engine.
*   **Pillar of Frost:** 1-minute CD. Primary strength buff.
*   **Empower Rune Weapon:** Aligns with Breath and Pillar for resource overflow.
*   **Reaper's Mark (Deathbringer):** 45s CD. Essential burst trigger.
*   **Apocalypse Now (Rider):** 1.5-minute CD. Summons the Four Horsemen.
*   **Frostwyrm's Fury:** Used as a massive burst finisher during Pillar of Frost windows.
