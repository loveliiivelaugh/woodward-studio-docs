Perfect — let’s move on to documenting the **Slack Integration**, which powers bi-directional communication between *you* and your agents. This doc will explain how messages are sent from agents to Slack, and how incoming Slack messages can trigger tasks, approvals, or replies.

---

## 📘 `docs/slack-integration.md`

```md
# 💬 Slack Integration — GuardianAI

Slack is a **bi-directional communication layer** for GuardianAI. It serves as:

- A **HITL (Human-In-The-Loop)** approval interface
- A **status and logging stream** for agents and orchestrator
- A way for you to **send commands to the system via Slack**

---

## 🔁 Inbound Slack (User → GuardianAI)

### 🔌 Slack App Setup

1. Create a Slack App at https://api.slack.com/apps
2. Add the following scopes:
   - `chat:write`
   - `chat:write.public`
   - `app_mentions:read`
   - `channels:history`
   - `im:history`
   - `commands`
3. Enable **Event Subscriptions**
   - URL: `https://your-domain.com/api/v1/slack/events`
   - Subscribe to: `app_mention`, `message.im`
4. Install the app to your workspace and select the target channels

---

### 🔂 Webhook Endpoint (Slack → Gateway → MCP)

Inbound messages are routed through your **external Gateway**, passed through the **Cloudflared Tunnel**, and land at your **internal MCP server**:

```ts
// /webservers/server/src/routes/slack/index.ts
slackRoutes
  .post('/events', async (c) => {
    const { event } = await c.req.json()

    const text = event.text
    const user = event.user

    const intent = await classifySlackIntent(text)
    
    switch (intent.type) {
      case 'task_request':
        await createTaskFromSlack(event)
        break
      case 'status_check':
        await sendAgentStatusToSlack(user)
        break
      default:
        await replyToSlack(user, "I didn't understand that. Try again?")
    }

    return c.json({ ok: true })
  })
```

---

### 🤖 Supported Commands

| Command                   | Action |
|---------------------------|--------|
| `@guardian create task X` | Creates Supabase task and Notion story |
| `@guardian status`        | Replies with agent status |
| `@guardian restart`       | Restarts orchestrator loop |
| `@guardian help`          | Lists all supported Slack commands |

---

## 🔁 Outbound Slack (GuardianAI → Slack)

All agents and system components can send messages to Slack:

```ts
await slackClient.post('/chat.postMessage', {
  channel: '#guardian-ai',
  text: '✅ Dev Agent just finished implementing: `useAuth.ts`'
})
```

### Example Use Cases

- ✅ Task completions
- ⚠️ Failures or errors
- 🧠 Memory logs
- 👀 “Approval Needed” messages
- 🕐 Agent status updates

> All outbound messages pass through the Gateway and are protected by Zero Trust + Cloudflared.

---

## ✅ HITL Approvals (Human-In-The-Loop)

Some actions (especially destructive ones) should be approved manually.

```ts
await sendToSlackForApproval({
  task: task.title,
  proposedAction: 'Push code to GitHub',
  agent: 'dev',
  payload: { branch: 'feature/auth-flow' }
})
```

Once the user replies with `approve`, the agent continues execution.

---

## 🔐 Security

- All inbound events go through Cloudflare Zero Trust + Gateway
- Slack secrets stored in `.env` (not hardcoded)
- Optional: whitelist Slack user IDs or IPs
- Optional: log all Slack interactions in Supabase

---

## 📦 Slack Tools

GuardianAI comes with helpers like:

```ts
sendToSlack(channel, message)
sendToSlackForApproval(task)
classifySlackIntent(text)
parseSlackCommand(text)
```

---

## 🔜 Coming Soon

- Slack buttons for inline approvals
- Modal forms for task creation
- Slash commands (`/guardian task new`)
- Conversation memory / chat history

---

> Slack is your human interface to GuardianAI.  
> Approve, ask, command, or observe in natural language — directly from your workspace.

---

```

Ready to keep going? We could jump to:
- `email-integration.md` 📥
- `agent-manager.md` 🧠
- `qdrant-memory.md` 🧬
- or even your upcoming `guardian-ui.md` dashboard system!