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
This priority list is dynamic. The bot must check for **Ultimate Serenity** talent status before auditing.

### **A. Primary Priority (Proactive / CD Management)**
1.  **Divine Image Trigger:** Cast *Holy Word: Chastise* 1-2s BEFORE predicted raid damage.
2.  **Holy Word: Serenity:** Use for priority triage. NEVER sit on 2 charges.
3.  **Holy Word: Sanctify:** IF NOT talented into *Ultimate Serenity*, use on raid clusters (6+ targets). IF talented into *Ultimate Serenity*, move this to lowest priority.
4.  **Prayer of Mending (CORE ENGINE):** Use on cooldown. In 12.0.5, this triggers *Benediction* procs and resets via *Epiphany*.
5.  **Benediction (Apex Proc):** Consumes *Flash Heal* for massive throughput. Prioritize over all other fillers.
6.  **Spiritwell (Archon) Proc:** IF *Surge of Light* is active, THEN cast **Prayer of Healing**. (Note: Using this on Flash Heal is a mana-efficiency error in Archon).
7.  **Lightweaver Weave:** IF < 2 stacks, cast **Flash Heal**. IF = 2 stacks, THEN cast **Prayer of Healing** (amplified).

### **B. Emergency Triage (No-Proc Fillers)**
*The bot should only validate these if all Holy Words are on CD and no procs are active:*
8.  **Emergency Flash Heal:** Cast on allies <35% HP or near death.
9.  **Standard Prayer of Healing:** Use for group stabilization ONLY if mana permits and raid is at 50% HP or lower.
10. **CDR Fishing:** Cast **Smite** or **Holy Nova** (if moving) to reset Holy Words via *Serendipity*.

## 5. Major Cooldown Execution (Audit Ready)
*   **Ultimate Serenity Audit:** If this talent is taken, the bot will flag any *Holy Word: Sanctify* cast as a "Low-Value Global" unless the entire raid is failing.
*   **Apotheosis Reset:** Correct Sequence: Sanctify -> Serenity -> PoM -> Halo -> **Apotheosis**.
*   **Divine Hymn:** Ensure no movement cancels the channel. paired with *Cosmic Ripple* procs.


## 6. Audit Cleanup (12.0.5 Removals)
*   **DO NOT AUDIT:** Symbol of Hope, Power Word: Life, Power Word: Shield, Lightwell, and Circle of Healing (unless specifically talented for niche utility).
*   **RENEW:** Should primarily be applied passively via *Benediction*. Manual Renew casts are generally inefficient in Raids.

## 7. Divine Image (Naaru)
*   Tracking the Naaru is vital. Trigger it with Holy Words (Serenity/Sanctify/Chastise) before high-intensity healing windows to benefit from mirrored spellcasts.
