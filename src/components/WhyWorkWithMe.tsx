import { Gauge, GitBranch, Layers3, ShieldCheck } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Business-first engineering",
    detail:
      "I start with the user problem, decision flow, and business goal before touching the interface or API layer.",
  },
  {
    icon: Layers3,
    title: "Clean execution layer",
    detail:
      "Frontend, backend, database, integrations, and deployment are treated as one connected product system.",
  },
  {
    icon: Gauge,
    title: "Fast but controlled shipping",
    detail:
      "The goal is speed without chaos: scoped features, clean states, stable UI, and fewer handoff mistakes.",
  },
  {
    icon: GitBranch,
    title: "Founder-friendly communication",
    detail:
      "You get clear progress, simple choices, and practical tradeoffs instead of technical noise and overbuilt complexity.",
  },
];

export default function WhyWorkWithMe() {
  return (
    <section className="px-6 py-14 md:px-10 lg:px-16">
      <RevealOnScroll variant="scale">
        <div className="mb-8 max-w-2xl">
          <span className="section-eyebrow">Why work with me</span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Product thinking, clean engineering, and premium UI in one build loop.
          </h2>
          <p className="mt-4 !text-sm !leading-relaxed !text-text-secondary md:!text-base">
            The website should answer one thing quickly: can this person understand the product,
            design the experience, and ship the system without creating extra complexity?
          </p>
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <RevealOnScroll key={reason.title} delay={index * 80}>
              <article className="why-work-card h-full p-5 md:p-6">
                <div className="why-icon mb-5">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold leading-tight">{reason.title}</h3>
                <p className="mt-3 !text-sm !leading-relaxed !text-text-secondary">
                  {reason.detail}
                </p>
              </article>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
