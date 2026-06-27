"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { contactInfo } from "@/data/content";
import SectionTitle from "./SectionTitle";
import RevealOnScroll from "./RevealOnScroll";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState({ name: "", email: "", subject: "", message: "" });

  useEffect(() => {
    const draft = localStorage.getItem("portfolio-contact-draft");
    if (draft) {
      try {
        setForm(JSON.parse(draft));
      } catch (e) {}
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (form.name || form.email || form.subject || form.message) {
        localStorage.setItem("portfolio-contact-draft", JSON.stringify(form));
      }
    }, 2000);
    return () => clearInterval(timer);
  }, [form]);

  const validateField = (name: string, value: string) => {
    let errorMsg = "";
    if (!value.trim()) {
      errorMsg = `Please enter your ${name}.`;
    } else if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
      errorMsg = "Please enter a valid email address.";
    }
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    return errorMsg === "";
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    validateField(e.target.name, e.target.value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    const isNameValid = validateField("name", form.name);
    const isEmailValid = validateField("email", form.email);
    const isSubjectValid = validateField("subject", form.subject);
    const isMessageValid = validateField("message", form.message);

    if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
        localStorage.removeItem("portfolio-contact-draft");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 scroll-mt-28">
      <div className="contact-hero-stage">
        <div className="contact-orbit" aria-hidden="true" />
        <div className="contact-noise-grid" aria-hidden="true" />
        <div className="contact-floating-dot contact-dot-one" aria-hidden="true" />
        <div className="contact-floating-dot contact-dot-two" aria-hidden="true" />

        <div className="contact-hero-content">
          <div className="contact-hero-copy">
            <span className="trust-chip">Low-friction contact flow</span>
            <h2>Let’s build something users remember.</h2>
            <p>
              A calm handoff system for SaaS, dashboards, mobile apps, AI automations,
              and founder-led product builds — clear, fast, and premium from the first click.
            </p>
          </div>

          <div className="contact-hero-console" aria-hidden="true">
            <div className="console-topline">
              <span />
              <span />
              <span />
            </div>
            <div className="console-status">
              <Sparkles className="h-4 w-4" />
              Premium UX pass
            </div>
            <div className="console-bars">
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      </div>

      <div className="contact-content-wrap px-6 md:px-10 lg:px-16 pt-12">
        <RevealOnScroll variant="scale">
          <SectionTitle>Get In Touch</SectionTitle>
        </RevealOnScroll>

        <div className="contact-main-grid">
          <RevealOnScroll>
            <div className="section-panel contact-panel contact-form-panel p-5 md:p-6">
              <div className="mb-6 flex flex-col gap-2">
                <span className="contact-mini-kicker">Project intake</span>
                <h3 className="text-xl font-semibold">Tell me what you want to build.</h3>
                <p className="!text-sm !leading-relaxed !text-text-secondary">
                  Draft autosaves locally, validation is immediate, and the CTA stays clear —
                  small UX details that reduce drop-off and make contact feel safe.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Name"
                    className="contact-input"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Email"
                    className="contact-input"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Subject"
                  className="contact-input mb-4"
                />
                {errors.subject && <p className="text-red-400 text-xs mt-[-10px] mb-4">{errors.subject}</p>}
              </div>
              <div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={6}
                  placeholder="Message"
                  className="contact-input mb-6"
                />
                {errors.message && <p className="text-red-400 text-xs mt-[-20px] mb-6">{errors.message}</p>}
              </div>
              <button
                onClick={handleSubmit}
                disabled={status === "sending"}
                className="magnetic-button disabled:opacity-50"
              >
                {status === "sending" ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
              {status === "success" && (
                <p className="mt-4 flex items-center gap-2 text-sm text-green-400">
                  <CheckCircle2 className="h-4 w-4" /> Message sent! I'll reply within 24 hours.
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 text-sm text-red-400">
                  Looks like something went wrong. Please try again!
                </p>
              )}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <aside className="section-panel contact-panel contact-aside-panel p-5 md:p-6 lg:sticky lg:top-28">
              <div className="mb-7">
                <span className="contact-mini-kicker">Quick signals</span>
                <h3 className="text-xl font-semibold mt-2">Best fit projects</h3>
                <p className="mt-2 !text-sm !text-text-secondary">
                  SaaS, dashboards, mobile apps, AI automations, and full-stack product builds.
                </p>
              </div>

              <div className="contact-signal-strip">
                <span><ShieldCheck className="h-3.5 w-3.5" /> UX clarity</span>
                <span><Zap className="h-3.5 w-3.5" /> Fast delivery</span>
              </div>

              <div className="flex flex-col gap-4 mt-6">
                <div className="contact-fact">
                  <MapPin className="h-4 w-4 text-accent" />
                  <div>
                    <h6 className="contact-label">Address</h6>
                    <p className="!text-sm !text-text-secondary !leading-relaxed">
                      {contactInfo.addressLine1}
                    </p>
                  </div>
                </div>
                <div className="contact-fact">
                  <Mail className="h-4 w-4 text-accent" />
                  <div>
                    <h6 className="contact-label">Email</h6>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-sm text-text-secondary hover:text-accent transition-colors duration-150 ease-out"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                <div className="contact-fact">
                  <Clock3 className="h-4 w-4 text-accent" />
                  <div>
                    <h6 className="contact-label">Reply expectation</h6>
                    <p className="!text-sm !text-text-secondary">Usually within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="mt-7">
                <h6 className="contact-label mb-3">Social</h6>
                <ul className="flex flex-wrap gap-3">
                  {contactInfo.socials.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-pill"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
