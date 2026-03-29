---
sidebar_position: 6
---

# Theming Strategy

WoodwardStudio applications are built with a consistent and fully extensible theming system powered by **Material UI (MUI)**. The theme supports both **light** and **dark** modes out of the box and integrates seamlessly with custom fonts, breakpoints, colors, typography, and reusable components.

This strategy ensures all apps share a cohesive design language that feels polished and professional across devices and projects.

---

## 🎨 Theme Core Structure

Each app loads a theme from the `@theme` alias, typically pointing to:

```ts
// @theme/index.ts
import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#007aff" },
    background: {
      default: "#f9f9f9",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: { fontSize: "2.5rem" },
    body1: { fontSize: "1rem" },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#33b2ff" },
    background: {
      default: "#121212",
      paper: "#1d1d1d",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
});
```

---

## 🌓 Color Mode Switching

All apps use Zustand to manage the global `colorMode` setting:

```ts
const { colorMode, setColorMode } = useUtilityStore();
```

Wrapped inside `ThemeProvider` in your `Providers` component:

```tsx
<ThemeProvider theme={colorMode === "dark" ? darkTheme : lightTheme}>
  <CssBaseline />
  {children}
</ThemeProvider>
```

This enables instant switching between light and dark mode, and can be tied to system preferences or user settings.

---

## 🧱 Custom Fonts & Icons

Fonts are preloaded via `@fontsource/inter` and `Pacifico` for accent styles.

```ts
import "@fontsource/inter";
import "@fontsource/pacifico";
```

These are used in the `Typography` settings in the theme object, and optionally in custom `Typography` components.

---

## 🧰 Theme Access in Components

MUI’s `useTheme()` hook gives access to the theme object:

```tsx
const theme = useTheme();
<Box sx={{ color: theme.palette.primary.main }}>
  Themed Box
</Box>
```

---

## ✅ Best Practices

- ✅ Use `sx` props instead of inline styles for theme compatibility
- ✅ Store all theme tokens in a central file (colors, spacing, radius)
- ✅ Use `ThemeProvider` high in the tree (inside your global `Providers` wrapper)
- ✅ Use `Typography` and `Box` as layout primitives
- ✅ Toggle dark mode using Zustand via `colorMode`

---

## 🔗 Related Docs

- [Zustand State Patterns](./zustand-patterns)
- [Component Patterns](./components)
- [Global Providers Setup](./architecture)

This theming strategy helps you ship consistent, branded apps with no extra design system overhead.

