---
sidebar_position: 7
---

# Global Providers Setup

All WoodwardStudio apps share a centralized `Providers` component that wraps the entire application tree. This ensures that **global state, theming, routing, modals, alerts, and utilities** are consistently available throughout your app.

The `Providers` pattern simplifies bootstrapping new apps and eliminates the need for repetitive wrapper logic in each project.

---

## 🔌 `Providers.tsx` Overview

```tsx
// @components/Providers.tsx
import { ThemeProvider, CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import useUtilityStore from "@store/utilityStore";
import { lightTheme, darkTheme } from "@theme/index";
import { ModalProvider, AlertProvider, DrawerProvider, ConfirmProvider } from "./GlobalUI";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode | (() => React.ReactNode) }) {
  const { colorMode } = useUtilityStore();

  return (
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ThemeProvider theme={colorMode === "dark" ? darkTheme : lightTheme}>
          <CssBaseline />

          <AlertProvider />
          <ConfirmProvider />
          <DrawerProvider />
          <ModalProvider />

          {typeof children === "function" ? children() : children}
        </ThemeProvider>
      </LocalizationProvider>
    </QueryClientProvider>
  );
}
```

---

## 🧩 What's Included

- **React Query:** QueryClientProvider for data fetching and caching
- **MUI Theme:** ThemeProvider with dynamic light/dark toggle
- **Localization:** Date pickers powered by Dayjs
- **Global UI:** Zustand-controlled Modals, Alerts, Drawers, and Confirm dialogs

---

## 🗂 Global UI Providers

```tsx
// @components/GlobalUI.tsx
import Modal from "./Modal";
import Alert from "./Alert";
import Drawer from "./Drawer";
import ConfirmDialog from "./Confirm";

export const ModalProvider = () => <Modal />;
export const AlertProvider = () => <Alert />;
export const DrawerProvider = () => <Drawer />;
export const ConfirmProvider = () => <ConfirmDialog />;
```

Each UI element is conditionally rendered based on `useUtilityStore()` state. You can trigger any global UI action from anywhere in your app:

```ts
setModal({ open: true, title: "Hello", content: "Modal Content" });
setAlert({ open: true, message: "Success!" });
```

---

## ✅ Usage Example

Your app’s root typically looks like:

```tsx
const root = createRoot(document.getElementById("root")!);
root.render(
  <Providers>
    <AppRouter />
  </Providers>
);
```

This gives your entire app access to:
- Query hooks
- Theming and fonts
- Global modals, drawers, alerts, confirms
- Localization and date pickers

---

## 💡 Best Practices

- ✅ Wrap *everything* in `Providers` to ensure consistent global behavior
- ✅ Avoid duplicating modal or alert logic — keep it all inside `useUtilityStore`
- ✅ Extend providers to include analytics, auth, telemetry, etc.

---

## 🔗 Related Docs

- [Zustand State Patterns](./zustand-patterns)
- [Theming Strategy](./theming-strategy)
- [Routing Strategy](./routing-strategy)

This setup ensures every app starts with a clean, pre-wired foundation for fast and reliable development.

