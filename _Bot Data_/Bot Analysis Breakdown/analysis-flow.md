# 🔄 Dark Intentions Bot: Analysis Workflow

This document provides a deep technical breakdown of the bot's end-to-end analysis pipeline. It details every step from the moment a URL is pasted to the final AI-generated report.

---

## 🛑 Phase 1: Input Detection & Validation
**File:** `url-checker.js`

When a message is sent in Discord, the bot first determines if it's an actionable request.

1.  **URL Extraction**: Scans for `warcraftlogs.com/reports/` or `github.com/.../Compare%20Analysis/`.
2.  **Validation**:
    *   **WCL Links**: Extracts the 16-character `reportCode`.
    *   **GitHub Links**: For "Re-run" requests, it converts the link to a `raw` URL, downloads the previous report, and parses the metadata (Player Name, Report Code, Fight ID) to exactly replicate the previous comparison.

---

## 🗺️ Phase 2: Raid Discovery (The Menu System)
**File:** `create-drop-downs.js`

Once a valid report is found, the bot needs to know which encounter and player to audit.

1.  **Encounter Selection**:
    *   **Query**: Fetches all fights in the report.
    *   **Logic**: Filters for `kill: true` (ignores wipes). Converts WCL difficulty IDs (3, 4, 5) into "Normal", "Heroic", "Mythic".
    *   **UI**: Displays the first 25 kills in a Discord Select Menu.
2.  **Player Selection**:
    *   **Query**: Fetches the **Summary Table** for the chosen fight.
    *   **Logic**:
        *   **Talent Scanning**: Pulls the `talentTree` for every player in the raid.
        *   **Hero Spec Detection**: Uses `hero-talent-ids.js` to scan for specific **Keystone IDs**. This allows the bot to identify if a Mage is a *Sunfury* or *Frostfire* without scanning a single combat event.
    *   **UI**: Splits players into alphabetical rows (A-M, N-Z) to stay within Discord's 25-item limit.

---

## 🎯 Phase 3: Reference Log Discovery (The Search)
**File:** `wcl-rank-search.js`

After the user selects a character (the "Subject"), the bot must find a "Gold Standard" player to compare them against.

1.  **Partition Management**: The bot determines the current game patch (e.g., 12.0.5) to ensure it's searching the correct leaderboard.
2.  **The Rankings Query**: Searches the top 5,000 global parses for that specific Class, Spec, and **Hero Spec ID**.
3.  **Heuristic Filtering**:
    *   **Item Level**: Filters candidates within **±3 ilvl** of the subject. This ensures we aren't comparing a fresh alt to a fully Mythic-geared main.
    *   **Fight Duration**: Filters for logs within **±15s** (DPS/Tank) or **±20s** (Healers). This is critical because cooldown availability changes drastically based on fight length.
4.  **The Winner**: The highest-parsing player who survives all filters is selected as the **Reference Player**.

---

## 📊 Phase 4: Data Gathering & Math Engine
**Files:** `wcl-data-gathering.js` & `audit-calculations.js`

Now the bot gathers the deep combat data for both the Subject and the Reference.

1.  **Data Fetching**:
    *   **Resource Events**: Fetches raw events for energy, rage, runes, etc., including `includeResources: true` to see exact values at the time of every cast.
    *   **Combat Tables**: Pulls Damage Done, Healing, Casts, and Buff uptimes.
2.  **Calculations**:
    *   **Downtime & GCD**: Merges cast windows to find "dead time" where the player wasn't pressing buttons.
    *   **Resource Waste**: Calculates how much energy/rage was "capped" or wasted.
    *   **CPM Delta**: Compares the Casts Per Minute (CPM) of every ability to see if the player is missing button presses compared to the pro.
    *   **Target Priority**: Analyzes if the player was hitting the correct priority targets.

---

## 🤖 Phase 5: AI Logic & Report Generation
**Files:** `audit-formatting.js` & `ai-service.js`

Raw data is useless without context. The bot prepares the data for the AI.

1.  **Cleaning**: `audit-formatting.js` strips away thousands of lines of raw JSON, leaving only the "Essential Metrics" (CPM, Waste %, ilvl, Talents).
2.  **Knowledge Base Injection**: The bot pulls the specific `.md` guide for that class/spec from the `Specs Knowledge` folder.
3.  **AI Hand-off**: The cleaned metrics + the expert guide + the specific log comparisons are sent to the **Gemini 1.5 Pro** API.
4.  **Reporting**: The AI analyzes the deltas and writes a natural-language report, highlighting exactly *why* the player is performing lower and *how* to fix it.

---

## 💾 Phase 6: Persistence
**File:** `github-service.js`

To avoid losing these insights, the bot saves everything.

1.  **Upload**: The final report is uploaded to the GitHub `Compare Analysis` repository.
2.  **Discord Link**: The bot sends a beautiful embed back to Discord with a direct link to the full report.

---

### **Why is it done this way?**
*   **Modularization**: By splitting "Search" from "Data Gathering," we can update our math without breaking the WCL rankings logic.
*   **Keystone Detection**: Identifying Hero Specs via talents instead of events saves thousands of API "complexity points" and is 100% accurate.
*   **Heuristic Filtering**: Comparing logs of similar length and gear is the only way to get a "fair" audit that the player can actually learn from.
