import Link from "next/link";
import { ArrowLeft, ExternalLink, Mail, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrintResumeButton from "@/components/PrintResumeButton";
import { resumeContent } from "@/data/resumeContent";

export const metadata = {
  title: "Resume — Jahanzaib Shaikh",
  description:
    "A clean, low-cognitive-load resume view for Jahanzaib Shaikh, Full Stack Developer.",
};

export default function ResumePage() {
  return (
    <main className="relative z-10 min-h-screen">
      <Header />

      <section className="mx-auto max-w-[1180px] px-6 md:px-10 lg:px-16 pt-32 pb-16">
        <Link
          href="/#resume"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-6 mb-8">
          <aside className="section-panel p-5 md:p-7 self-start lg:sticky lg:top-28">
            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.24em] text-accent mb-3">Interactive Resume</p>
              <h1 className="!text-4xl md:!text-5xl !leading-tight !mb-3">
                {resumeContent.name}
              </h1>
              <p className="!text-base !leading-relaxed !mb-0">{resumeContent.title}</p>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              {resumeContent.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-center">
                  <p className="!text-lg !font-bold !text-text-primary !mb-1">{stat.value}</p>
                  <p className="!text-[11px] !leading-tight !text-text-muted !mb-0">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3 mb-6">
              <a
                href={`mailto:${resumeContent.email}`}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-text-secondary hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4" />
                {resumeContent.email}
              </a>
              <a
                href={`https://${resumeContent.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-text-secondary hover:text-accent transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={`https://${resumeContent.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-text-secondary hover:text-accent transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                LinkedIn
              </a>
            </div>

            <PrintResumeButton />
          </aside>

          <div className="space-y-6">
            <section className="section-panel p-5 md:p-7">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-5 w-5 text-accent" />
                <h2 className="!text-2xl !mb-0">Summary</h2>
              </div>
              <p className="!text-sm md:!text-base !leading-loose !mb-0">
                {resumeContent.summary}
              </p>
            </section>

            <section className="section-panel p-5 md:p-7">
              <h2 className="!text-2xl !mb-5">Experience</h2>
              {resumeContent.experience.map((item) => (
                <article key={item.company}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="!text-xl !mb-1">{item.company}</h3>
                      <p className="!text-sm !text-text-secondary !mb-0">{item.role} · {item.location}</p>
                    </div>
                    <span className="trust-chip self-start">{item.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm text-text-secondary leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="section-panel p-5 md:p-7">
                <h2 className="!text-2xl !mb-5">Education</h2>
                <div className="space-y-4">
                  {resumeContent.education.map((item) => (
                    <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-xs text-accent mb-2">{item.period}</p>
                      <h3 className="!text-base !mb-1">{item.title}</h3>
                      <p className="!text-sm !text-text-secondary !mb-1">{item.place}</p>
                      <p className="!text-xs !text-text-muted !mb-0">{item.detail}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="section-panel p-5 md:p-7">
                <h2 className="!text-2xl !mb-5">Achievements</h2>
                <ul className="space-y-3">
                  {resumeContent.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3 text-sm text-text-secondary leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="section-panel p-5 md:p-7">
              <h2 className="!text-2xl !mb-5">Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resumeContent.skills.map((group) => (
                  <div key={group.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <h3 className="!text-base !mb-3">{group.label}</h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-xs text-text-secondary">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="section-panel p-5 md:p-7">
              <h2 className="!text-2xl !mb-5">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resumeContent.projects.map((project) => (
                  <article key={project.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <h3 className="!text-base !mb-2">{project.title}</h3>
                    <p className="!text-xs !text-accent !mb-3">{project.stack}</p>
                    <p className="!text-sm !leading-relaxed !mb-0">{project.body}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
