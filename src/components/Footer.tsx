import { contactInfo, personal } from "@/data/content";

export default function Footer() {
  return (
    <footer className="px-6 md:px-10 lg:px-16 py-8 border-t border-white/10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="!text-sm !opacity-50 !leading-none">
          Copyright {new Date().getFullYear()} — {personal.name}. All rights reserved.
        </p>
        <ul className="flex gap-5">
          {contactInfo.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/50 hover:text-accent transition-colors"
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
