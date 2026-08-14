import type { Metadata } from "next";
import Link from "next/link";
import { CircleCheck, NoteArrow, StarBurst } from "@/components/Doodles";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/SiteNav";
import { HelpForm } from "@/components/HelpForm";

export const metadata: Metadata = {
  title: "Help Center — My CMA PRO",
  description: "Send a message to the My CMA Pro team. We’ll get back to you by email.",
};

const notes = [
  "Workflow questions",
  "Billing and your trial",
  "Getting started",
];

export default function HelpPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="px-4 py-14 sm:px-5 lg:px-6 lg:py-20">
          <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            <div className="lg:pt-4">
              <p className="text-[12px] font-semibold tracking-[0.16em] text-gold uppercase">
                Help Center
              </p>
              <h1 className="font-display mt-3 max-w-[11em] text-[2.15rem] leading-[1.15] text-navy sm:text-4xl lg:text-[2.65rem]">
                Questions about your workflow, billing, or getting started?
              </h1>
              <div className="mt-3 w-24">
                <svg viewBox="0 0 96 8" className="h-2 w-full text-gold" aria-hidden>
                  <path
                    d="M2 5c22-2 44 2 64-1 12-1.8 22 1 28 0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-navy/80 sm:text-base">
                Send a message and we&apos;ll reply by email. No ticket numbers. No chatbot.
              </p>

              <ul className="mt-8 space-y-3">
                {notes.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-[15px] text-navy/85">
                    <CircleCheck className="h-5 w-5 shrink-0 text-gold" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-start gap-2">
                <NoteArrow className="mt-1 h-8 w-12 shrink-0 text-navy" />
                <p className="font-hand max-w-[220px] text-[1.2rem] leading-snug text-navy/75">
                  Typical reply is{" "}
                  <span className="hand-underline">one business day</span>.
                </p>
              </div>

              <p className="mt-10 text-sm text-muted">
                Looking for quick answers?{" "}
                <Link
                  href="/#faq"
                  className="font-medium text-navy underline decoration-gold/50 underline-offset-4 hover:text-gold"
                >
                  See the FAQ
                </Link>
                .
              </p>
            </div>

            <div className="relative rounded-[22px] border border-line bg-cream-soft p-7 shadow-[0_12px_40px_rgba(13,28,40,0.06)] sm:p-9">
              <h2 className="font-display text-[1.65rem] text-navy sm:text-[1.85rem]">
                Message us directly
              </h2>
              <p className="mt-2 mb-8 text-sm leading-relaxed text-muted">
                We read every note. Typical reply is within one business day.
              </p>
              <HelpForm />
              <StarBurst className="pointer-events-none absolute bottom-5 right-5 h-9 w-9 text-gold/70" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
