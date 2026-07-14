# Operations Runbook - platform-navigator

Helps platform teams reduce toil around self-service with a guided workflow and measurable guardrails.

**On-call? Read this first.**

## Deploy
```
kubectl apply -k k8s/ -n platform-navigator
kubectl rollout status deploy/platform-navigator -n platform-navigator
```

## Rollback (when things go red)
```
./scripts/rollback.sh
# usually < 30sec
```

## Scale up NOW
```
kubectl scale deploy/platform-navigator --replicas=10 -n platform-navigator
```

## Logs
```
kubectl logs -l app=platform-navigator -n platform-navigator -f --tail=200
```

## Crashloop?
```
kubectl describe pod -l app=platform-navigator -n platform-navigator
kubectl logs <pod> --previous -n platform-navigator
```
90% of the time: missing env var in ConfigMap.

## Metrics
`curl localhost:8080/metrics` or Grafana dashboard in `monitoring/`

## DR / Failover
See `docs/DISASTER_RECOVERY.md` - RTO 15m

We actually tested this. 11 min.
