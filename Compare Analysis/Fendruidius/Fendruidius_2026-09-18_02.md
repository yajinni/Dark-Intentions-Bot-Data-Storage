# Fendruidius (43% HPS Parse) vs. Swaggycat (98% HPS Parse)
<small>*(Player: 188.9K HPS | Reference: 293.3K HPS)*</small>

### Encounter: Vashnik the Malignant (Heroic)
### Reference Selection
References are the top 5 distinct Wildstalker Restoration Druid Heroic logs in partition 12.1, within ±3 item levels of 318, and within ±20s of 283s. The default reference is the median HPS log in that set.

### 1. Audit Conclusions

- **Programmatic comparison evidence:**
  - **Nature's Cure** — Player: 10 casts (2.11/min, 0, 0/cast); Reference: 4 casts (0.88/min, 0, 0/cast); deltas: casts/min +140.0%, total N/A, per cast N/A.
  - **Wrath** — Player: 26 casts (5.50/min, 0, 0/cast); Reference: 11 casts (2.42/min, 0, 0/cast); deltas: casts/min +126.9%, total N/A, per cast N/A.
  - **Rejuvenation** — Player: 95 casts (20.09/min, 10.18M, 107.2K/cast); Reference: 105 casts (23.13/min, 19.13M, 182.2K/cast); deltas: casts/min -13.2%, total -48.9%, per cast -41.2%.
  - **Regrowth** — Player: 55 casts (11.63/min, 10.38M, 188.7K/cast); Reference: 37 casts (8.15/min, 8.58M, 232.0K/cast); deltas: casts/min +42.7%, total +16.1%, per cast -18.7%.
  - **Wild Growth** — Player: 19 casts (4.02/min, 7.47M, 393.1K/cast); Reference: 21 casts (4.63/min, 11.30M, 537.9K/cast); deltas: casts/min -13.2%, total -36.5%, per cast -26.9%.
  - **Nature's Swiftness** — Player: 2 casts (0.42/min, 0, 0/cast); Reference: 3 casts (0.66/min, 0, 0/cast); deltas: casts/min -36.0%, total N/A, per cast N/A.
  - **Lifebloom** — Player: 11 casts (2.33/min, 2.11M, 191.5K/cast); Reference: 16 casts (3.52/min, 2.96M, 185.2K/cast); deltas: casts/min -34.0%, total -31.8%, per cast +3.4%.
  - **Convoke the Spirits** — Player: 3 casts (0.63/min, 0, 0/cast); Reference: 4 casts (0.88/min, 0, 0/cast); deltas: casts/min -28.0%, total N/A, per cast N/A.
  - **Swiftmend** — Player: 20 casts (4.23/min, 1.76M, 87.8K/cast); Reference: 25 casts (5.51/min, 1.79M, 71.8K/cast); deltas: casts/min -23.2%, total -6.1%, per cast +22.3%.
  - **Tranquility** — Player: 2 casts (0.42/min, 5.56M, 2.78M/cast); Reference: 2 casts (0.44/min, 5.93M, 2.96M/cast); deltas: casts/min -4.0%, total -10.0%, per cast -6.2%.
- **Reference-only / Optional Differences:**
  - [Player-only] **Light's Blessing** — Player: 8 casts (1.69/min, 0, 0/cast); Reference: 0 casts (0.00/min, 0, 0/cast); player-only usage; deltas: casts/min N/A, total N/A, per cast N/A.
  - [Optional] **Lightfused Mana Potion** — Player: 1 casts (0.21/min, 0, 0/cast); Reference: 0 casts (0.00/min, 0, 0/cast); player-only usage; deltas: casts/min N/A, total N/A, per cast N/A.
  - [Defensive] **Ironbark** — Player: 1 casts (0.21/min, 0, 0/cast); Reference: 0 casts (0.00/min, 0, 0/cast); player-only usage; deltas: casts/min N/A, total N/A, per cast N/A.
  - [Player-only] **Starsurge** — Player: 7 casts (1.48/min, 0, 0/cast); Reference: 0 casts (0.00/min, 0, 0/cast); player-only usage; deltas: casts/min N/A, total N/A, per cast N/A.
  - [Player-only] **Moonfire** — Player: 4 casts (0.85/min, 0, 0/cast); Reference: 0 casts (0.00/min, 0, 0/cast); player-only usage; deltas: casts/min N/A, total N/A, per cast N/A.
  - [Player-only] **Tiger Dash** — Player: 1 casts (0.21/min, 0, 0/cast); Reference: 0 casts (0.00/min, 0, 0/cast); player-only usage; deltas: casts/min N/A, total N/A, per cast N/A.
  - [Reference-only] **Soulcoiler Ritual Vessel** — Player: 0 casts (0.00/min, 0, 0/cast); Reference: 3 casts (0.66/min, 2.88M, 960.4K/cast); reference-only usage; deltas: casts/min N/A, total N/A, per cast N/A.
  - [Reference-only] **Light's Potential** — Player: 0 casts (0.00/min, 0, 0/cast); Reference: 1 casts (0.22/min, 0, 0/cast); reference-only usage; deltas: casts/min N/A, total N/A, per cast N/A.
  - [Defensive] **Barkskin** — Player: 0 casts (0.00/min, 0, 0/cast); Reference: 2 casts (0.44/min, 0, 0/cast); reference-only usage; deltas: casts/min N/A, total N/A, per cast N/A.
  - [Utility] **Innervate** — Player: 1 casts (0.21/min, 0, 0/cast); Reference: 2 casts (0.44/min, 0, 0/cast); deltas: casts/min -52.0%, total N/A, per cast N/A.
- **Performance Overview:**
    - Fendruidius underperformed significantly compared to the reference, largely due to inefficient usage of core throughput spells like [Rejuvenation](https://www.wowhead.com/spell=774) and [Wild Growth](https://www.wowhead.com/spell=48438).
    - The player shows excessive, low-value casting of [Wrath](https://www.wowhead.com/spell=5176) and [Nature's Cure](https://www.wowhead.com/spell=88423) which displaced core healing GCDs.
    - Resource management was hampered by lower [Lifebloom](https://www.wowhead.com/spell=33763) uptime and inconsistent throughput application, leading to a massive deficit in total effective healing.
- **Casting Optimizations:**
    - **Casting Optimizations:**
        - [Nature's Cure](https://www.wowhead.com/spell=88423): Player 10 (2.11 CPM) vs. Reference 4 (0.88 CPM). Delta: +140.0%. **Advice:** Excess dispelling suggests either unnecessary usage or reactive healing over preventative coverage. Focus on GCD-efficient healing spells.
        - [Wrath](https://www.wowhead.com/spell=5176): Player 26 (5.5 CPM) vs. Reference 11 (2.42 CPM). Delta: +126.9%. **Advice:** High usage of [Wrath](https://www.wowhead.com/spell=5176) indicates poor priority management. Keep damage spells strictly to filler windows.
        - [Regrowth](https://www.wowhead.com/spell=8936): Player 55 (11.63 CPM) vs. Reference 37 (8.15 CPM). Delta: +42.7%. **Advice:** Over-reliance on [Regrowth](https://www.wowhead.com/spell=8936) at the expense of [Rejuvenation](https://www.wowhead.com/spell=774) efficiency.
        - [Wild Growth](https://www.wowhead.com/spell=48438): Player 19 (4.02 CPM) vs. Reference 21 (4.63 CPM). Delta: -13.2%. **Advice:** Missing two casts of [Wild Growth](https://www.wowhead.com/spell=48438) represents a major throughput loss.
        - [Lifebloom](https://www.wowhead.com/spell=33763): Player 11 (2.33 CPM) vs. Reference 16 (3.52 CPM). Delta: -34.0%. **Advice:** Maintaining [Lifebloom](https://www.wowhead.com/spell=33763) on the tank is vital for mastery-based throughput; aim for 95%+ uptime.
        - [Swiftmend](https://www.wowhead.com/spell=18562): Player 20 (4.23 CPM) vs. Reference 25 (5.51 CPM). Delta: -23.2%. **Advice:** Increased frequency of [Swiftmend](https://www.wowhead.com/spell=18562) is necessary for proccing [Soul of the Forest](https://www.wowhead.com/spell=114108).
    - **Reference-only / Optional Differences:**
        - [Light's Blessing](https://www.wowhead.com/spell=1263768): Player 8 casts (1.69 CPM) vs. Reference 0.
        - [Lightfused Mana Potion](https://www.wowhead.com/spell=1236648): Player 1 cast vs. Reference 0.
        - [Starsurge](https://www.wowhead.com/spell=197626): Player 7 casts vs. Reference 0.
        - [Moonfire](https://www.wowhead.com/spell=8921): Player 4 casts vs. Reference 0.
        - [Tiger Dash](https://www.wowhead.com/spell=252216): Player 1 cast vs. Reference 0.
        - [Soulcoiler Ritual Vessel](https://www.wowhead.com/spell=1291894): Player 0 casts vs. Reference 3 (0.66 CPM).
        - [Light's Potential](https://www.wowhead.com/spell=1236616): Player 0 casts vs. Reference 1.
Gear & Consumable audit found some improvements could be made. [Click Here](#8-gems-enchants-and-consumables) to view.

### 4. Healer Cooldown Overlap Analysis
- **Technical Analysis:**
    - The player's usage of [Tranquility](https://www.wowhead.com/spell=740) was frequently overlapped by other healers (e.g., [Divine Hymn](https://www.wowhead.com/spell=64843) within 0.6s–4s). This indicates poor coordination within the healing team.
    - **Rotational advice:** Coordinate [Tranquility](https://www.wowhead.com/spell=740) usage during planned raid-wide damage phases. Communicate with other healers to chain cooldowns rather than stacking them to maximize uptime on raid stability.

### 5. Resource Management
The player struggled with maintenance of core HoTs. [Lifebloom](https://www.wowhead.com/spell=33763) uptime was 76.5% compared to the reference's 95%, severely impacting the efficiency of the Mastery stat and [Photosynthesis](https://www.wowhead.com/spell=274902).

<details>
<summary><h3>2. Profile Comparison (Click to Expand)</h3></summary>

| Stat | The Player (Fendruidius) | The Reference (Swaggycat) | Player Difference |
| :--- | :--- | :--- | :--- |
| Fight Length | 04:43 | 04:32 | +11s |
| Item Level | 318 | 316 | +2 iLvL |
| Intellect | 3048 | 3054 | -6 |
| Stamina | 39911 | 38678 | +1233 |
| Mastery | 18.76 | 24.09 | -5.33 |
| Haste | 41.05 | 32.05 | +9.00 |
| Crit | 10.28 | 6.15 | +4.13 |
| Versatility | 2.44 | 3.85 | -1.41 |
</details>

### 3. Rotational Efficiency & Spell Priority
| Spell | The Player (Fendruidius) | The Reference (Swaggycat) | Analysis & Comparison |
| :--- | :--- | :--- | :--- |
| **Core Spells** | | | |
| [Regrowth](https://www.wowhead.com/spell=8936) | 10.38M (55) | 8.58M (37) | High spamming of [Regrowth](https://www.wowhead.com/spell=8936) indicates mana waste. |
| [Rejuvenation](https://www.wowhead.com/spell=774) | 10.18M (95) | 19.13M (105) | Significant lack of [Rejuvenation](https://www.wowhead.com/spell=774) coverage. |
| [Wild Growth](https://www.wowhead.com/spell=48438) | 7.47M (19) | 11.30M (21) | Missing casts, aim for consistent group-wide coverage. |
| [Lifebloom](https://www.wowhead.com/spell=33763) | 2.11M (11) | 2.96M (16) | Uptime must be prioritized for passive healing efficacy. |
| [Swiftmend](https://www.wowhead.com/spell=18562) | 1.76M (20) | 1.79M (25) | Under-utilized relative to potential Soul of the Forest windows. |
| **Major Cooldowns** | | | |
| [Tranquility](https://www.wowhead.com/spell=740) | 5.56M (2) | 5.93M (2) | Similar cast counts but lower total effectiveness. |
| [Convoke the Spirits](https://www.wowhead.com/spell=391528) | 0 (3) | 0 (4) | One missed cast over the encounter duration. |

<details>
<summary><h3>3.1 Passives (Click to Expand)</h3></summary>

| Spell | The Player (Fendruidius) | The Reference (Swaggycat) | Analysis & Comparison |
| :--- | :--- | :--- | :--- |
| [Everbloom](https://www.wowhead.com/spell=1244341) | 6.30M | 14.42M | Significant gap; [Everbloom](https://www.wowhead.com/spell=1244341) effectiveness linked to HoT uptime. |
| [Symbiotic Blooms](https://www.wowhead.com/spell=439530) | 2.35M | 3.09M | Passive procs follow HoT count; increase Rejuv coverage. |
| [Efflorescence](https://www.wowhead.com/spell=81269) | 1.75M | 1.68M | Good uptime maintenance. |
</details>

<details>
<summary><h3>3.2 Utility (Click to Expand)</h3></summary>

| Spell | Player | Reference | Analysis |
| :--- | :--- | :--- | :--- |
| [Innervate](https://www.wowhead.com/spell=29166) | 1 | 2 | Higher usage ensures team mana health. |
</details>

<details>
<summary><h3>3.4 Defensive Usage (Click to Expand)</h3></summary>

| Spell | Player | Reference | Analysis |
| :--- | :--- | :--- | :--- |
| [Ironbark](https://www.wowhead.com/spell=102342) | 1 | 0 | Proactive usage, ensure targets are correct. |
| [Frenzied Regeneration](https://www.wowhead.com/spell=22842) | 0 | 0 | Both players failed to utilize this for self-sustain. |
</details>

### 6. Talent & Hero Tree Analysis
| Talent Category | Unique to Fendruidius | Unique to Swaggycat | Rationale |
| :--- | :--- | :--- | :--- |
| **Utility/Mobility** | [Tiger Dash](https://www.wowhead.com/spell=252216)<br>[Moonkin Form](https://www.wowhead.com/spell=24858)<br>[Fluid Form](https://www.wowhead.com/spell=449193) | [Wild Charge](https://www.wowhead.com/spell=102401)<br>[Heart Of The Wild](https://www.wowhead.com/spell=1261867) | Reference utilizes [Heart Of The Wild](https://www.wowhead.com/spell=1261867) for burst healing flexibility. |
| **Offensive** | | [Rake](https://www.wowhead.com/spell=1822)<br>[Rip](https://www.wowhead.com/spell=1079)<br>[Killer Instinct](https://www.wowhead.com/spell=108299) | The player's offensive talent choices are suboptimal for this healer role. |

### 7. Buff & Uptime Management
| Buff | The Player (Fendruidius) | The Reference (Swaggycat) | Analysis |
| :--- | :--- | :--- | :--- |
| [Lifebloom](https://www.wowhead.com/spell=33763) | 76.5% | 95.0% | Major gap; loss of passive mastery benefits. |
| [Rejuvenation (Germination)](https://www.wowhead.com/spell=155777) | 83.9% | 99.5% | Significant coverage drop. |
| [Nature's Swiftness](https://www.wowhead.com/spell=132158) | 0.1% | 14.9% | Failure to utilize this for instant regrowth casts. |

<details>
<summary><h3 id="8-gems-enchants-and-consumables">8. Gems, Enchants and Consumables (Click to Expand)</h3></summary>

#### Enchants
| Slot | The Player | Recommendation |
| :--- | :--- | :--- |
| Head | ✅ [Enchant Helm - Empowered Hex of Leeching](https://www.wowhead.com/item=243951) |  |
| Shoulders | ✅ [Enchant Shoulders - Silvermoon's Mending](https://www.wowhead.com/item=244021) |  |
| Chest | ✅ [Enchant Chest - Mark of the Worldsoul](https://www.wowhead.com/item=243977) |  |
| Legs | ⚠️ [Sunfire Silk Spellthread](https://www.wowhead.com/item=240133) | Recommended: [Arcanoweave Spellthread](https://www.wowhead.com/spell=240154) | Alt: See current guide and sim |
| Feet | ✅ [Enchant Boots - Shaladrassil's Roots](https://www.wowhead.com/item=243983) |  |
| Main Hand | ✅ [Enchant Weapon - Acuity of the Ren'dorei](https://www.wowhead.com/item=244029) |  |

#### Gems
| Slot | The Player | Recommendation |
| :--- | :--- | :--- |
| Ring 1 (Socket 1) | ✅ [Flawless Masterful Peridot](https://www.wowhead.com/item=240891) |  |
| Ring 2 (Socket 1) | ✅ [Flawless Masterful Peridot](https://www.wowhead.com/item=240891) |  |
| Neck (Socket 1) | ✅ [Indecipherable Eversong Diamond](https://www.wowhead.com/item=240982) |  |

#### Consumables
| Slot | The Player | Recommendation |
| :--- | :--- | :--- |
| Flask | ✅ [Flask of the Blood Knights](https://www.wowhead.com/item=1235110) |  |
| Weapon Oil | ✅ [Thalassian Phoenix Oil](https://www.wowhead.com/spell=243733) |  |
| Potion | ❌ Missing | Recommended: [Potion of Recklessness](https://www.wowhead.com/item=1236994) | Alt: See current guide and sim |

</details>

### 9. Combat Log References
- [**Player Log (Fendruidius)**](https://www.warcraftlogs.com/reports/WgmFxQ4b6fBV9DMh?fight=14&type=summary&source=18)
- [**Reference Log (Swaggycat)**](https://www.warcraftlogs.com/reports/DZr892GMBHX3zcqn?fight=18&type=summary&source=313)

<small>Generated by: gemini-3.1-flash-lite | Commit: 41adcb4e538a0804b5cfea3d2a201caba4a6c7f2 | Changes: Fix comparison integrity and add AI retry flow</small>

<small>Bot SHA: 41adcb4e538a0804b5cfea3d2a201caba4a6c7f2</small>
<!-- DARK_INTENTIONS_REPORT_METADATA:{"schemaVersion":2,"botSha":"41adcb4e538a0804b5cfea3d2a201caba4a6c7f2","analysisFingerprint":"2941e2f9fee9c2ec2acbadb47f6b374a69a41ba436fff5895a8f47cd661d7852","playerReportCode":"WgmFxQ4b6fBV9DMh","playerFightId":14,"playerSourceId":18,"playerName":"Fendruidius","referenceReportCode":"DZr892GMBHX3zcqn","referenceFightId":18,"referenceSourceId":313} -->
