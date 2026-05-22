# Death Knight

## Blood

### Blood Death Knight Knowledge Base (Midnight 12.0.5) - RAID FOCUS

#### 1. Hero-Specific Consumables & Equipment
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

##### **Gear Enchants Table (Global)**
| Slot | Recommended Enchant | Notes |
| :--- | :--- | :--- |
| **Helm** | **Empowered Blessing of Speed** | Utility/Speed. |
| **Shoulders** | **Akil'zon's Swiftness** | Versatility focus. |
| **Chest** | **Mark of the Worldsoul** | Primary Strength buff. |
| **Legs** | **Blood Knight's Armor Kit** | Strength + Stamina. |
| **Boots** | **Farstrider's Hunt** | Versatility/Speed. |

---

#### 2. Stat Priority Split
*   **Deathbringer Build:** Strength > Crit = Versatility = Mastery > Haste.
*   **San'layn Build:** Strength > **Haste** > Crit = Versatility = Mastery.

---

#### 3. Hero Talents Deep Dive

##### **Deathbringer**
*   **Core Mechanic:** **Reaper's Mark** (Timed explosion).
*   **Gameplay Effect:** Introduces a "Burst Window" after the mark expires where your physical damage reduction is peaked.
*   **Why Pick?** Superior for physical-heavy bosses and high burst damage mitigation.

##### **San'layn**
*   **Core Mechanic:** **Vampiric Strike** (Replaces Heart Strike).
*   **Gameplay Effect:** Massive Haste increases and self-healing loops via **Essence of the Blood Queen**.
*   **Why Pick?** Superior for sustained damage encounters and high self-healing requirements.

---

#### 4. Deep Dive: Raid Rotation
The bot must switch audit logic based on the active Hero Spec.

##### **A. Global Tank Priorities (Both Specs)**
1.  **Bone Shield:** Use **Marrowrend** if stacks are **< 7**.
2.  **Ossuary:** Never drop below **5 stacks** (Critical RP efficiency rule).
3.  **Death Strike:** 
    *   **Reactive:** Use after hits > 25% Max HP.
    *   **Proactive:** Use to avoid Runic Power capping (> 75 RP).
4.  **Death and Decay:** Keep active for cleave and damage reduction.

##### **B. Deathbringer Specific Priority**
1.  **Reaper's Mark:** Use on cooldown.
2.  **Exterminate:** Cast immediately after the Mark expires.
3.  **Blood Boil:** Use to maintain Blood Plague.
4.  **Heart Strike:** Filler to generate RP.

##### **C. San'layn Specific Priority**
1.  **Vampiric Strike:** Use whenever available (Priority #1).
2.  **Essence of the Blood Queen:** Maintain 10 stacks via consistent Vampiric Strike casts.
3.  **Blood Boil:** Use to maintain Blood Plague.
4.  **Heart Strike:** Only use if Vampiric Strike is NOT active.

##### **D. Utility & Positioning**
1.  **Sanguine Ground:** Always maintain high uptime by standing in your **Death and Decay**. This provides 5% increased damage and healing, and is critical for "Per Cast" value across all abilities. 
    *   **Audit Rule:** If the **Sanguine Ground** uptime difference is **> 10%** compared to the reference, you MUST mention this in the **Audit Conclusions** as a critical positioning failure. Explain that they are losing the 5% damage/healing bonus by not standing in their Death and Decay.

---

#### 5. Major Cooldowns Breakdown (Strict Whitelist)
*   **Dancing Rune Weapon:** 40% Parry and mirrors attacks. Primary hybrid CD.
*   **Vampiric Blood:** Increases Max HP and Healing Received by 30%.
*   **Icebound Fortitude:** 30% Damage Reduction.
*   **Anti-Magic Shell:** Absorbs magic damage.
*   **Lichborne:** Leech and Fear/Sleep immunity.
*   **Purgatory:** Prevents death once every 4 minutes.
*   **Empower Rune Weapon:** 15% Haste and instant resource generation.

---

#### 6. Spec-Specific Audit Instructions (Report Section 4)
Track Resources: [5, 6] // 5 = Runes (ID 105), 6 = Runic Power (ID 106)

*AI Instruction:* Include the following tables as sub-sections (4.1, 4.2) within **4. Rotational Efficiency & Spell Priority**.

##### **4.1 Resource Management & Overcapping**
- **Trigger:** Only create this table if `<RESOURCE_WASTE_DATA>` is provided.
- **Table Headers:** | Resource | The Player | The Reference | Overcapping Analysis |
- **Formatting Rule:** For each resource, you MUST show `Generated: [Total] • Wasted: [Wasted] ([Waste%]%)`.
- **Logic:**
    1.  **Runes (Type 5 / ID 105):** Audited via **"Rune Spending Discipline"**. 
        - **Metric:** Compare the **Spending Discipline %** (Percentage of rune-spending casts performed while at **4 or fewer** runes) between the Player and the Reference.
        - **Audit Rule:** If the player's Spending Discipline is **> 10% lower** than the reference, mention this as a rotational efficiency failure. Explain that they are waiting too long to spend runes, causing regeneration stalls.
    2.  **Runic Power (Type 6 / ID 106):** Spent on Death Strike for survival. Overcapping RP (> 75-80) is a survival error as it represents missed healing and potential death.

##### **4.2 Spec-Specific Efficiency Audit**
- **Trigger:** Compare `Marrowrend` casts in the `<PLAYER_DATA>` targets table.
- **Table Headers:** | Metric | The Player | The Reference | Efficiency Analysis |
- **Logic:**
    1.  **Bone Shield Waste:** Marrowrend should only be cast when Bone Shield is < 7 stacks. Casting at 7+ stacks is a significant waste of 2 Runes that should have been Heart Strike or Vampiric Strike.


## Frost

### Frost Death Knight Knowledge Base (Midnight 12.0.5) - RAID FOCUS

#### 1. Consumables & Equipment (Unified Guide Approach)
The guide recommends a unified approach for both Deathbringer and Rider builds.

| Category | **Primary Recommendation** | **Valid Alternatives / Situational** |
| :--- | :--- | :--- |
| **Weapon Rune** | **Rune of the Fallen Crusader** | **Rune of Razorice** (Valid if build requires it). |
| **Ring Enchant** | **Enchant Ring - Nature's Fury** | **Enchant Ring - Eyes of the Eagle** (Crit). |
| **Flask** | **Flask of the Shattered Sun** (Crit) | **Flask of the Magisters** (Mastery). |
| **Potion** | **Potion of Recklessness** (primary) | **Light's Potential** (alternative). |
| **Food** | **Harandar Celebration** (Strength Feast) | **Royal Roast** (Valid if Feast is not provided). |
| **Unique Gem** | **Indecipherable Eversong Diamond** | Must be socketed first. |
| **Gems** | **Flawless Deadly Amethyst** | **Flawless Masterful Garnet** (Mastery alternative). |

##### **Gear Enchants Table (Global)**
| Slot | Recommended Enchant | Notes |
| :--- | :--- | :--- |
| **Helm** | **Empowered Blessing of Speed** | Utility/Speed. |
| **Shoulders** | **Akil'zon's Swiftness** | Mastery/Crit focus. |
| **Chest** | **Mark of the Worldsoul** | Primary Strength buff. |
| **Legs** | **Thunderous Armor Kit** | Strength + Stamina. |
| **Boots** | **Farstrider's Hunt** | Mastery/Speed. |

---

#### 2. Stat Priority Split
*   **All Builds:** Strength > Mastery > Critical Strike > Haste > Versatility.

---

#### 3. Hero Talents Deep Dive

##### **Deathbringer**
*   **Core Mechanic:** **Reaper's Mark** (45s Burst Cycle).
*   **Gameplay Effect:** Heavily prioritizes a high-intensity window every 45 seconds where shadow damage is amplified.
*   **Why Pick?** Superior Single-Target throughput for boss encounters.

##### **Rider of the Apocalypse**
*   **Core Mechanic:** **Apocalypse Now** (Summons Horsemen).
*   **Gameplay Effect:** Provides passive minion support and extreme mobility via **Death Charge**.
*   **Why Pick?** Superior for high-movement encounters or fights requiring consistent utility.

---

#### 4. Deep Dive: Raid Rotation (Breath focus)
The bot must switch audit logic based on whether **Breath of Sindragosa** is active.

##### **A. During Breath of Sindragosa (The Sustain Window)**
1.  **Sustain Rule:** Keep Runic Power above 40 at all times.
2.  **Obliterate:** Primary spender (triggers Killing Machine).
3.  **Howling Blast:** Use ONLY with **Rime** procs.
4.  **Audit Flag:** Casting **Frost Strike** or **Death Coil** while Breath is active is a catastrophic "RP Waste" error.

##### **B. Outside Breath (The Resource Loading)**
1.  **Pillar of Frost:** Use on cooldown (align with Reaper's Mark).
2.  **Remorseless Winter:** Keep 100% uptime.
3.  **Frost Strike:** Primary Runic Power spender to fish for **Runic Empowerment** procs.
4.  **Obliterate:** Use to spend Runes and generate RP.

---

#### 5. Major Cooldowns Breakdown (Strict Whitelist)
*   **Breath of Sindragosa:** 2-minute CD. The primary throughput engine.
*   **Pillar of Frost:** 1-minute CD. Primary strength buff.
*   **Empower Rune Weapon:** Aligns with Breath and Pillar for resource overflow.
*   **Reaper's Mark (Deathbringer):** 45s CD. Essential burst trigger.
*   **Apocalypse Now (Rider):** 1.5-minute CD. Summons the Four Horsemen.
*   **Frostwyrm's Fury:** Used as a massive burst finisher during Pillar of Frost windows.

---

#### 6. Spec-Specific Audit Instructions (Report Section 4)
Track Resources: [5, 6] // 5 = Runes (ID 105), 6 = Runic Power (ID 106)

*AI Instruction:* Include the following tables as sub-sections (4.1, 4.2) within **4. Rotational Efficiency & Spell Priority**.

##### **4.1 Resource Management & Overcapping**
- **Trigger:** Only create this table if `<RESOURCE_WASTE_DATA>` is provided.
- **Table Headers:** | Resource | The Player | The Reference | Overcapping Analysis |
- **Formatting Rule:** For each resource, you MUST show `Generated: [Total] • Wasted: [Wasted] ([Waste%]%)`.
- **Logic:**
    1.  **Runes (Type 5 / ID 105):** Audited via **"Rune Spending Discipline"**. 
        - **Metric:** Compare the **Spending Discipline %** (Percentage of rune-spending casts performed while at **4 or fewer** runes) between the Player and the Reference.
        - **Audit Rule:** If the player's Spending Discipline is **> 10% lower** than the reference, mention this as a rotational efficiency failure. Explain that they are waiting too long to spend runes, causing regeneration stalls.
    2.  **Runic Power (Type 6 / ID 106):** Critical for **Breath of Sindragosa** uptime. Overcapping RP outside of Breath is less severe than starving during Breath. 

##### **4.2 Breath of Sindragosa Audit**
- **Trigger:** Check for `Breath of Sindragosa` casts.
- **Logic:**
    1.  **RP Waste (During Breath):** Casting **Frost Strike** or **Death Coil** while Breath is active is a catastrophic failure (waste of RP that should sustain the Breath).
    2.  **Starvation:** Ending a Breath with > 40 RP indicates the player likely stopped spending Runes on Obliterate, which is a rotational error.


## Unholy

### Unholy Death Knight Knowledge Base (Midnight 12.0.5) - RAID FOCUS

#### 1. Consumables & Equipment (Unified Guide Approach)
The guide recommends a unified approach for both Rider and San'layn builds.

| Category | **Primary Recommendation** | **Valid Alternatives / Situational** |
| :--- | :--- | :--- |
| **Weapon Rune** | **Rune of the Apocalypse** | **Rune of the Fallen Crusader** (Valid alternative). |
| **Ring Enchant** | **Enchant Ring - Nature's Fury** | **Enchant Ring - Eyes of the Eagle** (Crit). |
| **Flask** | **Flask of the Shattered Sun** (Crit) | **Flask of the Magisters** (Mastery). |
| **Potion** | **Potion of Recklessness** (primary) | **Light's Potential** (alternative). |
| **Food** | **Harandar Celebration** (Strength Feast) | **Royal Roast** (Valid if Feast is not provided). |
| **Unique Gem** | **Indecipherable Eversong Diamond** | Must be socketed first. |
| **Gems** | **Flawless Deadly Amethyst** | **Flawless Masterful Garnet** (Mastery alternative). |

##### **Gear Enchants Table (Global)**
| Slot | Recommended Enchant | Notes |
| :--- | :--- | :--- |
| **Helm** | **Empowered Blessing of Speed** | Utility/Speed. |
| **Shoulders** | **Akil'zon's Swiftness** | Mastery focus. |
| **Chest** | **Mark of the Worldsoul** | Primary Strength buff. |
| **Legs** | **Thunderous Armor Kit** | Strength + Stamina. |
| **Boots** | **Farstrider's Hunt** | Mastery/Speed. |

---

#### 2. Stat Priority Split
*   **All Builds:** Strength > Mastery > Critical Strike > Haste > Versatility.

---

#### 3. Hero Talents Deep Dive

##### **Rider of the Apocalypse**
*   **Core Mechanic:** **Lesser Ghoul Stacks** (Horsemen Support).
*   **Gameplay Effect:** Introduces a maintenance cycle for Lesser Ghouls to ensure maximum Horseman uptime.
*   **Why Pick?** Superior Single-Target performance in 12.0.5.

##### **San'layn**
*   **Core Mechanic:** **Blightfall** (Vampiric Strike procs).
*   **Gameplay Effect:** Focuses on shadow-damage amplification and extreme plague spreading.
*   **Why Pick?** Superior for heavy cleave or target-rich environments.

---

#### 4. Deep Dive: Raid Rotation
Focus: **Festering Wound** and **Lesser Ghoul** management.

##### **A. Resource Management (The Audit)**
1.  **Festering Wounds:** Maintain 2-4 wounds on the target before casting Scourge Strike.
2.  **Lesser Ghoul Stacks (Rider):** 
    *   Build to **4-6 stacks** using *Festering Strike*.
    *   Spend down to **3 stacks** using *Scourge Strike*.
    *   **Audit Flag:** Casting *Scourge Strike* at 0-2 Lesser Ghoul stacks is an efficiency error in the Rider build.

##### **B. Primary Priority List**
1.  **Soul Reaper:** Use if the target is **< 35% HP**. (Crucial for execute procs).
2.  **Dark Transformation:** Use on cooldown (ensure Ghoul is active).
3.  **Putrefy:** High priority filler whenever *Dark Transformation* is active and target is > 35% HP.
4.  **Death Coil:** Use to spend Runic Power and reduce cooldown on *Army of the Dead* (via Army of the Damned).
5.  **Festering Strike:** Use only to maintain 2-4 Wounds or build Lesser Ghoul stacks.

---

#### 5. Major Cooldowns Breakdown (Strict Whitelist)
*   **Army of the Dead:** 8-minute base CD (reduced by Death Coil). Your primary burst window opener.
*   **Apocalypse:** 1.5-minute CD. Consumes 4 Festering Wounds to summon ghouls.
*   **Dark Transformation:** 1-minute CD. Empowers your ghoul.
*   **Abomination Limb:** Use for burst damage and grip utility.
*   **Summon Gargoyle:** (If talented) High priority burst CD.
*   **Empower Rune Weapon:** Use to supplement resource flooding during Army windows.

---

#### 6. Spec-Specific Audit Instructions (Report Section 4)
Track Resources: [5, 6] // 5 = Runes (ID 105), 6 = Runic Power (ID 106)

*AI Instruction:* Include the following tables as sub-sections (4.1, 4.2) within **4. Rotational Efficiency & Spell Priority**.

##### **4.1 Resource Management & Overcapping**
- **Trigger:** Only create this table if `<RESOURCE_WASTE_DATA>` is provided.
- **Table Headers:** | Resource | The Player | The Reference | Overcapping Analysis |
- **Formatting Rule:** For each resource, you MUST show `Generated: [Total] • Wasted: [Wasted] ([Waste%]%)`.
- **Logic:**
    1.  **Runes (Type 5 / ID 105):** Audited via **"Rune Spending Discipline"**. 
        - **Metric:** Compare the **Spending Discipline %** (Percentage of rune-spending casts performed while at **4 or fewer** runes) between the Player and the Reference.
        - **Audit Rule:** If the player's Spending Discipline is **> 10% lower** than the reference, mention this as a rotational efficiency failure. Explain that they are waiting too long to spend runes, causing regeneration stalls.
    2.  **Runic Power (Type 6 / ID 106):** Spent on **Death Coil** to trigger **Runic Corruption** (which increases rune recharge speed). Overcapping RP (> 80) means lost Runic Corruption uptime.

##### **4.2 Festering Wound Audit**
- **Trigger:** Check for `Festering Strike` and `Scourge Strike` / `Clawing Shadows` casts.
- **Logic:**
    1.  **Wound Overcapping:** Casting **Festering Strike** when the target already has 6+ Festering Wounds is a significant waste of Runes.
    2.  **Sudden Doom Efficiency:** Ensure **Death Coil** is used on procs to avoid wasting free RP spenders.


