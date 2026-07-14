# Deployment - platform-navigator

**Use case:** Helps platform teams reduce toil around self-service with a guided workflow and measurable guardrails.

## Infra requirements
→ `terraform/INFRA_REQUIREMENTS.md` - CPU/RAM/storage/network/cost breakdown

## GitOps
Flux watches `main` and reconciles changes automatically.

## Rollback
```
./scripts/rollback.sh
kubectl rollout undo deploy/platform-navigator -n platform-navigator
```
Usually < 30 sec.

## Cost
Vercel - $0/mo

Platform teams need safe defaults and guardrails. This scaffold protects developers from dangerous cluster changes.
