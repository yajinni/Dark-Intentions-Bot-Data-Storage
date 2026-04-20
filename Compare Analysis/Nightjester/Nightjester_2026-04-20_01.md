# Nightjester (21% DPS) vs. Bobbyorc (99% DPS)
## Encounter: Imperator Averzian (Normal)

## Audit Selection Rationale:
- **Duration Match:** 2:27 vs 2:19, a difference of 8s.
- **Item Level Match:** Successfully matched a reference within the required ±3 item level tolerance.
- **Composition Match:** 4 healers, 18 players.

### 1. Stat Profile Comparison:
| Stat | Nightjester (Player) | Bobbyorc (Ref) | Difference |
| :--- | :--- | :--- | :--- |
| **Item Level** | 262 | 265 | +3 (Ref) |
| **Mastery** | 18.15% (835) | 37.63% (1731) | +19.48% (Ref) |
| **Crit** | 12.91% (594) | 17.57% (808) | +4.66% (Ref) |
| **Haste** | 15.66% (689) | 14.43% (635) | +1.23% (Player) |
| **Versatility** | 2.30% (124) | 2.11% (114) | +0.19% (Player) |

> [!NOTE] Primary Stat Gap Analysis: The Reference maintains a 4.4% lead in Strength (2099 vs 2010). This gap is primarily driven by the 3-item-level advantage and more optimized gemming/enchanting, providing a higher baseline for all physical scaling.

### 2. Rotational Efficiency:
| Spell Name | Nightjester (Player) | Bobbyorc (Ref) |
| :--- | :--- | :--- |
| **Rampage** | Total: 1.0M \| Casts: 35 \| Per Cast: 28.6K | Total: 3.7M \| Casts: 48 \| Per Cast: 77.1K |
| **Bladestorm** | Total: 1.4M \| Casts: 3 \| Per Cast: 466.7K | Total: 3.6M \| Casts: 3 \| Per Cast: 1.2M |
| **Bloodbath** | Total: 158.2K \| Casts: 5 \| Per Cast: 31.6K | Total: 1.4M \| Casts: 17 \| Per Cast: 82.4K |
| **Execute** | Total: 587.9K \| Casts: 17 \| Per Cast: 34.6K | Total: 1.2M \| Casts: 21 \| Per Cast: 57.1K |
| **Bloodthirst** | Total: 606.2K \| Casts: 21 \| Per Cast: 28.9K | Total: 1.1M \| Casts: 20 \| Per Cast: 55.0K |
| **Odyn's Fury** | Total: 353.7K \| Casts: 4 \| Per Cast: 88.4K | Total: 1.4M \| Casts: 5 \| Per Cast: 280.0K |
| **Raging Blow** | Total: 485.6K \| Casts: 22 \| Per Cast: 22.1K | Total: 393.3K \| Casts: 19 \| Per Cast: 20.7K |
| **Slayer's Strike** | Total: 516.6K \| Ticks: 18 \| Per Tick: 28.7K | Total: 785.1K \| Ticks: 17 \| Per Tick: 46.2K |
| **Reap the Storm** | Total: 660.5K \| Ticks: 27 \| Per Tick: 24.5K | Total: 1.9M \| Ticks: 48 \| Per Tick: 39.6K |

### 3. Downtime & GCD Comparison:
- **The Player (Nightjester):** Total Casts: 127 | Downtime: 37.8s (25.7%)
- **The Reference (Bobbyorc):** Total Casts: 154 | Downtime: 5.0s (3.6%)

Despite Nightjester possessing a higher Haste percentage (15.66% vs 14.43%), which yields a shorter base GCD (~0.86s vs ~0.87s), the Player completed 27 fewer casts than the Reference over a longer encounter. This indicates a significant issue with rotational pacing and reactive delay. The Reference maintained a near-perfect activity rate, whereas the Player spent over a quarter of the fight inactive.

### 4. Buff & Cooldown Management:
| Buff/Ability | Nightjester (Casts) | Bobbyorc (Casts) |
| :--- | :--- | :--- |
| **Recklessness** | 2 | 3 |
| **Potion of Recklessness** | 0 | 1 |
| **Blood Fury** | 0 | 1 |
| **Enrage (via Rampage)** | 35 | 48 |

### 5. Defensive Usage:
| Spell Name | Nightjester (Casts) | Bobbyorc (Casts) | Timing/Usage |
| :--- | :--- | :--- | :--- |
| **Spell Reflection** | 2 | 0 | Used reactively for magic mitigation. |
| **Impending Victory** | 0 | 1 | Used by Ref for self-sustain. |

### 6. Combat Log References:
- [**Player Log (Nightjester)**](https://www.warcraftlogs.com/reports/yLhxGvdzV1CpfjwF#fight=1&type=summary)
- [**Reference Log (Bobbyorc)**](https://www.warcraftlogs.com/reports/cw9YkRVvG83gWHq6#fight=1&type=summary)

### 5. Final Audit Conclusions:
The performance discrepancy is driven by three primary factors:

1.  **Critical Mastery Deficit:** The Player has 19.48% less Mastery than the Reference. For Fury Warriors, Mastery (Unshackled Fury) directly increases damage dealt while Enraged. This is why the Reference's **Bladestorm** and **Rampage** deals more than double the damage per hit compared to the Player.
2.  **Bloodbath vs. Bloodthirst Priority:** The Player cast **Bloodbath** only 5 times while casting **Bloodthirst** 21 times. The Reference cast **Bloodbath** 17 times. This indicates the Player is failing to utilize the empowered version of the ability provided by the Reckless Abandon talent/procs, leading to massive lost value in the core rotation.
3.  **Resource Generation & Activity:** The Player generated significantly fewer **Rampage** casts (35 vs 48). This is a direct consequence of high downtime (25.7%). By missing GCDs, the Player generates less Rage, leading to lower Enrage uptime and fewer procs of **Reap the Storm** and **Slayer's Strike**.

**Recommendation:** Focus on maintaining 100% GCD activity. Prioritize Bloodbath over Raging Blow when available, and shift gear optimization toward Mastery to capitalize on the Enrage damage multiplier.