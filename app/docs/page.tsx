import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Portfolio Documentation",
  description: "Implementation notes for the Preethi Suresh product design portfolio."
};

const files = [
  ["app/page.tsx", "Homepage structure, portfolio content, navigation, and parallax state."],
  ["app/globals.css", "Dark theme, visual system, case-study art, responsive rules, and motion styling."],
  ["app/layout.tsx", "Portfolio metadata, Open Graph content, viewport, and shared app layout."],
  ["README.md", "Project overview, setup instructions, and portfolio section notes."]
];

const sections = [
  "Hero introduction",
  "Selected work",
  "AI Playground",
  "Method",
  "Contact"
];

export default function DocsPage() {
  return (
    <main>
      <Section className="max-w-5xl">
        <p className="text-sm font-medium text-accent">Portfolio Notes</p>
        <h1 className="mt-3 text-4xl font-semibold text-primary">Preethi Suresh Portfolio</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-secondary">
          This page documents the current portfolio build: a dark, parallax-driven product design
          website with case-study storytelling and an AI Playground for MotivOS and RUX.AI Design.
        </p>

        <div className="mt-10 grid gap-4">
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-primary">Primary Files</h2>
            <div className="mt-5 divide-y divide-border">
              {files.map(([path, description]) => (
                <div key={path} className="grid gap-3 py-4 md:grid-cols-[12rem_1fr]">
                  <code className="text-sm text-primary">{path}</code>
                  <span className="text-sm text-secondary">{description}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold text-primary">Homepage Sections</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {sections.map((section) => (
                <div key={section} className="rounded-md border border-border bg-surface px-4 py-3 text-sm text-secondary">
                  {section}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>
    </main>
  );
}
