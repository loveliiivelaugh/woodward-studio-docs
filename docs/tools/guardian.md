---
sidebar_label: guardian
---

# guardian

CLI bridge for interacting with a Guardian server API, plus local tool registry and MCP helpers.

## What it supports

- Login + config management
- Generic REST calls
- Agent and run shortcuts
- Tool registry management
- MCP server registry + calls
- Skeleton‑key tool resolution (`skey`)

## Install

```bash
npm link
guardian --help
```

## Quick start

```bash
guardian login --base-url https://guardian.example.com --token <token>
guardian ping
guardian get /api/agents
guardian post /api/runs --body-json '{"agentId":"agent_123","input":"run this"}'
```

## Tool registry

```bash
guardian tools init
guardian tools add --surface cli --name notion --command notion --description "Notion CLI bridge"
guardian tools search "create a notion page"
```

## Skeleton key

```bash
guardian skey run "create notion page with this data" --tool-id cli:notion --confirm
guardian skey confirm <call-signature-id>
```

## MCP helpers

```bash
guardian mcp add filesystem --cmd npx --arg -y --arg @modelcontextprotocol/server-filesystem --arg <path>
guardian mcp tools filesystem
guardian mcp call filesystem read_file --input-json '{"path":"<file>"}'
```

## Notes

- Use `guardian api <METHOD> </path>` for any endpoint
- `skey` resolves tools **locally**, not via the server
- Replace placeholders with your environment values
