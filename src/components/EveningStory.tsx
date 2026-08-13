import Image from "next/image";

const testimonials = [
  {
    quote:
      "I used to bounce between three programs for every CMA. My CMA Pro put everything in one place. Huge time saver and way less error.",
    name: "Melissa R.",
    role: "Team Leader",
  },
  {
    quote:
      "My presentations look more professional and my sellers notice. It helps me defend my pricing with confidence.",
    name: "Jordan T.",
    role: "Listing Specialist",
  },
  {
    quote:
      "I built my own spreadsheet for years. This does everything I was doing—without all the manual work.",
    name: "Chris B.",
    role: "Broker",
  },
];

export function EveningStory() {
  return (
    <section id="about" className="section-rule px-4 py-16 sm:px-5 lg:px-6 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.9fr] lg:items-center lg:gap-12">
        <div className="grid items-center gap-8 md:grid-cols-[0.7fr_1.3fr]">
          <Image
            src="/images/clock.png"
            alt="Hand-drawn analog clock showing 8:42 p.m."
            width={640}
            height={460}
            className="mx-auto h-auto w-full max-w-[240px] md:max-w-none"
          />
          <div>
            <h2 className="font-display text-3xl text-navy sm:text-4xl">It&apos;s 8:42 p.m.</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-navy/80 sm:text-base">
              You have a listing appointment tomorrow. The comps are selected. You know roughly
              where the home should land.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-navy/80 sm:text-base">
              Now you just have to turn all of that into a clear recommendation, a seller net
              sheet, and a presentation that looks like you had more time than you did.
            </p>
            <p className="mt-5 font-display text-xl text-navy sm:text-2xl">
              That part can be <span className="hand-underline-double text-gold">easier</span>.
            </p>
          </div>
        </div>

        <div className="relative space-y-7 border-t border-gold/35 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <span className="absolute left-0 top-1/2 hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold lg:block" />
          {testimonials.map((t) => (
            <blockquote key={t.name} className="relative pl-1">
              <span className="font-display text-3xl leading-none text-gold">&ldquo;</span>
              <p className="mt-1 text-sm leading-relaxed text-navy/80 sm:text-[15px]">{t.quote}</p>
              <footer className="mt-2 text-sm text-gold">
                — {t.name}, {t.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
