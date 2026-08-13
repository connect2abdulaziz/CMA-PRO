import Image from "next/image";
import { CompBars, CrescentMoon, HouseIcon, PagesIcon, SheetIcon } from "./Doodles";

const nightSteps = [
  {
    title: "Comp Analysis",
    desc: "Adjust, analyze, and build your recommendation.",
    Icon: CompBars,
  },
  {
    title: "Seller Net Sheet",
    desc: "Calculate accurate seller proceeds.",
    Icon: SheetIcon,
  },
  {
    title: "Buyer Worksheet",
    desc: "Give buyers a clear payment estimate.",
    Icon: HouseIcon,
  },
  {
    title: "Client-Ready Report",
    desc: "Polished and ready to present.",
    Icon: PagesIcon,
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

        <div className="relative border-t border-gold/35 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <span className="absolute left-0 top-1/2 hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold lg:block" />

          <h3 className="font-display text-2xl leading-snug text-navy sm:text-[1.75rem]">
            Here&apos;s how the rest of your night goes.
          </h3>

          <ol className="relative mt-8">
            <span
              className="absolute bottom-10 left-[15px] top-2 w-px bg-gold/30"
              aria-hidden
            />

            {nightSteps.map((step) => (
              <li key={step.title} className="relative flex gap-4 pb-7">
                <div className="relative z-[1] flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/35 bg-cream text-gold">
                  <step.Icon className="h-[18px] w-[18px]" />
                </div>
                <div className="pt-1">
                  <p className="text-sm font-semibold text-navy">{step.title}</p>
                  <p className="mt-1 max-w-[22rem] text-[13px] italic leading-relaxed text-muted">
                    {step.desc}
                  </p>
                </div>
              </li>
            ))}

            <li className="relative flex gap-4">
              <div className="relative z-[1] flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold text-cream">
                <CrescentMoon className="h-[18px] w-[18px]" />
              </div>
              <div className="pt-0.5">
                <p className="font-hand text-[1.35rem] leading-none text-gold sm:text-[1.5rem]">
                  Done for the night.
                </p>
                <p className="mt-1.5 max-w-[22rem] text-[13px] italic leading-relaxed text-muted">
                  Tomorrow&apos;s listing appointment is ready.
                </p>
              </div>
            </li>
          </ol>

          <p className="font-hand mt-7 text-lg leading-snug text-navy/55">
            8:42 p.m. → lights out.
          </p>
        </div>
      </div>
    </section>
  );
}
