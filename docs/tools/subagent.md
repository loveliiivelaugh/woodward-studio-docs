---
sidebar_label: subagent
---

# subagent

CLI for dispatching tasks to local sub‑agent runtimes with deterministic routing.

## What it supports

- Agent registry + routing rules
- Background execution + fan‑out
- Stats and selection analytics
- Dry‑run command previews

## Install

```bash
npm link
subagent --help
```

## Quick start

```bash
subagent config init
subagent agents
subagent route "review this repo for regressions" --review
subagent run "implement a new CLI command" --cwd <path>
subagent batch "compare delegation strategies" --agent claude --agent gemini
subagent stats
```

## Commands

```bash
subagent config set-default <agent>
subagent route "<task>" [--code|--review|--plan|--research] [--background]
subagent run "<task>" [--agent <name>] [--cwd <dir>] [--background] [--dry-run]
subagent batch "<task>" --agent <name>... [--top 2] [--dry-run]
```

## Notes

- Best for local routing + execution; use a queue/API for durable remote jobs
- Config and run logs live under `~/.config/subagent-cli/`
