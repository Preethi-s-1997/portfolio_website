export type CaseStudy = {
  slug: string;
  number: string;
  eyebrow: string;
  title: string;
  productName: string;
  summary: string;
  role: string;
  duration: string;
  team: string;
  platform: string;
  theme: string;
  outcome: string;
  color: string;
  secondaryColor: string;
  backgroundColor: string;
  surfaceColor: string;
  textColor: string;
  typography: string;
  metrics: string[];
  challenge: string;
  approach: string;
  users: string[];
  flow: string[];
  colors: string[];
  research: {
    method: string;
    finding: string;
    impact: string;
  }[];
  journey: {
    stage: string;
    userNeed: string;
    friction: string;
    designMove: string;
  }[];
  lowFi: {
    screen: string;
    goal: string;
  }[];
  highFi: {
    screen: string;
    details: string;
  }[];
  prototype: {
    label: string;
    title: string;
    description: string;
    interaction: string;
    signals: string[];
  }[];
  uxDecisions: {
    title: string;
    body: string;
  }[];
  preview: "doctor-web" | "email-mobile" | "expense-mobile";
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "auralcare-ai-doctor-dashboard",
    number: "01",
    eyebrow: "Doctor dashboard / AI voice scheduling",
    title: "AI-assisted appointment scheduling for doctors.",
    productName: "AuralCare",
    summary:
      "A dark themed web dashboard where doctors can add, review, and manage appointments through an AI voice assistant while keeping full clinical control.",
    role: "Lead product designer",
    duration: "9 weeks",
    team: "1 PM, 2 engineers, 1 AI engineer, 1 clinical advisor",
    platform: "Responsive web application",
    theme: "Dark clinical command center",
    outcome:
      "Designed a voice-first appointment workflow that reduces scheduling interruptions while keeping every AI action confirmable and editable.",
    color: "#42E8B4",
    secondaryColor: "#7AA8FF",
    backgroundColor: "#071110",
    surfaceColor: "#101B1A",
    textColor: "#F7FBFF",
    typography:
      "Inter for dense dashboard readability, with tabular numeric treatment for time slots and AI confidence states.",
    metrics: ["Voice add in under 20 seconds", "92% parse-confidence target", "5-step scheduling flow reduced to 2 checks"],
    challenge:
      "Doctors often need to schedule follow-ups between consultations, but appointment creation competes with patient attention, clinical notes, and coordination tasks. A pure voice flow is fast, but unsafe if the system saves the wrong patient, date, or reason without a clear review step.",
    approach:
      "The design treats AI as an assistant, not an invisible automation layer. Voice input is captured in a persistent command dock, parsed into structured appointment fields, checked against conflicts, and then confirmed by the doctor before it enters the calendar.",
    users: ["Primary care doctors", "Specialists managing follow-ups", "Clinic coordinators"],
    flow: ["Tap voice dock", "Speak appointment intent", "AI parses structured details", "Conflict check runs", "Doctor confirms", "Calendar updates"],
    colors: ["#071110", "#101B1A", "#42E8B4", "#7AA8FF", "#F7FBFF"],
    research: [
      {
        method: "Contextual inquiry",
        finding:
          "Doctors capture appointment intent in fragments while moving between patient conversations, so the interface must tolerate partial input and quick correction.",
        impact:
          "The voice assistant became a persistent dock that can pause, resume, and expose parsed fields before saving."
      },
      {
        method: "Workflow mapping",
        finding:
          "Scheduling decisions depend on patient history, reason for visit, doctor availability, and clinic room constraints.",
        impact:
          "The dashboard pairs the calendar with patient context and conflict explanations instead of placing voice input in isolation."
      },
      {
        method: "Risk review",
        finding:
          "Incorrect scheduling data has operational consequences, especially when the wrong patient or follow-up reason is selected.",
        impact:
          "Every AI-created appointment requires visible confidence, editable fields, and a final doctor confirmation."
      }
    ],
    journey: [
      {
        stage: "Capture",
        userNeed: "I need to add the appointment without stopping my clinical flow.",
        friction: "Typing patient, time, and reason is slow during consult transitions.",
        designMove: "A voice command dock accepts natural language and keeps listening state visible."
      },
      {
        stage: "Parse",
        userNeed: "I need to know what the AI understood.",
        friction: "Voice systems feel risky when parsed details are hidden.",
        designMove: "The transcript converts into patient, date, time, reason, duration, and confidence fields."
      },
      {
        stage: "Resolve",
        userNeed: "I need to catch schedule conflicts before they affect the clinic.",
        friction: "Doctors do not want to inspect the whole calendar manually.",
        designMove: "The UI flags conflicts and suggests nearby open slots with the reason attached."
      },
      {
        stage: "Confirm",
        userNeed: "I need final control before the appointment is saved.",
        friction: "Automation without review can create clinical admin errors.",
        designMove: "A compact confirmation drawer shows the final appointment and audit trail."
      }
    ],
    lowFi: [
      { screen: "Dashboard shell", goal: "Validate sidebar, calendar, queue, and voice dock placement." },
      { screen: "Voice capture", goal: "Test whether transcript and parsed fields can coexist without clutter." },
      { screen: "Conflict check", goal: "Explore how to show blocked times and suggested alternatives." },
      { screen: "Confirmation drawer", goal: "Reduce the final review to the fields doctors actually verify." }
    ],
    highFi: [
      { screen: "Command dashboard", details: "Dark clinical layout with appointment timeline, patient queue, and voice assistant CTA." },
      { screen: "Listening state", details: "Live transcript, waveform, confidence meter, and extracted patient details." },
      { screen: "Conflict resolution", details: "AI highlights time conflicts and recommends safe nearby slots." },
      { screen: "Appointment review", details: "Doctor confirms structured details before saving into the schedule." }
    ],
    prototype: [
      {
        label: "Voice",
        title: "Voice appointment command dock",
        description:
          "The dock stays available across the dashboard so doctors can capture scheduling intent without navigating away.",
        interaction: "Start voice input and watch the transcript convert into appointment fields.",
        signals: ["Listening", "Transcript", "Patient match"]
      },
      {
        label: "Conflict",
        title: "AI conflict explanation",
        description:
          "The system does not only say there is a conflict; it shows why the slot is blocked and what alternatives are safe.",
        interaction: "Compare suggested time slots and inspect the reason behind each recommendation.",
        signals: ["No conflict", "Room blocked", "Doctor unavailable"]
      },
      {
        label: "Review",
        title: "Human confirmation before save",
        description:
          "The final save state keeps doctors in control with editable fields and a clear audit trail.",
        interaction: "Review structured fields before committing the appointment to the calendar.",
        signals: ["Edit fields", "92% confidence", "Audit saved"]
      }
    ],
    uxDecisions: [
      {
        title: "Voice never saves silently",
        body:
          "The assistant can speed up capture and parsing, but the doctor still sees and confirms the appointment before it enters the calendar."
      },
      {
        title: "Confidence appears beside the field it affects",
        body:
          "Instead of one generic AI score, confidence is attached to patient match, time, reason, and conflict status."
      },
      {
        title: "The calendar remains the source of truth",
        body:
          "The voice assistant lives beside the schedule, so doctors can understand every AI suggestion against the real clinic day."
      }
    ],
    preview: "doctor-web"
  },
  {
    slug: "mailtrace-email-footprint",
    number: "02",
    eyebrow: "Privacy utility / Email footprint tracker",
    title: "A light mobile app for tracing where an email is used.",
    productName: "MailTrace",
    summary:
      "A light themed mobile application that helps people see which apps, websites, subscriptions, and services are using their email address.",
    role: "Product designer",
    duration: "7 weeks",
    team: "Solo UX/UI with privacy advisor feedback",
    platform: "iOS and Android mobile application",
    theme: "Light privacy-first mobile app",
    outcome:
      "Created a calm email-footprint tracker that turns invisible account usage into clear, prioritized privacy actions.",
    color: "#315CFF",
    secondaryColor: "#12B981",
    backgroundColor: "#F8FAFC",
    surfaceColor: "#FFFFFF",
    textColor: "#1D2939",
    typography:
      "Inter for body clarity, with a rounded geometric display style for friendly privacy scores and section headings.",
    metrics: ["128 services discoverable in scan model", "4 risk groups", "3-action cleanup workflow"],
    challenge:
      "People reuse the same email across years of apps, sites, trials, stores, and subscriptions. They know their inbox is crowded, but they do not know which services still hold their identity or which ones deserve action first.",
    approach:
      "The app organizes email usage as a footprint map instead of an alarm feed. It separates verified connections from inferred matches, groups findings by risk and category, and gives each service a simple next action.",
    users: ["Privacy-conscious consumers", "Freelancers managing many accounts", "People cleaning old subscriptions"],
    flow: ["Connect inbox", "Scan for app/site usage", "Group services", "Review risk", "Unsubscribe or secure", "Track cleanup progress"],
    colors: ["#F8FAFC", "#FFFFFF", "#315CFF", "#12B981", "#1D2939"],
    research: [
      {
        method: "User interviews",
        finding:
          "Users worry about email exposure, but privacy tools that start with threat language make them feel overwhelmed.",
        impact:
          "The product tone became calm and action-oriented, with risk explained as cleanup priority rather than fear."
      },
      {
        method: "Competitive audit",
        finding:
          "Most unsubscribe or security tools separate subscriptions, breaches, and account reuse into different products.",
        impact:
          "MailTrace combines app/site usage, subscriptions, and risk status into a single email footprint view."
      },
      {
        method: "Concept testing",
        finding:
          "Users trusted the scan more when the app explained whether a connection was verified, inferred, or manually added.",
        impact:
          "Each service profile includes source confidence and the evidence behind the match."
      }
    ],
    journey: [
      {
        stage: "Connect",
        userNeed: "I need to understand what access the app needs before I trust it.",
        friction: "Privacy apps can feel invasive during setup.",
        designMove: "Plain-language permission cards explain read-only scanning and data handling."
      },
      {
        stage: "Discover",
        userNeed: "Show me where my email appears without dumping everything at once.",
        friction: "A long list of services feels like another inbox to clean.",
        designMove: "Findings are grouped into active, inactive, paid, risky, and unknown buckets."
      },
      {
        stage: "Inspect",
        userNeed: "I need to know why this service matters.",
        friction: "Users cannot prioritize if every item has the same weight.",
        designMove: "Service profiles show usage evidence, category, source confidence, and recommended action."
      },
      {
        stage: "Clean",
        userNeed: "Help me reduce exposure one step at a time.",
        friction: "Users do not want to hunt for unsubscribe or security settings.",
        designMove: "Action sheets offer unsubscribe, rotate alias, secure account, or mark as trusted."
      }
    ],
    lowFi: [
      { screen: "Permission onboarding", goal: "Test whether read-only access and privacy boundaries are understood." },
      { screen: "Footprint map", goal: "Explore service grouping before designing a polished dashboard." },
      { screen: "Risk list", goal: "Validate sorting by cleanup priority rather than panic level." },
      { screen: "Action sheet", goal: "Keep unsubscribe, secure, and trust actions reachable from one place." }
    ],
    highFi: [
      { screen: "Scan progress", details: "Light mobile UI with calm progress states and clear permission language." },
      { screen: "Footprint home", details: "Email usage score, service groups, and priority cleanup cards." },
      { screen: "Service detail", details: "Evidence, confidence, app/site category, and account risk context." },
      { screen: "Cleanup action", details: "Guided unsubscribe, secure, rotate alias, or mark trusted workflow." }
    ],
    prototype: [
      {
        label: "Scan",
        title: "Calm scan onboarding",
        description:
          "The app explains what is being scanned and why, using plain language instead of security jargon.",
        interaction: "Move from permission explanation into first scan progress.",
        signals: ["Read-only", "Encrypted", "No email content stored"]
      },
      {
        label: "Map",
        title: "Email footprint home",
        description:
          "The home screen shows where the email is used and which categories need attention first.",
        interaction: "Tap a footprint group to reveal services and priority actions.",
        signals: ["128 sites", "34 inactive", "9 high priority"]
      },
      {
        label: "Action",
        title: "One-service cleanup flow",
        description:
          "Users can unsubscribe, secure, or mark a service as trusted without losing context.",
        interaction: "Review service evidence and choose the next best action.",
        signals: ["Unsubscribe", "Secure", "Trusted"]
      }
    ],
    uxDecisions: [
      {
        title: "Privacy is explained before value is promised",
        body:
          "The onboarding leads with what access is needed, what is not stored, and how users stay in control."
      },
      {
        title: "Risk is grouped by action",
        body:
          "Instead of a scary score alone, every risk state maps to a cleanup action users can actually take."
      },
      {
        title: "Source confidence is visible",
        body:
          "Verified, inferred, and manual matches are labeled so users understand why a service appears in their footprint."
      }
    ],
    preview: "email-mobile"
  },
  {
    slug: "spendlens-receipt-expenses",
    number: "03",
    eyebrow: "Smart expense tracking / Receipt AI",
    title: "A dark mobile app that turns receipts into expenses.",
    productName: "SpendLens",
    summary:
      "A dark themed mobile expense tracker where users share a receipt and AI reads the merchant, amount, tax, category, and line items before adding the expense.",
    role: "Product designer",
    duration: "8 weeks",
    team: "1 PM, 2 mobile engineers, 1 ML engineer",
    platform: "iOS and Android mobile application",
    theme: "Dark premium personal finance app",
    outcome:
      "Designed a receipt-first expense flow that removes manual entry while preserving review, correction, and budget confidence.",
    color: "#F7C948",
    secondaryColor: "#FF7A5C",
    backgroundColor: "#080A0D",
    surfaceColor: "#151922",
    textColor: "#F6F0E8",
    typography:
      "Inter for interface clarity, with tabular numbers for amounts, budgets, taxes, and parsed receipt totals.",
    metrics: ["Receipt-to-entry in 3 screens", "Item-level parsing model", "Manual entry reduced to review and confirm"],
    challenge:
      "Expense tracking breaks down because people delay manual entry until receipts pile up. Automation solves the speed problem, but users still need to trust the extracted amount, category, tax, and split items before the app updates their budget.",
    approach:
      "The flow starts from sharing a receipt photo, screenshot, or PDF. AI extracts structured data, highlights uncertain fields, lets users correct details quickly, then adds the entry and shows the budget impact immediately.",
    users: ["Young professionals", "Small business owners", "Roommates splitting expenses"],
    flow: ["Share receipt", "AI reads receipt", "Review extracted fields", "Confirm category", "Add expense", "Update budget insights"],
    colors: ["#080A0D", "#151922", "#F7C948", "#FF7A5C", "#F6F0E8"],
    research: [
      {
        method: "Behavior interviews",
        finding:
          "Users abandon expense apps when manual entry feels like a second chore after paying.",
        impact:
          "The core interaction shifted from form entry to share-sheet receipt intake."
      },
      {
        method: "Receipt audit",
        finding:
          "Receipts vary heavily across merchants, taxes, discounts, tips, and split payments.",
        impact:
          "The review screen highlights uncertain fields and supports item-level correction."
      },
      {
        method: "Prototype testing",
        finding:
          "Users liked automation but wanted to see budget impact before confirming the final entry.",
        impact:
          "A budget preview appears before save, showing category effect and monthly trend."
      }
    ],
    journey: [
      {
        stage: "Capture",
        userNeed: "I want to add the expense the moment I get the receipt.",
        friction: "Opening an app and typing details breaks the payment flow.",
        designMove: "A share-sheet and camera-first intake accept photos, screenshots, and PDFs."
      },
      {
        stage: "Extract",
        userNeed: "Let AI handle the boring details.",
        friction: "Receipt formats vary and OCR can misread totals or tax.",
        designMove: "The extraction state separates confirmed fields from fields that need review."
      },
      {
        stage: "Review",
        userNeed: "I need to fix mistakes quickly before saving money data.",
        friction: "Full forms make correction feel as slow as manual entry.",
        designMove: "Inline chips let users edit amount, merchant, category, split, and tax in place."
      },
      {
        stage: "Learn",
        userNeed: "Show me what this purchase means for my budget.",
        friction: "Expense logs are less useful without immediate context.",
        designMove: "After confirmation, the app shows category impact, trend, and smart insight."
      }
    ],
    lowFi: [
      { screen: "Receipt intake", goal: "Test camera, file, screenshot, and share-sheet entry points." },
      { screen: "Parsed fields", goal: "Explore how uncertain OCR fields should be flagged." },
      { screen: "Budget impact", goal: "Validate whether users want preview before or after save." },
      { screen: "Expense history", goal: "Design a scannable record of receipts and smart categories." }
    ],
    highFi: [
      { screen: "Capture receipt", details: "Dark scanner UI with receipt edges, import options, and quick capture." },
      { screen: "AI review", details: "Merchant, total, tax, category, and item list with confidence indicators." },
      { screen: "Budget insight", details: "Shows how the new expense changes monthly category progress." },
      { screen: "Expense detail", details: "Final saved entry with receipt image, parsed fields, and smart notes." }
    ],
    prototype: [
      {
        label: "Capture",
        title: "Receipt-first intake",
        description:
          "Users add expenses from camera, share sheet, screenshot, or PDF instead of starting with a blank form.",
        interaction: "Choose an intake source and move into receipt reading.",
        signals: ["Camera", "Share sheet", "PDF"]
      },
      {
        label: "Review",
        title: "AI extraction review",
        description:
          "Extracted fields are easy to scan, and uncertain values are visually marked before saving.",
        interaction: "Tap an uncertain field to correct merchant, total, category, or tax.",
        signals: ["Total found", "Tax uncertain", "Category suggested"]
      },
      {
        label: "Insight",
        title: "Budget impact preview",
        description:
          "The app shows category impact immediately so the entry feels useful, not just stored.",
        interaction: "Confirm the expense and inspect the updated monthly budget state.",
        signals: ["Food +8%", "Split available", "Receipt saved"]
      }
    ],
    uxDecisions: [
      {
        title: "The receipt is the starting point",
        body:
          "The app respects the moment of payment by letting users share the artifact they already have instead of typing a form."
      },
      {
        title: "Uncertainty is designed into the review",
        body:
          "AI extraction errors are expected, so uncertain values are marked and editable without forcing users through a long form."
      },
      {
        title: "Saving includes immediate feedback",
        body:
          "The confirmation state shows how the expense affects budget progress, which makes tracking feel rewarding."
      }
    ],
    preview: "expense-mobile"
  }
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
