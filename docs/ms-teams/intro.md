---
title: MS Teams
description: Microsoft Teams as a mobile-first command surface for OpenClaw, Microsoft 365, and GitHub-connected agent operations.
sidebar_position: 1
---

# MS Teams

Microsoft Teams can serve as a practical command surface for agent operations, not just a chat interface. This section documents live demonstrations performed through Teams chat using connected Microsoft 365 and GitHub tools.

## What this section shows
These docs capture a real operating pattern:
- a human gives instructions from Teams, including from mobile
- OpenClaw uses connected services to perform useful work
- outputs, artifacts, and follow-up documentation are saved into cloud systems like OneDrive and GitHub

## Validated capabilities
Through the demos captured here, the Teams surface was used to:
- inspect GitHub repos and workflow activity
- send and read Outlook mail
- create and read calendar events
- use OneDrive as a cloud-backed workspace
- create and update Excel workbooks stored in OneDrive
- preserve notes and future workflow ideas as durable artifacts

## Why it matters
This interaction model is important because it turns Teams into:
- a mobile control plane for business operations
- a lightweight executive cockpit
- a front door to engineering and automation systems
- a human-friendly layer over orchestration, scheduling, and cloud-backed memory

## Included docs
- [Microsoft Graph capabilities](./microsoft-graph-capabilities.md)
- [GitHub capabilities](./github-capabilities.md)
- [Top practical demos](./top-demos.md)
- [Cloud workspace demo](./cloud-workspace-demo.md)
- [Next demo ideas](./next-demo-ideas.md)

## Product direction
The strongest product pattern emerging from this work is simple:

> Let users do tasks with their agent in chat first, then promote repeated tasks into scheduled or triggered automations.

That keeps the user experience conversational while still enabling serious orchestration over time.
