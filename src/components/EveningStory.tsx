import Image from "next/image";
import {
  CalculatorIcon,
  DocHouse,
  DocPie,
  LaptopHeart,
  MonitorChart,
  OutlineStar,
  SquareCheck,
} from "./Doodles";

const nightSteps = [
  {
    title: "Comp Analysis",
    desc: "Adjust, analyze, and build a recommendation you can defend.",
    Icon: MonitorChart,
  },
  {
    title: "Seller Net Sheet",
    desc: "Carry your proposed price into an accurate seller proceeds.",
    Icon: CalculatorIcon,
  },
  {
    title: "Buyer Worksheet",
    desc: "Give buyers a clear picture of the payment and cash needed.",
    Icon: DocHouse,
  },
  {
    title: "Client-Ready Report",
    desc: "Polished, professional, and ready to present.",
    Icon: DocPie,
  },
];

function IconSlot({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-[1] flex h-14 w-14 shrink-0 items-center justify-center bg-cream text-navy">
      {children}
    </div>
  );
}

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

        <div>
          <h3 className="font-hand text-[1.65rem] leading-snug text-gold sm:text-[1.85rem]">
            Here&apos;s how the rest of your night goes.
          </h3>
          <svg viewBox="0 0 180 8" className="mt-1 h-2 w-40 text-navy" aria-hidden>
            <path
              d="M2 5c22-2.2 44 2 68-.6 22-2.4 42 1.4 62 .4 14-.6 28 .8 44 .4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>

          <div className="relative mt-4">
            <span
              className="pointer-events-none absolute left-[27px] top-[34px] bottom-[46px] border-l-[1.5px] border-dashed border-navy/35"
              aria-hidden
            />

            <ol>
              {nightSteps.map((step) => (
                <li
                  key={step.title}
                  className="relative flex items-start gap-3.5 border-b border-line py-4 first:pt-2"
                >
                  <IconSlot>
                    <step.Icon className="h-11 w-11" />
                  </IconSlot>
                  <div className="min-w-0 flex-1 pt-1">
                    <p className="text-sm font-semibold text-navy">{step.title}</p>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-navy/70">{step.desc}</p>
                  </div>
                  <span className="mt-1 inline-flex h-6 w-6 shrink-0">
                    <SquareCheck className="h-6 w-6 text-navy" />
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex items-start gap-3.5 pt-4">
            <IconSlot>
              <LaptopHeart className="h-11 w-11" />
            </IconSlot>
            <div className="min-w-0 flex-1 pt-1">
              <p className="text-sm font-semibold text-navy">Done for the night.</p>
              <p className="font-hand mt-1.5 text-xl leading-snug text-gold sm:text-[1.35rem]">
                Tomorrow&apos;s <span className="hand-underline">listing appointment</span> is
                ready.
              </p>
            </div>
            <span className="mt-1 inline-flex h-6 w-6 shrink-0">
              <OutlineStar className="h-6 w-6 text-gold" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
