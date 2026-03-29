---
sidebar_label: obs-cli
---

# obs-cli

CLI for controlling **OBS Studio** over WebSocket (via obs-websocket-js).

## Requirements

- OBS Studio with WebSocket enabled
- Node.js 18+
- WebSocket password if auth is enabled

## Install

```bash
npm link
obs-cli help
```

## Connect

```bash
obs-cli --url ws://127.0.0.1:4455 --password <password> status
```

Or via env vars:

```bash
export OBS_URL=ws://127.0.0.1:4455
export OBS_PASSWORD=<password>
obs-cli scenes
```

## Common commands

```bash
obs-cli status
obs-cli scenes
obs-cli scene set "Starting Soon"
obs-cli stream start
obs-cli stream stop
obs-cli record start
obs-cli record stop
obs-cli screenshot save "Camera" /tmp/camera.png
```

## Notes

- `call` is the escape hatch for any OBS request
- If OBS is not running or WebSocket is off, commands will fail on connect
