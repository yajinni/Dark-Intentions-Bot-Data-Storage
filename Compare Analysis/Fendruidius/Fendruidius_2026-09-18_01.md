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
- **Reference-only / Optional Differences:**
  - [Player-only] **Tranquility** — Player: 2 casts (0.42/min, 5.56M, 2.78M/cast); Reference: 0 casts (0.00/min, 0, 0/cast); player-only usage; deltas: casts/min N/A, total N/A, per cast N/A.
  - [Player-only] **Tiger Dash** — Player: 1 casts (0.21/min, 0, 0/cast); Reference: 0 casts (0.00/min, 0, 0/cast); player-only usage; deltas: casts/min N/A, total N/A, per cast N/A.
  - [Defensive] **Ironbark** — Player: 1 casts (0.21/min, 0, 0/cast); Reference: 0 casts (0.00/min, 0, 0/cast); player-only usage; deltas: casts/min N/A, total N/A, per cast N/A.
  - [Player-only] **Moonfire** — Player: 4 casts (0.85/min, 0, 0/cast); Reference: 0 casts (0.00/min, 0, 0/cast); player-only usage; deltas: casts/min N/A, total N/A, per cast N/A.
  - [Optional] **Lightfused Mana Potion** — Player: 1 casts (0.21/min, 0, 0/cast); Reference: 0 casts (0.00/min, 0, 0/cast); player-only usage; deltas: casts/min N/A, total N/A, per cast N/A.
  - [Player-only] **Starsurge** — Player: 7 casts (1.48/min, 0, 0/cast); Reference: 0 casts (0.00/min, 0, 0/cast); player-only usage; deltas: casts/min N/A, total N/A, per cast N/A.
  - [Player-only] **Light's Blessing** — Player: 8 casts (1.69/min, 0, 0/cast); Reference: 0 casts (0.00/min, 0, 0/cast); player-only usage; deltas: casts/min N/A, total N/A, per cast N/A.
  - [Reference-only] **Tranquility** — Player: 0 casts (0.00/min, 0, 0/cast); Reference: 2 casts (0.44/min, 5.93M, 2.96M/cast); reference-only usage; deltas: casts/min N/A, total N/A, per cast N/A.
  - [Reference-only] **Soulcoiler Ritual Vessel** — Player: 0 casts (0.00/min, 0, 0/cast); Reference: 3 casts (0.66/min, 2.88M, 960.4K/cast); reference-only usage; deltas: casts/min N/A, total N/A, per cast N/A.
  - [Defensive] **Barkskin** — Player: 0 casts (0.00/min, 0, 0/cast); Reference: 2 casts (0.44/min, 0, 0/cast); reference-only usage; deltas: casts/min N/A, total N/A, per cast N/A.
  - [Reference-only] **Light's Potential** — Player: 0 casts (0.00/min, 0, 0/cast); Reference: 1 casts (0.22/min, 0, 0/cast); reference-only usage; deltas: casts/min N/A, total N/A, per cast N/A.
  - [Utility] **Innervate** — Player: 1 casts (0.21/min, 0, 0/cast); Reference: 2 casts (0.44/min, 0, 0/cast); deltas: casts/min -52.0%, total N/A, per cast N/A.
- **Performance Overview:**
    - The player shows significant throughput potential but suffers from sub-optimal cooldown alignment and lower-than-average usage of core healing stabilization spells like [Wild Growth](https://www.wowhead.com/spell=48438) and [Lifebloom](https://www.wowhead.com/spell=33763).
    - The parse level was primarily hampered by a lack of coordination in major healing cooldowns and inefficient usage of [Rejuvenation](https://www.wowhead.com/spell=774) compared to the reference, who maintained near-perfect uptime on key targets.
    - Resource management was hindered by lower activity on core HoTs; optimizing [Lifebloom](https://www.wowhead.com/spell=33763) uptime will naturally improve throughput and [Abundance](https://www.wowhead.com/spell=207640) value.
- **Casting Optimizations:**
    - [Nature's Cure](https://www.wowhead.com/spell=88423): Player 10 vs Ref 4 (+140% CPM). Ensure dispel usage is dictated by raid mechanics rather than reactive spamming.
    - [Wrath](https://www.wowhead.com/spell=5176): Player 26 vs Ref 11 (+126.9% CPM). Excessive offensive casting at the expense of global cooldowns available for healing.
    - [Regrowth](https://www.wowhead.com/spell=8936): Player 55 vs Ref 37 (+42.7% CPM). Increased [Regrowth](https://www.wowhead.com/spell=8936) usage suggests reliance on direct healing instead of preventative HoT coverage.
    - [Rejuvenation](https://www.wowhead.com/spell=774): Player 95 vs Ref 105 (-13.2% CPM). Essential for maintaining [Abundance](https://www.wowhead.com/spell=207640) and raid stability.
    - [Wild Growth](https://www.wowhead.com/spell=48438): Player 19 vs Ref 21 (-13.2% CPM). Missed opportunities to normalize raid-wide health bars during predictable damage.
    - [Lifebloom](https://www.wowhead.com/spell=33763): Player 11 vs Ref 16 (-34% CPM). Critical for [Photosynthesis](https://www.wowhead.com/spell=278518) and mana efficiency.
    - [Nature's Swiftness](https://www.wowhead.com/spell=132158): Player 2 vs Ref 3 (-36% CPM). Ensure this is used on cooldown to pair with high-impact spells.
    - [Convoke the Spirits](https://www.wowhead.com/spell=391528): Player 3 vs Ref 4 (-28% CPM). Higher uptime on this cooldown is vital for throughput.
    - [Swiftmend](https://www.wowhead.com/spell=18562): Player 20 vs Ref 25 (-23.2% CPM). Key to triggering [Soul of the Forest](https://www.wowhead.com/spell=114108).
    
    **Reference-only / Optional Differences:**
    - [Tranquility](https://www.wowhead.com/spell=740) (Player): 2 casts. [Tranquility](https://www.wowhead.com/spell=157982) (Reference): 2 casts. (Note: Reference utilized additional external/cooldown items).
    - [Tiger Dash](https://www.wowhead.com/spell=252216), [Moonfire](https://www.wowhead.com/spell=8921), [Starsurge](https://www.wowhead.com/spell=197626), [Light's Blessing](https://www.wowhead.com/spell=1263768), [Lightfused Mana Potion](https://www.wowhead.com/spell=1236648): Player-only. Utility/Optional.
    - [Soulcoiler Ritual Vessel](https://www.wowhead.com/spell=1291894), [Light's Potential](https://www.wowhead.com/spell=1236616): Reference-only usage.
    
- **Cooldown Window Conclusions:**
    - No major cooldown window issues identified in the delta block, though the player's timing of [Convoke the Spirits](https://www.wowhead.com/spell=391528) and [Tranquility](https://www.wowhead.com/spell=740) should be prioritized during peak raid damage phases.
- Gear & Consumable audit found some improvements could be made. [Click Here](#8-gems-enchants-and-consumables) to view.

<details>
<summary><h3>2. Profile Comparison (Click to Expand)</h3></summary>

| Stat | The Player (Fendruidius) | The Reference (Swaggycat) | Player Difference |
| :--- | :--- | :--- | :--- |
| Fight Length | 283.8s | 272.4s | +11.4s |
| Item Level | 318 | 316 | +2 |
| Intellect | 3048 | 3054 | -6 |
| Stamina | 39911 | 38678 | +1233 |
| Mastery | 18.76% | 24.09% | -5.33% |
| Haste | 41.05% | 32.05% | +9.00% |
| Crit | 10.28% | 6.15% | +4.13% |
| Versatility | 2.44% | 3.85% | -1.41% |
</details>

### 3. Rotational Efficiency & Spell Priority
| Spell | The Player (Fendruidius) | The Reference (Swaggycat) | Analysis & Comparison |
| :--- | :--- | :--- | :--- |
| **Core Spells** | | | |
| [Rejuvenation](https://www.wowhead.com/spell=774) | Total: 10.18M • Casts: 95 | Total: 19.13M • Casts: 105 | Reference coverage significantly higher. |
| [Regrowth](https://www.wowhead.com/spell=8936) | Total: 10.38M • Casts: 55 | Total: 8.58M • Casts: 37 | Player over-using direct heals. |
| [Wild Growth](https://www.wowhead.com/spell=48438) | Total: 7.47M • Casts: 19 | Total: 11.30M • Casts: 21 | Reference gains more value per cast. |
| [Lifebloom](https://www.wowhead.com/spell=33763) | Total: 2.11M • Casts: 11 | Total: 2.96M • Casts: 16 | Maintain 100% uptime on tanks. |
| [Swiftmend](https://www.wowhead.com/spell=18562) | Total: 1.76M • Casts: 20 | Total: 1.79M • Casts: 25 | Use on cooldown for throughput. |
| [Efflorescence](https://www.wowhead.com/spell=81269) | Total: 1.75M | Total: 1.68M | Consistent usage between both. |
| **Major Cooldowns** | | | |
| [Tranquility](https://www.wowhead.com/spell=740) | Total: 5.56M • Casts: 2 | Total: 5.93M • Casts: 2 | Avoid overlapping with others. |
| [Convoke the Spirits](https://www.wowhead.com/spell=391528) | Casts: 3 | Casts: 4 | Increase usage frequency. |

<details>
<summary><h3>3.1 Passives (Click to Expand)</h3></summary>

| Spell | The Player (Fendruidius) | The Reference (Swaggycat) | Analysis & Comparison |
| :--- | :--- | :--- | :--- |
| [Everbloom](https://www.wowhead.com/spell=1244341) | 6.30M | 14.42M | Reference passives are outperforming. |
| [Symbiotic Blooms](https://www.wowhead.com/spell=439530) | 2.35M | 3.09M | Maintain better HoT coverage. |
| [Grove Guardians](https://www.wowhead.com/spell=102693) | 1.50M | 2.21M | High variance; optimize placement. |
</details>

<details>
<summary><h3>3.2 Utility (Click to Expand)</h3></summary>

| Spell | Player | Reference | Analysis |
| :--- | :--- | :--- | :--- |
| [Innervate](https://www.wowhead.com/spell=29166) | 1 Cast | 2 Casts | Use on healers during high movement. |
</details>

<details>
<summary><h3>3.4 Defensive Usage (Click to Expand)</h3></summary>

| Spell | Player | Reference | Analysis |
| :--- | :--- | :--- | :--- |
| [Barkskin](https://www.wowhead.com/spell=22812) | 0 Casts | 2 Casts | Use proactively for high damage. |
| [Ironbark](https://www.wowhead.com/spell=102342) | 1 Cast | 0 Casts | Ensure timely external coverage. |
| [Frenzied Regeneration](https://www.wowhead.com/spell=22842) | 0 Casts | 0 Casts | Low usage; can save your life. |
</details>

### 4. Healer Cooldown Overlap Analysis
| Player Spell | Cast Time | Overlapping Healer | Overlapping Spell | Time Difference |
| :--- | :--- | :--- | :--- | :--- |
| [Tranquility](https://www.wowhead.com/spell=740) | -29826746:-5 | Luraeya (Priest) | [Apotheosis](https://www.wowhead.com/spell=200183) | -6.4s |
| [Tranquility](https://www.wowhead.com/spell=740) | -29826746:-5 | Tattoomoon (Priest) | [Divine Hymn](https://www.wowhead.com/spell=64843) | -4.1s |
| [Tranquility](https://www.wowhead.com/spell=740) | -29826746:-5 | Siyanas (Priest) | [Divine Hymn](https://www.wowhead.com/spell=64843) | +0.6s |
| [Tranquility](https://www.wowhead.com/spell=740) | -29826742:-15 | Tattoomoon (Priest) | [Divine Hymn](https://www.wowhead.com/spell=64843) | +0.8s |

**Technical Analysis:**
The player’s [Tranquility](https://www.wowhead.com/spell=740) casts frequently overlapped with major healing CDs from other healers. In high-pressure raid segments, stacking these CDs without coordination results in overhealing and wasted potential. Coordinate with your healing team to stagger these windows, allowing for sustained raid survivability rather than redundant burst healing.

### 5. Resource Management
Analysis of buff uptimes indicates room for improvement regarding [Lifebloom](https://www.wowhead.com/spell=33763) (76.5% vs 95%) and [Clearcasting](https://www.wowhead.com/spell=16870) (25.8% vs 36.2%). Low uptime on [Lifebloom](https://www.wowhead.com/spell=33763) directly impacts your mana pool efficiency and healing output through reduced [Photosynthesis](https://www.wowhead.com/spell=278518) procs.

### 6. Talent & Hero Tree Analysis
| Talent Category | Unique to Fendruidius | Unique to Swaggycat | Rationale |
| :--- | :--- | :--- | :--- |
| Utility | [Tiger Dash](https://www.wowhead.com/spell=252216)<br>[Moonkin Form](https://www.wowhead.com/spell=24858)<br>[Fluid Form](https://www.wowhead.com/spell=449193) | [Wild Charge](https://www.wowhead.com/spell=102401)<br>[Heart Of The Wild](https://www.wowhead.com/spell=1261867) | Wildstalker benefits from [Heart Of The Wild](https://www.wowhead.com/spell=1261867) for raid utility. |
| Performance | [Starsurge Shared](https://www.wowhead.com/spell=197626)<br>[Starfire Shared](https://www.wowhead.com/spell=197628) | [Rake](https://www.wowhead.com/spell=1822)<br>[Rip](https://www.wowhead.com/spell=1079)<br>[Killer Instinct](https://www.wowhead.com/spell=108299) | Reference talent set favors bleed/cat-weaving throughput. |

### 7. Buff & Uptime Management
| Buff | The Player (Fendruidius) | The Reference (Swaggycat) | Analysis |
| :--- | :--- | :--- | :--- |
| [Lifebloom](https://www.wowhead.com/spell=33763) | 76.5% | 95.0% | Significant uptime gap. |
| [Rejuvenation (Germination)](https://www.wowhead.com/spell=155777) | 83.9% | 99.5% | Keep active on all targets. |
| [Nature's Swiftness](https://www.wowhead.com/spell=132158) | 0.1% | 14.9% | Increase frequency. |

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

<small>Generated by: gemini-3.1-flash-lite | Commit: a72ac7f025fd083c2872b3ce354713ee21ee2b4a | Changes: Improve report comparison resilience and clarity</small>

<small>Bot SHA: a72ac7f025fd083c2872b3ce354713ee21ee2b4a</small>
<!-- DARK_INTENTIONS_REPORT_METADATA:{"schemaVersion":2,"botSha":"a72ac7f025fd083c2872b3ce354713ee21ee2b4a","analysisFingerprint":"2f5c32863f8542b5efa52f6347f16c30b7b760137f9b5c7cb544371a771bafd4","playerReportCode":"WgmFxQ4b6fBV9DMh","playerFightId":14,"playerSourceId":18,"playerName":"Fendruidius","referenceReportCode":"DZr892GMBHX3zcqn","referenceFightId":18,"referenceSourceId":313} -->
