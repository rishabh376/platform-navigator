# platform-navigator

> Helps platform teams reduce toil around self-service with a guided workflow and measurable guardrails.

**Domain:** platform | **Complexity:** intermediate | **Stack:** Backstage, ArgoCD, Crossplane, Terraform, OPA

| | |
|---|---|
| Use case | Helps platform teams reduce toil around self-service with a guided workflow and measurable guardrails. |
| Pain point | Teams still fight slow manual work, unclear ownership, and brittle handoffs when self-service is under pressure. |
| Success metric | Cut review time by 70% and reduce recovery effort for self-service by half. |
| Cost | $0/mo on Vercel |

## Why this exists

Teams still fight slow manual work, unclear ownership, and brittle handoffs when self-service is under pressure.. Helps platform teams reduce toil around self-service with a guided workflow and measurable guardrails.

> This project provides a golden path for internal teams, reducing onboarding friction and ticket volume. For this implementation, the service is designed to remove the operational friction behind Helps platform teams reduce toil around self-service with a guided workflow and measurable guardrails..

## What this product does

This project ships a production-oriented service that exposes health, readiness, observability, and domain-specific endpoints for Helps platform teams reduce toil around self-service with a guided workflow and measurable guardrails.. The implementation is intended to be deployed behind Kubernetes with secure defaults, CI validation, and rollback-ready manifests.

## Quick start

```bash
docker build -t platform-navigator:local .
docker run -p 8080:8080 platform-navigator:local
curl http://localhost:8080/healthz
```

## Architecture

```
GitHub CI -> Container Registry -> Kubernetes -> Backstage -> Operators / SRE
```

See `docs/ARCHITECTURE.md`

## Infrastructure

Full spec: `terraform/INFRA_REQUIREMENTS.md`

TL;DR: K8s cluster, 2-10 pods HPA, $0 on Vercel

## Docs

- `docs/ARCHITECTURE.md` - components, tradeoffs
- `docs/DESIGN_DISCUSSION.md` - how we decided to build this
- `docs/DEPLOYMENT.md` - GitOps, rollback
- `docs/SECURITY.md` - threat model
- `docs/TROUBLESHOOTING.md` - 3am runbook
- `terraform/INFRA_REQUIREMENTS.md` - **infra: CPU/RAM/storage/cost**

Interview prep: `interview/`
