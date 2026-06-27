export type QuoteCategory =
  | "design"
  | "ux"
  | "ui"
  | "product"
  | "creativity"
  | "startup"
  | "leadership"
  | "productivity"
  | "developer"
  | "motivation";

export type Quote = {
  id: string;
  text: string;
  author: string;
  category: QuoteCategory;
  tags: string[];
  source?: string;
  featured?: boolean;
};

export const categories: { slug: QuoteCategory; name: string; description: string }[] = [
  { slug: "design", name: "Design", description: "Taste, systems, craft, and visual clarity." },
  { slug: "ux", name: "UX", description: "Human-centered decisions and better product journeys." },
  { slug: "ui", name: "UI", description: "Interfaces that feel precise, useful, and calm." },
  { slug: "product", name: "Product", description: "Building things people actually value." },
  { slug: "creativity", name: "Creativity", description: "Original thinking, ideas, and creative courage." },
  { slug: "startup", name: "Startup", description: "Momentum, constraints, risk, and market learning." },
  { slug: "leadership", name: "Leadership", description: "Direction, judgment, teams, and trust." },
  { slug: "productivity", name: "Productivity", description: "Focus, execution, energy, and deep work." },
  { slug: "developer", name: "Developer", description: "Shipping software with clarity and care." },
  { slug: "motivation", name: "Motivation", description: "A useful push when the work gets heavy." }
];

export const quotes: Quote[] = [
  {
    id: "q_design_001",
    text: "Design is the silent ambassador of your brand.",
    author: "Paul Rand",
    category: "design",
    tags: ["brand", "craft", "clarity"],
    featured: true
  },
  {
    id: "q_ux_001",
    text: "People ignore design that ignores people.",
    author: "Frank Chimero",
    category: "ux",
    tags: ["people", "research", "empathy"],
    featured: true
  },
  {
    id: "q_ui_001",
    text: "Good interface design removes friction without removing meaning.",
    author: "MotivOS",
    category: "ui",
    tags: ["interface", "clarity", "systems"]
  },
  {
    id: "q_product_001",
    text: "Make every detail perfect and limit the number of details to perfect.",
    author: "Jack Dorsey",
    category: "product",
    tags: ["focus", "quality", "scope"],
    featured: true
  },
  {
    id: "q_creativity_001",
    text: "Creativity is intelligence having fun.",
    author: "Albert Einstein",
    category: "creativity",
    tags: ["ideas", "play", "thinking"]
  },
  {
    id: "q_startup_001",
    text: "The only way to win is to learn faster than anyone else.",
    author: "Eric Ries",
    category: "startup",
    tags: ["learning", "speed", "iteration"]
  },
  {
    id: "q_leadership_001",
    text: "Clarity is kindness when the work is complex.",
    author: "MotivOS",
    category: "leadership",
    tags: ["clarity", "teams", "trust"]
  },
  {
    id: "q_productivity_001",
    text: "What you do every day matters more than what you do once in a while.",
    author: "Gretchen Rubin",
    category: "productivity",
    tags: ["habits", "focus", "consistency"]
  },
  {
    id: "q_developer_001",
    text: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
    category: "developer",
    tags: ["code", "readability", "craft"]
  },
  {
    id: "q_motivation_001",
    text: "The work becomes lighter when the next step is clear.",
    author: "MotivOS",
    category: "motivation",
    tags: ["momentum", "focus", "work"]
  },
  {
    id: "q_design_002",
    text: "Simplicity is not the absence of complexity, but the clarity that survives it.",
    author: "MotivOS",
    category: "design",
    tags: ["simplicity", "systems", "clarity"]
  },
  {
    id: "q_startup_002",
    text: "A startup is a learning machine disguised as a company.",
    author: "MotivOS",
    category: "startup",
    tags: ["learning", "market", "teams"]
  }
];

export function getQuoteOfTheDay(date = new Date()) {
  const start = new Date(Date.UTC(date.getUTCFullYear(), 0, 0));
  const diff = date.getTime() - start.getTime();
  const day = Math.floor(diff / 86400000);
  return quotes[day % quotes.length];
}

export function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export function getQuotesByCategory(category: string) {
  return quotes.filter((quote) => quote.category === category);
}

export function searchQuotes(query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];

  return quotes.filter((quote) =>
    [quote.text, quote.author, quote.category, ...quote.tags]
      .join(" ")
      .toLowerCase()
      .includes(normalized)
  );
}
