# Holy Priest Knowledge Base (Midnight 12.0.5) - RAID FOCUS

## 1. Consumables & Equipment (Unified Guide Approach)
The guide recommends a unified approach for both Archon and Oracle builds.

| Category | **Primary Recommendation** | **Valid Alternatives / Situational** |
| :--- | :--- | :--- |
| **Ring Enchant** | **Enchant Ring - Eyes of the Eagle** | **Enchant Ring - Nature's Fury** (Haste). |
| **Flask** | **Flask of the Shattered Sun** (Crit) | **Flask of Thalassian Resistance** (Vers). |
| **Potion** | **Light's Potential** (primary) | **Potion of Recklessness** (alternative throughput). |
| **Food** | **Silvermoon Parade** (Intellect Feast) | **Royal Roast** (Valid if Feast is not provided). |
| **Weapon Oil** | **Thalassian Phoenix Oil** | None listed. |
| **Unique Gem** | **Indecipherable Eversong Diamond** | Must be socketed first. |
| **Gems** | **Flawless Versatile Garnet** | **Flawless Masterful Garnet** (Mastery alternative). |

### **Gear Enchants Table (Global)**
| Slot | Recommended Enchant | Notes |
| :--- | :--- | :--- |
| **Weapon** | **Acuity of the Ren'dorei** | Mastery proc focus. |
| **Weapon (Alternative)** | **Enchant Weapon - Arcane Mastery** | **Valid Alternative** for preference. |
| **Helm** | **Empowered Hex of Leeching** | Defensive utility. |
| **Chest** | **Mark of the Worldsoul** | Primary Stat (Intellect). |
| **Shoulders** | **Silvermoon's Mending** | Best for raid healing throughput. |
| **Legs** | **Arcanoweave Spellthread** | Intellect and Stamina/Mana. |
| **Boots** | **Shaladrassil's Roots** | Versatility / Speed. |

---

## 2. Stat Priority Split
*   **Archon Build:** Intellect > Crit = Mastery > Versatility > Haste.
*   **Oracle Build:** Intellect > Haste > Mastery > Crit = Versatility.

---

## 3. Hero Talents Deep Dive

### **Archon**
*   **Core Focus:** **Halo & High-Burst Procs**.
*   **Key Synergy:** **Spiritwell** (*Surge of Light* now buffs *Prayer of Healing*).
*   **Why Pick?** Superior for burst-heavy raid damage and high-throughput windows.

### **Oracle**
*   **Core Focus:** **Premonition & Utility**.
*   **Key Synergy:** **Prompt Prognosis** (Massive buffs to *Prayer of Mending*).
*   **Why Pick?** Superior for consistent stabilization and target-specific utility.

---

## 4. Deep Dive: Raid Rotation
The bot must switch audit logic based on the active Hero Spec.

### **A. Global Holy Priest Logic**
1.  **Prayer of Mending:** Use on cooldown (Core Engine).
2.  **Holy Word: Serenity:** Use for priority triage.
3.  **Benediction (Apex Proc):** Consumes next Flash Heal for massive throughput.

### **B. Archon Specific Priority**
1.  **Halo:** Use on cooldown to trigger *Archon* buffs.
2.  **Spiritwell Proc:** IF *Surge of Light* is active, THEN cast **Prayer of Healing**.
3.  **Lightweaver Weaving:** Alternate *Flash Heal* and *Prayer of Healing*.
4.  **Audit Flag:** Using a *Surge of Light* proc on *Flash Heal* in Archon build is a mana-efficiency error.

### **C. Oracle Specific Priority**
1.  **Premonition:** Use on cooldown to cycle through *Insight*, *Solace*, and *Glory* buffs.
2.  **Prayer of Mending:** Higher priority for *Prompt Prognosis* synergy.
3.  **Lightweaver Weave:** Standard weaving.

### **D. The Smite/Filler Audit (The 100% Rule)**
1.  **Usage:** Cast **Smite** during ANY period of low healing demand to maintain activity and fish for procs.
2.  **Serendipity Synergy:** Each Smite reduces the remaining cooldown of **Holy Word: Chastise** by 4 seconds (12 seconds during *Apotheosis*).
3.  **Surge of Light:** Smite has a chance to trigger free, instant **Flash Heals** (or *Prayer of Healing* in the Archon build).
4.  **Audit Flag:** Showing near-zero Smite casts during low-intensity phases is a failure of resource management, proc-fishing, and Holy Word uptime.
    *   **AI Analysis Hook:** If Smite casts are low compared to the reference, explicitly state that the player is missing out on **Holy Word: Chastise** resets (via *Serendipity*) and free **Surge of Light** procs. This results in fewer Holy Words available for peak throughput and inefficient mana management.

---

## 5. Major Cooldowns Breakdown (Strict Whitelist)
*   **Apotheosis:** Increases Holy Word CDR by 300%. Each **Smite** cast now reduces the cooldown of *Holy Word: Chastise* by 12 seconds.
*   **Divine Hymn:** Channeled raid heal. Increases healing received by 10%.
*   **Guardian Spirit:** Save for tanks or lethal hits. Increases healing received by 40%.
*   **Power Infusion:** Haste buff for top DPS.
*   **Halo (Archon Only):** High-throughput burst window trigger.
*   **Premonition (Oracle Only):** Versatile utility/throughput buff cycle.
