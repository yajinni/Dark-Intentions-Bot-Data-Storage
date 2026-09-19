
## Blood Death Knight Knowledge Base (Patch 12.1) - RAID/M+ FOCUS

### Current 12.1 Source Snapshot
Source verification date: **2026-09-17**. Current guide pages: [guide](https://www.icy-veins.com/wow/blood-death-knight-pve-tank-guide) · [talents](https://www.icy-veins.com/wow/blood-death-knight-pve-tank-spec-builds-talents) · [stats](https://www.icy-veins.com/wow/blood-death-knight-pve-tank-stat-priority) · [enchants](https://www.icy-veins.com/wow/blood-death-knight-pve-tank-gems-enchants-consumables) · [rotation](https://www.icy-veins.com/wow/blood-death-knight-pve-tank-rotation-cooldowns-abilities).

The Icy Veins 12.1 recommendations below supersede the former gearing and rotation summary. Character-specific simulations and item level take priority whenever the guide calls out close or fluid stats.

**Talent and Hero Tree recommendation**
- San'layn is the default for sustained second-target damage and most Mythic+; Deathbringer is the simpler pure single-target alternative.

**Stat priority**
- Deathbringer: Strength > Critical Strike > Mastery > Versatility > Haste. For San'layn or defensive gearing, item level and character-specific simulations take priority.

**Gems**
- Indecipherable Eversong Diamond. Use Masterful Garnet for Deathbringer or Quick Garnet for San'layn, then sim the remaining sockets.

**Enchants and weapon augment**
- Head Empowered Blessing of Speed; shoulders Akil'zon's Swiftness; chest Mark of the Worldsoul; legs Forest Hunter's Armor Kit; feet Farstrider's Hunt; rings Silvermoon's Tenacity (Deathbringer) or Nature's Fury (San'layn); weapon Rune of Sanguination, with Rune of Fallen Crusader for high-target Deathbringer; Thalassian Phoenix Oil.

**Consumables**
- Flask of the Shattered Sun or Blood Knights by stat profile; Potion of Recklessness is the default. Avoid Draught of Rampant Abandon on a tank when its silence zone is unsafe. Use Harandar Celebration/Blooming Feast, a Royal Roast or Champion's Bento, and a Void-Touched Augment Rune.

**Rotation and audit focus**
- Pre-place Death and Decay, apply Death's Caress, then align Reaper's Mark, Raise Dead, Dancing Rune Weapon and Blood Boil. Keep Bone Shield active, use Marrowrend to maintain it, and spend Runic Power on Death Strike while using Blood Boil/Heart Strike without overcapping resources.

### Stat Priority (Patch 12.1, parser table)
| Build | Priority / guidance |
| :--- | :--- |
| Current guide | Deathbringer: Strength > Critical Strike > Mastery > Versatility > Haste. For San'layn or defensive gearing, item level and character-specific simulations take priority. |

### Enchants and Weapon Augment (Patch 12.1, parser table)
| Slot | Primary recommendation | Alternatives / notes |
| :--- | :--- | :--- |
| head | Empowered Blessing of Speed | See current guide and sim |
| shoulders | Akil'zon's Swiftness | See current guide and sim |
| chest | Mark of the Worldsoul | See current guide and sim |
| legs | Forest Hunter's Armor Kit | See current guide and sim |
| feet | Farstrider's Hunt | See current guide and sim |
| ring | Nature's Fury | See current guide and sim |

### Gems (Patch 12.1, parser table)
| Type | Primary recommendation | Alternatives / notes |
| :--- | :--- | :--- |
| unique gem | Indecipherable Eversong Diamond | See current guide and sim |
| gems | Masterful Garnet | Quick Garnet |

### Consumables (Patch 12.1, parser table)
| Category | Primary recommendation | Alternatives / notes |
| :--- | :--- | :--- |
| unique gem | Indecipherable Eversong Diamond | See current guide and sim |
| gems | Masterful Garnet | Quick Garnet |
| flask | Flask of the Shattered Sun | Flask of the Blood Knights |
| potion | Potion of Recklessness | Draught of Rampant Abandon |
| food | Harandar Celebration | Blooming Feast, Royal Roast, Champion's Bento |
| weapon oil | Thalassian Phoenix Oil | See current guide and sim |

---

### Spell Classifications & Major Cooldowns Breakdown
#### **Core Spells (Group under Core Spells)**
*   **Death Strike**
*   **Heart Strike**
*   **Marrowrend**
*   **Blood Boil**
*   **Death and Decay**
*   **Exterminate**
*   **Death's Caress**
*   **Reaper's Mark**

#### **Major Cooldowns (Group under Major Cooldowns)**
*   **Dancing Rune Weapon**: 40% Parry and mirrors attacks. Primary hybrid CD.
*   **Empower Rune Weapon**: 15% Haste and instant resource generation.

#### **Defensives (Group under Defensives)**
*   **Vampiric Blood**: Increases Max HP and Healing Received by 30%.
*   **Icebound Fortitude**: 30% Damage Reduction.
*   **Anti-Magic Shell**: Absorbs magic damage.
*   **Lichborne**: Leech and Fear/Sleep immunity.
*   **Purgatory**: Prevents death once every 4 minutes.
*   **Anti-Magic Zone**
*   **Rune Tap**
*   **Tombstone**

#### **Misc Spells (Group under Misc)**
*   **Raise Dead**: Minor utility/summon spell. Must be placed under Misc (not under Major Cooldowns or Core Spells).
*   **Melee**

#### **Utility (Group under Utility)**
*   **Mind Freeze**
*   **Death Grip**
*   **Asphyxiate**
*   **Death's Advance**
*   **Raise Allied Undead**
*   **Control Undead**
*   **Chains of Ice**
*   **Abomination Limb**
*   **Blinding Sleet**

### Spec-Specific Audit Instructions

#### **Buff & Uptime Management (Group under Buff & Uptime)**
*   None listed.
Track Resources: [5, 6] // 5 = Runes (ID 105), 6 = Runic Power (ID 106)
Track Buff Drops: [
  {
    "buffId": 195181,
    "name": "boneShieldDrops",
    "displayName": "Bone Shield Drops"
  }
]

#### **Resource Management & Overcapping**
- **Trigger:** Only create this table if `<RESOURCE_WASTE_DATA>` is provided.
- **Table Headers:** | Resource | The Player | The Reference | Overcapping Analysis |
- **Formatting Rule:** For each resource, you MUST show `Generated: [Total] • Wasted: [Wasted] ([Waste%]%)`.
- **Logic:**
    1.  **Runes (Type 5 / ID 105):** Audited via **"Rune Spending Discipline"**.
        - **Metric:** Compare the **Spending Discipline %** (Percentage of rune-spending casts performed while at **4 or fewer** runes) between the Player and the Reference.
        - **Audit Rule:** If the player's Spending Discipline is **> 10% lower** than the reference, mention this as a rotational efficiency failure. Explain that they are waiting too long to spend runes, causing regeneration stalls.
    2.  **Runic Power (Type 6 / ID 106):** Spent on Death Strike for survival. Overcapping RP (> 75-80) is a survival error as it represents missed healing and potential death.

#### **Spec-Specific Efficiency Audit**
- **Trigger:** Only create this table if `boneShieldDrops` is provided in `<RESOURCE_WASTE_DATA>`.
- **Table Headers:** | Metric | The Player | The Reference | Efficiency Analysis |
- **Logic:**
    1.  **Bone Shield Drops:** Check when boneshield stacks drop to 0, this happens when boneshield has a Remove Buff event. Look at the `boneShieldDrops` counts in `<RESOURCE_WASTE_DATA>`. Display the drops count clearly for both (e.g., '1 drop' vs. '0 drops').
        - **If the player has more drops than the reference:** Explain that dropping this buff is a massive failure of their rotation and makes them extremely vulnerable.
        - **If the player matches the reference (equal number of drops):** Say that the fight flow or mechanics probably led to some drops.

#### **Compare Cooldowns**
Compare Cooldowns: [
  {
    "name": "Dancing Rune Weapon",
    "id": 49028,
    "type": "buff",
    "duration": 12
  }
]



## Utility


The following spells are classified as Utility for the deathknight class and should be grouped under the **3.2 Utility** section in performance reports:

- [Mind Freeze](https://www.wowhead.com/spell=47528)
- [Death Grip](https://www.wowhead.com/spell=49576)
- [Asphyxiate](https://www.wowhead.com/spell=108194)
- [Death's Advance](https://www.wowhead.com/spell=96268)
- [Raise Allied Undead](https://www.wowhead.com/spell=61999)
- [Control Undead](https://www.wowhead.com/spell=111673)
- [Chains of Ice](https://www.wowhead.com/spell=45524)
- [Abomination Limb](https://www.wowhead.com/spell=383005)
- [Blinding Sleet](https://www.wowhead.com/spell=108199)


## Defensive


The following spells are classified as Defensive for the deathknight class and should be grouped under the **3.4 Defensive Usage** section in performance reports:

- [Anti-Magic Shell](https://www.wowhead.com/spell=48707)
- [Anti-Magic Zone](https://www.wowhead.com/spell=51052)
- [Icebound Fortitude](https://www.wowhead.com/spell=48792)
- [Lichborne](https://www.wowhead.com/spell=49039)
- [Vampiric Blood](https://www.wowhead.com/spell=55233)
- [Rune Tap](https://www.wowhead.com/spell=194679)
- [Tombstone](https://www.wowhead.com/spell=219809)
