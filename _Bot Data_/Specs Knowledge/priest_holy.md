# Holy Priest Knowledge Base (Midnight 12.0.5) - DEEP RAID FOCUS

## 1. Midnight Apex Talent: Benediction
This is a critical new progression system for 12.0.5. The bot should audit for usage of the "Benediction" proc.
*   **Trigger:** Regular casting of *Prayer of Mending*.
*   **Effect:** Replaces your next *Flash Heal* with **Benediction** (Buffed healing + triggers Cosmic Ripple).
*   **Raid Optimization:** During *Apotheosis*, Flash Heal is automatically upgraded to Benediction. Prioritize Benediction casts over standard Flash Heals whenever the proc is active.

## 2. Hero Spec Deep Dive (12.0.5 Updates)
### **Archon** (The Halo Specialist)
*   **Spiritwell (CRITICAL):** Surge of Light procs can now be consumed by **Prayer of Healing**. This is the primary way to maintain raid health during sustained rot damage without OOMing (Out of Mana).
*   **Halo Synergy:** Halo should be cast on cooldown to trigger Archon buffs for Flash Heal and Prayer of Mending.

### **Oracle** (The Prayer of Mending Specialist)
*   **Guiding Light:** Grants an extra charge of *Prayer of Mending*. Audits should look for high uptime/charges used.
*   **Prompt Prognosis:** Adds a direct heal to the initial target of *Prayer of Mending*. This fixes Holy's traditional weakness in spot-healing.
*   **Piety:** Increases the value of *Mastery: Echo of Light*. Expect higher overhealing with this spec; focus on the total effective healing + Echo buffer.

## 3. Rotational Nuances (Raid)
### **Ultimate Serenity (Talent Choice)**
*   **Mechanism:** Replaces *Holy Word: Sanctify*.
*   **Audit Logic:** If talented, the bot should no longer expect Sanctify casts. Instead, look for *Holy Word: Serenity* usage as your primary group-heal button, as it now splashes healing to nearby allies.

### **Mana Management (12.0.5 Tuning)**
*   **Flash Heal vs. Heal:** With the 12.0.5 8% healing buff across the board, *Flash Heal* is the dominant filler. Only use *Heal* during extreme downtime.
*   **Divine Image:** Ensure *Divine Image* (Naaru) is active before using major cooldowns like *Divine Hymn* or *Apotheosis* to maximize the mirrored healing.

## 4. Raid-Specific Logic
*   **Divine Hymn:** In 12.0.5, each pulse of Hymn triggers **Cosmic Ripple** if the Apex talent is fully unlocked. This makes Hymn a massive burst-cooldown rather than just a channel.
*   **Symbol of Hope / Power Word: Life:** (REMOVED in 12.0.5). If the bot sees these in old logs, it must flag them as legacy/invalid data.
