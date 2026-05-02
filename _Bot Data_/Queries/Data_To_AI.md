# Data Handoff to AI

This document explains exactly which data is passed to the AI during the audit process and **why** each piece is critical for a high-precision report.

---

## 1. Performance Tables (The "Rotation")
**What it is:** A JSON array of every spell cast during the fight.
**Data Fields:** `Spell Name`, `Total Damage/Healing`, `Casts`, `Hits/Ticks`, `Crit %`.
**Why it's given:** This is the core of the audit. The AI compares your cast counts and damage-per-cast against the reference player to see if you are missing GCDs or if your gear/scaling is causing lower output per button press.

## 2. Buff Tables (The "Cooldowns")
**What it is:** A JSON array of every buff active during the fight.
**Data Fields:** `Buff Name`, `Uptime %`, `Casts` (Refreshes).
**Why it's given:** Used to audit cooldown management. For example, if the reference player has 30% uptime on a major offensive cooldown but you only have 15%, the AI can identify that you aren't using your "big buttons" on cooldown.

## 3. Gear Audit Data
**What it is:** A structured breakdown of the player's equipment.
**Data Fields:** 
- `Slots`: Item IDs, Enchant IDs, and Gem IDs for every auditable slot.
- `Consumables`: Flasks, Food, and Potions detected from the log events.
- `Sockets`: Total socket count vs. empty socket count.
**Why it's given:** The AI uses the Spec Knowledge Base (see below) to check if your enchants and gems are "Best in Slot." It uses the item IDs to generate clickable Wowhead links in your final report.

## 4. Spec Knowledge Base
**What it is:** The full Markdown file from the `Specs Knowledge` repository (scraped from Icy Veins).
**Why it's given:** This is the "Rulebook." It tells the AI exactly what your rotation should look like, which stats you should prioritize, and which gems/enchants you should be using. Without this, the AI would be "guessing" based on its training data instead of current patch notes.

## 5. Encounter Metadata
**What it is:** Context about the fight itself.
**Data Fields:** `Boss Name`, `Difficulty`, `Duration`, `Group Size`, `Healer Count`, `Parse %`.
**Why it's given:** This prevents unfair comparisons. For example, if your fight was 6 minutes long but the reference player's fight was only 3 minutes (a "speed kill"), your HPS/DPS will naturally look different. The metadata allows the AI to provide a "Selection Rationale" and explain any duration-based discrepancies.

## 6. Combat Events (Timeline)
**What it is:** A sorted list of `casts` and `buff` events with millisecond timestamps.
**Why it's given:** This allows the AI to analyze **Downtime**. By looking at the gaps between your casts (accounting for Haste and GCD), the AI can calculate exactly how many seconds you spent "doing nothing" compared to the reference player.

---

### **Zero Tolerance for Guessing**
If a piece of data (like an Enchant ID) is missing from the JSON, the bot is strictly forbidden from using search links. It is instructed to show **"Data Not Available"** instead. This makes it immediately obvious when a piece of data is missing from the log or the internal mappings.
