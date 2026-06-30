import Image from "next/image";
import {
  ArrowUpRight,
  Bot,
  Blocks,
  Calendar,
  Code2,
  Database,
  Mail,
  MapPin,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TimerReset,
  TrendingUp,
  Zap,
} from "lucide-react";
import { personal, services, socialLinks } from "@/data/content";
import TypedText from "./TypedText";
import RevealOnScroll from "./RevealOnScroll";

const profilePortrait = "https://avatars.githubusercontent.com/u/83217710?s=1000&v=4";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  code: Code2,
  smartphone: Smartphone,
  bot: Bot,
  database: Database,
  "trending-up": TrendingUp,
  blocks: Blocks,
};

const TRUST_SIGNALS = [
  { label: "Production builds", value: "25+", icon: ShieldCheck },
  { label: "Response mindset", value: "<24h", icon: TimerReset },
  { label: "Full-stack delivery", value: "End-to-end", icon: Zap },
];

const BUILD_PATH = [
  {
    step: "01",
    title: "Clarify",
    detail: "Turn rough ideas into a clean product scope and user journey.",
  },
  {
    step: "02",
    title: "Build",
    detail: "Ship interfaces, APIs, dashboards, automations, and integrations.",
  },
  {
    step: "03",
    title: "Polish",
    detail: "Optimize performance, UX details, responsiveness, and launch readiness.",
  },
];

export default function Hero() {
  return (
    <section id="home" className="px-6 md:px-10 lg:px-16 pt-32 pb-16 md:pt-36">
      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 lg:gap-16 items-start">
        <RevealOnScroll variant="left">
          <aside className="profile-shell sticky top-28 flex flex-col gap-6">
            <div className="profile-image perspective-card group w-full aspect-[4/5] relative overflow-hidden">
              <Image
                src={profilePortrait}
                alt={personal.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 340px"
              />
              <div className="pointer-events-none absolute inset-x-4 bottom-4 translate-y-4 rounded-2xl border border-white/10 bg-black/40 p-4 opacity-0 backdrop-blur-xl transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 dark:bg-black/40">
                <span className="trust-chip">Available for selected builds</span>
                <p className="mt-3 !text-xs !leading-relaxed !text-white/75">
                  I design systems that reduce founder workload, improve decision
                  visibility, and convert ideas into shipped products.
                </p>
              </div>
            </div>

            <ul className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-pill premium-focus"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </RevealOnScroll>

        <div className="pt-2 lg:pt-10">
          <RevealOnScroll delay={100}>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="trust-chip">
                <Sparkles className="h-3.5 w-3.5" />
                Product-minded full-stack engineer
              </span>
              <span className="trust-chip">SaaS + Dashboards + AI Automation</span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <h5 className="text-base font-normal mb-3">
              {personal.greeting}{" "}
              <span role="img" aria-label="waving hand">
                👋
              </span>
            </h5>
          </RevealOnScroll>

          <RevealOnScroll delay={260}>
            <h1 className="hero-big mb-6">
              I&apos;m {personal.name}
              <br />I build product systems like a <TypedText strings={personal.rolesLoop} />
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={320}>
            <p className="max-w-3xl mb-8 text-balance">
              I help founders and teams turn messy product ideas into clean SaaS platforms,
              dashboards, mobile apps, and AI automation systems — with sharp UI, stable
              backend logic, and launch-ready execution.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={380}>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row">
              <a href="#portfolio" className="magnetic-button premium-focus">
                View selected work
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="secondary-button premium-focus">
                Start a project
              </a>
              <a href="/resume" className="secondary-button premium-focus">
                View resume
              </a>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={420}>
            <div className="hero-clarity-panel mb-9 rounded-[28px] p-4 md:p-5">
              <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <span className="section-eyebrow">How I reduce risk</span>
                  <h2 className="mt-3 text-xl font-semibold tracking-tight md:text-2xl">
                    Clear scope, fast execution, premium finish.
                  </h2>
                </div>
                <p className="max-w-sm !text-xs !leading-relaxed !text-text-secondary">
                  A simple build flow helps visitors understand how a rough idea becomes a
                  usable product without extra mental load.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                {BUILD_PATH.map((item) => (
                  <article key={item.step} className="hero-path-step rounded-2xl p-4">
                    <span className="text-xs font-black text-accent">{item.step}</span>
                    <h3 className="mt-2 text-sm font-semibold">{item.title}</h3>
                    <p className="mt-2 !text-xs !leading-relaxed !text-text-secondary">
                      {item.detail}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={460}>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 mb-9">
              {TRUST_SIGNALS.map((signal) => {
                const Icon = signal.icon;
                return (
                  <article key={signal.label} className="interactive-card p-4">
                    <Icon className="h-5 w-5 text-accent mb-3" />
                    <strong className="block text-lg leading-none">{signal.value}</strong>
                    <span className="mt-2 block text-xs text-text-secondary">
                      {signal.label}
                    </span>
                  </article>
                );
              })}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={500}>
            <ul className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-x-8 sm:gap-y-4 mb-12">
              <li className="meta-item">
                <Calendar className="w-4 h-4 shrink-0" />
                <span>{personal.birthDate}</span>
              </li>
              <li className="text-sm">
                <a href={personal.whatsapp} target="_blank" rel="noopener noreferrer" className="meta-item hover:text-accent">
                  <Smartphone className="w-4 h-4 shrink-0" />
                  <span>{personal.whatsappLabel}</span>
                </a>
              </li>
              <li className="text-sm">
                <a href={`mailto:${personal.email}`} className="meta-item hover:text-accent">
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>{personal.email}</span>
                </a>
              </li>
              <li className="meta-item w-full">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>{personal.location}</span>
              </li>
            </ul>
          </RevealOnScroll>

          <RevealOnScroll delay={560} variant="scale">
            <div id="services" className="scroll-mt-28">
              <h5 className="underline-title mb-8">What I Do</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {services.map((service, index) => {
                  const Icon = ICON_MAP[service.icon] ?? Code2;
                  return (
                    <article
                      key={service.title.join(" ")}
                      className="interactive-card group p-5"
                      style={{ transitionDelay: `${index * 55}ms` }}
                    >
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-subtle ring-1 ring-accent/20 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <h5 className="text-base font-medium leading-snug">
                        {service.title[0]}
                        <br />
                        {service.title[1]}
                      </h5>
                      <p className="mt-3 !text-xs !leading-relaxed !text-text-secondary">
                        Built with clarity, speed, accessibility, and conversion psychology in mind.
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
