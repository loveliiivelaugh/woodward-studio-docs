```md
# 🧠 GuardianAI System Overview

**GuardianAI** is a modular, agentic software automation framework that manages projects, codebases, communications, and infrastructure — autonomously. It is designed to operate indefinitely with minimal human intervention, handling tasks ranging from GitHub operations to Slack/email automation and software development workflows.

---

## 🔷 Core Goals

- 🧠 Central intelligence system (the Orchestrator) processes all incoming signals
- 🤖 Agents fulfill tasks autonomously across PM, Dev, QA, Docs, and Content roles
- 🔁 Event-driven system: Emails, Slack, GitHub, Supabase, Notion → trigger flows
- 🔐 Secure, zero-trust ingress with Cloudflare + Tailscale mesh VPN
- 🛠️ Local and remote environments supported (Docker, Render, Raspberry Pi, etc.)

---

## 📐 Architecture Diagram

```
                ┌──────────────────────────────┐
                │        External Sources       │
                │  (Gmail, Slack, GitHub, etc.) │
                └────────────┬─────────────────┘
                             │
                    🔐 Cloudflare Gateway
                             │
                    🔐 Internal Gateway (Tailscale)
                             │
                    🌐 GuardianAI Webserver (MCP)
                             │
             ┌───────────────┼────────────────┐
             │               │                │
         🧠 Orchestrator   📬 Email Agent   💬 Slack Agent
             │
      ┌──────┼──────────┬──────────┐
      │      │          │          │
  📘 PM   💻 Dev      🧪 QA     🧾 Docgen
 Agents  Agents     Agents    Agents
      │      │          │          │
   🧠 Memory (Qdrant)    🔁 Task Flow (Supabase)    
      │
   📚 Content System → Blog / Book / Social

```

---

## 🧩 Components

### 🧠 Orchestrator
- Event-driven loop that reacts to tasks, messages, emails, and GitHub events
- Assigns work to agents based on task metadata and system memory
- Can reason, dispatch actions, and self-generate work

### 🤖 Agents
Each agent is modular and fulfills a specific function:

| Agent        | Role                                  |
|--------------|----------------------------------------|
| `pm-agent`   | Analyzes goals, creates subtasks, assigns work |
| `dev-agent`  | Writes code, tests, scaffolds repos, commits to Git |
| `qa-agent`   | Reviews, tests, verifies outputs from devs |
| `docgen`     | Generates docs, READMEs, summaries, typedocs |
| `content-agent` | Creates blogs, books, social posts from real work |
| `sentinel-agent` | Monitors system health, memory integrity, timeouts |

### 💾 Memory System
- Qdrant vector DB for embeddings
- Memory logs, agent logs, and document embeddings
- Searchable via LLM

### 📨 Inbound Triggers
| Source    | Integration           | Notes                         |
|-----------|------------------------|-------------------------------|
| Gmail     | Google Apps Script → Gateway → MCP | Real-time email ingestion |
| Slack     | Events API → Gateway   | Bi-directional comms with agents |
| GitHub    | Webhook or agent SDK   | PRs, branch tracking, task creation |
| Supabase  | Realtime subscriptions | React to new tasks, memory logs |
| Notion    | Official API           | Story/task syncing |

### 📡 Gateways

| Name            | Role                                        |
|------------------|---------------------------------------------|
| `gateway-external` | Deployed on Render, secured with Cloudflare Zero Trust |
| `gateway-internal` | Local-only, accessed via Tailscale & Tunnel |
| Internal API     | Hono-powered, typed endpoints for agents and automations |

---

## 🔐 Security Layers

- **Cloudflare Tunnel** → Expose internal services securely
- **Cloudflare Access** → Zero Trust tokens required for ingress
- **Tailscale** → Peer-to-peer mesh network (local access only)
- **API Keys / Header Forwarding** → Controlled access between layers
- **Agent Permissions Table** → RLS for what agents can access

---

## 💡 Future Roadmap (Coming Soon)

- 🧪 Automated test coverage agent
- 📝 Autowriter: book/content/blog pipelines
- 📈 System observability dashboard (status, logs, memory)
- 🔁 Self-healing, retry logic for agents
- 📤 Auto email/scheduling/reply workflows

---

## 📁 Codebase Directory Hints

| Directory                     | Purpose                     |
|------------------------------|-----------------------------|
| `/webservers`                | API servers (REST, GraphQL, Gateway) |
| `/agents`                    | Modular LLM/Dev agents      |
| `/orchestrator`              | Central task/event manager  |
| `/apps/framework-docs`       | This doc site               |
| `/ai-projects/`              | Every scaffolded app        |
| `/scripts/`                  | Helper utilities, planners, memory tools |
| `/config/`                   | Shared settings + env       |

---

> 📘 *GuardianAI isn’t just a platform. It’s an intelligent system that helps you build, maintain, and scale everything you do — on your behalf.*
