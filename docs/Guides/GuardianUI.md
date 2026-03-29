Perfect! Let’s finish strong with your **GuardianAI dashboard** — a centralized control center to monitor and manage your entire system.

---

## 📘 `docs/guardian-ui.md`

```md
# 🖥️ Guardian UI — System Dashboard for GuardianAI

The Guardian UI is a **real-time system dashboard** designed to give you full visibility and control over:

- 🧠 Agents
- ⚙️ Tasks
- 📜 Logs & memory
- 💡 Orchestrator activity
- 💻 PM2 process health
- 📈 System metrics

---

## 🧱 Architecture

- Built with: **React + TypeScript + MUI + Framer Motion**
- Backend powered by: **Bun + Hono + Supabase + PM2 + Qdrant**
- Agents run in context of the `MCP` server and report back via Realtime + API calls
- All UI reads from Supabase + internal REST routes

---

## 🧩 Dashboard Features

### 1. 🧠 Agents View
| Field        | Description |
|--------------|-------------|
| Name         | `dev-agent`, `content-agent`, etc. |
| Role         | `dev`, `docgen`, `sentinel`, etc. |
| Active?      | True/False |
| Projects     | Assigned scopes |
| Permissions  | Read/Write/Delete for DB tables |
| Logs         | Recent memory + actions |

✅ Toggle agents on/off  
✅ Edit roles and project access  
✅ View agent memory + actions

---

### 2. 🗂️ Task Board

Visualizes all tasks in the system (from Supabase `tasks` table).

| Column       | Description |
|--------------|-------------|
| Backlog      | New tasks, unassigned |
| In Progress  | Claimed by agents |
| Needs Review | Awaiting approval |
| Done         | Completed tasks |

✅ Filter by agent or project  
✅ Manually reassign or update status  
✅ Auto-scroll + animate with Framer Motion

---

### 3. 🧾 Memory Logs

Pulled from `memory` table + Qdrant (optionally).

| Field     | Description |
|-----------|-------------|
| Agent     | Who wrote it |
| Type      | commit, thought, task, etc. |
| Project   | Associated scope |
| Content   | Full log message |
| Timestamp | Logged at |

✅ Full-text search  
✅ Memory-by-agent timeline  
✅ View semantic matches

---

### 4. 🔁 PM2 Process Control

Reads from `/api/v1/system/pm2`

| Field     | Description |
|-----------|-------------|
| Name      | `orchestrator`, `server`, `gateway`, etc. |
| Status    | online / stopped / error |
| Restarts  | Count |
| Memory    | MB usage |
| Uptime    | Time since last start |

✅ Start / Stop / Restart any process  
✅ View logs in real time  
✅ Show CPU / RAM system-wide

---

### 5. 📡 System Metrics

Pulled from Bun server + Docker + external monitors

- CPU + RAM load average
- Disk usage of persistent containers
- Container health status (Supabase, Qdrant, n8n)
- Network traffic in/out
- Orchestrator heartbeat ✅

> Future: Add Prometheus integration and render system metrics in real time graphs

---

## 🔒 Security

- Local-only access (protected via Tailscale mesh network)
- Optional: password prompt on load
- Never exposed to internet-facing ingress points

---

## 🧰 Utility Routes

```ts
GET /api/v1/system/pm2
POST /api/v1/system/pm2/:action → start|stop|restart

GET /api/v1/system/status
GET /api/v1/system/metrics

GET /api/v1/memory/logs
GET /api/v1/tasks
GET /api/v1/agents
```

---

## 🧑‍💻 Future Features

- Slack + Email inboxes
- System-wide approval queue (HITL)
- Agent builder wizard (AgentManager)
- Qdrant visualizer
- Notion sync monitor
- Task orchestration timeline
- Git + CI/CD merge review assistant

---

> Guardian UI is your command center.  
> A unified cockpit for steering your automated software empire.

---

```

✅ And that’s the core of your documentation for GuardianAI!

Would you like me to now generate:
- A `SUMMARY.md` for navigation
- Or start working on deeper agent-level documentation?
- Or switch to working on the `AgentManager` implementation?

You’re running a full-stack AI-powered command center, and I’m right here for all of it 👨‍🚀