"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarCheck,
  CheckCircle2,
  CircleDot,
  MailSearch,
  Mic2,
  MousePointer2,
  ReceiptText,
  ShieldCheck,
  Stethoscope,
  WalletCards
} from "lucide-react";
import type { CSSProperties } from "react";
import { useState } from "react";
import type { CaseStudy } from "@/lib/case-studies";

export function CaseStudyExperience({ study }: { study: CaseStudy }) {
  const [activeResearch, setActiveResearch] = useState(0);
  const [activeJourney, setActiveJourney] = useState(0);
  const [activePrototype, setActivePrototype] = useState(0);

  const research = study.research[activeResearch];
  const journey = study.journey[activeJourney];
  const prototype = study.prototype[activePrototype];

  return (
    <main className="case-page min-h-screen bg-[#050505] text-[#f5efe3]">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="noise-layer" />
        <div className="ambient-field" />
      </div>

      <header className="relative z-10 mx-auto flex max-w-[1500px] items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
        <Link href="/#work" className="inline-flex items-center gap-2 text-sm text-[#f5efe3]/68 transition hover:text-[#f5efe3]">
          <ArrowLeft className="h-4 w-4" />
          Back to work
        </Link>
        <Link href="/" className="brand-mark" aria-label="Preethi Suresh home">
          PS
        </Link>
      </header>

      <section className="relative z-10 mx-auto grid max-w-[1500px] gap-12 px-4 pb-20 pt-8 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="section-label" style={{ color: study.color }}>
            {study.eyebrow}
          </p>
          <p className="case-product-name">{study.productName}</p>
          <h1 className="case-hero-title">{study.title}</h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-[#f5efe3]/72">{study.summary}</p>
        </div>

        <div className="case-hero-panel">
          <div className="case-hero-number" style={{ color: study.color }}>
            {study.number}
          </div>
          <div className="case-meta-grid">
            <span>
              <strong>Role</strong>
              {study.role}
            </span>
            <span>
              <strong>Duration</strong>
              {study.duration}
            </span>
            <span>
              <strong>Team</strong>
              {study.team}
            </span>
            <span>
              <strong>Platform</strong>
              {study.platform}
            </span>
            <span>
              <strong>Theme</strong>
              {study.theme}
            </span>
            <span>
              <strong>Outcome</strong>
              {study.outcome}
            </span>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-[1500px] gap-5 px-4 pb-24 sm:px-6 lg:grid-cols-3 lg:px-8">
        {study.metrics.map((metric) => (
          <div key={metric} className="metric-tile">
            <CircleDot className="h-5 w-5" style={{ color: study.color }} />
            <span>{metric}</span>
          </div>
        ))}
      </section>

      <section className="relative z-10 mx-auto grid max-w-[1500px] gap-8 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <article className="ux-story-block">
          <p className="section-label">Problem</p>
          <h2>The UX challenge</h2>
          <p>{study.challenge}</p>
        </article>
        <article className="ux-story-block">
          <p className="section-label">Approach</p>
          <h2>Design strategy</h2>
          <p>{study.approach}</p>
        </article>
      </section>

      <section className="relative z-10 mx-auto grid max-w-[1500px] gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
        <div className="sticky-panel">
          <p className="section-label">Research synthesis</p>
          <h2 className="case-section-title">Who it serves and how the product moves.</h2>
          <p className="mt-5 text-[#f5efe3]/66">
            The product model is built around primary users, the core end-to-end flow, and the moments where trust or friction can break.
          </p>
        </div>

        <div className="case-system-grid">
          <article className="case-system-card">
            <p>Primary users</p>
            <div className="case-chip-list">
              {study.users.map((user) => (
                <span key={user}>{user}</span>
              ))}
            </div>
          </article>
          <article className="case-system-card">
            <p>End-to-end flow</p>
            <ol className="case-flow-list">
              {study.flow.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </article>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-[1500px] gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
        <div className="sticky-panel">
          <p className="section-label">Research interaction</p>
          <h2 className="case-section-title">Evidence before interface.</h2>
          <p className="mt-5 text-[#f5efe3]/66">
            Select each research input to see how it changed the design direction.
          </p>
        </div>

        <div className="interactive-panel">
          <div className="segmented-controls">
            {study.research.map((item, index) => (
              <button
                key={item.method}
                className={activeResearch === index ? "is-active" : ""}
                onClick={() => setActiveResearch(index)}
                type="button"
              >
                {item.method}
              </button>
            ))}
          </div>
          <div className="research-card">
            <p>Finding</p>
            <h3>{research.finding}</h3>
            <div>
              <CheckCircle2 className="h-5 w-5" style={{ color: study.color }} />
              <span>{research.impact}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-[1500px] gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
        <div className="sticky-panel">
          <p className="section-label">Visual system</p>
          <h2 className="case-section-title">Colors, typography, and interface tone.</h2>
          <p className="mt-5 text-[#f5efe3]/66">
            Each product has a different product mood: clinical dark dashboard, light privacy utility, and premium dark finance app.
          </p>
        </div>

        <div className="visual-system-case">
          <div className="case-palette">
            {study.colors.map((color) => (
              <span key={color} style={{ background: color }}>
                {color}
              </span>
            ))}
          </div>
          <div className="case-type-card">
            <p>Typography</p>
            <h3>Aa 123</h3>
            <span>{study.typography}</span>
          </div>
          <div className="case-tone-card" style={{ "--case-accent": study.color } as CSSProperties}>
            <p>Interface tone</p>
            <strong>{study.theme}</strong>
            <span style={{ background: study.color }} />
            <span style={{ background: study.secondaryColor }} />
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-[1500px] gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="section-label">Journey map</p>
          <h2 className="case-section-title">From friction to design move.</h2>
          <p className="mt-5 text-[#f5efe3]/66">
            The journey is interactive: choose a stage to inspect the user need, friction, and interface response.
          </p>
        </div>

        <div className="journey-shell">
          <div className="journey-tabs">
            {study.journey.map((item, index) => (
              <button
                key={item.stage}
                className={activeJourney === index ? "is-active" : ""}
                onClick={() => setActiveJourney(index)}
                type="button"
              >
                <span>0{index + 1}</span>
                {item.stage}
              </button>
            ))}
          </div>
          <div className="journey-detail">
            <div>
              <p>User need</p>
              <h3>{journey.userNeed}</h3>
            </div>
            <div>
              <p>Friction</p>
              <span>{journey.friction}</span>
            </div>
            <div>
              <p>Design move</p>
              <span>{journey.designMove}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-[1500px] gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
        <div className="sticky-panel">
          <p className="section-label">Prototype interaction</p>
          <h2 className="case-section-title">UI behavior, not just UI screens.</h2>
          <p className="mt-5 text-[#f5efe3]/66">
            Switch prototype states to see how the interface changes its hierarchy, cues, and available actions.
          </p>
        </div>

        <div className="prototype-lab">
          <div className="prototype-controls">
            {study.prototype.map((item, index) => (
              <button
                key={item.label}
                className={activePrototype === index ? "is-active" : ""}
                onClick={() => setActivePrototype(index)}
                type="button"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="prototype-screen" style={{ "--case-accent": study.color } as CSSProperties}>
            <div className="prototype-top">
              <span />
              <span />
              <span />
            </div>
            <div className="prototype-body">
              <div className="prototype-sidebar">
                {study.prototype.map((item, index) => (
                  <button
                    key={item.label}
                    className={activePrototype === index ? "is-active" : ""}
                    onClick={() => setActivePrototype(index)}
                    type="button"
                    aria-label={`Show ${item.label}`}
                  />
                ))}
              </div>
              <div className="prototype-content">
                <p className="prototype-kicker">
                  <MousePointer2 className="h-4 w-4" />
                  {prototype.interaction}
                </p>
                <h3>{prototype.title}</h3>
                <p>{prototype.description}</p>
                <div className="prototype-signal-grid">
                  {prototype.signals.map((signal, index) => (
                    <button
                      key={signal}
                      className={index === activePrototype ? "is-active" : ""}
                      onClick={() => setActivePrototype(index % study.prototype.length)}
                      type="button"
                    >
                      {signal}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1500px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="section-head">
          <p className="section-label">Low fidelity UI</p>
          <h2>Wireframes for validating structure before visual polish.</h2>
        </div>
        <div className="case-wireframe-grid mt-12">
          {study.lowFi.map((wireframe) => (
            <article key={wireframe.screen} className="case-wireframe">
              <div className="wireframe-top" />
              <div className="wireframe-line wide" />
              <div className="wireframe-line" />
              <div className="wireframe-blocks">
                <span />
                <span />
                <span />
              </div>
              <h3>{wireframe.screen}</h3>
              <p>{wireframe.goal}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1500px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="section-head">
          <p className="section-label">High fidelity UI</p>
          <h2>Final interface direction across the complete product flow.</h2>
        </div>
        <div className="case-hifi-showcase mt-12" style={{ "--case-accent": study.color, "--case-secondary": study.secondaryColor } as CSSProperties}>
          <div className="case-hifi-notes">
            {study.highFi.map((screen) => (
              <article key={screen.screen}>
                <span>{screen.screen}</span>
                <p>{screen.details}</p>
              </article>
            ))}
          </div>
          <CaseHighFidelityPreview study={study} />
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-[1500px] px-4 py-20 sm:px-6 lg:px-8">
        <div className="section-head">
          <p className="section-label">UX decisions</p>
          <h2>Key decisions that shaped the final experience.</h2>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {study.uxDecisions.map((decision) => (
            <article key={decision.title} className="decision-card">
              <h3>{decision.title}</h3>
              <p>{decision.body}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="relative z-10 border-t border-[#f5efe3]/12 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <Link href="/#work" className="command-link w-fit">
            Back to case studies
          </Link>
          <a className="inline-flex items-center gap-2 text-[#f5efe3]/70 transition hover:text-[#f5efe3]" href="mailto:hello@preethisuresh.com">
            Discuss a project <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </footer>
    </main>
  );
}

function CaseHighFidelityPreview({ study }: { study: CaseStudy }) {
  if (study.preview === "doctor-web") {
    return <DoctorCasePreview screens={study.highFi.map((screen) => screen.screen)} />;
  }

  return (
    <MobileCasePreview
      screens={study.highFi.map((screen) => screen.screen)}
      light={study.preview === "email-mobile"}
      receipt={study.preview === "expense-mobile"}
    />
  );
}

function DoctorCasePreview({ screens }: { screens: string[] }) {
  return (
    <div className="case-doctor-ui">
      <aside>
        <Stethoscope className="h-6 w-6" />
        <span />
        <span />
        <span />
        <span />
      </aside>
      <section>
        <header>
          <div>
            <p>AI schedule command</p>
            <h3>Today&apos;s clinical flow</h3>
          </div>
          <button type="button">
            <CalendarCheck className="h-4 w-4" />
            Add by voice
          </button>
        </header>
        <div className="case-doctor-grid">
          <div className="case-doctor-list">
            {screens.map((screen, index) => (
              <article key={screen}>
                <span>{index + 9}:30</span>
                <p>{screen}</p>
                <i />
              </article>
            ))}
          </div>
          <div className="case-voice-card">
            <Mic2 className="h-8 w-8" />
            <p>&ldquo;Book Maya Rao tomorrow at 4 PM for follow-up.&rdquo;</p>
            <span>Patient matched</span>
            <span>No conflict</span>
            <span>92% confidence</span>
          </div>
        </div>
      </section>
    </div>
  );
}

function MobileCasePreview({
  screens,
  light,
  receipt
}: {
  screens: string[];
  light: boolean;
  receipt: boolean;
}) {
  return (
    <div className="case-mobile-ui-row">
      {screens.map((screen, index) => (
        <article key={screen} className={`case-phone ${light ? "case-phone-light" : "case-phone-dark"}`}>
          <div className="case-phone-speaker" />
          <div className="case-phone-status">
            <span>9:{index}4</span>
            <span>{receipt ? "SpendLens" : "MailTrace"}</span>
          </div>
          <div className="case-phone-title">
            {receipt ? <ReceiptText className="h-5 w-5" /> : <MailSearch className="h-5 w-5" />}
            <p>{screen}</p>
          </div>
          <div className="case-phone-hero">
            {receipt ? (
              <>
                <WalletCards className="h-5 w-5" />
                <strong>{index === 0 ? "$86.42" : index === 1 ? "94%" : "Food +8%"}</strong>
                <span>{index === 0 ? "Receipt found" : index === 1 ? "Fields parsed" : "Budget impact"}</span>
              </>
            ) : (
              <>
                <ShieldCheck className="h-5 w-5" />
                <strong>{index === 0 ? "128" : index === 1 ? "34" : "9"}</strong>
                <span>{index === 0 ? "sites found" : index === 1 ? "inactive accounts" : "high priority"}</span>
              </>
            )}
          </div>
          <div className="case-phone-list">
            <span />
            <span />
            <span />
          </div>
          <button type="button">{receipt ? "Review expense" : "Take action"}</button>
        </article>
      ))}
    </div>
  );
}
