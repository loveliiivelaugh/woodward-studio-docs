---
sidebar_position: 8
---

# Storybook Integration

WoodwardStudio includes a dedicated Storybook instance to serve as the **interactive UI reference** for all reusable components, patterns, and design elements.

This instance is hosted publicly at:

👉 [storybook.woodwardwebdev.com](https://storybook.woodwardwebdev.com)

---

## 🎨 Purpose of Storybook

Storybook helps document, showcase, and test individual components in isolation from the app environment. It allows you to:

- Preview how components behave with different props
- Test visual styles, themes, and edge cases
- Document intended usage for internal or client-facing purposes
- Reduce regression by visualizing changes during development

Storybook becomes your **living style guide**, enabling faster development and consistent UI.

---

## 🧱 Story Structure

Each component lives in its own folder inside `packages/woodward-studio` with an adjacent `ComponentName.stories.tsx` file.

```ts
// Example: Button.stories.tsx
import { Button } from "@mui/material";

export default {
  title: "Components/Button",
  component: Button,
};

export const Default = () => <Button>Click Me</Button>;
```

Stories support:
- `args` and `argTypes` for dynamic props
- Custom backgrounds and themes
- Tags like `autodocs` for automated documentation

---

## 🧰 Local Dev Setup

Run Storybook locally with:

```bash
pnpm --filter storybook dev
```

Build the static site:

```bash
pnpm --filter storybook build
```

Deploys are handled via Netlify to `storybook.woodwardwebdev.com`.

---

## 🔁 Sync with Docusaurus

While Docusaurus is used for architecture, guides, and usage docs, Storybook is used to:

- Visually document UI components
- Demonstrate API hooks and loading states
- Serve as a design system reference

You can link to Storybook stories from Docusaurus:
```md
[View the `BasicModal` in Storybook](https://storybook.woodwardwebdev.com/?path=/story/components-basicmodal--default)
```

---

## ✅ Best Practices

- ✅ Document every reusable component with at least one story
- ✅ Use consistent naming (`ComponentName.stories.tsx`)
- ✅ Group stories by category (e.g., Components, Layout, Forms)
- ✅ Use `parameters` for layout and theme controls
- ✅ Reference Storybook links from your main documentation

---

## 🔗 Related Docs

- [Theming Strategy](./theming-strategy)
- [Component Patterns](./components)
- [Global Providers Setup](./global-providers)

Storybook is the best way to maintain, share, and grow your UI system — and it's a key pillar of the WoodwardStudio developer platform.