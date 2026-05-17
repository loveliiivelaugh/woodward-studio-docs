# Threat Model

## Trust Boundaries

- Maintainer workstation and local clone
- Git hosting and pull request boundary
- CI or build environment
- Static hosting and public delivery boundary
- Readers following links from public docs into adjacent systems

## Data Flows

- Markdown and config files flow from local edits into the repository and then into static site builds
- Build tooling pulls dependencies and generates public artifacts
- Published pages link out to external GitHub, Woodward Studio, and related system references
- Sensitive flow risk is mainly accidental inclusion of internal URLs, secrets, or topology details in docs content

## Privileged Actions

- Merging content changes
- Updating configuration or dependencies
- Triggering builds and deployments
- Editing guidance that influences operator behavior in adjacent production systems

## Internet Exposure

- Public: generated documentation pages and repository contents intended for publication
- Admin-only: repository write access, deployment settings, and any CI/CD credentials
- Internal-only: any non-public operational details that should never be documented verbatim here

## Key Risks

- Accidental publication of sensitive infrastructure or security details
- Unsafe or stale operational guidance that causes downstream mistakes
- Dependency or build-chain compromise affecting published docs
- Unauthorized or low-trust content changes landing in the public docs surface
- Broken links or misleading references that push readers toward the wrong systems
