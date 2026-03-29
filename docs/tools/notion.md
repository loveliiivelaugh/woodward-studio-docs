---
sidebar_label: notion
---

# notion

Practical CLI for common **Notion API** workflows.

## What it supports

- One‑time login with local token persistence
- Search
- Read/create/update pages
- Query data sources
- List/append block children
- Generic API escape hatch

## Install

```bash
npm link
notion --help
```

## Authenticate

```bash
notion login
```

## Common usage

```bash
notion whoami
notion search "roadmap"
notion page get <page-id>
notion page create --parent-page <page-id> --title "CLI-created page" --content "hello"
notion data-source query <data-source-id> --page-size 10
notion blocks append <block-id> --text "added from cli"
```

## Notes

- Default Notion version header can be overridden with `--notion-version`
- Use `notion api ...` for any raw endpoint
