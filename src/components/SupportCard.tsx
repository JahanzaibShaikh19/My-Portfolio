"use client";

import { useState } from "react";
import { Check, Coffee, Copy, Sparkles, Wallet } from "lucide-react";

const ETH_ADDRESS = "0x587674bf8d8bfe4fe3f05ceddc5494ce55560861";
const SHORT_ADDRESS = `${ETH_ADDRESS.slice(0, 8)}...${ETH_ADDRESS.slice(-8)}`;

export default function SupportCard() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(ETH_ADDRESS);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="relative mx-auto mb-10 max-w-[1120px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_24px_90px_rgba(0,0,0,.22)] backdrop-blur-2xl md:p-7 lg:p-8">
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <Coffee className="h-3.5 w-3.5" />
            Support the builds
          </div>

          <h2 className="!mb-3 !text-3xl !leading-tight md:!text-4xl">
            Enjoyed the work? Fuel the next product experiment.
          </h2>
          <p className="!mb-0 max-w-2xl !text-sm !leading-relaxed !text-text-secondary md:!text-base">
            If this portfolio, open-source work, or a shipped product helped you, you can support future builds with a small crypto coffee. Every contribution goes back into better tools, cleaner interfaces, and faster experiments.
          </p>
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-4 shadow-inner dark:bg-black/25">
          <div className="mb-3 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent text-black shadow-[0_0_28px_rgba(230,255,0,.22)]">
              <Wallet className="h-5 w-5" />
            </span>
            <div>
              <p className="!mb-1 !text-sm !font-semibold !text-text-primary">ETH wallet</p>
              <p className="!mb-0 !text-xs !text-text-muted">ERC-20 compatible address</p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className="group flex w-full items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3 text-left transition-all duration-300 hover:border-accent/35 hover:bg-accent/10"
            aria-label="Copy ETH ERC-20 address"
          >
            <span className="min-w-0">
              <span className="block font-mono text-sm text-text-primary sm:hidden">{SHORT_ADDRESS}</span>
              <span className="hidden break-all font-mono text-xs text-text-primary sm:block">{ETH_ADDRESS}</span>
            </span>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 text-text-primary transition-colors group-hover:bg-accent group-hover:text-black">
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </span>
          </button>

          <div className="mt-3 flex items-start gap-2 text-xs text-text-muted">
            <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
            <span>{copied ? "Address copied. Thank you for supporting the craft." : "Tap the address to copy it safely before sending."}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
