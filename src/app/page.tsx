import {
  ArrowTrendingUpIcon,
  BoltIcon,
  CursorArrowRaysIcon,
  PlayCircleIcon,
  Squares2X2Icon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { FAQ } from "@/components/faq";

const stats = [
  { label: "Playbooks shipped", value: "240+" },
  { label: "Experiments automated", value: "1.2k" },
  { label: "Team velocity boost", value: "3.4×" },
];

const tracks = [
  {
    title: "Sensemaking Canvas",
    description:
      "Cluster research, map signals, and translate insights into problem statements in minutes.",
    icon: Squares2X2Icon,
    bullets: [
      "Adaptive mind-maps that evolve with every input",
      "Auto-tagging for personas, constraints, and outcomes",
      "One-click export to FigJam, Notion, and Linear",
    ],
  },
  {
    title: "Scenario Lab",
    description:
      "Prototype agent workflows with guardrails, coverage checks, and observable telemetry baked in.",
    icon: BoltIcon,
    bullets: [
      "Composable step library with 65+ agent skills",
      "Live evaluation harness and red-team prompts",
      "Versioned sandboxes for rapid branching",
    ],
  },
  {
    title: "Launch Console",
    description:
      "Graduate concepts into production runbooks with collaborative reviews and scheduled releases.",
    icon: ArrowTrendingUpIcon,
    bullets: [
      "Role-based approvals and decision signatures",
      "Automated KPI pulse reports in Slack and email",
      "Experiment snapshots you can replay on demand",
    ],
  },
];

const rituals = [
  {
    stage: "Orientation",
    title: "Frame the opportunity",
    detail:
      "Drop research, transcripts, or raw notes. Atlas seeds a canvas, spots patterns, and pushes the best hypotheses to your team dashboard.",
  },
  {
    stage: "Design",
    title: "Assemble the agent flow",
    detail:
      "Craft multi-step flows, wire in your own APIs, and preview agent behaviour with deterministic replays.",
  },
  {
    stage: "Validation",
    title: "Battle-test with evidence",
    detail:
      "Spin up randomized cohorts, score output quality, and capture regression insights before shipping.",
  },
  {
    stage: "Launch",
    title: "Orchestrate the rollout",
    detail:
      "Assign owners, automate comms, and track the north-star metrics that matter for your operating model.",
  },
];

const faqEntries = [
  {
    question: "Can Atlas plug into our existing research and product stack?",
    answer:
      "Yes. Native connectors support Notion, Confluence, Airtable, Linear, Slack, and custom webhooks. Each integration can be scoped to specific workspaces or teams.",
  },
  {
    question: "How does the Scenario Lab keep experiments safe?",
    answer:
      "Guardrails let you define hard limits, banned topics, and fallback responses. We also store deterministic run histories so you can replay, audit, and version any flow.",
  },
  {
    question: "Do we need engineers to configure agent workflows?",
    answer:
      "Atlas ships with a no-code canvas for orchestration plus a code-first SDK. Non-technical teams can ship quickly, while engineers can extend with TypeScript modules.",
  },
  {
    question: "What does onboarding look like?",
    answer:
      "Teams start with a two-week Pathfinder sprint. We import your current artifacts, run a design workshop, and stand up core workflows with your operating rhythm.",
  },
];

const resources = [
  {
    title: "Playbook Gallery",
    description:
      "Download high-impact agent playbooks for insights synthesis, journey mapping, and go-to-market motions.",
    action: "Browse templates",
    href: "#",
  },
  {
    title: "AI Operations Field Guide",
    description:
      "A 48-page handbook on designing responsible AI rituals, decision cadences, and governance paths.",
    action: "Read the guide",
    href: "#",
  },
  {
    title: "Signal Dispatch",
    description:
      "A twice-monthly digest of agent best practices, pattern libraries, and emerging operating models.",
    action: "Join the list",
    href: "#",
  },
];

export default function Home() {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-20 px-6 pb-24 pt-12 sm:gap-24 sm:px-10 lg:px-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(124,58,237,0.3),_transparent_55%),radial-gradient(circle_at_20%_40%,_rgba(14,165,233,0.18),_transparent_45%)]" />
      <header className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:p-7">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-sky-400 to-teal-300 text-lg font-semibold text-white shadow-lg shadow-indigo-500/30">
            AA
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-indigo-200/80">
              Agentic Atlas
            </p>
            <p className="text-sm text-indigo-100/70">
              Design, validate, and launch AI operating rituals.
            </p>
          </div>
        </div>
        <nav className="flex items-center justify-between gap-3 text-sm sm:text-base">
          <Link
            href="#tracks"
            className="rounded-full px-4 py-2 text-indigo-100 transition hover:bg-white/10"
          >
            Product
          </Link>
          <Link
            href="#rituals"
            className="rounded-full px-4 py-2 text-indigo-100 transition hover:bg-white/10"
          >
            Rituals
          </Link>
          <Link
            href="#faq"
            className="rounded-full px-4 py-2 text-indigo-100 transition hover:bg-white/10"
          >
            FAQ
          </Link>
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-indigo-900 transition hover:scale-[1.02] hover:bg-indigo-50"
          >
            Book a Pathfinder
            <ArrowTrendingUpIcon className="h-4 w-4" />
          </Link>
        </nav>
      </header>

      <main className="flex flex-col gap-24">
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-7 py-16 backdrop-blur-3xl sm:px-12 lg:flex lg:items-center lg:justify-between">
          <div className="absolute inset-x-6 bottom-0 h-1/2 rounded-t-[40px] bg-gradient-to-t from-white/5 via-transparent to-transparent sm:inset-x-10" />
          <div className="relative z-10 max-w-xl space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-100">
              <SparklesIcon className="h-4 w-4" />
              Intelligent operating models
            </span>
            <h1 className="text-4xl font-semibold leading-[1.2] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Guide every AI idea from signal to shipped outcome.
            </h1>
            <p className="text-lg text-indigo-100/80 sm:text-xl">
              Atlas gives cross-functional teams a shared workspace to explore,
              orchestrate, and launch agentic workflows with confidence. Spin up
              aligned rituals that feel like your operating system—not a
              template.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="#tracks"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-teal-300 px-7 py-3 text-base font-semibold text-slate-950 shadow-xl shadow-indigo-500/40 transition hover:scale-[1.02]"
              >
                Explore the product
                <CursorArrowRaysIcon className="h-5 w-5" />
              </Link>
              <Link
                href="#resources"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3 text-base font-semibold text-indigo-100 transition hover:border-white/50 hover:text-white"
              >
                Watch a walkthrough
                <PlayCircleIcon className="h-5 w-5" />
              </Link>
            </div>
            <div className="grid gap-4 rounded-2xl border border-white/10 bg-black/20 p-5 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col border-l border-white/15 pl-4 first:border-none first:pl-0 sm:border-none sm:pl-0"
                >
                  <span className="text-3xl font-semibold text-white">
                    {item.value}
                  </span>
                  <span className="text-xs uppercase tracking-[0.3em] text-indigo-100/70">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-12 w-full max-w-md self-stretch lg:mt-0">
            <div className="absolute inset-4 -z-10 rounded-3xl bg-gradient-to-br from-indigo-500/40 via-sky-500/30 to-teal-300/40 blur-3xl" />
            <div className="relative flex h-full w-full min-h-[420px] flex-col justify-between rounded-3xl border border-white/10 bg-black/30 p-8 shadow-2xl shadow-indigo-900/40">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-indigo-100/80">
                  Pathfinder Sprint
                </p>
                <div className="flex items-center gap-1 text-xs text-indigo-200/80">
                  <span className="h-2 w-2 rounded-full bg-teal-300" />
                  Live
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-indigo-100/60">
                    Week 1
                    <span>Discovery</span>
                  </div>
                  <p className="text-base font-medium text-white">
                    Shape the opportunity using Atlas canvases and
                    auto-synthesized insights.
                  </p>
                  <div className="space-y-1 text-sm text-indigo-100/70">
                    <p>• Signal clustering</p>
                    <p>• Stakeholder heatmap</p>
                    <p>• Outcome charter</p>
                  </div>
                </div>
                <div className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-indigo-100/60">
                    Week 2
                    <span>Experiment</span>
                  </div>
                  <p className="text-base font-medium text-white">
                    Assemble the launch runbook and define KPIs, guardrails, and
                    telemetry.
                  </p>
                  <div className="space-y-1 text-sm text-indigo-100/70">
                    <p>• Flow architecture</p>
                    <p>• Evaluation harness</p>
                    <p>• Launch review</p>
                  </div>
                </div>
              </div>
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white/90 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white">
                Download the sprint brief
                <ArrowTrendingUpIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        <section
          id="tracks"
          className="space-y-12 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-2xl sm:p-12"
        >
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-indigo-100/70">
              Modular tracks
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Navigate the operating stack with three integrated workspaces.
            </h2>
            <p className="text-lg text-indigo-100/75">
              Seamlessly move from exploration to launch without context
              switching. Atlas keeps artifacts in sync, automates rituals, and
              surfaces the right next step for every teammate.
            </p>
          </div>
          <div className="grid gap-7 lg:grid-cols-3">
            {tracks.map((track) => (
              <article
                key={track.title}
                className="group relative flex flex-col gap-6 rounded-3xl border border-white/10 bg-black/20 p-7 shadow-xl shadow-indigo-900/30 transition hover:-translate-y-1 hover:border-white/30"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/0 via-white/0 to-white/0 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:via-white/5 group-hover:to-white/10" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/90 to-sky-400/90 text-white shadow-lg shadow-indigo-500/40">
                  <track.icon className="h-6 w-6" />
                </div>
                <div className="relative space-y-3">
                  <h3 className="text-2xl font-semibold text-white">
                    {track.title}
                  </h3>
                  <p className="text-sm text-indigo-100/70">{track.description}</p>
                </div>
                <ul className="relative space-y-2 text-sm text-indigo-100/70">
                  {track.bullets.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#"
                  className="relative inline-flex items-center gap-2 self-start rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-100/80 transition hover:border-white/50 hover:text-white"
                >
                  View sample canvas
                  <ArrowTrendingUpIcon className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section
          id="rituals"
          className="space-y-12 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 via-transparent to-sky-400/10 p-7 backdrop-blur-xl sm:p-12"
        >
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-indigo-100/70">
              Operating rhythm
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              A repeatable ritual that gives clarity at every stage.
            </h2>
            <p className="text-lg text-indigo-100/75">
              Atlas pairs human intuition with automated guardrails, making AI
              operations measurable and auditable without slowing teams down.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {rituals.map((ritual, index) => (
              <div
                key={ritual.stage}
                className="group relative flex flex-col gap-4 rounded-3xl border border-white/15 bg-black/30 p-6 shadow-xl shadow-indigo-900/30 transition hover:-translate-y-1 hover:border-white/40"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/0 via-white/0 to-white/0 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:via-white/5 group-hover:to-white/10" />
                <span className="relative text-xs font-semibold uppercase tracking-[0.4em] text-indigo-100/60">
                  {String(index + 1).padStart(2, "0")} · {ritual.stage}
                </span>
                <h3 className="relative text-xl font-semibold text-white">
                  {ritual.title}
                </h3>
                <p className="relative text-sm text-indigo-100/70">
                  {ritual.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="resources"
          className="space-y-10 rounded-3xl border border-white/10 bg-black/40 p-7 shadow-2xl shadow-indigo-900/40 backdrop-blur-2xl sm:p-12"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-indigo-100/70">
                Signals & resources
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Equip your team with the latest patterns and playbooks.
              </h2>
            </div>
            <Link
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-100/80 transition hover:border-white/40 hover:text-white"
            >
              View all resources
              <ArrowTrendingUpIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {resources.map((resource) => (
              <article
                key={resource.title}
                className="group relative flex flex-col gap-5 rounded-3xl border border-white/15 bg-white/[0.03] p-6 shadow-lg shadow-indigo-900/30 transition duration-500 hover:-translate-y-1 hover:border-white/35"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/0 via-indigo-200/0 to-white/0 opacity-0 transition group-hover:opacity-100 group-hover:via-indigo-500/10 group-hover:to-white/10" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-400 text-white shadow-lg shadow-indigo-500/50">
                  <SparklesIcon className="h-6 w-6" />
                </div>
                <div className="relative space-y-3">
                  <h3 className="text-2xl font-semibold text-white">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-indigo-100/70">
                    {resource.description}
                  </p>
                </div>
                <Link
                  href={resource.href}
                  className="relative inline-flex items-center gap-2 self-start rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-100 transition hover:bg-white/20 hover:text-white"
                >
                  {resource.action}
                  <ArrowTrendingUpIcon className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section
          id="faq"
          className="space-y-10 rounded-3xl border border-white/10 bg-white/10 p-7 backdrop-blur-2xl sm:p-12"
        >
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-indigo-900/70">
              Clarity
            </p>
            <h2 className="text-3xl font-semibold text-slate-950 sm:text-4xl">
              Answers before you book a Pathfinder sprint.
            </h2>
            <p className="text-lg text-slate-800/80">
              From integrations to security posture, we designed Atlas to meet
              the standards of modern product and operations teams.
            </p>
          </div>
          <FAQ items={faqEntries} />
        </section>
      </main>

      <footer className="flex flex-col items-center justify-between gap-5 rounded-3xl border border-white/10 bg-white/5 px-6 py-8 text-xs text-indigo-100/70 backdrop-blur-xl sm:flex-row sm:gap-3">
        <p>© {new Date().getFullYear()} Agentic Atlas. Crafted for teams shipping AI rituals.</p>
        <div className="flex items-center gap-4">
          <Link href="#" className="transition hover:text-white">
            Privacy
          </Link>
          <Link href="#" className="transition hover:text-white">
            Security
          </Link>
          <Link href="#" className="transition hover:text-white">
            Request a live session
          </Link>
        </div>
      </footer>
    </div>
  );
}
