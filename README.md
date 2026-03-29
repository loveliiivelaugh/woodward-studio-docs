# 📚 GuardianAI Documentation

[![Netlify Status](https://api.netlify.com/api/v1/badges/cd1054f6-9a3c-4796-b967-c58f4fb80f53/deploy-status)](https://app.netlify.com/sites/cherrytopframeworkdocs/deploys)

Welcome to the official documentation for **GuardianAI** — an autonomous, LLM-powered developer platform built by [WoodwardStudio](https://woodward.studio).  
This site is powered by **Docusaurus**, and serves as the central hub for:

- System architecture
- Agent design & lifecycle
- Task orchestration & event flows
- Automation APIs and routes
- Frontend frameworks & templates
- DevOps processes
- Self-hosting guides
- Product development workflows

---

## 🚀 Getting Started

Whether you're onboarding a new developer, contributor, or just exploring the system, start here:

- [System Overview](./system-overview.md)
- [Architecture & Infrastructure](./infrastructure.md)
- [Agents Directory](./agents/README.md)
- [AgentFlow UI](./agentflow.md)

---

## 🧠 Key Concepts

- **Agentic Automation**: Agents operate as autonomous workers, assigned via task loop or flows.
- **Fallback Loop**: A recursive scheduler that powers the agent engine.
- **HITL**: Human-In-The-Loop controls via Slack.
- **LLM Integration**: Language models drive reasoning, coding, and analysis.
- **Memory System**: Powered by Supabase + Qdrant for context persistence.
- **Micro Products**: Agents build entire apps and products end-to-end.

---

## 📂 Directory Structure

```bash
/docs
  /agents              ← Agent-specific documentation
  /guides              ← Step-by-step walkthroughs
  /architecture        ← System internals and backend logic
  /tutorials           ← Learn Guardian concepts by example
  /api                 ← OpenAPI specs & custom endpoints
  system-overview.md   ← High-level summary of the Guardian ecosystem
  orchestrator.md      ← Details about fallback loop & onEvent handlers
  agentflow.md         ← Visual orchestration builder reference
```

---

## 🔁 Live Sync

This Docusaurus site is auto-synced with your Guardian system.  
Docs are generated or updated by agents during major events:

- ✅ New agent created → New doc stub
- ✅ PR merged → Architecture update
- ✅ Task completed → Learning module generated

---

## 🧪 Local Development

```bash
# Clone and install
git clone https://github.com/woodward-studio/guardian-docs
cd guardian-docs
pnpm install

# Start Docusaurus locally
pnpm start
```

---

## 🤝 Contributing

This site is constantly evolving — contributions are welcome!

- Use the CLI: `bun generate-docs <agent-name>`
- Or edit markdown directly in `/docs`
- All docs support MDX + live code blocks
- GitHub PRs are synced to Notion knowledge base (via agent)

---

## 📌 Tech Stack

- ⚛️ React + TypeScript
- 📘 Docusaurus v2
- 💾 Supabase
- 💬 Slack (HITL)
- 🧠 Qdrant vector memory
- 🤖 OpenAI / Gemini / LLMs
- 🧪 Vitest + Storybook
- 🧩 AgentFlow (custom orchestrator)

---

## 🧠 Built by WoodwardStudio

This documentation site is just one node in the **GuardianAI ecosystem** —  
an autonomous, full-stack, self-evolving software agent platform.

> Every line of code here might’ve been written by an agent.  
> Welcome to the future of software development 🚀

---

Let me know if you want:

- A custom landing page layout for `/docs`
- Auto-generated changelog from GitHub commits
- Versioned docs for each app or agent class

You’re almost ready to fully automate your docs engine too! 😎📘