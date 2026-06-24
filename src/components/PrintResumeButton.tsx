"use client";

import { Download } from "lucide-react";

export default function PrintResumeButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
    >
      <Download className="h-4 w-4" />
      Print / Save PDF
    </button>
  );
}
