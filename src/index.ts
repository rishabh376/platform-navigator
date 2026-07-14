/**
 * platform-navigator
 * Helps platform teams reduce toil around self-service with a guided workflow and measurable guardrails.
 * Domain: platform
 */
import express from "express";
import client from "prom-client";

const app = express();
const register = new client.Registry();
client.collectDefaultMetrics({ register });
const counter = new client.Counter({ name: "requests_total", help: "requests", registers: [register] });

app.get("/healthz", (_, res) => res.json({ status: "ok", project: "platform-navigator", domain: "platform" }));
app.get("/readyz", (_, res) => res.json({ ready: true })); // TODO: real checks
app.get("/catalog", (_, res) => res.json({ services: 24, templates: 8 }));
app.post("/provision", express.json(), (_, res) => res.json({ namespace: "dev-123", status: "ready" }));
app.get("/", (_, res) => { counter.inc(); res.json({ message: "Helps platform teams reduce toil around self-service with a guided workflow and measurable guardrails.", service: "platform-navigator" }); });
app.get("/metrics", async (_, res) => { res.set("Content-Type", register.contentType); res.end(await register.metrics()); });

app.listen(8080, () => console.log("platform-navigator listening on :8080"));
