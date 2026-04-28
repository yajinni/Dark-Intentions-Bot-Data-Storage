# Holy Priest Knowledge Base (Midnight 12.0.5) - RAID FOCUS

## 1. Raid Consumables & Gear
| Category | Recommendation | Notes |
| :--- | :--- | :--- |
| **Flask** | Flask of the Shattered Sun | Critical Strike focus |
| **Potion** | Light's Potential | Use during Apotheosis burst |
| **Food** | Harandar Celebration / Royal Roast | |
| **Weapon Oil** | Thalassian Phoenix Oil | |

### **Enchants (Midnight 12.0.5)**
| Slot | Recommended Enchant | Notes |
| :--- | :--- | :--- |
| **Weapon** | Enchant Weapon - Acuity of the Ren'dorei | Or Jan'alai's Precision |
| **Helm** | Empowered Hex of Leeching | |
| **Chest** | Mark of the Worldsoul | Or Mark of the Magister |
| **Shoulders** | Silvermoon's Mending | Or Thalassian Recovery |
| **Legs** | Arcanoweave Spellthread | |
| **Rings** | Eyes of the Eagle | Or Nature's Fury |
| **Feet** | Shaladrassil's Roots | Or Farstrider's Hunt |

### Gems
*   **Unique Gem:** Indecipherable Eversong Diamond
*   **Standard Fill:** Flawless Versatile Garnet (Crit/Vers)


## 2. Midnight Apex Talent: Benediction
This is a core 12.0.5 audit metric.
*   **Trigger:** casting *Prayer of Mending* periodically transforms your next *Flash Heal* into **Benediction**.
*   **Effect:** Benediction deals significantly increased healing and triggers a *Cosmic Ripple*.
*   **Apotheosis Synergy:** During Apotheosis, *Flash Heal* is automatically upgraded to Benediction. Prioritize these procs over standard fillers.

## 3. Hero Spec Analysis (Raid Context)
### **Archon** (Standard Raid Choice)
*   **Spiritwell (CRITICAL):** Surge of Light procs should be spent exclusively on **Prayer of Healing**. This maximizes mana efficiency and triggers *Empowered Surges*.
*   **Halo Synergy:** Cast Halo on cooldown (ideally before Apotheosis or Divine Hymn). Do not hold Halo for more than 30s.

### **Oracle** (Utility/Single Target)
*   **Guiding Light:** Grants an additional charge of *Prayer of Mending*.
*   **Prompt Prognosis:** Adds a direct heal to the initial target of *Prayer of Mending*. Use to supplement spot-healing weaknesses.

## 4. High-Precision Raid Rotational Priority
This priority list is conditional. The bot should audit for these specific IF/THEN interactions:

1.  **Divine Image Trigger:** Cast *Holy Word: Chastise* on an enemy 1-2s BEFORE predicted raid damage to ensure the Naaru is active for the burst window.
2.  **Holy Word: Sanctify:** Use on raid clusters (6+ targets). Never sit on 2 charges (Miracle Worker).
3.  **Holy Word: Serenity:** Use for priority triage. Never sit on 2 charges.
4.  **Prayer of Mending (ON COOLDOWN):** This is the engine of the spec. In 12.0.5, this triggers *Benediction* procs and resets via *Epiphany*.
5.  **Spiritwell (Archon) Proc:** IF *Surge of Light* is active, THEN prioritize **Prayer of Healing**. (CRITICAL: Using procs on Flash Heal during Archon is a mana-efficiency error).
6.  **Lightweaver Weaving:** IF < 2 stacks, cast **Flash Heal**. IF = 2 stacks, THEN cast **Prayer of Healing** (amplified).
7.  **Benediction (Apex Proc):** Prioritize over standard fillers. Always consume before casting your next Holy Word to maximize *Cosmic Ripple* windows.
8.  **Halo (Archon):** Cast 1s before *Apotheosis* or *Divine Hymn* to maximize *Manifested Power* procs and *Resonant Energy* stacking.
9.  **Holy Word CDR Filler:** IF all Holy Words are on CD, THEN cast **Smite** or **Holy Nova** to fish for *Surge of Light* procs and reset Holy Words via *Serendipity*.

## 5. Major Cooldown Execution (Audit Ready)
*   **Apotheosis (The Reset Loop):** 
    *   *Correct Sequence:* Sanctify -> Serenity -> PoM -> Halo -> **Apotheosis** -> (Repeat Sequence). 
    *   *Error Check:* Pressing Apotheosis while Holy Word charges are full is a significant throughput loss.
*   **Divine Hymn:** Use during telegraphed raid-wide damage. 
    *   *12.0.5 Nuance:* Each pulse triggers *Cosmic Ripple* (Benediction Apex). Ensure no movement cancels the channel.
*   **Guardian Spirit:** Save for tanks or targets taking lethal hits. Increases healing received by 60%.


## 6. Audit Cleanup (12.0.5 Removals)
*   **DO NOT AUDIT:** Symbol of Hope, Power Word: Life, Power Word: Shield, Lightwell, and Circle of Healing (unless specifically talented for niche utility).
*   **RENEW:** Should primarily be applied passively via *Benediction*. Manual Renew casts are generally inefficient in Raids.

## 7. Divine Image (Naaru)
*   Tracking the Naaru is vital. Trigger it with Holy Words (Serenity/Sanctify/Chastise) before high-intensity healing windows to benefit from mirrored spellcasts.
