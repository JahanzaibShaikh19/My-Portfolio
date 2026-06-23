import Image from "next/image";
import {
  Calendar,
  MapPin,
  Mail,
  Code2,
  Smartphone,
  Bot,
  Database,
  TrendingUp,
  Blocks,
} from "lucide-react";
import { personal, services, socialLinks } from "@/data/content";
import TypedText from "./TypedText";
import RevealOnScroll from "./RevealOnScroll";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  code: Code2,
  smartphone: Smartphone,
  bot: Bot,
  database: Database,
  "trending-up": TrendingUp,
  blocks: Blocks,
};

export default function Hero() {
  return (
    <section id="home" className="px-6 md:px-10 lg:px-16 pt-28 pb-16 md:pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 lg:gap-16 items-start">
        {/* Profile image + social links */}
        <RevealOnScroll variant="left">
          <div className="flex flex-col gap-6">
            <div className="profile-image w-full aspect-[4/5] relative">
              <Image
                src={personal.profileImage}
                alt={personal.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 340px"
              />
            </div>
            <ul className="flex gap-5">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-text-secondary hover:text-accent transition-all duration-150 ease-out"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>

        {/* Right content */}
        <div className="pt-2 lg:pt-12">
          <RevealOnScroll delay={100}>
            <h5 className="text-base font-normal mb-3">
              {personal.greeting}{" "}
              <span role="img" aria-label="waving hand">
                👋
              </span>
            </h5>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <h1 className="hero-big mb-6">
              I&apos;m {personal.name}
              <br />
              I am a <TypedText strings={personal.rolesLoop} />
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={300}>
            <hr className="border-white/10 mb-6" />
            <ul className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-x-8 sm:gap-y-4 mb-6">
              <li className="flex items-center gap-2 text-sm text-white/80">
                <Calendar className="w-4 h-4 shrink-0" />
                <span>{personal.birthDate}</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <a
                  href={personal.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-secondary hover:text-accent transition-all duration-150 ease-out"
                >
                  <Smartphone className="w-4 h-4 shrink-0" />
                  <span>{personal.whatsappLabel}</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-2 text-text-secondary hover:text-accent transition-all duration-150 ease-out"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>{personal.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/80 w-full">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>{personal.location}</span>
              </li>
            </ul>
          </RevealOnScroll>

          <RevealOnScroll delay={400}>
            <p className="max-w-2xl mb-12">{personal.bio}</p>
          </RevealOnScroll>

          {/* What I Do */}
          <RevealOnScroll delay={500} variant="scale">
            <h5 className="underline-title mb-8">What I Do</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const Icon = ICON_MAP[service.icon] ?? Code2;
                return (
                  <article key={service.title.join(" ")} className="flex flex-col gap-3">
                    <Icon className="w-9 h-9 text-accent" />
                    <h5 className="text-base font-medium leading-snug">
                      {service.title[0]}
                      <br />
                      {service.title[1]}
                    </h5>
                  </article>
                );
              })}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
