---
sidebar_position: 5
---

# Zustand State Patterns

WoodwardStudio apps use [Zustand](https://github.com/pmndrs/zustand) for all global and scoped state management. The approach is highly modular, strongly typed, and consistent across all apps — making it easy to scale and reuse.

This page outlines the core patterns and how to create and consume Zustand stores in your projects.

---

## 🧱 Core Philosophy

All Zustand stores follow these conventions:
- Exported as named `use[Name]Store` hooks
- All state and actions live in one place
- Consumed via simple destructuring
- Global utilities (modals, alerts) live in `useUtilityStore`

---

## 📁 Example: Utility Store

```ts
// @store/utilityStore.ts
import { create } from "zustand";

const useUtilityStore = create((set) => ({
  modal: {
    open: false,
    title: null,
    content: null,
    sx: null
  },
  setModal: (modal) => set({ modal }),

  alert: null,
  setAlert: (alert) => set({ alert }),

  drawer: null,
  setDrawer: (drawer) => set({ drawer }),

  setConfirm: (confirm) => set({ confirm }),

  colorMode: "light",
  setColorMode: (mode) => set({ colorMode: mode })
}));

export default useUtilityStore;
```

This hook provides modal, drawer, alert, confirm, and theme controls globally from anywhere in the app.

---

## 🎮 Usage in Components

```ts
const { modal, setModal } = useUtilityStore();

<Button onClick={() => setModal({
  open: true,
  title: "Hello",
  content: "Welcome to the modal."
})}>
  Open Modal
</Button>
```

---

## 🧩 Creating Your Own Store

```ts
// @store/appStore.ts
import { create } from "zustand";

export const useAppStore = create((set) => ({
  loading: false,
  setLoading: (value: boolean) => set({ loading: value }),

  filters: {},
  setFilters: (f) => set({ filters: f }),
}));
```

Use it anywhere:
```ts
const { loading, setLoading } = useAppStore();
```

---

## ✅ Best Practices

- Use Zustand for **UI state**, not remote data (leave that to TanStack Query)
- Use **one store per concern** (utility, auth, app-specific, etc.)
- Write stores as flat objects with clear setters
- Import and destructure from hooks directly (`const { } = useStore()`)
- Memoize computed values inside components or selectors

---

## 🔗 Related Utilities

Zustand state often powers:
- Modals, drawers, confirmations (`useUtilityStore`)
- Filters, loading flags, step modals (`useAppStore`)
- Authentication state (optional `useAuthStore`)

---

With this pattern in place, you can manage clean, decoupled UI state across any app with minimal boilerplate and full consistency.

