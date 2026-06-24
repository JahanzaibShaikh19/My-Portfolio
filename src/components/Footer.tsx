import { contactInfo, personal } from "@/data/content";
import SupportCard from "./SupportCard";

export default function Footer() {
  return (
    <footer className="px-6 md:px-10 lg:px-16 pb-8 pt-14 border-t border-white/10">
      <SupportCard />

      <div className="mx-auto flex max-w-[1120px] flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="!text-sm !opacity-55 !leading-none">
          Copyright {new Date().getFullYear()} — {personal.name}. All rights reserved.
        </p>
        <ul className="flex flex-wrap justify-center gap-5">
          {contactInfo.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary hover:text-accent transition-colors"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
