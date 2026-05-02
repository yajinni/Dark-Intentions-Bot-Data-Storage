# WCL GraphQL Queries

This document contains the **exact, verbatim GraphQL queries** used by the Dark Intentions Bot to interact with the Warcraft Logs API v2.

---

## 1. Discovery & Rankings (`wcl-discovery.js`)

### **Query: Character Rankings Search**
**Triggered When:** A user starts an audit via `/audit`.
**Purpose:** Fetches character rankings for a specific Boss + Spec + Difficulty. 
**Usage:** We use this to find a player who matches your **Item Level (±3)** and **Hero Talent Spec**. The search depth is controlled by the `MAX_RANKINGS_DEPTH` variable in the bot (currently scanning up to 50 pages).
```graphql
query($encounterID: Int, $difficulty: Int, $className: String, $specName: String, $metric: CharacterRankingMetricType, $filter: String, $page: Int, $partition: Int) {
    worldData {
        encounter(id: $encounterID) {
            characterRankings(difficulty: $difficulty, className: $className, specName: $specName, metric: $metric, filter: $filter, page: $page, partition: $partition)
        }
    }
}
```

### **Candidate Hero Talent Verification**
Used to verify that a potential reference log uses the same Hero Talent as the player.
```graphql
query($code: String, $fightId: [Int]) {
    reportData {
        report(code: $code) {
            summaryTable: table(fightIDs: $fightId, dataType: Summary)
        }
    }
}
```

### **Historical Partition Lookup**
Used as a fallback if the current season's partition has no data.
```graphql
query($encounterID: Int) {
    worldData {
        encounter(id: $encounterID) {
            zone {
                partitions {
                    id
                    default
                }
            }
        }
    }
}
```

---

## 2. Report Interaction & Analysis (`bot.js`)

### **Report Overview (Kill List)**
Fired when a link is pasted to list available boss encounters.
```graphql
query($code: String) {
    reportData {
        report(code: $code) {
            title
            fights {
                id
                name
                difficulty
                kill
                bossPercentage
            }
        }
    }
}
```

### **Hero Talent Detection (Initial Scan)**
Scans the player's log for signature ability usage.
```graphql
query($code: String, $fightId: [Int], $sourceId: Int, $dataType: TableDataType) {
    reportData { report(code: $code) {
        table(fightIDs: $fightId, dataType: $dataType, sourceID: $sourceId)
        buffsTable: table(fightIDs: $fightId, dataType: Buffs, sourceID: $sourceId)
        masterData { actors { id name petOwner } }
        heroCasts: events(fightIDs: $fightId, dataType: Casts, filterExpression: "ability.id in ([SIGNATURE_IDS])") { data }
        heroBuffs: events(fightIDs: $fightId, dataType: Buffs, filterExpression: "ability.id in ([SIGNATURE_IDS])") { data }
        heroDamage: events(fightIDs: $fightId, dataType: DamageDone, filterExpression: "ability.id in ([SIGNATURE_IDS])") { data }
        heroHealing: events(fightIDs: $fightId, dataType: Healing, filterExpression: "ability.id in ([SIGNATURE_IDS])") { data }
    }}
}
```

### **Full Performance Data (The Audit Table)**
Fetches the summary tables for damage/healing, buffs, and gear.
```graphql
query($code: String, $fightId: [Int], $sourceId: Int, $dataType: TableDataType) {
    reportData { report(code: $code) {
        startTime
        fights(fightIDs: $fightId) { startTime endTime encounterID name difficulty size }
        mainTable: table(fightIDs: $fightId, dataType: $dataType, sourceID: $sourceId)
        summaryTable: table(fightIDs: $fightId, dataType: Summary)
        buffsTable: table(fightIDs: $fightId, dataType: Buffs, sourceID: $sourceId)
        castsTable: table(fightIDs: $fightId, dataType: Casts, sourceID: $sourceId)
        castsEvents: events(fightIDs: $fightId, sourceID: $sourceId, dataType: Casts, limit: 10000) { data }
        buffsEvents: events(fightIDs: $fightId, sourceID: $sourceId, dataType: Buffs, limit: 10000) { data }
        blEvents: events(fightIDs: $fightId, targetID: $sourceId, dataType: Buffs, filterExpression: "ability.id in (2825, 32182, 80353, 390386, 264667)") { data }
    }}
}
```

### **Final Character Ranking (Parse %)**
Fetches the official percentile rank for the player.
```graphql
query($code: String, $fightIDs: [Int]) {
    reportData {
        report(code: $code) {
            rankings(fightIDs: $fightIDs)
        }
    }
}
```
