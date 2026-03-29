---
sidebar_label: Foundry Image
---

# Agent Foundry Image

This document describes the **Agent Foundry image pattern** used to mint custom OpenClaw runtimes for secure, sandboxed deployments. It’s the public‑safe version of an internal README and intentionally omits sensitive paths, secrets, and client‑specific details.

## Summary

The proven approach is:

1. **Build a custom image** on top of a known‑good OpenShell base image
2. **Publish to a registry**
3. **Create sandboxes from the registry image**
4. **Apply explicit sandbox policy** (filesystem, process, network)

> The registry flow is the reliable path. Local “build‑and‑stream” experiments are helpful for debugging but aren’t the preferred production deployment method.

## What This Pattern Enables

- Custom agent runtimes with a **bespoke tool belt**
- **Secure sandbox execution** with explicit policy
- Fast rollout to multiple nodes via registry tags
- Safer iteration with **blue/green updates**

## Image Composition

The image is intentionally minimal:

- built on top of the standard OpenShell OpenClaw base image
- no custom OpenShell entrypoint
- default shell for stable startup
- runtime state stored under a sandbox workspace directory

Tools are layered in as needed for each agent family. (Exact tool lists are project‑specific and not included here.)

## Project Layout (Public‑Safe)

```text
client-agent-image/
├── Dockerfile
├── bootstrap-policy.yaml
├── docker-compose.yml
├── compose.gateway.yml
├── compose.smoke.yml
├── scripts/
├── data/           # local runtime data (excluded from builds)
└── secrets/        # excluded from builds
```

> Build contexts exclude local data and secrets by default.

## Local Docker Workflow (Safe Overview)

1. Build the image locally
2. Smoke test with a shell
3. Validate tool availability and runtime defaults

Detailed commands are omitted here to avoid environment‑specific paths.

## Registry Workflow (Preferred)

1. Build the image locally
2. Tag for the registry
3. Push to the registry
4. Create a sandbox from the registry image

> If the registry image is private, the sandbox environment must have pull credentials.

## Sandbox Policy Model

- **Static policies** (filesystem/process/landlock) must be set at creation time
- **Network policy** can be adjusted later for new hosts or protocols

When static policy changes, recreate the sandbox from the updated image + policy.

## Security Notes

What’s safe:
- Keep secrets **out of image layers**
- Mount runtime credentials at deploy time
- Lock down filesystem + network access explicitly

What to avoid:
- Baking API keys into image layers
- Assuming registry push is safe if the image contains secrets

## Troubleshooting (High Level)

Common failure modes:
- Registry pull errors (missing credentials or incorrect tag)
- Policy mis‑configuration (network or process restrictions)
- Runtime mismatch with the base OpenShell contract

## Recommended Release Flow

1. Update the Dockerfile
2. Build and smoke test locally
3. Push a new tagged registry image
4. Create a fresh sandbox with the updated policy
5. Iterate on network access if needed

## Bottom Line

This pattern establishes a reliable, secure way to mint **bespoke agent runtimes** and operate them across a distributed sandbox fleet.
