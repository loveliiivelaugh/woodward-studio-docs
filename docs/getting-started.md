---
sidebar_position: 2
---

# Getting Started

Woodward Studio is where I build **enterprise‑grade, secure, managed AI agents** for real operations work. The focus right now is **agentic ops engineering**: custom tool belts, hardened sandbox policies, and fleet‑level management that makes frontier models safe to run in production.

This site is the public, evolving reference for how I do it — what I’m building, how it works, and how you can adopt it (managed or self‑hosted).

---

## What I’m Building (Now)

**The Agents Initiative**

- **Custom agent images** baked with purpose‑built tool belts
- **Secure sandbox deployment** with explicit filesystem, process, and network policy
- **Managed ops**: blue/green updates, runbooks, and observability
- **Frontier model integration** with hardened channels and tool boundaries

> The last week of work has been about making OpenShell + OpenClaw + policy + tools + models + channels all play nicely — and then standardizing that into a repeatable factory.

---

## How the Agent Factory Works

1) **Design the agent** (tool belt + workflow)
2) **Bake a custom image** (registry‑hosted)
3) **Deploy in secure sandboxes** (policy enforced)
4) **Operate and evolve** (blue/green updates)

This pattern supports both **managed hosting** and **self‑hosting** — everything is being built in public and documented here.

---

## Start Here (Docs)

### Agent Systems
- **Agent Foundry image pattern** → `/docs/Agents/foundry`
- **Agent Toolsmith (operator CLI + control‑plane)** → `/docs/Agents/toolsmith`

### CLI Tools (Public‑Safe)
- **smth** (Toolsmith CLI) → `/docs/tools/smth`
- **guardian** → `/docs/tools/guardian`
- **subagent** → `/docs/tools/subagent`
- **quickbooks** → `/docs/tools/quickbooks`
- **graph-api** → `/docs/tools/graph-api`
- **heygen** → `/docs/tools/heygen`
- **linear-cli** → `/docs/tools/linear-cli`
- **notion** → `/docs/tools/notion`
- **obs-cli** → `/docs/tools/obs-cli`

---

## Who This Is For

- Clients who want **secure, production‑grade agents**
- Builders who want a **reference architecture** for agent ops
- Peers curious about **how to operationalize frontier models safely**

---

## What You Can Do Next

- Explore the **Agent Foundry** docs to understand the image + policy pattern
- Use **Toolsmith** to browse tools and operate rollouts
- Follow along as new tool belts, policies, and demos ship

---

## Public + Open

Everything here is public by design. As the system evolves, the docs will keep up — including the parts that work, the things that broke, and the patterns that scaled.
