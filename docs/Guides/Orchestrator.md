Perfect — let’s keep the docs rolling 💼

Next up is your **Orchestrator** — the heart of GuardianAI.

---

## 📘 `docs/orchestrator.md`

```md
# 🧠 GuardianAI Orchestrator

The **Orchestrator** is the central decision-maker and controller of GuardianAI. It runs continuously (or on a schedule) and reacts to **events**, **tasks**, and **inbound signals**, assigning work to agents, triggering automations, and ensuring system health.

---

## 🔁 Orchestrator Responsibilities

| Function                           | Description |
|------------------------------------|-------------|
| 🧠 Event Handling                  | Subscribes to Supabase `tasks` table via realtime |
| 🎯 Agent Dispatching              | Routes work to `dev`, `qa`, `docgen`, etc |
| 🧩 Planning & Reasoning           | Uses file scan + Qdrant + LLM to plan what’s next |
| 📝 Task & Story Creation          | Automatically writes Notion stories and Supabase tasks |
| 🔄 Task Status Updates            | Marks tasks as complete, in progress, or failed |
| 🧠 Memory Logging                 | Writes logs to Supabase `memory` table |
| 🧬 Modular Logic Flow             | Uses toggles and conditions to control which flows are active |
| 🔁 Looping Mode                   | Runs continuously or as a scheduled cron job |
| 🔐 Access Routing                 | Interfaces with gateways to maintain Zero Trust ingress |
| 🧵 Slack / Email Integration      | Reacts to and sends out messages |
| 💥 Error Handling + Fallbacks     | Logs issues, retries, or escalates to Sentinel |

---

## 🧩 Entry Point

```ts
// webservers/server/src/orchestrator/index.ts

startOrchestrator()
```

This function will:

1. Set up Supabase `tasks` realtime listener
2. Optionally loop every `n` seconds (configurable)
3. Fetch planned actions (via `runLLMPlanner()`)
4. Dispatch actions to agents or tools
5. Track/log everything in Supabase + Qdrant

---

## ⚙️ Event Handler (onTaskInsert)

When a new row is added to the `tasks` table:

```ts
if (event.status === "backlog" && !event.notion_page_id) {
  createNotionPage(event) → updateTask(event.id, { notion_page_id })
}

if (event.status === 'backlog' && event.agent === 'dev') {
  assignToAgent('dev', event)
}
```

---

## 🧠 Planning Engine

The Orchestrator uses:

```ts
runLLMPlanner()
```

Which checks:

- Qdrant Memory Embeddings
- Files via `globby` scan
- Notion stories
- Git branches + diffs
- Slack + Email streams
- Supabase table state

…and then returns a list of **actions** like:

```ts
[
  {
    name: "Generate tests for openfitness/hooks/useSchedule.ts",
    endpoint: "/tasks/create",
    payload: { agent: 'dev', project: 'OpenFitness' }
  }
]
```

These are routed into action-handlers, with optional HITL steps.

---

## 🔧 Toggles & Flow Switches

The Orchestrator supports feature switches via:

```ts
const toggles = {
  enableNotionSync: true,
  enableGitStatusChecks: false,
  enableSlackComms: true,
  enablePlannerLoop: true
}
```

These make testing, scaling, or fine-tuning possible one feature at a time.

---

## 🧠 Memory System

All completed actions, plans, and agent outputs are written to:

```ts
supabase.from("memory").insert({
  type: "agent-log",
  content: "Completed tests for useSchedule.ts",
  project: "OpenFitness",
  agent: "dev-agent"
})
```

These are embedded and stored in Qdrant for future reasoning.

---

## 🔐 Secure Execution

- Access control via `agent_permissions`
- Orchestrator is not exposed to internet directly
- Tunnels requests through internal Gateway
- Tasks can only be created through secure flows (Slack, Email, Notion, API)

---

## 💥 Recovery & Health Checks

Coming soon: Sentinel Agent will monitor the Orchestrator:

- If stuck: restart loop
- If missed a task: reschedule
- If agents are silent: re-ping or reassign

---

> The Orchestrator is your 24/7 project manager, dispatcher, and planner.  
> It never sleeps, and it always logs everything.

---

```

Would you like to move on to the **Realtime Events** doc, **Supabase schema mapping**, or Slack/Email next?