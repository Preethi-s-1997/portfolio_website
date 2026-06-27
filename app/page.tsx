"use client";

import Link from "next/link";
import type { Route } from "next";
import {
  ArrowUpRight,
  BrainCircuit,
  ChevronDown,
  LayoutGrid,
  MailSearch,
  Menu,
  MousePointer2,
  PenTool,
  Sparkles,
  Stethoscope,
  WandSparkles,
  WalletCards,
  X
} from "lucide-react";
import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";

type ParallaxStyle = {
  transform: string;
};

const projects = [
  {
    slug: "auralcare-ai-doctor-dashboard",
    number: "01",
    name: "AuralCare",
    eyebrow: "Doctor dashboard / AI voice scheduling",
    platform: "Responsive web application",
    theme: "Dark clinical command center",
    title: "Helping doctors add, manage, and understand appointments through AI voice assistance.",
    body:
      "A web dashboard for busy doctors who need to capture appointment intent while moving between consultations. The assistant listens, confirms details, checks conflicts, and creates the appointment with a clinical audit trail.",
    icon: Stethoscope,
    accent: "#42E8B4",
    secondary: "#7AA8FF",
    typography: "Inter for dense clinical UI, IBM Plex Mono style timestamps for confidence states",
    colors: ["#071110", "#101B1A", "#42E8B4", "#7AA8FF", "#F7FBFF"],
    research: [
      "Doctors often schedule between patient conversations, so the flow must tolerate fragmented attention.",
      "Voice input is fastest only when the system repeats the structured appointment before saving.",
      "Clinical dashboards need clear confidence and edit states because incorrect time, patient, or reason data has operational cost."
    ],
    users: ["Primary care doctors", "Clinic coordinators", "Specialists with repeat follow-ups"],
    flows: ["Voice capture", "AI parsing", "Conflict check", "Doctor confirmation", "Calendar entry"],
    lowFi: ["Voice dock", "Today timeline", "Patient queue", "Confirmation drawer"],
    highFi: ["AI appointment command bar", "Smart calendar", "Patient context panel", "Conflict resolution modal"],
    screens: ["Dashboard", "Voice add", "Patient detail", "Schedule review"],
    outcome: "Reduced scheduling friction by designing a voice-first workflow that still gives doctors full visual control."
  },
  {
    slug: "mailtrace-email-footprint",
    number: "02",
    name: "MailTrace",
    eyebrow: "Privacy utility / Email footprint tracker",
    platform: "Light themed mobile application",
    theme: "Clean privacy-first mobile app",
    title: "Showing people where their email is used across apps, websites, subscriptions, and services.",
    body:
      "A mobile app that maps a user's email footprint, highlights risky reuse, and helps them unsubscribe, rotate aliases, or secure connected accounts without feeling overwhelmed.",
    icon: MailSearch,
    accent: "#315CFF",
    secondary: "#12B981",
    typography: "Geometric sans for approachable consumer clarity with calm privacy labels",
    colors: ["#F8FAFC", "#FFFFFF", "#315CFF", "#12B981", "#1D2939"],
    research: [
      "Users know their inbox is crowded, but they do not know which services still hold their email identity.",
      "Privacy anxiety rises when findings are presented as alarms; grouping by action makes the experience calmer.",
      "A mobile tracker must separate verified connections from inferred matches to build trust."
    ],
    users: ["Privacy-conscious consumers", "Freelancers with many accounts", "People cleaning old subscriptions"],
    flows: ["Connect inbox", "Scan services", "Classify risk", "Review app/site usage", "Take action"],
    lowFi: ["Onboarding", "Discovery map", "Risk list", "Action sheet"],
    highFi: ["Footprint home", "Service profile", "Risk insights", "Unsubscribe workflow"],
    screens: ["Scan", "Map", "Details", "Actions"],
    outcome: "Created a light, calm mobile system that turns invisible email usage into a prioritized privacy checklist."
  },
  {
    slug: "spendlens-receipt-expenses",
    number: "03",
    name: "SpendLens",
    eyebrow: "Smart expense tracking / Receipt AI",
    platform: "Dark themed mobile application",
    theme: "Premium personal finance app",
    title: "Letting users track expenses by sharing receipts and letting AI do the entry work.",
    body:
      "A mobile expense tracker where users share a receipt photo, PDF, or screenshot. The app extracts merchant, amount, taxes, category, split items, and recurring patterns before adding a clean expense entry.",
    icon: WalletCards,
    accent: "#F7C948",
    secondary: "#FF7A5C",
    typography: "Inter for financial clarity with tabular numeric styling for amounts",
    colors: ["#080A0D", "#151922", "#F7C948", "#FF7A5C", "#F6F0E8"],
    research: [
      "Manual expense entry fails because users delay it until receipts pile up.",
      "People want automation, but they need a review step before money data is saved.",
      "Item-level receipt parsing unlocks smarter budgets, shared expenses, and category corrections."
    ],
    users: ["Young professionals", "Small business owners", "Roommates splitting expenses"],
    flows: ["Share receipt", "AI extraction", "Review fields", "Confirm category", "Budget update"],
    lowFi: ["Receipt intake", "Parsed fields", "Budget impact", "History"],
    highFi: ["Receipt scanner", "AI review card", "Expense detail", "Smart insights"],
    screens: ["Capture", "Review", "Insights", "Wallet"],
    outcome: "Designed a receipt-first expense flow that reduces manual entry while keeping user trust at the center."
  }
];

const playground = [
  {
    name: "MotivOS",
    tag: "AI motivation operating system",
    copy:
      "A personal OS for translating goals, blockers, energy, and routines into momentum loops that adapt as the user changes.",
    icon: BrainCircuit,
    modes: ["goal memory", "energy-aware prompts", "weekly reset"]
  },
  {
    name: "Refyno.AI",
    tag: "research UX design intelligence",
    copy:
      "A copilot for designers that clusters research, critiques UX patterns, and turns scattered findings into clearer product direction.",
    icon: WandSparkles,
    modes: ["synthesis", "UX critique", "concept narration"]
  }
];

const principles = ["Clarity before decoration", "Systems with feeling", "Research as momentum", "AI with human judgment"];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let frame = 0;

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setScrollY(window.scrollY));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const motion = useMemo<Record<string, ParallaxStyle>>(
    () => ({
      field: { transform: `translate3d(0, ${scrollY * -0.07}px, 0)` },
      title: { transform: `translate3d(0, ${scrollY * -0.12}px, 0)` },
      objectA: { transform: `translate3d(0, ${scrollY * -0.18}px, 0) rotate(${scrollY * 0.015}deg)` },
      objectB: { transform: `translate3d(0, ${scrollY * -0.1}px, 0) rotate(${scrollY * -0.012}deg)` }
    }),
    [scrollY]
  );

  const nav = [
    ["Work", "#work"],
    ["AI Playground", "#ai-playground"],
    ["Method", "#method"],
    ["Contact", "#contact"]
  ];

  return (
    <main className="site-shell min-h-screen overflow-hidden bg-[#050505] text-[#f5efe3]">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="noise-layer" />
        <div className="ambient-field" style={motion.field} />
      </div>

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#f5efe3]/10 bg-[#050505]/72 backdrop-blur-2xl">
        <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="Preethi Suresh portfolio">
            <span className="brand-mark">PS</span>
            <span className="hidden text-xs uppercase tracking-[0.36em] text-[#f5efe3]/70 sm:block">Preethi Suresh</span>
          </Link>

          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.28em] text-[#f5efe3]/58 md:flex">
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="transition hover:text-[#f5efe3]">
                {label}
              </a>
            ))}
          </nav>

          <button
            aria-label={open ? "Close navigation" : "Open navigation"}
            className="grid h-10 w-10 place-items-center border border-[#f5efe3]/18 text-[#f5efe3] md:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <nav className="grid gap-5 border-t border-[#f5efe3]/10 bg-[#050505] px-4 py-5 text-sm uppercase tracking-[0.32em] text-[#f5efe3]/76 md:hidden">
            {nav.map(([label, href], index) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="flex justify-between">
                <span>0{index + 1}</span>
                <span>{label}</span>
              </a>
            ))}
          </nav>
        )}
      </header>

      <section className="relative z-10 min-h-screen px-4 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-[1500px] grid-rows-[auto_1fr_auto] gap-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <p className="max-w-md text-sm leading-7 text-[#f5efe3]/62">
              Product designer crafting research-backed interfaces, AI-native workflows, and design systems that feel sharp, useful, and alive.
            </p>
            <a className="command-link w-fit" href="#contact">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="relative grid items-center">
            <div className="hero-object hero-object-a" style={motion.objectA}>
              <span>UX</span>
            </div>
            <div className="hero-object hero-object-b" style={motion.objectB}>
              <span>AI</span>
            </div>

            <div style={motion.title}>
              <p className="mb-5 inline-flex items-center gap-3 text-xs uppercase tracking-[0.36em] text-[#b8ff63]">
                <Sparkles className="h-4 w-4" />
                Design portfolio
              </p>
              <h1 className="mega-title">
                <span>Human</span>
                <span>signals,</span>
                <span>future</span>
                <span>systems.</span>
              </h1>
            </div>
          </div>

          <div className="grid gap-6 border-t border-[#f5efe3]/12 pb-10 pt-6 md:grid-cols-[0.7fr_1.3fr_0.45fr] md:items-end">
            <p className="text-xs uppercase tracking-[0.34em] text-[#f5efe3]/46">UX research / Product strategy / AI design</p>
            <p className="max-w-3xl text-xl leading-8 text-[#f5efe3]/80 md:text-2xl">
              I help teams move from fuzzy product intent to interfaces with structure, emotion, and enough precision to ship.
            </p>
            <a href="#work" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[#f5efe3]">
              Explore <ChevronDown className="h-4 w-4 animate-bounce" />
            </a>
          </div>
        </div>
      </section>

      <section id="work" className="relative z-10 mx-auto max-w-[1500px] px-4 py-24 sm:px-6 lg:px-8">
        <div className="section-head project-section-head">
          <p className="section-label">Product Case Studies</p>
          <h2>Product stories</h2>
        </div>

        <div className="project-stack mt-14">
          {projects.map((project) => (
            <ProjectCase key={project.number} project={project} />
          ))}
        </div>
      </section>

      <section id="ai-playground" className="relative z-10 py-28">
        <div className="playground-marquee" aria-hidden="true">
          <span>AI Playground</span>
          <span>MotivOS</span>
          <span>Refyno.AI</span>
        </div>

        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <div className="section-head">
            <p className="section-label text-[#b8ff63]">AI Playground</p>
            <h2>Speculative products for a more thoughtful AI layer.</h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {playground.map((product) => {
              const Icon = product.icon;
              return (
                <article key={product.name} className="ai-product">
                  <div className="ai-product-header">
                    <div>
                      <p>{product.tag}</p>
                      <h3>{product.name}</h3>
                    </div>
                    <span>
                      <Icon className="h-7 w-7" />
                    </span>
                  </div>
                  <p className="ai-copy">{product.copy}</p>
                  <div className="ai-console" aria-hidden="true">
                    <div className="ai-console-row">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="ai-console-body">
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                  <div className="ai-modes">
                    {product.modes.map((mode) => (
                      <span key={mode}>{mode}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="method" className="relative z-10 mx-auto grid max-w-[1500px] gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div className="sticky-panel">
          <p className="section-label">Method</p>
          <div className="tool-stack" aria-hidden="true">
            <span>
              <PenTool className="h-8 w-8" />
            </span>
            <span>
              <LayoutGrid className="h-8 w-8" />
            </span>
            <span>
              <MousePointer2 className="h-8 w-8" />
            </span>
          </div>
        </div>

        <div>
          <h2 className="method-title">Design that earns attention by reducing effort.</h2>
          <p className="mt-8 text-xl leading-9 text-[#f5efe3]/72">
            My practice connects research, narrative, visual systems, and prototyping. The result is work that can hold ambiguity at the start and become crisp enough for teams to build from.
          </p>
          <div className="mt-10 grid gap-3">
            {principles.map((principle, index) => (
              <div key={principle} className="principle-row">
                <span>0{index + 1}</span>
                <p>{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="relative z-10 border-t border-[#f5efe3]/12 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="section-label">Contact</p>
            <h2 className="contact-title">Let&apos;s design what comes next.</h2>
          </div>
          <div className="grid gap-4 text-lg text-[#f5efe3]/72">
            <a className="contact-link" href="mailto:hello@preethisuresh.com">
              hello@preethisuresh.com <ArrowUpRight className="h-5 w-5" />
            </a>
            <a className="contact-link" href="https://preethisuresh.com/" target="_blank" rel="noreferrer">
              preethisuresh.com <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

type Project = (typeof projects)[number];

function ProjectCase({ project }: { project: Project }) {
  const Icon = project.icon;

  return (
    <Link
      href={`/work/${project.slug}` as Route}
      className="project-case"
      style={
        {
          "--project-accent": project.accent,
          "--project-secondary": project.secondary
        } as CSSProperties
      }
    >
      <div className="project-card-copy">
        <div className="project-card-topline">
          <span>{project.number}</span>
          <span>
            <Icon className="h-6 w-6" />
          </span>
        </div>

        <div>
          <p className="project-eyebrow">{project.eyebrow}</p>
          <h3>{project.name}</h3>
          <p className="project-body">{project.body}</p>
        </div>

        <span className="case-open-link">
          View detailed case study <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
      <ProjectCardVisual project={project} />
    </Link>
  );
}

function ProjectCardVisual({ project }: { project: Project }) {
  const isDashboard = project.name === "AuralCare";
  const isEmail = project.name === "MailTrace";

  return (
    <div className={`project-card-visual ${isDashboard ? "project-visual-web" : "project-visual-mobile"}`} aria-hidden="true">
      {isDashboard ? (
        <div className="project-browser">
          <div className="project-browser-top">
            <span />
            <span />
            <span />
          </div>
          <div className="project-browser-grid">
            <div className="project-browser-rail">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="project-browser-main">
              <div className="project-browser-hero">
                <strong>24</strong>
                <span>Appointments</span>
              </div>
              <div className="project-browser-list">
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="project-browser-side">
              <span />
              <p>AI voice ready</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="project-phone-set">
          <div className="project-phone project-phone-back">
            <span />
            <span />
          </div>
          <div className="project-phone project-phone-front">
            <div className="project-phone-speaker" />
            <div className="project-phone-status">
              <span>{isEmail ? "Privacy" : "Wallet"}</span>
              <span>{isEmail ? "128" : "$86"}</span>
            </div>
            <div className="project-phone-hero">
              <strong>{isEmail ? "Mail" : "Spend"}</strong>
              <p>{isEmail ? "Email footprint" : "Receipt parsed"}</p>
            </div>
            <div className="project-phone-lines">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      )}
      <div className="project-visual-meta">
        {project.screens.slice(0, 3).map((screen) => (
          <span key={screen}>{screen}</span>
        ))}
      </div>
    </div>
  );
}
