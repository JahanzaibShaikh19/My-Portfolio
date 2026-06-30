import { BadgeCheck, Gauge, Layers3, Target } from "lucide-react";
import type { WorkItem } from "@/data/content";

export default function WorkThinkingLayer({ work }: { work: WorkItem }) {
  const lenses = [
    {
      icon: Target,
      label: "Problem clarity",
      title: "Make the product easy to understand",
      body: `${work.title} is presented with a simple hierarchy so visitors can scan the goal, interface, stack, and next action without extra effort.`,
    },
    {
      icon: Layers3,
      label: "Build system",
      title: "Connect interface and logic",
      body: `The implementation focus is practical: ${work.tags.slice(0, 4).join(", ")} with a flow that stays usable as the product grows.`,
    },
    {
      icon: BadgeCheck,
      label: "Trust outcome",
      title: "Show proof before asking for trust",
      body: "The case page groups visuals, role, date, stack, and project explanation so the visitor can judge fit quickly.",
    },
  ];

  return (
    <>
      <section className="case-study-lens-grid">
        {lenses.map((lens) => {
          const Icon = lens.icon;
          return (
            <article key={lens.label} className="case-study-lens p-5 md:p-6">
              <div className="case-icon mb-5">
                <Icon className="h-5 w-5" />
              </div>
              <span className="work-facts-kicker">{lens.label}</span>
              <h2 className="text-lg font-semibold leading-tight">{lens.title}</h2>
              <p className="mt-3 !text-sm !leading-relaxed !text-text-secondary">
                {lens.body}
              </p>
            </article>
          );
        })}
      </section>

      <section className="project-outcome-card mt-5 rounded-[30px] p-5 md:p-7">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="section-eyebrow">
              <Gauge className="h-3.5 w-3.5" />
              Product signal
            </span>
            <h2 className="mt-4 text-2xl font-semibold leading-tight md:text-3xl">
              Built to feel usable before it feels complex.
            </h2>
            <p className="mt-3 !text-sm !leading-relaxed !text-text-secondary">
              The structure is intentionally predictable: preview, build logic, stack, and next action.
              That keeps the page premium while reducing reading friction.
            </p>
          </div>
          <div className="micro-proof-grid">
            <div className="micro-proof-chip">
              <strong className="mb-2 block text-text-primary">Scan path</strong>
              Hero, preview, build notes, stack, and navigation.
            </div>
            <div className="micro-proof-chip">
              <strong className="mb-2 block text-text-primary">Trust cues</strong>
              Role, date, stack, visual proof, and live project link.
            </div>
            <div className="micro-proof-chip">
              <strong className="mb-2 block text-text-primary">UI load</strong>
              Short labels and grouped content reduce decision friction.
            </div>
            <div className="micro-proof-chip">
              <strong className="mb-2 block text-text-primary">Premium feel</strong>
              Glass surfaces, glow accents, and consistent motion language.
            </div>
          </div>
        </div>
        <div className="outcome-meter mt-6" aria-hidden="true">
          <span style={{ width: "88%" }} />
        </div>
      </section>
    </>
  );
}
