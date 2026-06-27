import { CheckCircle2, Clock, DollarSign, Plus, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { quotes } from "@/lib/quotes";

const stats: { label: string; value: string | number; Icon: typeof CheckCircle2 }[] = [
  { label: "Published quotes", value: quotes.length, Icon: CheckCircle2 },
  { label: "Pending approvals", value: 7, Icon: Clock },
  { label: "API users", value: 1284, Icon: Users },
  { label: "MRR", value: "$8.4k", Icon: DollarSign }
];

export default function AdminPage() {
  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 border-b border-border pb-8 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium text-accent">Admin Panel</p>
            <h1 className="mt-2 text-4xl font-semibold text-primary">Quote operations</h1>
            <p className="mt-3 max-w-2xl text-secondary">
              Manage quote quality, scheduling, approvals, users, API analytics, and revenue.
            </p>
          </div>
          <Button variant="accent">
            <Plus className="h-4 w-4" /> Add quote
          </Button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {stats.map(({ label, value, Icon }) => (
            <Card key={label} className="p-5">
              <Icon className="h-5 w-5 text-accent" />
              <p className="mt-4 text-sm text-secondary">{label}</p>
              <p className="mt-2 text-3xl font-semibold text-primary">{value}</p>
            </Card>
          ))}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="overflow-hidden">
            <div className="border-b border-border p-5">
              <h2 className="text-xl font-semibold text-primary">Quote library</h2>
            </div>
            <div className="divide-y divide-border">
              {quotes.slice(0, 8).map((quote) => (
                <div key={quote.id} className="grid gap-4 p-5 md:grid-cols-[1fr_8rem_7rem]">
                  <div>
                    <p className="text-sm text-primary">“{quote.text}”</p>
                    <p className="mt-2 text-sm text-secondary">{quote.author}</p>
                  </div>
                  <span className="text-sm capitalize text-secondary">{quote.category}</span>
                  <span className="text-sm text-success">Approved</span>
                </div>
              ))}
            </div>
          </Card>

          <div className="grid gap-4">
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-primary">Schedule</h2>
              <div className="mt-5 grid gap-3">
                {quotes.slice(0, 4).map((quote, index) => (
                  <div key={quote.id} className="rounded-md border border-border bg-surface p-4">
                    <p className="text-sm text-primary">{quote.author}</p>
                    <p className="mt-1 text-sm text-secondary">Day +{index + 1} · {quote.category}</p>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-primary">Revenue dashboard</h2>
              <div className="mt-5 h-40 rounded-md border border-border bg-[linear-gradient(135deg,rgba(124,58,237,.35),rgba(34,197,94,.12))]" />
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
