---
sidebar_label: heygen
---

# heygen

CLI for the **HeyGen API**: authenticate, list avatars/voices, and create videos via Video Agent.

## Install

```bash
npm link
heygen help
```

## Authenticate

```bash
heygen auth login --api-key "$HEYGEN_API_KEY"
# or
printenv HEYGEN_API_KEY | heygen auth login --api-key-stdin
```

## Common commands

```bash
heygen auth status --verify
heygen whoami
heygen avatars list
heygen voices list
heygen video-agent create --prompt "Create a 20-second welcome video"
heygen video status <video_id>
```

## Raw requests

```bash
heygen request GET /v1/video.list
```

## Notes

- Default API base is `https://api.heygen.com`
- `HEYGEN_API_KEY` overrides stored config for the current command
