---
sidebar_label: Toolsmith
---

# Agent Toolsmith

Agent Toolsmith is the internal product surface for **building, browsing, and operating tool-enabled agents**. This public‑safe overview shares the architecture and workflows without exposing private paths, internal identifiers, or registry tags.

> Original README references have been normalized to remove environment‑specific paths and identifiers.

## Technologies

**Backend:** Bun + Hono

**Frontend:** TypeScript + Vite + React

## Quickstart (Public‑Safe)

- Frontend: `cd frontend && pnpm install && pnpm dev`
- Backend: `cd backend && bun install && bun dev`
- TUI tools search: `cd backend && bun run smth -- tui:tools`
- CLI help: `cd backend && bun run smth -- help`

## CLI + TUI

- Launch the terminal tools browser: `smth -- tui`
- Search tools without the interactive TUI: `smth -- tools search --query gh --no-interactive`
- Inspect a specific tool provider: `smth -- tools inspect gh`

## Agent HUD

- Fleet overview: `/agents`
- Agent detail: `/agents/:agentId`
- Backend support: `GET /agents` and `GET /agents/:agentId`
- Data sources: local agent registry, channel status, model metadata, and session history

## Tests

- Frontend: `pnpm lint && pnpm test && pnpm build`
- Backend: `bun test`

## Docs

- `Agents.md`
- `frontend/APP_MAP.md`
- `backend/APP_MAP.md`
- `docs/CONTRACTS.md`

## DevOps

- GitHub
- Docker

## Control Plane Rollouts (Overview)

The `smth` CLI is the canonical operator surface for control‑plane rollouts and blue/green sandbox cutovers.

- Validate desired‑state fixtures: `smth -- control-plane validate`
- View a control‑plane summary: `smth -- control-plane summary`
- Inspect an agent: `smth -- control-plane inspect <agent-id>`
- Create a re‑image rollout plan:
  `smth -- control-plane rollout reimage --agent-id <agent-id> --target-revision <revision> --image <registry-image> --reason "Tool bundle refresh"`
- Check rollout status:
  `smth -- control-plane rollout status --agent-id <agent-id>`
- Promote a validated rollout:
  `smth -- control-plane rollout promote --agent-id <agent-id>`
- Roll back to the previous slot:
  `smth -- control-plane rollout rollback --agent-id <agent-id> --reason "Gateway validation failed"`

## Blue/Green Cutover (High Level)

Each managed agent has two deployment slots: **blue** and **green**.

- Only one slot is active at a time
- The inactive slot is the rebuild target for re‑image operations
- The gateway owns the external channel identity and forwards traffic to the active slot
- Validation happens on the inactive slot before cutover

### Standard Re‑image Flow

1. Pull the latest desired revision for the agent
2. Resolve the active slot and choose the inactive slot
3. Export handoff state from the active slot
4. Rebuild the inactive slot from the new registry image
5. Import handoff state and reapply bootstrap helpers
6. Start the gateway and validate policy + tools
7. Switch traffic to the rebuilt slot
8. Drain the old slot and keep it as rollback
9. Mark the rollout complete
10. Clean up after the rollback window expires

## Operational Notes

- Durable business state should live outside the sandbox slots
- Secrets are re‑injected from the secret manager, not copied between slots
- Rollouts should be treated as a checkpointed state machine

## Notes on Safety

- Public docs intentionally omit internal paths and registry tags
- Sample IDs are placeholders
- Replace placeholders with your own environment‑specific values
