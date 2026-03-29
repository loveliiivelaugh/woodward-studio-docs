---
sidebar_label: quickbooks
---

# quickbooks

Minimal CLI for authenticating with **QuickBooks Online** and running common accounting operations from the terminal.

## What it supports

- OAuth 2.0 login and token refresh
- Company info lookup
- Customers, vendors, accounts, items
- Invoices and bills
- Reports
- Raw query + raw request escape hatches

## Install

```bash
npm link
quickbooks help
```

## Authenticate

```bash
export QBO_CLIENT_ID=...
export QBO_CLIENT_SECRET=...
export QBO_ENVIRONMENT=sandbox
export QBO_REDIRECT_URI=http://127.0.0.1:4545/callback

quickbooks auth login
```

## Common commands

```bash
quickbooks auth status
quickbooks company info
quickbooks customers list --limit 20
quickbooks vendors list --limit 20
quickbooks invoices list --limit 20
quickbooks bills list --limit 20
quickbooks reports profit-and-loss --date-macro ThisMonth
```

## Examples

Create a customer:

```bash
quickbooks customers create --display-name "Acme LLC" --email ops@acme.com
```

Run a raw query:

```bash
quickbooks query "select * from Customer maxresults 10"
```

## Notes

- Targets **QuickBooks Online Accounting** only
- Access tokens refresh automatically when possible
- `request` expects a path under `/v3/company/<realmId>`
