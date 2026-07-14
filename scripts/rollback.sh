#!/usr/bin/env bash
set -euo pipefail
kubectl rollout undo deploy/platform-navigator
