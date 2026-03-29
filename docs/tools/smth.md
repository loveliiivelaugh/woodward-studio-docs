---
sidebar_label: smth (Toolsmith CLI)
---

# smth (Agent Toolsmith CLI)

**smth** is the operator‑grade CLI for Agent Toolsmith. It powers tool discovery, inspection, and control‑plane rollouts for managed agents.

## What it does

- Search and inspect available tools
- Operate control‑plane rollouts (blue/green)
- Inspect agent states and rollout status
- Provide a TUI for browsing tools

## Install

Run from the Toolsmith backend project:

```bash
bun install
bun run smth -- help
```

Optional global link:

```bash
bun link
smth -- help
```

## Tooling commands

```bash
smth -- tui
smth -- tools search --query gh --no-interactive
smth -- tools inspect gh
```

## Control‑plane rollouts (high level)

```bash
smth -- control-plane validate
smth -- control-plane summary
smth -- control-plane inspect <agent-id>
smth -- control-plane rollout reimage --agent-id <agent-id> --target-revision <rev> --image <registry-image>
smth -- control-plane rollout status --agent-id <agent-id>
smth -- control-plane rollout promote --agent-id <agent-id>
smth -- control-plane rollout rollback --agent-id <agent-id>
```

## Notes

- Intended for agent fleet operations
- Works best when paired with your control‑plane desired‑state registry
- Replace placeholders with your environment‑specific IDs
