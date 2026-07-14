# Setup - platform-navigator

Helps platform teams reduce toil around self-service with a guided workflow and measurable guardrails.

1. **Infra first**: `cd terraform && terraform init && terraform apply`
2. `kubectl apply -k k8s/ -n platform-navigator`
3. `kubectl port-forward svc/platform-navigator 8080:80 -n platform-navigator`
4. `curl localhost:8080/healthz`

Env vars: `PORT=8080`, `LOG_LEVEL=info`

Service catalogs and self-service APIs are backed by telemetry so teams can move fast and still stay safe.
