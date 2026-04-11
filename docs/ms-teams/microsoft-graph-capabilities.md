---
title: Microsoft Graph capabilities
description: Live Microsoft 365 capabilities validated through Microsoft Graph, including mail, calendar, OneDrive, and Excel workbook operations.
sidebar_position: 2
---

# Microsoft Graph capabilities

This session validated a working Microsoft Graph CLI workflow inside the OpenClaw environment and proved that Microsoft 365 services can be controlled through a Teams-driven agent workflow.

## Confirmed working capabilities
- authenticated Microsoft Graph CLI access
- user profile lookup via `/me`
- Outlook mail read
- Outlook mail send
- calendar read
- calendar event creation
- OneDrive business drive access
- OneDrive file upload for markdown and Excel files
- Excel workbook edits and targeted range reads through Microsoft Graph

## Demonstrations completed

### Mail demo
A test email was sent and then read back from the mailbox.

**Validated outcome**
- outbound message creation works
- mailbox readback works
- Teams chat can drive inbox-aware workflows

### Calendar demo
A test event was created and then read back from calendar results.

**Validated outcome**
- event creation works
- calendar retrieval works
- meeting and schedule automations are realistic from this setup

### OneDrive demo
Markdown notes created in the workspace were uploaded into OneDrive and verified.

**Validated outcome**
- OneDrive can act as an extended workspace
- cloud-backed note storage is working
- session artifacts can be preserved outside the local machine

### Excel demo
An Excel workbook was created in OneDrive, edited through workbook APIs, and read back using targeted range queries.

**Validated outcome**
- spreadsheet-backed ops workflows are viable
- structured records can be updated from chat
- lightweight dashboards and trackers are practical in this environment

## Remaining Microsoft gap
### Teams Graph permissions
Deeper Teams-native Graph operations still need additional delegated scopes.

Recommended next scope:
- `Team.ReadBasic.All`

Likely useful additions later:
- `Channel.ReadBasic.All`
- `Chat.Read`
- `Chat.ReadWrite`

## Why this matters
This gives the system a strong Microsoft 365 foundation for:
- inbox workflows
- meeting prep and scheduling
- cloud-backed notes and runbooks
- spreadsheet-driven operational tracking
- Teams-based mobile control over business workflows
