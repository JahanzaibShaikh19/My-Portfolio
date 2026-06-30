import { Download } from "lucide-react";

const resumePdfUrl = "/Jahanzaib-Shaikh-Full-Stack-Developer.pdf";

export default function PrintResumeButton() {
  return (
    <a
      href={resumePdfUrl}
      download="Jahanzaib-Shaikh-Full-Stack-Developer.pdf"
      className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <Download className="h-4 w-4" />
      Print / Save PDF
    </a>
  );
}
