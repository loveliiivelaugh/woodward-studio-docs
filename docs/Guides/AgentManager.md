Let’s roll into the next one:

---

## 📘 `docs/agent-manager.md`

```md
# 🧠 Agent Manager — GuardianAI

The **Agent Manager** is a core internal agent responsible for managing *other* agents.

It can:

- Create, activate, or deactivate agents
- Update roles and permissions
- Assign agents to projects
- Review agent logs + performance
- Delete agents safely

---

## 🔧 Use Cases

| Scenario | Result |
|----------|--------|
| Add a new `content-agent` | Creates entry in `agents` + default permissions |
| Retire `qa-agent`         | Marks agent as `inactive`, revokes permissions |
| Assign `docgen-agent` to `ScheduleTime` | Adds project association |
| Regenerate agent summary | Fetches memory logs and outputs overview |

---

## 🗃️ Related Tables

### `agents`

```ts
{
  id: uuid,
  name: "dev-agent",
  role: "dev",
  is_active: true,
  created_at: timestamp
}
```

### `agent_permissions`

```ts
{
  id: serial,
  agent_id: uuid,
  table_name: "tasks",
  access_type: "write",
  granted: true
}
```

---

## 🚀 Agent Actions

### Create Agent

```ts
await createAgent({
  name: 'content-agent',
  role: 'content',
  is_active: true
})
```

> Auto-grants permissions based on default policy

---

### Update Agent

```ts
await updateAgent(agentId, { role: 'pm', is_active: false })
```

---

### Grant/Revoke Permission

```ts
await setAgentPermission(agentId, 'memory', 'write', true)
await setAgentPermission(agentId, 'tasks', 'delete', false)
```

---

## 🧠 Internal Logic (Agent Behavior)

The agent-manager runs a periodic loop and/or listens to events:

```ts
if (event.type === 'agent_created') {
  logToClients("New agent registered:", event.agent);
  await generateOnboardingMemory(event.agent)
}
```

Or listens for tasks:

```ts
if (task.agent === 'agent-manager') {
  if (task.title.startsWith('Add agent')) {
    const config = parseAgentFromText(task.description)
    await createAgent(config)
  }
}
```

---

## 🔒 Safety Checks

- Validates permission scopes before applying
- Prevents critical agents (`orchestrator`, `sentinel`) from deletion
- Logs all actions to `agent_actions` and `memory`

---

## 🧰 Utility Functions

```ts
createAgent({ name, role })
updateAgent(id, payload)
setAgentPermission(agentId, table, access, granted)
fetchAgentByName(name)
listActiveAgents()
logAgentMemory(agent, content)
```

---

## 🔜 Coming Soon

- 🧾 Agent audit log viewer (Guardian UI)
- ⚖️ Load-balancing agents by task queue
- 🤖 Dynamic spawning of temp agents (agent cloning)

---

> The agent-manager keeps your workforce clean, updated, and organized.
> It’s your HR, security, and DevOps for all agents.

---

```

Up next:  
✅ `qdrant-memory.md` — Docs for your vector memory layer  
✅ `guardian-ui.md` — System dashboard and agent monitor

Ready to continue?