import { BabyFace } from "./Doodles";

const faqs = [
  {
    q: "Does it choose the price?",
    a: "No. You do.",
  },
  {
    q: "Do I still select and adjust my own comps?",
    a: "Yes. That's the point.",
  },
  {
    q: "Do I need to change the way I analyze properties?",
    a: "No. Use the method you trust.",
  },
  {
    q: "Is this another CRM?",
    a: "Absolutely not.",
  },
  {
    q: "Does it replace the MLS?",
    a: "No. It helps you do more with the information you already get.",
  },
  {
    q: "Will my spreadsheet be offended?",
    a: "Possibly. We recommend breaking the news gently.",
    doodle: true,
  },
];

export function FAQ() {
  return (
    <section id="faq" className="section-rule px-4 pt-16 pb-8 sm:px-5 lg:px-6 lg:pt-20 lg:pb-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-display text-3xl text-navy sm:text-4xl">
          Questions agents are actually thinking.
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-0 lg:divide-x lg:divide-line">
          {faqs.map((item) => (
            <div key={item.q} className="relative px-1 lg:px-3">
              <div className={item.doodle ? "flex items-start gap-2" : undefined}>
                <h3 className="text-sm font-semibold leading-snug text-navy sm:text-[15px]">
                  {item.q}
                </h3>
                {item.doodle ? (
                  <BabyFace className="h-12 w-12 shrink-0 text-navy/50 sm:h-14 sm:w-14" />
                ) : null}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
