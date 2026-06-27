"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  BrainCircuit,
  ChevronDown,
  LayoutGrid,
  Menu,
  MousePointer2,
  PenTool,
  Sparkles,
  WandSparkles,
  X
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type ParallaxStyle = {
  transform: string;
};

const work = [
  {
    number: "01",
    eyebrow: "Consumer UX / Behavior Design",
    title: "Turning ambition into a daily operating rhythm.",
    body:
      "A motivation and planning system shaped around intent, energy, friction, and tiny commitments that compound over time.",
    details: ["North-star strategy", "Habit loop architecture", "Mobile-first interaction model"],
    tone: "work-card-a"
  },
  {
    number: "02",
    eyebrow: "AI Product / Trust Patterns",
    title: "Designing visible intelligence for uncertain moments.",
    body:
      "A framework for explainable AI states, confidence levels, editability, and human review across product workflows.",
    details: ["AI decision states", "Research synthesis", "Design system foundations"],
    tone: "work-card-b"
  },
  {
    number: "03",
    eyebrow: "Enterprise UX / Service Design",
    title: "Making dense operational work feel navigable.",
    body:
      "An information architecture and dashboard model that helps teams move from scanning to prioritizing to action.",
    details: ["Journey mapping", "Dashboard UX", "Cross-functional facilitation"],
    tone: "work-card-c"
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
    name: "RUX.AI Design",
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
        <div className="section-head">
          <p className="section-label">Selected work</p>
          <h2>Case studies designed as systems, not isolated screens.</h2>
        </div>

        <div className="mt-12 grid gap-8">
          {work.map((item) => (
            <article key={item.number} className={`case-study ${item.tone}`}>
              <div className="case-copy">
                <p className="case-number">{item.number}</p>
                <p className="case-eyebrow">{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <div className="case-tags">
                  {item.details.map((detail) => (
                    <span key={detail}>{detail}</span>
                  ))}
                </div>
              </div>
              <div className="case-art" aria-hidden="true">
                <div className="artifact-shell">
                  <div className="artifact-topbar">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="artifact-layout">
                    <div className="artifact-rail">
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="artifact-main">
                      <div className="artifact-hero-line" />
                      <div className="artifact-grid">
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="artifact-chart">
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="ai-playground" className="relative z-10 py-28">
        <div className="playground-marquee" aria-hidden="true">
          <span>AI Playground</span>
          <span>MotivOS</span>
          <span>RUX.AI Design</span>
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
