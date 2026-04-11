---
title: Cloud workspace demo
description: Demonstration of OneDrive as an extended OpenClaw workspace for durable cloud-backed notes and operational artifacts.
sidebar_position: 5
---

# Cloud workspace demo

This demonstration showed that OpenClaw can treat OneDrive as an extended workspace for durable notes, artifacts, and operational documents.

## What was demonstrated
- a markdown document was created in the local workspace
- the document was uploaded into OneDrive
- the cloud copy was verified in a structured `OpenClaw` folder
- the document content could be surfaced back into chat

## Why it matters
This pattern gives the system a practical cloud-backed workspace that can hold:
- notes
- runbooks
- drafts
- reports
- demo artifacts
- durable session outputs

## Suggested folder model
- `OpenClaw/notes/`
- `OpenClaw/demos/`
- `OpenClaw/runbooks/`
- `OpenClaw/drafts/`
- `OpenClaw/reports/`

## Product significance
Using OneDrive this way turns Microsoft 365 storage into:
- persistent memory infrastructure
- a file-backed artifact layer for agent work
- a bridge between chat-driven actions and durable business documentation

## Future use cases
- daily executive briefings saved to cloud storage
- project summaries written by agents
- GitHub workflow reports archived in OneDrive
- strategy drafts and operating docs generated from Teams chat
- persistent working memory across sessions and devices
