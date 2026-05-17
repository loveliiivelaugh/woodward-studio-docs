# Security

This repository follows the Sentinel engineering security baseline.

Primary source of truth:

- Sentinel `ENGINEERING_SECURITY_BASELINE.md`
- Sentinel `VULNERABILITY_TRIAGE_POLICY.md`

## Security Scope

This repository builds and publishes the Woodward Studio Docusaurus documentation site.

It affects:

- the public documentation surface
- repository integrity for published docs and guidance
- any build or deploy environment used to render the static site
- links and references to adjacent agent, API, and infrastructure systems

## Security Contact

- Owner: Michael Woodward
- Backup owner: Sentinel program / Woodward Studio engineering operations
- Escalation path: use the Sentinel security program materials in `/Users/michael/sentinel` and route material findings through internal engineering triage before public disclosure

## Baseline Documents

- [Baseline](docs/security/baseline.md)
- [Threat Model](docs/security/threat-model.md)
- [Exceptions](docs/security/exceptions.md)

## Vulnerability Reporting

Report issues internally first. Treat any issue that could expose secrets, administrative surfaces, internal topology, or unsafe operational guidance as non-public until triaged. Public disclosure should happen only after impact is understood and any required remediation or content removal is complete.
