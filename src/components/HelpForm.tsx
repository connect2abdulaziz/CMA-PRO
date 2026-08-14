"use client";

import { useState } from "react";

const HELP_EMAIL = "irfan527@gmail.com";

const fieldClass =
  "box-border w-full rounded-[5px] border border-line bg-white px-4 text-[15px] leading-normal text-navy outline-none transition-colors placeholder:text-navy/40 focus:border-gold focus:ring-2 focus:ring-gold/20";

export function HelpForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${HELP_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `My CMA Pro Help Center — ${name}`,
        }),
      });

      const result = (await response.json()) as { success?: boolean | string; message?: string };
      const ok = result.success === true || result.success === "true";

      if (!response.ok || !ok) {
        throw new Error(result.message || "Send failed");
      }

      form.reset();
      setStatus("sent");
    } catch {
      const params = new URLSearchParams({
        subject: `My CMA Pro Help Center — ${name}`,
        body: `From: ${name} (${email})\n\n${message}`,
      });
      window.location.href = `mailto:${HELP_EMAIL}?${params.toString()}`;
      form.reset();
      setStatus("sent");
    }
  }

  if (status === "sent") {
    return (
      <div className="py-10 text-center">
        <p className="font-display text-2xl text-navy sm:text-[1.85rem]">Message sent.</p>
        <p className="mx-auto mt-3 max-w-sm text-[15px] leading-relaxed text-navy/75">
          We&apos;ll get back to you as soon as we can.
        </p>
        <p className="font-hand mt-5 text-2xl text-gold">Talk soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="help-name" className="text-sm font-medium text-navy">
            Name
          </label>
          <input
            id="help-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={`${fieldClass} h-12`}
            placeholder="Your name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="help-email" className="text-sm font-medium text-navy">
            Email
          </label>
          <input
            id="help-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={`${fieldClass} h-12`}
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="help-message" className="text-sm font-medium text-navy">
          Message
        </label>
        <textarea
          id="help-message"
          name="message"
          required
          rows={7}
          className={`${fieldClass} min-h-[180px] resize-y py-3.5`}
          placeholder="How can we help?"
        />
      </div>

      {status === "error" ? (
        <p className="text-sm text-gold">Please fill in all fields.</p>
      ) : null}

      <div className="pt-1">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center rounded-[5px] bg-gold px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-gold-hover disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>
      </div>
    </form>
  );
}
