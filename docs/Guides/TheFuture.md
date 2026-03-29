---
sidebar_position: 9
---

# Integrating LLMs with the WoodwardStudio Developer Platform

WoodwardStudio is built from the ground up with extensibility, documentation, and automation in mind. That includes direct support for integrating Large Language Models (LLMs) like OpenAI, Anthropic, or your own MCP server.

This guide explains how to make your developer platform fully **LLM-aware**, so models can use your tools, types, and docs programmatically.

---

## 🧠 Why LLM Integration?

By connecting your fullstack platform to an LLM:

- ✅ You enable **AI-assisted app generation** from natural language
- ✅ You allow **auto-scripting of CLI + APIs**
- ✅ You provide **real-time docs + schema reasoning** for agents
- ✅ You pave the way for **true developer automation**

Your goal: **“Use WoodwardStudio to build an onboarding form with a PostgreSQL table and React form UI” — and it works.**

---

## 🗂️ Source of Truth

Your LLM integration draws from these core platform components:

| Source                        | Format            | Usage                                   |
|------------------------------|-------------------|------------------------------------------|
| Docusaurus docs              | Markdown + MDX    | Structured context for workflows + APIs |
| Storybook docs               | MDX + stories.json| Component references, props, visuals    |
| API spec (OpenAPI)           | JSON              | Server-side routes, query typing        |
| `api.config.json`            | JSON              | Frontend API contract                    |
| Drizzle schema               | TypeScript        | Database types + relationships          |
| CLI tool help / structure    | Text              | Used for task automation                |

---

## 🔗 Integration Layers

You can index these into any LLM-based system or agent using:

- 🔍 **Embedding** (e.g., chunked Docusaurus/MDX + OpenAPI)
- 🧾 **Code Parsing** (for Drizzle schema, CLI commands)
- 📬 **Tool use definitions** (like JSON Schema / Function calling)

---

## 📦 Recommended Tooling Stack

- **Vector Store:** PostgreSQL w/ pgvector, Weaviate, Pinecone, or Qdrant
- **Embedder:** OpenAI (text-embedding-3-small), HuggingFace, or self-hosted BGE
- **LLM:** Your MCP server (e.g. OpenRouter, Ollama, Claude)
- **RAG Layer:** LangChain, LlamaIndex, or custom server logic

---

## 🧱 Suggested Embedding Pipeline

You can use your own `@woodward-studio/mcp-server` to run this:

```ts
// Example: indexDocusaurus.ts
import fs from 'fs';
import { chunkMarkdown, embedChunks, storeEmbeddings } from './utils';

const docs = fs.readFileSync('./apps/framework-docs/build/docs/index.html', 'utf-8');
const chunks = chunkMarkdown(docs);
const vectors = await embedChunks(chunks);
await storeEmbeddings("docusaurus_docs", vectors);
```

Repeat this for:
- `storybook/stories.json`
- `api.config.json`
- `openapi.json`
- `src/schema/*.ts` (Drizzle schema)

---

## 🛠️ Tooling DSL (LLM Tools)

Define a JSON structure that represents your tools:

```json
{
  "name": "createComponent",
  "description": "Create a reusable React component in the UI library",
  "parameters": {
    "type": "object",
    "properties": {
      "name": { "type": "string" },
      "directory": { "type": "string" }
    },
    "required": ["name"]
  }
}
```

Register this with your LLM agent or MCP server so it knows what to call and how.

---

## 📘 Recommended Prompting Strategy

Instruct your LLM agent:

> “You are a developer assistant for the WoodwardStudio platform. You can access documentation, generate code using typed schemas, and execute CLI tools to scaffold new features. You understand both frontend and backend systems.”

Feed in:
- A task (“Create onboarding form with Supabase table”)
- Drizzle schema context
- API config
- CLI tool help
- Relevant docs from the Docusaurus knowledge base

---

## ✅ Example Task: AI-Supported Feature

1. User says: `"Add Stripe checkout to the Pricing section."`
2. LLM reads Docusaurus and identifies pricing component path
3. It updates the UI using `@woodward-studio/ui`
4. CLI is used to scaffold backend route using Hono + OpenAPI
5. `api.config.json` is updated
6. LLM commits changes

> This workflow is already partially automatable because of your current architecture.

---

## 🧠 Final Thoughts

You’re building:
- A documented, typed, CLI-powered, LLM-extensible dev framework
- A studio where devs (or AI agents) can build and deploy SaaS apps quickly
- A platform where docs aren’t just for humans — they’re a **machine-readable interface**

---

## 🔗 Next Steps

- ✅ Finish backend package with OpenAPI auto-export
- ✅ Connect docs + stories.json into your embedding server
- ✅ Register CLI commands and tools with your MCP agent
- ✅ Create LLM-ready instructions for `create-app`, `create-api`, etc.
