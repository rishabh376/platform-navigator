# Security - platform-navigator

What we do:
- Trivy scan in CI - blocks HIGH/CRITICAL
- Cosign sign images
- Non-root UID 10001, readOnlyRootFilesystem
- NetworkPolicy default-deny
- RBAC least-privilege
- Secrets via External Secrets / Vault (not in git)
- Dependabot + CodeQL on

Threat model: Teams still fight slow manual work, unclear ownership, and brittle handoffs when self-service is under pressure.

Platform teams need safe defaults and guardrails. This scaffold protects developers from dangerous cluster changes.
