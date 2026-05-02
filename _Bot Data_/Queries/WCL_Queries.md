# WCL GraphQL Queries

This document details all the GraphQL queries the bot uses to pull data from Warcraft Logs. It explains **when** each query is fired and **how** the results are processed.

---

## 1. Discovery & Rankings
These queries are used to find the "Top-Tier Reference Log" that we compare you against.

### **Query: World Data Search**
**Triggered When:** A user starts an audit via `/audit`.
**Purpose:** Fetches the Top 5000 rankings for a specific Boss + Spec + Difficulty. 
**Usage:** We use this to find a player who matches your **Item Level (±3)** and **Hero Talent Spec**. We scan up to 50 pages of rankings to find the highest-performing match that isn't a "cheese" log.

### **Query: Zone Partitions**
**Triggered When:** Initial discovery fails or when expansion patches change.
**Purpose:** Finds the correct "Partition ID" (e.g., Season 1 vs. Season 2).
**Usage:** Ensures we are looking at logs from the **current Midnight patch (12.0.5)** instead of legacy logs from previous seasons.

---

## 2. Report & Fight Metadata
These queries help the bot understand the context of the link you pasted.

### **Query: Report Overview**
**Triggered When:** You first paste a WCL link in Discord.
**Purpose:** Lists all boss kills and wipes in that report.
**Usage:** Powers the **dropdown menu** where you select which boss you want to audit.

### **Query: Fight Metadata**
**Triggered When:** You select a boss from the dropdown.
**Purpose:** Fetches exact `startTime`, `endTime`, `difficulty`, and `size` (10-man/20-man).
**Usage:** Used to calculate the **Fight Duration** and filter reference logs to ensure we match your group size (e.g., comparing a 20-man Mythic kill to another 20-man Mythic kill).

---

## 3. Character Analysis (The Audit)
These are the "Heavy Lifters" that pull the actual combat data for the report.

### **Query: Hero Talent Detection**
**Triggered When:** The bot starts the audit process.
**Purpose:** Scans the log for "Signature Ability" IDs.
**Usage:** Before we can find a reference log, we need to know your **Hero Spec** (e.g., Sunfury vs. Frostfire). We check `castsEvents` and `buffsTable` for specific spell IDs to identify your spec with 100% accuracy.

### **Query: Performance Summary Tables**
**Triggered When:** Building the final report.
**Purpose:** Fetches the `mainTable` (Damage/Healing), `buffsTable`, and `castsTable`.
**Usage:**
- **`mainTable`**: Provides the "Total Damage" and "Damage per Cast" for every spell.
- **`buffsTable`**: Provides the uptime percentages for all your cooldowns and trinket procs.
- **`castsTable`**: Provides the true count of how many times you pressed each button.

### **Query: Detailed Combat Events**
**Triggered When:** Deep analysis is required.
**Purpose:** Fetches a timeline of every single cast and buff refresh.
**Usage:** Used to calculate **Downtime**. We look at the gaps between your `castsEvents` to see if you were standing idle or if you were utilizing every global cooldown efficiently.

---

## 4. Final Rankings & Parses
**Triggered When:** Finalizing the report header.
**Purpose:** Fetches your official percentile (Parse) for that specific boss.
**Usage:** Used to display your **(99% DPS)** or **(42% HPS)** rank in the header of the Audit Report.
