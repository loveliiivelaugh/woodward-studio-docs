Awesome! Let’s keep going with the **Realtime Events & Event Triggers** doc — this connects everything together and shows how GuardianAI becomes reactive and alive. 🔁

---

## 📘 `docs/events.md`

```md
# 🔁 Realtime Events in GuardianAI

GuardianAI is built around an **event-driven architecture** that reacts to new inputs in real-time. These events can come from Supabase, email, Slack, GitHub, Notion, or even local system logs — triggering the appropriate agent or system response.

---

## 🧠 Event Sources

| Source         | Triggered On                        | Consumed By           |
|----------------|-------------------------------------|------------------------|
| Supabase       | New task inserted into `tasks` table| Orchestrator, Agents  |
| Email          | Email received via Apps Script      | `email-agent`         |
| Slack          | `@mention` or DM to Slack bot       | `slack-agent`, HITL   |
| GitHub         | PR opened, issue created            | `dev-agent`, `qa-agent` |
| Notion         | New story in "Backlog"              | Orchestrator (syncs)  |
| Filesystem     | Changes from LLM planner or Git     | `docgen`, `qa`, etc.  |
| Scheduled      | Loop interval (e.g., 1min, hourly)  | `planner`, `sentinel` |

---

## 📡 Supabase Realtime Subscriptions

### ✅ `tasks` Table (Main Trigger)

Located in:

```ts
/src/orchestrator/supabase.ts
```

```ts
supabase
  .channel("agent-events")
  .on("postgres_changes", {
    event: "INSERT",
    schema: "public",
    table: "tasks"
  }, (payload) => {
    console.log("📡 New task inserted:", payload.new)
    runOrchestratorEvent(payload.new)
  })
  .subscribe()
```

---

## 🔁 Example Event Flow

```text
1. New task row inserted into Supabase (`status = backlog`)
   ↓
2. Orchestrator receives event → checks if Notion story exists
   ↓
3. If not → creates Notion story and updates `notion_page_id`
   ↓
4. If agent assigned (e.g., "dev") → triggers `dev-agent`
   ↓
5. Agent executes task → updates task → logs to memory
   ↓
6. Completion triggers next task or Notion update
```

---

## 🔁 Other Event Types

You can also subscribe to events on:

- `memory` → log new agent thoughts/actions
- `agent_actions` → audit agent behavior
- `projects` → auto-trigger task generation when new project added
- `emails` → trigger processing on new email

```ts
supabase.channel("email-events")
  .on("INSERT", { table: "emails" }, payload => {
    runEmailAgent(payload.new)
  })
```

---

## 💬 Slack Events

Handled by:

```ts
POST /api/v1/slack/events
```

Events like:

- `app_mention`
- `message.im`
- `reaction_added`

Trigger messages into the system via secure webhook + gateway.

---

## 📥 Email Events

Via Google Apps Script:

- Every email received → `doPost()` webhook → GuardianAI
- GuardianAI runs `email-agent` with LLM + routing
- Optionally tagged, stored, or triggers an action

---

## 🧪 Future Event Sources

| Source              | Purpose |
|---------------------|---------|
| Google Calendar     | Schedule-based agents |
| YouTube Playlist    | Learning history + tagging |
| HomeAssistant       | Real-world sensors (power, presence, location) |
| OCR / Receipts      | Financial awareness |
| Voice Assistant     | (via OpenAI Whisper + webhook) |
| Raspberry Pi Health | Temp, memory, fan status, uptime |

---

## 🔐 Security

- Supabase Realtime enabled only on `tasks`, `memory`, and controlled tables
- All inbound requests pass through **external Gateway** → **Cloudflared Tunnel** → **internal Gateway**
- Optional: enforce origin headers, Tailscale IP, or Cloudflare Zero Trust tokens
- Event filters can be added with project or user-level rules

---

> The event system is what makes GuardianAI feel *alive*.  
> Instead of polling or cron jobs, it reacts in real-time to the world around it.

---

```

Would you like to keep going with **`supabase-schema.md`**, or start writing **`slack-integration.md`** or **`email-integration.md`** next?