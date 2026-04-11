---
title: GitHub capabilities
description: Live GitHub capabilities validated through GitHub CLI, including repo visibility, workflow monitoring, and preview agent-task support.
sidebar_position: 3
---

# GitHub capabilities

This session validated a working GitHub CLI environment with authenticated access to repositories, workflows, and preview agent-task functionality.

## Confirmed working capabilities
- GitHub CLI installed and authenticated
- repo listing works
- account identity lookup works
- repo inspection works
- GitHub Actions workflow visibility works
- `gh agent-task` preview commands are available

## Demonstrations completed

### Account and repo visibility
The agent confirmed access to the authenticated GitHub account and successfully listed repositories, including private repositories.

**Validated outcome**
- Teams chat can be used to inspect account and repo surfaces
- the agent can summarize engineering assets without opening GitHub directly

### Repo briefing demo
The agent inspected `loveliiivelaugh/woodward-studio-docs` and summarized it as a documentation hub for GuardianAI concepts including:
- architecture
- agent lifecycle
- orchestration
- automation APIs
- self-hosting guides

**Validated outcome**
- repo summarization works
- product and engineering briefing workflows are practical from chat

### Workflow visibility demo
The agent retrieved recent workflow runs for `loveliiivelaugh/woodward-studio-docs`, including successful Copilot coding agent activity.

Examples observed:
- `replace-purple-with-light-blue-or-sea-green`
- `replace-app-icon`
- `fix-ci-cd-errors`

**Validated outcome**
- GitHub Actions visibility works
- Teams can serve as a lightweight engineering command console

### Agent task feature
`gh agent-task --help` confirmed preview support for:
- create
- list
- view

**Validated outcome**
- the account is positioned for GitHub-based agent delegation workflows
- there is a direct path toward controlled coding task orchestration

## Why this matters
GitHub gives the system a strong execution layer for:
- engineering visibility
- workflow monitoring
- repository-aware briefings
- eventual agent-task delegation and coding automation
