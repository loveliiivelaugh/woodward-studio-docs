---
sidebar_position: 2
---

# Getting Started

This guide will walk you through installing, configuring, and using the `woodward-studio` development framework to build full-stack apps quickly and efficiently.

Whether you're starting from scratch or plugging the package into an existing app, these are the steps to get up and running fast.

---

## 📦 Install the Package

Install the internal dev library via your monorepo or standalone app:

```bash
pnpm add woodward-studio
```

Make sure your app uses:
- **React + TypeScript**
- **Vite (or Rspack/Webpack)**
- **MUI**
- **Zustand**
- **Supabase** (optional)

---

## ⚙️ Initialize the API Client

Your app should generate an `api.config.json` using the CLI:

```bash
woodward-studio api generate
```

Then wire up the API system:

```ts
import { generateStudioApi } from "woodward-studio";
import apiConfig from "./api.config.json";
import { supabase } from "./supabase";

const { client, paths, queries } = generateStudioApi({
  config: apiConfig,
  env: {
    baseURL: import.meta.env.VITE_HOSTNAME,
    apiKey: import.meta.env.VITE_MASTER_API_KEY,
  },
  supabase,
});
```

You can now use:
```ts
useStudioQuery(queries.query(paths => paths.users.getList))
```

---

## 🧰 Use the CLI

The CLI includes scaffolding and utility commands:

```bash
woodward-studio create-app my-app
woodward-studio create-component Button custom
woodward-studio create-route dashboard /dashboard
```

Each command is modular and extendable — full templates coming soon.

---

## 🧪 Dev Workflow

Run Storybook or Docs locally:

```bash
pnpm --filter storybook dev
pnpm --filter docs start
```

Build the library for publish:
```bash
pnpm --filter woodward-studio build
```

Publish to npm:
```bash
npm publish --access public
```

---

## 🧠 Next Steps

- Explore [Components](./components)
- See how [API Utilities](./api) work
- Customize your [Theme](./theming)
- Use [Hooks](./hooks) across apps

You’re now ready to build with WoodwardStudio 🚀

