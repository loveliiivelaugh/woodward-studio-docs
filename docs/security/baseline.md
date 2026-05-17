# Security Baseline

## System Classification

- Class: Public documentation and knowledge surface
- Summary: Static Docusaurus documentation site for Woodward Studio systems, guides, tools, and agent-adjacent architecture
- Criticality: Medium

## Applicable Baselines

- NIST CSF 2.0: Govern, Identify, Protect, Detect for documentation publishing and repo hygiene
- NIST SSDF 1.1: Secure documentation and build pipeline practices where docs can influence operations
- OWASP baseline: Protect against accidental disclosure, unsafe guidance, and compromised dependency or build behavior
- Additional standards: Internal Sentinel engineering security baseline and vulnerability triage policy

## Exposure Profile

- Internet exposed: Yes, published docs are public-facing
- Credential bearing: No direct auth surface in the docs site itself, but docs may reference auth-bearing systems
- Sensitive data: Should be none by policy; risk is accidental disclosure in content
- Privileged operations: Build, deploy, repo write access, and content changes that can influence operator behavior

## Authentication And Authorization

- Identity provider: Git provider and hosting/deployment provider controls
- Auth model: Maintainer-controlled repository access
- Authorization model: Repo-level write permissions and deployment access controls

## Secret Handling

- Secret stores: Secrets should live outside the repo in deployment or CI secret stores
- Runtime secret delivery: Only through deployment environment if needed; no long-lived secrets should be committed to docs content
- Rotation expectations: Rotate any deployment or integration credentials if exposed or suspected exposed

## Logging And Monitoring

- Auth event logging: Use Git provider and host audit trails where available
- Application logging: Static site build and deploy logs
- Alerting: Manual review plus Sentinel-driven repo and content review
- Retention: Keep enough CI and hosting logs to investigate publication mistakes or suspicious changes

## Vulnerability Triage Ownership

- Primary owner: Michael Woodward
- Triage cadence: During active docs changes and periodic Sentinel review
- KEV / EPSS / SSVC review path: Apply when a dependency, hosting, or linked-system issue materially affects this docs surface

## Exceptions

- Current exceptions: None documented
- Planned remediation: Add exceptions only when a specific temporary deviation is accepted and time-bounded
