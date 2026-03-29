---
sidebar_position: 2
---

# 🚀 Getting Started with Guardian AGI System

Guardian is a distributed, multi-service AGI infrastructure designed for **autonomous, always-on orchestration** of agents, workflows, and advanced reasoning.  
This guide provides an **overview of every major component** in the system, including how services interact, their purpose, and where to find more information. The system is comprised of a curated collection of open source software combined with custom code to create a self-sustaining, autonomous AGI system.

---

## 🐳 Containerization and Base Runtime

### [Docker](../services/docker.md)
Used to containerize and deploy most Guardian services.  
- Runs Supabase, Neo4j, Qdrant, n8n, Ollama, and other infrastructure.
- Enables reproducible, scalable deployments.

Docs 👉 [docs.docker.com](https://docs.docker.com/)

---

## 💬 LLM Interfaces

### [OpenWebUI](../services/openwebui.md)
- Browser-based chat UI for interacting with Guardian’s LLMs.
- Allows manual prompting and debugging of agents.

Docs 👉 [docs.openwebui.com](https://docs.openwebui.com/)

### [Goose CLI](../services/goose-cli.md)
- Command-line automation and migrations tool.
- Used by Guardian agents for rapid infrastructure adjustments.
- 40+ MCP Servers pre-configured.

Docs 👉 [block.github.io/goose/docs](https://block.github.io/goose/docs/category/guides)

### [LightRAG](../services/lightrag.md)
- Lightweight retrieval-augmented generation service.
- Powers fast graph-based context retrieval.

Docs 👉 [github.com/HKUDS/LightRAG](https://github.com/HKUDS/LightRAG)

### [OpenDia](../services/opendia.md)
- The open alternative to Dia / Perplexity Comet
- Connect your browser to AI models. No browser switching needed—works seamlessly with Chrome, Firefox, and any Chromium browser. Private, local-first & MCP focused.
- (Browser Control MCP) OpenDia gives AI models 18 powerful browser tools

Docs 👉 [github.com/aaronjmars/opendia](https://github.com/aaronjmars/opendia)

---

## 🖥️ Development Environment

### [Code-Server](../services/code-server.md) + [Continue](../services/continue.md)
- Cloud-hosted VS Code IDE with LLM coding assistance.
- Used by DevOps Agent and for manual intervention.

### [Guardian CLI](../services/guardian-cli.md)
- Local command-line tool for managing Guardian services.
- Scaffolds new agents, apps, and orchestrator scripts.

---

## 🔄 Automation and Orchestration

### [n8n](../services/n8n.md)
- Workflow automation server.
- Handles third-party integrations like Upwork, blog posting, Slack workflows.

### [Guardian Engine (Orchestrator)](../services/orchestrator.md)
- 24/7 background process.
- Executes tasks and goals autonomously.
- Connects to all micro-agents and MCPs.

### [Guardian Controller](../services/guardian-controller.md)
- High-level coordinator for task planning and orchestration.
- Manages execution order and complex automation flows.

---

## 🧠 LLM Runtime

### [Ollama](../services/ollama.md)
- Local LLM runtime for models like LLaMA 3 and CodeLLaMA.
- Provides offline, private inference for Guardian.

### [Ollama-Proxy](../services/ollama-proxy.md)
- Middleware service between Guardian and Ollama.
- Adds telemetry tracking, retries, and performance tuning.

---

## 🏠 Smart Home Automation

### [Home Assistant](../services/home-assistant.md)
- Integrates IoT devices for Sentinel Agent.
- Allows Guardian to perceive and act on real-world environmental data.

---

## 📈 Observability Stack

### [Grafana](../services/grafana.md)
- Visualization dashboard for logs, metrics, and telemetry.

### [Loki](../services/loki.md)
- Centralized logging backend for Guardian and its agents.

### [Prometheus](../services/prometheus.md)
- Metrics scraper and time-series database.

### [Tempo](../services/tempo.md)
- Distributed tracing system for cross-service debugging.

### [Uptime Kuma](../services/uptime-kuma.md)
- Monitors service health and uptime for Guardian infrastructure.

---

## 🔐 Networking and Cloud Access

### [Tailscale](../services/tailscale.md)
- Zero-trust private mesh network.
- Connects homelab, Raspberry Pi nodes, and Guardian servers.

### [Cloudflare](../services/cloudflare.md)
- Edge security and access management.
- Protects all Guardian ingress points with service tokens.

### [Netlify](../services/netlify.md)
- Hosting for Guardian Dashboard and public-facing apps.

### [Render](../services/render.md)
- Cloud server hosting for Gateway and microservices.

---

## 🔌 External Services

### [Slack](../services/slack.md)
- Chat and collaboration platform.
- Real-time notifications and integrations.

### [Notion](../services/notion.md)
- Knowledge base and document management.
- Task and project management.

### [GitHub](../services/github.md)
- Source control and CI/CD for all Guardian repositories.

---

## 🛡️ Guardian-Specific Services

- [Guardian Server](../services/guardian-server.md): Core HTTP API.
- [Guardian Gateway](../services/guardian-gateway.md): External ingress gateway for secure request routing and zero-trust access.
- [Guardian Vision Service](../services/guardian-vision.md): Real-time computer vision.
- [Guardian Codegen Service](../services/guardian-codegen.md): Dedicated code generation microservice.
  * [AgentOS](https://buildermethods.com/agent-os)
  * [RepoPrompt](https://repoprompt.com/docs#s=overview)
  * [MicroAgent](https://www.builder.io/blog/micro-agent)
  * [Refact](https://docs.refact.ai/introduction/quickstart/)
- [Guardian Dashboard](../services/guardian-dashboard.md): Mission control UI.
- [AgentFlow](../services/agentflow.md): Visual orchestration system for building, simulating, and executing complex agent flows.
- [Memory.me](../services/memory-me.md): Centralized memory management service for Guardian, handling long-term storage, pruning, and semantic graph connections.
- [Guardian Logical Reasoning Engine (LRE)](../services/logical-reasoning-engine.md): Advanced planning and inference engine.
  * [Quantum Reasoning w/PennyLane](https://docs.pennylane.ai/en/stable/introduction/pennylane.html) 
  * [Physics Reasoning w/Genesis](https://genesis-world.readthedocs.io/en/latest/user_guide/overview/what_is_genesis.html) Genesis is a physics platform designed for general purpose Robotics/Embodied AI/Physical AI applications
  * [Math Reasoning w/Wolfram|Alpha LLM API](https://products.wolframalpha.com/llm-api/documentation)
  * [Symbolic Reasoning w/Sympy](https://docs.sympy.org/latest/index.html)
  * [Chemical Reasoning w/Chemlib](https://chemlib.readthedocs.io/en/latest/)
  * [3D Simulation Reasoning w/Unity](https://docs.unity3d.com/Manual/Overview.html)
- [Guardian Browser Extension](../services/guardian-browser-extension.md): Live web integrations.
- [Guardian Open Source](../services/guardian-open-source.md): Public version of Guardian for community use.
- [Booking Listener](../services/booking-listener.md): Automates booking system integrations.
- [Aegis](../services/aegis.md): Security and audit microservice.

---

## 🗄️ Database Layer

### [Supabase](../databases/supabase.md) *(Relational)*
- Postgres-based database.
- Stores tasks, telemetry, analytics, and agent flows.

### [Qdrant](../databases/qdrant.md) *(Vector)*
- Vector DB for embeddings and semantic search.

### [Neo4j](../databases/neo4j.md) *(Graph)*
- Graph memory store for task causality and reasoning.

### [TimescaleDB](../databases/timescaledb.md) *(Temporal)*
- Time-series database for telemetry and system events.

### [SpacetimeDB](../databases/spacetimedb.md) *(Spatial)*
- Spatial database for future geo-context reasoning.

### [SurrealDB](../databases/surrealdb.md) *(Multi-Model)*
- Multi-model database supporting graph, key-value, and document modes.

---

## ✅ Next Steps

1. [Install Docker](../services/docker.md) and core infrastructure.
2. Spin up [Supabase](../databases/supabase.md), [Qdrant](../databases/qdrant.md), and [Neo4j](../databases/neo4j.md).
3. Launch [Guardian Server](../services/guardian-server.md) and [Guardian Engine](../services/orchestrator.md).
4. Connect [OpenWebUI](../services/openwebui.md) or [Guardian Dashboard](../services/guardian-dashboard.md) for live control.
5. Review each service’s documentation for configuration and troubleshooting.

---

> **Tip:** Guardian is modular 🌱 — you can start with the minimal stack (Supabase + Guardian Server + Ollama) and add other services like Orchestrator, Observability, and Automation as needed.



---

# Getting Started with WoodwardStudio

This guide will walk you through installing, configuring, and using the `woodward-studio` development framework to build full-stack apps quickly and efficiently.

Whether you're starting from scratch or plugging the package into an existing app, these are the steps to get up and running fast.

---

## 📦 Install the Package

Install the internal dev library via your monorepo or standalone app:

```bash
pnpm add woodward-studio
```

Make sure your app uses:
- **React + TypeScript**
- **Vite (or Rspack/Webpack)**
- **MUI**
- **Zustand**
- **Supabase** (optional)

---

## ⚙️ Initialize the API Client

Your app should generate an `api.config.json` using the CLI:

```bash
woodward-studio api generate
```

Then wire up the API system:

```ts
import { generateStudioApi } from "woodward-studio";
import apiConfig from "./api.config.json";
import { supabase } from "./supabase";

const { client, paths, queries } = generateStudioApi({
  config: apiConfig,
  env: {
    baseURL: import.meta.env.VITE_HOSTNAME,
    apiKey: import.meta.env.VITE_MASTER_API_KEY,
  },
  supabase,
});
```

You can now use:
```ts
useStudioQuery(queries.query(paths => paths.users.getList))
```

---

## 🧰 Use the CLI

The CLI includes scaffolding and utility commands:

```bash
woodward-studio create-app my-app
woodward-studio create-component Button custom
woodward-studio create-route dashboard /dashboard
```

Each command is modular and extendable — full templates coming soon.

---

## 🧪 Dev Workflow

Run Storybook or Docs locally:

```bash
pnpm --filter storybook dev
pnpm --filter docs start
```

Build the library for publish:
```bash
pnpm --filter woodward-studio build
```

Publish to npm:
```bash
npm publish --access public
```

---

## 🧠 Next Steps

- Explore [Components](./components)
- See how [API Utilities](./api) work
- Customize your [Theme](./theming)
- Use [Hooks](./hooks) across apps

You’re now ready to build with WoodwardStudio 🚀


# Getting Started with Guardian AGI System 

- Docker
- OpenWebUI
- Goose CLI
- LightRAG
- OpenDia
- Code-Server + Continue
- n8n
- Ollama
- Home Assistant
- Flowise

- Grafana
- Loki
- Prometheus
- Tempo
- Uptime Kuma

- Tailscale
- Cloudflare
- Github
- Netlify
- Render

- Guardian Server
- Guardian Engine (Orchestrator)
- Guardian Vision Service
- Guardian Codegen Service
- Guardian CLI
- Guardian Controller
- Guardian Dashboard
- Guardian Logical Reasoning Engine (LRE)
- Guardian Browser Extension
- Guardian Gateway
- Guardian Open Source
- Ollama-Proxy
- Booking-Listener
- Aegis
- Memory.me
- AgentFlow

- Supabase [Relational]
- Qdrant [Vector]
- Neo4j [Graph]
- TimescaleDB [Temporal]
- SpacetimeDB [Spatial]
- SurrealDB [Multi-Model]

- Github
- Notion
- Slack
