import { BrainCircuit, Eye, MousePointerClick, ShieldCheck } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const principles = [
  {
    icon: Eye,
    title: "Visual hierarchy",
    detail: "Clear scanning path, strong contrast, and decision-first content blocks.",
  },
  {
    icon: BrainCircuit,
    title: "Low cognitive load",
    detail: "Grouped information, recognition over recall, and predictable navigation.",
  },
  {
    icon: MousePointerClick,
    title: "Micro-interactions",
    detail: "Hover, focus, progress, and motion cues that make the interface feel alive.",
  },
  {
    icon: ShieldCheck,
    title: "Trust psychology",
    detail: "Proof signals, transparent process, and confidence-building CTAs.",
  },
];

export default function ExperienceDesignStrip() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-10">
      <RevealOnScroll variant="scale">
        <div className="section-panel p-5 md:p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-xl">
              <span className="trust-chip mb-4">HCI-driven interface</span>
              <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
                Designed to feel premium, fast, and psychologically easy to trust.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:max-w-2xl">
              {principles.map((item, index) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="interactive-card p-4"
                    style={{ transitionDelay: `${index * 65}ms` }}
                  >
                    <Icon className="w-5 h-5 text-accent mb-3" />
                    <h3 className="text-sm font-semibold mb-1">{item.title}</h3>
                    <p className="!text-xs !leading-relaxed !text-text-secondary">
                      {item.detail}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
