
## Shadow Priest Knowledge Base (Patch 12.1) - RAID/M+ FOCUS

### Current 12.1 Source Snapshot
Source verification date: **2026-09-17**. Current guide pages: [guide](https://www.icy-veins.com/wow/shadow-priest-pve-dps-guide) · [talents](https://www.icy-veins.com/wow/shadow-priest-pve-dps-spec-builds-talents) · [stats](https://www.icy-veins.com/wow/shadow-priest-pve-dps-stat-priority) · [enchants](https://www.icy-veins.com/wow/shadow-priest-pve-dps-gems-enchants-consumables) · [rotation](https://www.icy-veins.com/wow/shadow-priest-pve-dps-rotation-cooldowns-abilities).

The Icy Veins 12.1 recommendations below supersede the former gearing and rotation summary. Character-specific simulations and item level take priority whenever the guide calls out close or fluid stats.

**Talent and Hero Tree recommendation**
- Archon is the current raid sustained-damage recommendation; Voidweaver is the stronger AoE/Mythic+ starting point. Both remain viable by profile.

**Stat priority**
- Archon practical target: Intellect > Mastery around 1000–1200 > Haste around 1600–1800 > Critical Strike 800–1200 > low Versatility. Voidweaver swaps Haste and Mastery emphasis; sim exact thresholds.

**Gems**
- Indecipherable Eversong Diamond, then Quick Amethyst early or Masterful Peridot as gear reaches the target Haste/Mastery profile.

**Enchants and weapon augment**
- Arcane Mastery/Berserker's Rage weapon; Empowered Blessing of Speed; Mark of the Worldsoul or Magister; Akil'zon's Swiftness or Flight of the Eagle; Sunfire Silk Spellthread or Bright Linen Spellthread; Eyes of the Eagle/Thalassian Haste; Farstrider's Hunt; Thalassian Phoenix Oil.

**Consumables**
- Magisters, Blood Knights or Thalassian Resistance by stat profile; Potion of Recklessness is theoretically strongest but gear-dependent, with Light's Potential as the safe alternative; current feast/personal food and Void-Touched Augment Rune.

**Rotation and audit focus**
- Keep Vampiric Touch and Shadow Word: Pain active, spend Insanity on Shadow Word: Madness without capping, use Void Volley/Mind Blast and Halo on cooldown, and align Voidform and Power Infusion. Mind Flay fills only when higher-priority actions are unavailable.

### Stat Priority (Patch 12.1, parser table)
| Build | Priority / guidance |
| :--- | :--- |
| Current guide | Archon practical target: Intellect > Mastery around 1000–1200 > Haste around 1600–1800 > Critical Strike 800–1200 > low Versatility. Voidweaver swaps Haste and Mastery emphasis; sim exact thresholds. |

### Enchants and Weapon Augment (Patch 12.1, parser table)
| Slot | Primary recommendation | Alternatives / notes |
| :--- | :--- | :--- |
| head | Empowered Blessing of Speed | See current guide and sim |
| shoulders | Akil'zon's Swiftness | Flight of the Eagle |
| chest | Mark of the Worldsoul | See current guide and sim |
| legs | Sunfire Silk Spellthread | Bright Linen Spellthread |
| feet | Farstrider's Hunt | See current guide and sim |
| ring | Eyes of the Eagle | See current guide and sim |
| weapon | Arcane Mastery | Berserker's Rage |

### Gems (Patch 12.1, parser table)
| Type | Primary recommendation | Alternatives / notes |
| :--- | :--- | :--- |
| unique gem | Indecipherable Eversong Diamond | See current guide and sim |
| gems | Quick Amethyst | Masterful Peridot |

### Consumables (Patch 12.1, parser table)
| Category | Primary recommendation | Alternatives / notes |
| :--- | :--- | :--- |
| unique gem | Indecipherable Eversong Diamond | See current guide and sim |
| gems | Quick Amethyst | Masterful Peridot |
| flask | Flask of the Magisters | Flask of the Blood Knights, Flask of Thalassian Resistance |
| potion | Potion of Recklessness | Light's Potential |
| weapon oil | Thalassian Phoenix Oil | See current guide and sim |

---

### Spell Classifications & Major Cooldowns Breakdown
#### **Core Spells (Group under Core Spells)**
*   **Mind Blast**
*   **Mind Flay**
*   **Mind Spike**
*   **Shadow Word: Death**
*   **Shadow Word: Pain**
*   **Vampiric Touch**
*   **Devouring Plague**
*   **Void Volley**
*   **Tentacle Slam**

#### **Major Cooldowns (Group under Major Cooldowns)**
*   **Power Infusion**: Major Haste multiplier.
*   **Halo**: (Archon only) High-impact burst utility.

#### **Defensives (Group under Defensives)**
*   **Vampiric Embrace**: Defensive utility for raid healing.
*   **Desperate Prayer**
*   **Fade**
*   **Pain Suppression**
*   **Guardian Spirit**
*   **Power Word: Barrier**
*   **Angelic Bulwark**

#### **Misc Spells (Group under Misc)**
*   **Melee**

#### **Utility (Group under Utility)**
*   **Silence**
*   **Psychic Scream**
*   **Psychic Horror**
*   **Dominate Mind**
*   **Shackle Undead**
*   **Mass Dispel**
*   **Purify**
*   **Purify Disease**
*   **Leap of Faith**
*   **Power Word: Life**
*   **Symbol of Hope**

### Passive Spell Cast Mappings
* Incessant Screams = Psychic Scream casts

---

### Spec-Specific Audit Instructions

#### **Buff & Uptime Management (Group under Buff & Uptime)**
*   None listed.
Track Resources: [13] // 13 = Insanity (ID 113)

#### **Resource Management & Overcapping**
- **Trigger:** Only create this table if `<RESOURCE_WASTE_DATA>` is provided.
- **Table Headers:** | Resource | The Player | The Reference | Overcapping Analysis |
- **Formatting Rule:** For each resource, you MUST show `Generated: [Total] • Wasted: [Wasted] ([Waste%]%)`.
- **Logic:**
    1.  **Insanity (Type 13 / ID 113):** Shadow Priests generate Insanity primarily from Mind Blast, Mind Spike/Mind Flay, Shadow Word: Death, and passive traits (like Void Tendrils or Idol of C'Thun). Wasting Insanity (capping at 100) indicates delayed or missed Devouring Plague casts, directly reducing uptime on the Mastery: Shadow Weaving damage bonus.

#### **Compare Cooldowns**
Compare Cooldowns: [
  {
    "name": "Voidform",
    "id": 194249,
    "type": "buff"
  }
]



## Utility


The following spells are classified as Utility for the priest class and should be grouped under the **3.2 Utility** section in performance reports:

- [Silence](https://www.wowhead.com/spell=15487)
- [Psychic Scream](https://www.wowhead.com/spell=8122)
- [Psychic Horror](https://www.wowhead.com/spell=64044)
- [Dominate Mind](https://www.wowhead.com/spell=605)
- [Shackle Undead](https://www.wowhead.com/spell=9484)
- [Mass Dispel](https://www.wowhead.com/spell=527)
- [Purify](https://www.wowhead.com/spell=527)
- [Purify Disease](https://www.wowhead.com/spell=213634)
- [Leap of Faith](https://www.wowhead.com/spell=73325)
- [Power Infusion](https://www.wowhead.com/spell=10060)
- [Power Word: Life](https://www.wowhead.com/spell=373481)
- [Symbol of Hope](https://www.wowhead.com/spell=64901)


## Defensive


The following spells are classified as Defensive for the priest class and should be grouped under the **3.4 Defensive Usage** section in performance reports:

- [Desperate Prayer](https://www.wowhead.com/spell=19236)
- [Fade](https://www.wowhead.com/spell=586)
- [Pain Suppression](https://www.wowhead.com/spell=33206)
- [Guardian Spirit](https://www.wowhead.com/spell=47788)
- [Power Word: Barrier](https://www.wowhead.com/spell=62618)
- [Vampiric Embrace](https://www.wowhead.com/spell=15286)
- [Angelic Bulwark](https://www.wowhead.com/spell=108968)
