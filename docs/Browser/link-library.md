---
id: link-library
title: Link Library (Guardian Memory)
sidebar_label: Link Library
sidebar_position: 1
---
<!-- 

import React, { useMemo, useState } from 'react';

/**
 * Mock data — replace with your generated export later.
 * Shape mirrors your extension payload with a couple extras.
 */
const LINKS = [
  {
    id: '1',
    title: 'Supabase Docs — Auth',
    url: 'https://supabase.com/docs/guides/auth',
    category: 'Backend',
    tags: ['supabase', 'auth', 'docs'],
    selection: 'JWT, RLS, server-side helpers…',
    favicon: 'https://supabase.com/favicon.ico',
    createdAt: '2025-10-13T12:10:00Z',
    source: 'guardian-extension',
  },
  {
    id: '2',
    title: 'MUI X Data Grid',
    url: 'https://mui.com/x/react-data-grid/',
    category: 'Frontend',
    tags: ['mui', 'datagrid', 'react', 'ui'],
    selection: '',
    favicon: 'https://mui.com/static/favicon.ico',
    createdAt: '2025-10-12T09:05:00Z',
    source: 'guardian-extension',
  },
  {
    id: '3',
    title: 'Framer Motion — Documentation',
    url: 'https://www.framer.com/motion/',
    category: 'Frontend',
    tags: ['framer-motion', 'animation', 'react'],
    selection: 'Layout animations, gestures…',
    favicon: '',
    createdAt: '2025-10-10T15:40:00Z',
    source: 'guardian-extension',
  },
  {
    id: '4',
    title: 'Drizzle ORM — Postgres',
    url: 'https://orm.drizzle.team/docs/get-started-postgresql',
    category: 'Backend',
    tags: ['drizzle', 'postgres', 'orm', 'typescript'],
    selection: '',
    favicon: '',
    createdAt: '2025-10-11T13:22:00Z',
    source: 'guardian-extension',
  },
  {
    id: '5',
    title: 'Cloudflare Zero Trust',
    url: 'https://developers.cloudflare.com/cloudflare-one/',
    category: 'Infra',
    tags: ['cloudflare', 'zero-trust', 'security'],
    selection: '',
    favicon: '',
    createdAt: '2025-10-09T18:00:00Z',
    source: 'guardian-extension',
  },
  {
    id: '6',
    title: 'Tailscale — ACL Examples',
    url: 'https://tailscale.com/kb/1018/acls',
    category: 'Infra',
    tags: ['tailscale', 'network', 'security'],
    selection: 'Restrict access by tags…',
    favicon: '',
    createdAt: '2025-10-09T18:10:00Z',
    source: 'guardian-extension',
  },
  {
    id: '7',
    title: 'Qdrant — Collections',
    url: 'https://qdrant.tech/documentation/collections/',
    category: 'AI/Memory',
    tags: ['qdrant', 'vector-db', 'memory'],
    selection: '',
    favicon: '',
    createdAt: '2025-10-08T08:30:00Z',
    source: 'guardian-extension',
  },
  {
    id: '8',
    title: 'Memgraph — Getting Started',
    url: 'https://memgraph.com/docs/getting-started',
    category: 'AI/Memory',
    tags: ['memgraph', 'graph', 'memory'],
    selection: '',
    favicon: '',
    createdAt: '2025-10-08T09:10:00Z',
    source: 'guardian-extension',
  },
  {
    id: '9',
    title: 'Expo Router — Guide',
    url: 'https://expo.github.io/router/docs',
    category: 'Mobile',
    tags: ['expo', 'react-native', 'routing'],
    selection: '',
    favicon: '',
    createdAt: '2025-10-07T20:05:00Z',
    source: 'guardian-extension',
  },
  {
    id: '10',
    title: 'Grafana Loki — Promtail',
    url: 'https://grafana.com/docs/loki/latest/clients/promtail/',
    category: 'Observability',
    tags: ['grafana', 'loki', 'promtail', 'logs'],
    selection: '',
    favicon: '',
    createdAt: '2025-10-06T11:55:00Z',
    source: 'guardian-extension',
  },
  {
    id: '11',
    title: 'Notion API — Databases',
    url: 'https://developers.notion.com/reference/databases',
    category: 'Tools',
    tags: ['notion', 'api', 'automation'],
    selection: '',
    favicon: '',
    createdAt: '2025-10-05T10:25:00Z',
    source: 'guardian-extension',
  },
  {
    id: '12',
    title: 'n8n — Webhooks',
    url: 'https://docs.n8n.io/integrations/core-nodes/n8n-nodes-base.webhook/',
    category: 'Automation',
    tags: ['n8n', 'webhook', 'automation'],
    selection: 'Trigger external systems → flows…',
    favicon: '',
    createdAt: '2025-10-05T12:00:00Z',
    source: 'guardian-extension',
  },
];

/* ---------- Small helpers ---------- */

const formatDate = (iso) =>
  new Date(iso).toLocaleString(undefined, {
    year: 'numeric', month: 'short', day: '2-digit',
  });

const uniq = (arr) => Array.from(new Set(arr));
const allTags = uniq(LINKS.flatMap((l) => l.tags)).sort();
const allCategories = uniq(LINKS.map((l) => l.category)).sort();

/* ---------- UI Components ---------- */

function TagChip({ tag, active, onToggle }) {
  return (
    <button
      onClick={() => onToggle?.(tag)}
      style={{
        border: active ? '1px solid var(--ifm-color-primary)' : '1px solid #ddd',
        padding: '2px 8px',
        borderRadius: 999,
        background: active ? 'var(--ifm-color-primary-lightest)' : 'transparent',
        color: 'inherit',
        cursor: 'pointer',
        fontSize: 12,
        margin: '0 6px 6px 0',
      }}
      title={active ? 'Click to remove filter' : 'Click to filter by tag'}
    >
      #{tag}
    </button>
  );
}

function LinkCard({ item }) {
  const domain = (() => {
    try { return new URL(item.url).hostname.replace(/^www\./, ''); }
    catch { return ''; }
  })();

  return (
    <div
      style={{
        border: '1px solid var(--ifm-toc-border-color, #e5e5e5)',
        borderRadius: 10,
        padding: '10px 12px',
        margin: '8px 0',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
        <div style={{ minWidth: 0 }}>
          <a href={item.url} target="_blank" rel="noreferrer" style={{ fontWeight: 600 }}>
            {item.title}
          </a>
          <div style={{ fontSize: 12, color: 'var(--ifm-color-emphasis-700)' }}>
            {domain} • {formatDate(item.createdAt)}
          </div>
        </div>
        {/* tiny favicon spot if desired */}
      </div>

      {item.selection ? (
        <div style={{ marginTop: 6, fontSize: 13, color: 'var(--ifm-color-emphasis-800)' }}>
          “{item.selection}”
        </div>
      ) : null}

      <div style={{ marginTop: 8 }}>
        {item.tags.map((t) => (
          <span
            key={t}
            style={{
              display: 'inline-block',
              fontSize: 12,
              background: 'var(--ifm-color-emphasis-100)',
              padding: '2px 8px',
              borderRadius: 999,
              marginRight: 6,
            }}
          >
            #{t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- Page ---------- */

export default function LinkLibrary() {
  const [q, setQ] = useState('');
  const [activeTags, setActiveTags] = useState([]);
  const [cat, setCat] = useState('All');

  const filtered = useMemo(() => {
    const text = q.trim().toLowerCase();
    return LINKS.filter((l) => {
      const matchesText =
        !text ||
        l.title.toLowerCase().includes(text) ||
        l.url.toLowerCase().includes(text) ||
        (l.selection && l.selection.toLowerCase().includes(text)) ||
        l.tags.some((t) => t.toLowerCase().includes(text));

      const matchesTags =
        activeTags.length === 0 || activeTags.every((t) => l.tags.includes(t));

      const matchesCat = cat === 'All' || l.category === cat;

      return matchesText && matchesTags && matchesCat;
    });
  }, [q, activeTags, cat]);

  const byCategory = useMemo(() => {
    const map = new Map();
    for (const item of filtered) {
      const key = item.category || 'Uncategorized';
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(item);
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  const toggleTag = (t) =>
    setActiveTags((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));

  return (
    <div>
      <div
        style={{
          padding: '12px',
          border: '1px solid var(--ifm-toc-border-color, #e5e5e5)',
          borderRadius: 12,
          marginBottom: 16,
          background: 'var(--ifm-background-surface-color)',
        }}
      >
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
          <input
            type="search"
            placeholder="Search title, URL, selection, tag…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            style={{
              flex: '1 1 280px',
              padding: '8px 10px',
              borderRadius: 8,
              border: '1px solid #ddd',
              minWidth: 220,
            }}
          />
          <select
            value={cat}
            onChange={(e) => setCat(e.target.value)}
            style={{ padding: '8px 10px', borderRadius: 8, border: '1px solid #ddd' }}
            title="Filter by category"
          >
            <option>All</option>
            {allCategories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
          {activeTags.length > 0 ? (
            <button
              onClick={() => setActiveTags([])}
              style={{
                padding: '8px 10px',
                borderRadius: 8,
                border: '1px solid #ddd',
                background: 'transparent',
                cursor: 'pointer',
              }}
              title="Clear tag filters"
            >
              Clear tags
            </button>
          ) : null}
        </div>

        <div style={{ marginTop: 10 }}>
          {allTags.map((t) => (
            <TagChip key={t} tag={t} active={activeTags.includes(t)} onToggle={toggleTag} />
          ))}
        </div>
      </div>

      {byCategory.length === 0 ? (
        <p><em>No links match your filters.</em></p>
      ) : (
        byCategory.map(([category, items]) => (
          <section key={category} style={{ marginBottom: 24 }}>
            <h3>{category} <small style={{ color: 'var(--ifm-color-emphasis-600)' }}>({items.length})</small></h3>
            {items.map((item) => (
              <LinkCard key={item.id} item={item} />
            ))}
          </section>
        ))
      )}
    </div>
  );
}

/* ---------- Notes ----------
- Replace LINKS with a JSON import or MDX-generated data later.
- If the list gets large, consider client-side pagination or virtualized lists.
- You can also pre-group by category at build time with a simple script.
*/ -->


A simple, static index of saved links grouped by **Category** with inline **tags**.  
(You can regenerate this file from your Guardian export later.)

---

## Tag Index

`#supabase` `#auth` `#docs` `#mui` `#datagrid` `#react` `#ui` `#framer-motion` `#animation`  
`#drizzle` `#postgres` `#orm` `#typescript` `#cloudflare` `#zero-trust` `#security`  
`#tailscale` `#network` `#qdrant` `#vector-db` `#memory` `#memgraph` `#graph`  
`#expo` `#react-native` `#routing` `#grafana` `#loki` `#promtail` `#logs`  
`#notion` `#api` `#automation` `#n8n` `#webhook`

---

## Backend

- **Supabase Docs — Auth**  
  `<https://supabase.com/docs/guides/auth>`  
  *Tags:* `#supabase` `#auth` `#docs` • *Added:* 2025-10-13  
  > JWT, RLS, server-side helpers…

- **Drizzle ORM — Postgres**  
  `<https://orm.drizzle.team/docs/get-started-postgresql>`  
  *Tags:* `#drizzle` `#postgres` `#orm` `#typescript` • *Added:* 2025-10-11

---

## Frontend

- **MUI X Data Grid**  
  `<https://mui.com/x/react-data-grid/>`  
  *Tags:* `#mui` `#datagrid` `#react` `#ui` • *Added:* 2025-10-12

- **Framer Motion — Documentation**  
  `<https://www.framer.com/motion/>`  
  *Tags:* `#framer-motion` `#animation` `#react` • *Added:* 2025-10-10  
  > Layout animations, gestures…

---

## AI / Memory

- **Qdrant — Collections**  
  `<https://qdrant.tech/documentation/collections/>`  
  *Tags:* `#qdrant` `#vector-db` `#memory` • *Added:* 2025-10-08

- **Memgraph — Getting Started**  
  `<https://memgraph.com/docs/getting-started>`  
  *Tags:* `#memgraph` `#graph` `#memory` • *Added:* 2025-10-08

---

## Infra

- **Cloudflare Zero Trust**  
  `<https://developers.cloudflare.com/cloudflare-one/>`  
  *Tags:* `#cloudflare` `#zero-trust` `#security` • *Added:* 2025-10-09

- **Tailscale — ACL Examples**  
  `<https://tailscale.com/kb/1018/acls>`  
  *Tags:* `#tailscale` `#network` `#security` • *Added:* 2025-10-09  
  > Restrict access by tags…

---

## Mobile

- **Expo Router — Guide**  
  `<https://expo.github.io/router/docs>`  
  *Tags:* `#expo` `#react-native` `#routing` • *Added:* 2025-10-07

---

## Observability

- **Grafana Loki — Promtail**  
  `<https://grafana.com/docs/loki/latest/clients/promtail/>`  
  *Tags:* `#grafana` `#loki` `#promtail` `#logs` • *Add*
