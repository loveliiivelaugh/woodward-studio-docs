---
sidebar_position: 4
---

# API Strategy & Utilities

WoodwardStudio provides a powerful and reusable API utility that supports:
- REST, GraphQL, and Supabase queries
- Centralized config via `api.config.json`
- Fully typed hooks using TanStack Query
- Debounced mutations, dynamic query paths, and more

This system is designed for maintainability, scalability, and ease of use across multiple applications.

---

## 📄 Configuration via `api.config.json`

Each app defines its own `api.config.json`, either by hand or via the CLI:

```bash
woodward-studio api generate
```

This file contains:
```json
{
  "host": {
    "baseURL": "https://api.example.com",
    "headers": {}
  },
  "paths": {
    "users": {
      "getList": "/users",
      "getById": "/users/:id"
    },
    "orders": {
      "create": "/orders"
    }
  }
}
```

The `paths` object is fully typed and used throughout your query logic.

---

## 🔧 generateStudioApi

To wire everything together, call `generateStudioApi()` in your app:

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

This returns:
- `client`: a preconfigured Axios instance
- `paths`: all available API endpoints (typed)
- `queries`: object containing methods for useQuery/useMutation hooks

---

## 🔁 API Hook Usage

You can now use any query or mutation inside your components:

```ts
const { data, isLoading } = useStudioQuery(
  queries.query(paths => paths.users.getList)
);

const mutation = useMutation(
  queries.mutate(paths => paths.orders.create)
);
```

Includes:
- `query` for GET/POST requests
- `mutate` for POST/PUT with debounce support
- `supabaseQuery` and `supabaseMutation`
- `graphQuery` for GraphQL endpoints

---

## 🧪 Debounced Mutations

You can debounce a mutation with:

```ts
mutation.mutate({
  payload: { name: "Product" },
  options: { debounce: 400 }
});
```

---

## ✨ Advantages

- ✅ Auto-wired query paths using dynamic callback
- ✅ Easily switch between environments via `.env`
- ✅ Supabase-first support baked in
- ✅ Shared across all apps via NPM package

---

## 🔗 Next Steps

- Explore the `queries` object methods
- Generate or hand-write your own `api.config.json`
- Use `supabaseMutation()` for CRUD operations

The goal is simple: connect your frontend to your backend with zero boilerplate and maximum flexibility.

