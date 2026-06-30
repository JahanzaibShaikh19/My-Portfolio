import Link from "next/link";
import {
  workExperience,
  education,
  frontendSkills,
  mobileSkills,
  languagesSkills,
  backendSkills,
  web3Skills,
  aiToolingSkills,
} from "@/data/content";
import SectionTitle from "./SectionTitle";
import RevealOnScroll from "./RevealOnScroll";
import SkillBar from "./SkillBar";

const resumeSignals = [
  {
    label: "Primary fit",
    value: "SaaS, dashboards, mobile apps, AI automation",
  },
  {
    label: "Delivery style",
    value: "Scope clearly, ship fast, polish interaction details",
  },
  {
    label: "Stack confidence",
    value: "Next.js, React, Node.js, Supabase, Firebase, Flutter",
  },
];

function Timeline({
  items,
}: {
  items: { period: string; title: string; description: string }[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item, idx) => (
        <RevealOnScroll key={item.title} variant="up" delay={idx * 90}>
          <article className="timeline-outer interactive-card h-full">
            <span className="text-sm text-accent font-medium mb-2 block">
              {item.period}
            </span>
            <h5 className="!mb-2">{item.title}</h5>
            <p className="!text-sm !opacity-70 !leading-relaxed">
              {item.description}
            </p>
          </article>
        </RevealOnScroll>
      ))}
    </div>
  );
}

export default function Resume() {
  return (
    <section id="resume" className="px-6 md:px-10 lg:px-16 py-16 scroll-mt-28">
      <RevealOnScroll variant="scale">
        <SectionTitle>
          <Link href="/resume" className="hover:text-accent transition-colors">
            My Resume
          </Link>
        </SectionTitle>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="section-panel mb-8 p-5 md:p-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <span className="section-eyebrow">Execution layer</span>
              <h3 className="mt-4 text-2xl font-semibold leading-tight">
                Fast scan for recruiters, founders, and technical decision makers.
              </h3>
              <p className="mt-3 !text-sm !leading-relaxed !text-text-secondary">
                Role proof, project fit, and stack confidence are grouped so visitors can judge
                fit quickly without reading every timeline item.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link href="/resume" className="magnetic-button">
                  Open polished resume →
                </Link>
                <a href="/Jahanzaib-Shaikh-Resume.pdf" className="secondary-button" target="_blank" rel="noopener noreferrer">
                  Download PDF
                </a>
              </div>
            </div>
            <div className="micro-proof-grid">
              {resumeSignals.map((signal) => (
                <article key={signal.label} className="micro-proof-chip">
                  <strong className="mb-2 block text-text-primary">{signal.label}</strong>
                  {signal.value}
                </article>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="flex items-center gap-2 mb-6">
          <span role="img" aria-label="laptop">👨‍💻</span>
          <span className="text-sm font-medium uppercase tracking-wide text-white/70">
            Work Experience
          </span>
        </div>
      </RevealOnScroll>
      <Timeline items={workExperience} />

      <RevealOnScroll className="mt-14">
        <div className="flex items-center gap-2 mb-6">
          <span role="img" aria-label="graduation cap">🎓</span>
          <span className="text-sm font-medium uppercase tracking-wide text-white/70">
            Education
          </span>
        </div>
      </RevealOnScroll>
      <Timeline items={education} />

      <RevealOnScroll className="mt-16" variant="scale">
        <h5 className="underline-title mb-10">My Skills</h5>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          <div className="skill-cluster">
            <div>
              <h2 className="skill-heading">Frontend</h2>
              {frontendSkills.map((skill) => (
                <SkillBar key={skill.label} label={skill.label} percent={skill.percent} />
              ))}
            </div>
            <div>
              <h2 className="skill-heading">Mobile</h2>
              {mobileSkills.map((skill) => (
                <SkillBar key={skill.label} label={skill.label} percent={skill.percent} />
              ))}
            </div>
            <div>
              <h2 className="skill-heading">Languages</h2>
              {languagesSkills.map((skill) => (
                <SkillBar key={skill.label} label={skill.label} percent={skill.percent} />
              ))}
            </div>
          </div>

          <div className="skill-cluster">
            <div>
              <h2 className="skill-heading">Backend</h2>
              {backendSkills.map((skill) => (
                <SkillBar key={skill.label} label={skill.label} percent={skill.percent} />
              ))}
            </div>
            <div>
              <h2 className="skill-heading">Web3 / Blockchain</h2>
              {web3Skills.map((skill) => (
                <SkillBar key={skill.label} label={skill.label} percent={skill.percent} />
              ))}
            </div>
            <div>
              <h2 className="skill-heading">AI / Tooling</h2>
              {aiToolingSkills.map((skill) => (
                <SkillBar key={skill.label} label={skill.label} percent={skill.percent} />
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
