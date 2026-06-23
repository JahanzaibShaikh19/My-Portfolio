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

function Timeline({
  items,
}: {
  items: { period: string; title: string; description: string }[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item, idx) => (
        <RevealOnScroll key={item.title} variant="up" delay={idx * 100}>
          <article className="timeline-outer h-full transition-all duration-150 ease-out">
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
    <section id="resume" className="px-6 md:px-10 lg:px-16 py-16">
      <RevealOnScroll variant="scale">
        <SectionTitle>My Resume</SectionTitle>
      </RevealOnScroll>

      {/* Work experience */}
      <RevealOnScroll>
        <div className="flex items-center gap-2 mb-6">
          <span role="img" aria-label="laptop">
            👨‍💻
          </span>
          <span className="text-sm font-medium uppercase tracking-wide text-white/70">
            Work Experience
          </span>
        </div>
      </RevealOnScroll>
      <Timeline items={workExperience} />

      {/* Education */}
      <RevealOnScroll className="mt-14">
        <div className="flex items-center gap-2 mb-6">
          <span role="img" aria-label="graduation cap">
            🎓
          </span>
          <span className="text-sm font-medium uppercase tracking-wide text-white/70">
            Education
          </span>
        </div>
      </RevealOnScroll>
      <Timeline items={education} />

      {/* Skills */}
      <RevealOnScroll className="mt-16" variant="scale">
        <h5 className="underline-title mb-10">My Skills</h5>

        {/* Categorized Skills — bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {/* Left Column */}
          <div className="flex flex-col gap-12">
            <div>
              <h2 className="!text-sm !leading-none uppercase tracking-widest text-white/50 mb-6">
                Frontend
              </h2>
              {frontendSkills.map((skill) => (
                <SkillBar key={skill.label} label={skill.label} percent={skill.percent} />
              ))}
            </div>
            <div>
              <h2 className="!text-sm !leading-none uppercase tracking-widest text-white/50 mb-6">
                Mobile
              </h2>
              {mobileSkills.map((skill) => (
                <SkillBar key={skill.label} label={skill.label} percent={skill.percent} />
              ))}
            </div>
            <div>
              <h2 className="!text-sm !leading-none uppercase tracking-widest text-white/50 mb-6">
                Languages
              </h2>
              {languagesSkills.map((skill) => (
                <SkillBar key={skill.label} label={skill.label} percent={skill.percent} />
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-12">
            <div>
              <h2 className="!text-sm !leading-none uppercase tracking-widest text-white/50 mb-6">
                Backend
              </h2>
              {backendSkills.map((skill) => (
                <SkillBar key={skill.label} label={skill.label} percent={skill.percent} />
              ))}
            </div>
            <div>
              <h2 className="!text-sm !leading-none uppercase tracking-widest text-white/50 mb-6">
                Web3 / Blockchain
              </h2>
              {web3Skills.map((skill) => (
                <SkillBar key={skill.label} label={skill.label} percent={skill.percent} />
              ))}
            </div>
            <div>
              <h2 className="!text-sm !leading-none uppercase tracking-widest text-white/50 mb-6">
                AI / Tooling
              </h2>
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
