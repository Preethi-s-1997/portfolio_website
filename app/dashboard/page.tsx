"use client";

import { useMemo, useState } from "react";
import { Activity, KeyRound, Play, RotateCcw, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type KeyItem = {
  id: string;
  name: string;
  key: string;
  createdAt: string;
};

export default function DashboardPage() {
  const [keys, setKeys] = useState<KeyItem[]>([
    {
      id: "demo-key",
      name: "Default development key",
      key: "uxq_dev_7y3k_preview",
      createdAt: new Date().toISOString()
    }
  ]);
  const [playground, setPlayground] = useState("/api/v1/quote/today");
  const [response, setResponse] = useState("");

  const usage = useMemo(() => {
    return [
      ["Requests", "18,420", "+12.4%"],
      ["Success rate", "99.98%", "+0.2%"],
      ["Avg latency", "42ms", "-8ms"],
      ["Active keys", String(keys.length), "live"]
    ];
  }, [keys.length]);

  async function generateKey() {
    const res = await fetch("/api/v1/api-key", { method: "POST" });
    const json = await res.json();
    setKeys((current) => [json.data, ...current]);
  }

  function revokeKey(id: string) {
    setKeys((current) => current.filter((key) => key.id !== id));
  }

  async function runPlayground() {
    const res = await fetch(playground);
    setResponse(JSON.stringify(await res.json(), null, 2));
  }

  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 border-b border-border pb-8 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium text-accent">Developer Dashboard</p>
            <h1 className="mt-2 text-4xl font-semibold text-primary">API operations</h1>
            <p className="mt-3 max-w-2xl text-secondary">
              Generate development keys, monitor usage, and test UI/UX quote endpoints.
            </p>
          </div>
          <Button onClick={generateKey} variant="accent">
            <KeyRound className="h-4 w-4" /> Generate key
          </Button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {usage.map(([label, value, delta]) => (
            <Card key={label} className="p-5">
              <p className="text-sm text-secondary">{label}</p>
              <p className="mt-3 text-3xl font-semibold text-primary">{value}</p>
              <p className="mt-2 text-sm text-success">{delta}</p>
            </Card>
          ))}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-primary">API keys</h2>
              <Activity className="h-5 w-5 text-secondary" />
            </div>
            <div className="mt-5 grid gap-3">
              {keys.map((item) => (
                <div key={item.id} className="rounded-md border border-border bg-surface p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-medium text-primary">{item.name}</p>
                      <code className="mt-2 block break-all text-sm text-secondary">{item.key}</code>
                    </div>
                    <Button aria-label="Revoke key" size="sm" variant="ghost" onClick={() => revokeKey(item.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold text-primary">API playground</h2>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <select
                value={playground}
                onChange={(event) => setPlayground(event.target.value)}
                className="focus-ring h-10 flex-1 rounded-md border border-border bg-background px-3 text-sm text-primary"
              >
                <option value="/api/v1/quote/today">GET /api/v1/quote/today</option>
                <option value="/api/v1/quote/random">GET /api/v1/quote/random</option>
                <option value="/api/v1/quotes/category/design">GET /api/v1/quotes/category/design</option>
                <option value="/api/v1/search?q=focus">GET /api/v1/search?q=focus</option>
              </select>
              <Button onClick={runPlayground} variant="secondary">
                <Play className="h-4 w-4" /> Run
              </Button>
              <Button onClick={() => setResponse("")} variant="ghost" aria-label="Reset response">
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>
            <pre className="mt-5 min-h-80 overflow-x-auto rounded-md border border-border bg-background p-4 text-xs leading-6 text-zinc-300">
              <code>{response || "Run an endpoint to inspect the JSON response."}</code>
            </pre>
          </Card>
        </div>
      </div>
    </main>
  );
}
