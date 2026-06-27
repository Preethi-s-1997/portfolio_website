import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "API Documentation",
  description: "UXQuote API authentication, endpoints, examples, SDK samples, and rate limits."
};

const endpoints = [
  ["GET", "/api/v1/quote/today", "Return the deterministic quote of the day."],
  ["GET", "/api/v1/quote/random", "Return one random quote."],
  ["GET", "/api/v1/quotes", "Return all published quotes."],
  ["GET", "/api/v1/quotes/category/:category", "Return quotes for a specific category."],
  ["GET", "/api/v1/search?q=focus", "Search quotes, authors, categories, and tags."],
  ["POST", "/api/v1/api-key", "Generate a local development API key."],
  ["DELETE", "/api/v1/api-key", "Revoke a key by id or key value."],
];

export default function DocsPage() {
  return (
    <main>
      <Section className="max-w-5xl">
        <p className="text-sm font-medium text-accent">Developer Documentation</p>
        <h1 className="mt-3 text-4xl font-semibold text-primary">UXQuote API v1</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-secondary">
          Use UXQuote API to serve curated UI/UX quotes in products, dashboards, websites, newsletters, and
          internal tools. Authentication is skipped in this initial build; API key headers are
          already documented and ready for enforcement in the next auth phase.
        </p>

        <div className="mt-10 grid gap-4">
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-primary">Authentication</h2>
            <p className="mt-3 text-sm leading-6 text-secondary">
              Future production requests should include an API key in the Authorization header.
            </p>
            <pre className="mt-4 overflow-x-auto rounded-md border border-border bg-background p-4 text-sm text-zinc-300">
              <code>{`Authorization: Bearer uxq_live_your_key`}</code>
            </pre>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold text-primary">Endpoints</h2>
            <div className="mt-5 divide-y divide-border">
              {endpoints.map(([method, path, description]) => (
                <div key={path} className="grid gap-3 py-4 md:grid-cols-[5rem_1fr_1.4fr]">
                  <span className="text-sm font-semibold text-accent">{method}</span>
                  <code className="text-sm text-primary">{path}</code>
                  <span className="text-sm text-secondary">{description}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold text-primary">Fetch Example</h2>
            <pre className="mt-4 overflow-x-auto rounded-md border border-border bg-background p-4 text-sm leading-6 text-zinc-300">
              <code>{`const response = await fetch("https://your-domain.com/api/v1/quote/today", {
  headers: {
    Authorization: "Bearer uxq_live_your_key"
  }
});

const { data } = await response.json();
console.log(data.text, data.author);`}</code>
            </pre>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold text-primary">Rate Limits</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {["Free: 1,000/mo", "Pro: 100k/mo", "Enterprise: custom"].map((limit) => (
                <div key={limit} className="rounded-md border border-border bg-surface px-4 py-3 text-sm text-secondary">
                  {limit}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>
    </main>
  );
}
