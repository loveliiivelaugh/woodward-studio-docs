# Microsoft Graph Capabilities - 2026-04-11

## Summary
This session established and validated a working Microsoft Graph CLI workflow inside the OpenClaw environment.

## Confirmed working capabilities
- Authenticated Microsoft Graph CLI access
- Basic user profile lookup via `/me`
- Outlook mail read
- Outlook mail send/write
- Calendar read
- Calendar event create/write
- OneDrive / business drive access

## Confirmed working demonstrations
### Mail demo
A test email was sent and then successfully read back from the mailbox.

- Subject: `OpenClaw Demo Mail`
- Result: message appeared in mailbox and was retrievable via Graph API

### Calendar demo
A test event was created and then successfully read back from calendar results.

- Subject: `OpenClaw Demo Event`
- Start: `2026-04-11 16:30 America/Chicago`
- End: `2026-04-11 17:00 America/Chicago`
- Result: event appeared in calendar and was retrievable via Graph API

## Remaining Microsoft gap
### Teams Graph permissions
Teams surface still needs additional delegated scopes.

Recommended next scope:
- `Team.ReadBasic.All`

Likely helpful additional scopes later:
- `Channel.ReadBasic.All`
- `Chat.Read`
- `Chat.ReadWrite`

## Practical implications
The system can already support mobile-driven agent operations for:
- inbox awareness
- message sending
- calendar awareness
- event creation
- OneDrive-backed document storage and retrieval

This is enough to begin demonstrating real business productivity workflows from Teams chat.
