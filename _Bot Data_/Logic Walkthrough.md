# Dark Intentions Bot: Logic Walkthrough

This document provides a step-by-step technical explanation of the bot's analysis pipeline, from the moment a user provides a Warcraft Logs URL to the final AI-generated report.

---

## Phase 1: Input & Initial Discovery
**Trigger:** User sends a Warcraft Logs URL in a DM or active channel.

1.  **URL Parsing**: The bot extracts the **Report Code** from the URL using Regex.
2.  **Metadata Fetch**: The bot queries the WCL API (`reportData`) to get the report's `startTime`, `title`, and a list of all `fights`.
3.  **Fight Selection**: The bot presents a Discord dropdown menu containing all boss encounters in that log.

---

## Phase 2: Character & Spec Identification
**Trigger:** User selects a specific fight from the menu.

1.  **Composition Fetch**: The bot fetches the `composition` (list of players) for that specific fight ID.
2.  **Character Selection**: The bot presents a second dropdown menu for the user to select the character they want to analyze.
3.  **Basic Metadata**: Once selected, the bot captures the character's `name`, `id`, `class`, and `spec`.

---

## Phase 3: Deep Data Collection (The Audit)
**Trigger:** User selects a character.

1.  **Authoritative Detection Query**: The bot runs a specialized GraphQL query (`SummaryTable`) to fetch:
    *   **Talent Tree**: The raw ID array of all selected talents.
    *   **Combatant Info**: Gear, stats, and primary attributes.
    *   **Performance Table**: All spells cast, their damage/healing, and hit counts.
2.  **Hero Spec Identification**:
    *   The bot uses the `detectHeroTree` engine.
    *   It looks for specific **Keystone Talent IDs** in the character's Talent Tree (e.g., ID `117515` for San'layn).
    *   **Rule**: If the Keystone ID is missing, it falls back to "Spell Signatures" (detecting if a unique hero ability was cast).
3.  **Mappings Load**: The bot fetches the latest `potions.ts`, `enchants.ts`, `food.ts`, and `flasks.ts` from the GitHub Data Storage repository to use as the source of truth for the audit.

---

## Phase 4: Discovery (Finding the Reference)
The bot must find a "Gold Standard" log to compare the user against.

1.  **Rankings Search**: The bot queries the WCL `leaderboard` for the same Boss and Difficulty.
2.  **Filtering Logic**:
    *   **Strict Spec Match**: Must be the same Class and Specialization.
    *   **Hero Spec Match**: Filters the leaderboard for players using the same Hero Spec (e.g., only compare Deathbringer DKs to Deathbringer DKs).
    *   **iLvl Tolerance**: Attempts to find a player within **+/- 5 iLvl** of the user. If none are found, it gradually "relaxes" the filter.
3.  **Selection**: The bot picks the highest-parsing log that meets all criteria to serve as the **Reference Data**.

---

## Phase 5: Data Normalization & Math
Before the AI sees anything, the bot performs strict calculations:

1.  **Gear Audit (`formatGearData`)**:
    *   **Enchants**: Uses IDs from WCL to look up names in `enchants.ts`. 
    *   **Rule**: If an ID is missing from our mapping, it's labeled "Unknown" to prevent AI guessing.
    *   **Weapon Oils**: Checks both Character Auras and Gear Slots for keywords like "oil" or "stone". 
    *   **Exclusion**: Explicitly ignores talent-procs like "Boiling Point" that WCL sometimes mislabels as temporary enchants.
2.  **Stats Flattening**: Normalizes ratings (Haste, Crit, etc.) into percentages using Midnight-specific coefficients (e.g., Haste: 44, Crit: 46).
3.  **Downtime & GCD Calculation**:
    *   Fetches the class-specific spell metadata (GCD values, channel durations).
    *   Analyzes the raw event stream (`cast`, `begincast`, `applybuff`).
    *   Merges overlapping casting windows to find the **True Active Time**.
    *   **Formula**: `Total Fight Duration - Merged Active Windows = True Downtime`.

---

## Phase 6: The AI Hand-off
The bot packages two massive JSON objects (`userData` and `referenceData`) and sends them to the Gemini AI.

### **What Data is Handed Off?**
*   **Audit Status**: Strict strings like `✅ Algari Mana Oil` or `❌ Missing`.
*   **Performance Table**: A cleaned list of the Top 100 spells with their %, avg hit, and crit rate.
*   **Stats**: Raw ratings and normalized percentages for both players.
*   **Downtime Data**: Active time, GCDs cast, and downtime percentage.
*   **Mappings**: Every internal ID-to-Name mapping (Gems, Enchants, etc.) so the AI can generate accurate Wowhead links.

### **The AI Prompt (Instructions)**
The AI is given a massive instruction set (The Prompt):
1.  **Strict Determinism**: "DO NOT guess. Use only the provided 'Missing' or 'Found' strings for consumables."
2.  **The Goal**: Compare the User to the Reference. Identify why the User is doing less damage/healing.
3.  **Structure**: The AI must output specific sections: **Consumables Audit**, **Gear Audit**, **Rotation Comparison**, and **Final Recommendations**.
4.  **Wowhead Rule**: Every item or spell mentioned MUST be formatted as a clickable link using the IDs provided in the mappings.

---

## Phase 7: Final Delivery
1.  **Report Generation**: Gemini processes the data and returns a structured Markdown report.
2.  **Repository Upload**: The bot uploads the report to `Compare Analysis/[Character Name]/[Report_Date].md`.
3.  **Discord Response**: The bot posts the final link and a summary of the analysis to the user.

---
*Created by Antigravity AI for Dark Intentions.*