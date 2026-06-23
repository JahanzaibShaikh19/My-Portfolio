"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
    <section id="contact" className="py-16">
      {/* Background image strip */}
      <div className="relative h-48 md:h-64 w-full overflow-hidden mb-0">
        <Image
          src="/images/bg.jpg"
          alt="Contact background"
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
      </div>

      <div className="px-6 md:px-10 lg:px-16 pt-12">
        <RevealOnScroll variant="scale">
          <SectionTitle>Get In Touch</SectionTitle>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-20">
          {/* Form */}
          <RevealOnScroll>
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
              className="px-8 py-3 bg-accent text-black text-sm font-semibold rounded-full
                         hover:bg-accent-hover transition-all duration-150 ease-out hover:scale-95 active:scale-95 disabled:opacity-50 flex items-center justify-center min-w-[160px]"
            >
              {status === "sending" ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending…
                </>
              ) : "Send Message"}
            </button>
            {status === "success" && (
              <p className="mt-4 text-sm text-green-500">
                ✓ Message sent! I'll reply within 24 hours.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-sm text-red-400">
                Looks like something went wrong. Please try again!
              </p>
            )}
          </RevealOnScroll>

          {/* Contact details */}
          <RevealOnScroll delay={200}>
            <div className="flex flex-col gap-6">
              <div>
                <h6 className="text-xs uppercase tracking-widest text-text-muted mb-1">
                  Address
                </h6>
                <p className="!text-sm !text-text-secondary !leading-relaxed">
                  {contactInfo.addressLine1}
                </p>
              </div>
              <div>
                <h6 className="text-xs uppercase tracking-widest text-text-muted mb-1">
                  Email
                </h6>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-sm text-text-secondary hover:text-accent transition-colors duration-150 ease-out"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div>
                <h6 className="text-xs uppercase tracking-widest text-text-muted mb-3">
                  Social
                </h6>
                <ul className="flex flex-wrap gap-4">
                  {contactInfo.socials.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-text-secondary hover:text-accent transition-colors duration-150 ease-out"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
