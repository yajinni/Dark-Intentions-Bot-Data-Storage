# Shadow Priest Knowledge Base (Midnight 12.0.5) - RAID FOCUS

## 1. Raid Consumables & Gear
| Category | Recommendation | Notes |
| :--- | :--- | :--- |
| **Flask** | Flask of the Shattered Sun | Intellect / Haste focus |
| **Potion** | Light's Potential | Use during Voidform burst |
| **Food** | Harandar Celebration | |
| **Weapon Oil** | Thalassian Phoenix Oil | |

### Gems
*   **Unique Gem:** Indecipherable Eversong Diamond
*   **Standard Fill:** Flawless Versatile Garnet (Haste/Mastery)

## 2. Spend Resource: Shadow Word: Madness
This is the defining audit metric for 12.0.5.
*   **Mechanism:** Consumes Insanity to apply a high-damage DoT.
*   **Rollover Logic:** Remaining damage from the previous application "rolls over" into the new application. 
*   **Audit Logic:** Do not wait for the DoT to expire if you are about to cap Insanity (~35 deficit). However, for maximum *Mastery: Shadow Weaving* benefit, try to refresh with <1s remaining.

## 3. Hero Spec Mechanics (Raid)
### **Voidweaver** (Entropic Rift)
*   **Core Mechanic:** *Mind Blast* or *Void Torrent* summons an **Entropic Rift**.
*   **Void Blast:** During the Rift, Smite is upgraded to Void Blast (Massive damage).
*   **Audit Priority:** Ensure *Void Blast* is the primary filler during Rift windows. Never cancel *Void Torrent* early; it refreshes the Rift to full duration upon completion.

### **Archon** (Halo & Perfected Form)
*   **Core Mechanic:** *Halo* used on cooldown.
*   **Perfected Form:** Provides a flat 5% damage buff during Voidform.
*   **Audit Priority:** High uptime on *Voidform* synced with *Power Infusion*.

## 4. Definitive Raid Opener (Audit Sequence)
1.  **Vampiric Touch:** Pre-cast.
2.  **Tentacle Slam:** Pre-cast (applies VT to multiple targets).
3.  **Shadow Word: Pain:** Initial application.
4.  **Halo:** Buff setup.
5.  **Voidform / Power Infusion / Potion:** Burst window activation.
6.  **Shadow Word: Madness:** Initial spender.
7.  **Void Volley:** CD usage.
8.  **Void Torrent:** Rift generation (Voidweaver).

## 5. Major Cooldown Execution
*   **Voidform:** 2-minute cooldown. Must be synced with Power Infusion.
*   **Tentacle Slam:** Use on cooldown to trigger *Void Apparitions* (Apex Talent) and apply DoTs. Never let it cap at 2 charges.
*   **Shadow Word: Death:** Use when any pet is active or the target is in execute range (<20% or <35% depending on talents).

## 6. Audit Cleanup (12.0.5 Mechanics)
*   **Mind Flay: Insanity:** Only use when *Shadow Word: Madness* is already active on the target.
*   **Pandemic Window:** Refresh *Vampiric Touch* and *Shadow Word: Pain* when <6.3s remaining (30% duration).
