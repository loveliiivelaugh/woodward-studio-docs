Awesome! Next up is your **semantic memory system** powered by Qdrant — let's document it!

---

## 📘 `docs/qdrant-memory.md`

```md
# 🧬 Qdrant Memory — GuardianAI

GuardianAI uses **Qdrant** as its **long-term memory vector database**.

Every memory (email, commit, message, thought, spec, insight, task) can be embedded, vectorized, and stored. This enables:

- 🔍 Semantic search of prior actions
- 🧠 Memory-aware task generation
- 🤖 Context injection into agents
- 🧾 Recap + summarization of past work

---

## 🗂️ Collections

| Collection | Description |
|-----------|-------------|
| `docs`    | Embedded memory entries (tasks, commits, thoughts) |
| `files`   | Embeddings for scanned codebase files |
| `youtube` | Processed YouTube learning content |
| `emails`  | Embedded content of incoming emails |

---

## 🧠 Memory Object Format

```ts
{
  id: string, // UUID
  vector: number[], // 768-d embedding
  payload: {
    type: "task" | "commit" | "thought" | "email" | ...,
    title: string,
    content: string,
    project: string,
    agent: string,
    timestamp: string
  }
}
```

---

## 🔁 Insert Memory

```ts
import { embedText } from "@lib/embeddings";
import { upsertToQdrant } from "@lib/qdrant";

const content = "Added file scanner to runLLMPlanner()";
const vector = await embedText(content);

await upsertToQdrant("uuid", vector, {
  type: "commit",
  title: "File Scanner",
  content,
  project: "guardian-core",
  agent: "dev-agent"
});
```

---

## 🔎 Query Memory

```ts
const queryVector = await embedText("What was recently built?");
const topResults = await searchQdrant(queryVector, 5);
```

Returns an array of closest results with metadata from `payload`.

---

## ⚙️ Helper Functions

```ts
embedText(text: string) → vector[]
searchQdrant(vector: number[]) → results[]
upsertToQdrant(id, vector, payload)
deleteFromQdrant(id)
```

> These are already built into GuardianAI and injected into planner/agent flows.

---

## 📅 Typical Memory Sources

- ✅ Completed tasks
- 🧪 Git commits
- 🧵 Slack conversations
- 📬 Emails
- 📹 YouTube videos (via transcript)
- 📁 Files scanned by file-crawler

---

## 🧩 Use Cases

| Use Case | How |
|----------|-----|
| Generate new tasks | Embed `"what needs to be done?"`, match memories |
| Agent context | Load project-specific memories at runtime |
| Project summary | Fetch memories + summarize |
| Redundancy prevention | Search `"Have we already built X?"` |
| Trace reasoning | Log decisions, PRs, and automations |

---

## 🔐 Security & Performance

- Stored locally in Docker container
- Vector size: `768` (OpenAI or Instructor Embeddings)
- Accessed via internal SDK (not REST)
- TODO: auto-retry + health checks via Orchestrator

---

> Qdrant = GuardianAI’s hippocampus.  
> It's what lets your agents think like they’ve been here before.

---

```

Next up:  
✅ `guardian-ui.md` — Full visual system dashboard, PM2 control, agents view, logs, metrics

Shall we?