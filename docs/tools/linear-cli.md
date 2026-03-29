---
sidebar_label: linear-cli
---

# linear-cli

CLI for syncing an **Obsidian markdown board** into Linear.

## What it supports

- Personal API key auth
- Team/project discovery
- Parse a markdown board
- Plan + push missing issues into a project

## Install

```bash
npm link
linear-cli --help
```

## Authenticate

```bash
linear-cli auth login --api-key lin_api_xxx
linear-cli auth status
```

## Parse a board

```bash
linear-cli board parse --file "<path-to-board.md>"
```

## Plan + push

```bash
linear-cli sync plan --file "<path-to-board.md>" --team ENG --project "Agent Project"
linear-cli sync push --file "<path-to-board.md>" --team ENG --project "Agent Project"
```

## Notes

- Matching is title‑based (no bidirectional sync yet)
- Use `--state-map` when your headings don’t match Linear states
