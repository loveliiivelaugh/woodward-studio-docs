---
sidebar_label: graph-api
---

# graph-api

Minimal CLI for authenticating with **Microsoft Graph** and running useful delegated‑user requests.

## What it supports

- OAuth 2.0 authorization code flow with PKCE
- Local token storage + refresh
- `me` profile, OneDrive root, starter mail listing
- User lookup by id/UPN
- Raw request escape hatch

## Install

```bash
npm link
graph-api help
```

## Authenticate

```bash
export GRAPH_CLIENT_ID=...
export GRAPH_TENANT=common
export GRAPH_REDIRECT_URI=http://127.0.0.1:8787/callback
export GRAPH_SCOPES="openid profile offline_access User.Read Files.Read Mail.Read"

graph-api auth login
```

## Common commands

```bash
graph-api me
graph-api me drive
graph-api me messages --limit 10
graph-api users get --id user@contoso.com
graph-api request GET /me
```

## Notes

- Prefer the **Mobile/Desktop** redirect URI for public‑client auth
- `request` targets `https://graph.microsoft.com/v1.0` by default
