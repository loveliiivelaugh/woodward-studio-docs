You got it! Let’s move right into the Supabase schema documentation so you have a source of truth for all system tables, how they’re used, and how they relate to agents and orchestrator flows.

---

## 📘 `docs/supabase-schema.md`

```md
# 🗃️ Supabase Schema — GuardianAI

Supabase is the **primary database and pub/sub backbone** for GuardianAI. It stores tasks, memory, agents, permissions, project data, and all real-time events.

---

## 🧠 Core Tables

### ✅ `tasks`

| Column         | Type        | Description |
|----------------|-------------|-------------|
| `id`           | UUID (PK)   | Unique task ID |
| `title`        | Text        | Short summary of the task |
| `description`  | Text        | Detailed context for agent |
| `agent`        | Text        | Assigned agent (e.g., `dev`, `pm`, `qa`) |
| `status`       | Text        | `backlog` \| `in_progress` \| `done` \| `skipped` |
| `priority`     | Text        | `low` \| `medium` \| `high` |
| `project`      | Text        | Project name (e.g., `OpenFitness`) |
| `notion_page_id`| Text      | Maps to Notion story |
| `created_at`   | Timestamp   | Auto timestamp |

> Realtime subscriptions are enabled on this table  
> Triggers all agent-based execution

---

### ✅ `agents`

| Column   | Type      | Description |
|----------|-----------|-------------|
| `id`     | UUID (PK) | Agent ID |
| `name`   | Text      | Display name |
| `role`   | Text      | Agent purpose (e.g., `dev`, `qa`, `content`) |
| `is_active` | Boolean | Toggle agent activity |
| `created_at` | Timestamp | Registered time |

---

### ✅ `agent_permissions`

Defines what each agent can access.

```sql
CREATE TABLE agent_permissions (
  id SERIAL PRIMARY KEY,
  agent_id UUID REFERENCES agents(id) ON DELETE CASCADE,
  table_name TEXT,
  access_type TEXT CHECK (access_type IN ('read', 'write', 'delete')),
  granted BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);
```

> Use this to protect data from being overwritten by the wrong agent.

---

### ✅ `memory`

| Column       | Type      | Description |
|--------------|-----------|-------------|
| `id`         | UUID (PK) | Memory UUID |
| `project`    | Text      | Associated project |
| `agent`      | Text      | Agent who created this memory |
| `type`       | Text      | `agent-log`, `note`, `system`, `embedding` |
| `content`    | Text      | Full memory contents |
| `created_at` | Timestamp | When the memory was stored |

> Synced to Qdrant automatically and used in `searchQdrant()` queries for agent context.

---

### ✅ `agent_actions`

| Column       | Type      | Description |
|--------------|-----------|-------------|
| `id`         | UUID (PK) | Action ID |
| `agent`      | Text      | Which agent performed the action |
| `task_id`    | UUID      | Associated task |
| `action`     | Text      | What action was performed |
| `status`     | Text      | `success` \| `error` \| `skipped` |
| `output`     | JSONB     | Any return info |
| `created_at` | Timestamp | Time of action |

> Used to track task completions, LLM runs, failures, retries

---

### ✅ `synced_tasks`

Tracks files that have already been synced to Notion.

| Column           | Type        |
|------------------|-------------|
| `id`             | UUID (PK)   |
| `file_path`      | Text        |
| `notion_page_id` | Text        |
| `created_at`     | Timestamp   |

> Prevents duplicate stories from being created for files already processed.

---

## 📂 Project-Level Tables

You can add more as needed:

- `projects` — summary of apps, services, goals
- `components` — visual/technical components tracked by designer/docgen agents
- `plans` — auto-generated roadmaps from spec-agent
- `contacts` — clients, teammates, partners

---

## 🔄 Event Triggers

| Table    | Enabled? | Purpose |
|----------|----------|---------|
| `tasks`  | ✅        | Primary orchestrator trigger |
| `memory` | ✅        | System memory feed |
| `emails` | ✅        | Email agent (via webhook) |
| `slack_messages` | ✅ | Slack agent, HITL approval layer |

---

## 🔐 Row Level Security

- Enabled on all core tables
- Combined with `agent_permissions`
- Optional: implement `current_user.role` logic in Postgres to isolate agents further

---

## 📦 Supabase + Qdrant Sync

Any memory record is also embedded with OpenAI (or local LLM) and stored in Qdrant as:

```json
{
  "id": "<uuid>",
  "vector": [ ... ],
  "payload": {
    "type": "agent-log",
    "agent": "dev-agent",
    "content": "Wrote tests for useSchedule.ts"
  }
}
```

Used for semantic memory search via `searchQdrant()`.

---

## 🛠️ CLI Helpers

Coming soon: CLI tools to scaffold tables, add agents, set permissions:

```bash
pnpm db:seed agent dev-agent
pnpm db:grant dev-agent tasks write
pnpm db:list permissions
```

---

> Supabase is the core database layer, event bus, and task memory system for GuardianAI.
> All agents communicate through it using tasks, memory, permissions, and logs.

---

```

Would you like to move on to writing `slack-integration.md` next? Or want to document `email-integration.md`, `qdrant-memory.md`, or `agents/agent-manager.md` now?