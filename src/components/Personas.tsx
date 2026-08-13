import { Brain, Eye, Grid3x3, Trophy, Zap } from "lucide-react";

const personas = [
  {
    icon: Eye,
    title: "Eyeballer",
    desc: "You know the neighborhood.",
  },
  {
    icon: Grid3x3,
    title: "Spreadsheet Wizard",
    desc: "Don't touch column G.",
  },
  {
    icon: Brain,
    title: "Analyst",
    desc: "Yes, I adjusted for the third garage bay.",
  },
  {
    icon: Trophy,
    title: "Presentation Perfectionist",
    desc: "The seller is going to see a polished report.",
  },
  {
    icon: Zap,
    title: "Efficient One",
    desc: "I need a recommendation I can explain—before dinner.",
  },
];

export function Personas() {
  return (
    <section id="features" className="section-rule px-4 py-16 sm:px-5 lg:px-6 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center font-display text-3xl text-navy sm:text-4xl">
          Everyone prices differently.
        </h2>
        <div className="mx-auto mt-3 w-20">
          <svg viewBox="0 0 80 8" className="h-2 w-full text-gold" aria-hidden>
            <path
              d="M2 5c18-2 36 2 52-1 10-2 18 1 24 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0 lg:divide-x lg:divide-line">
          {personas.map((item) => (
            <div key={item.title} className="px-4 text-center lg:px-5">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center text-navy/65">
                <item.icon className="h-12 w-12 stroke-[1.15]" />
              </div>
              <h3 className="text-base font-semibold text-navy sm:text-lg">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[15px]">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="font-hand mx-auto mt-12 max-w-xl text-center text-xl leading-snug text-navy sm:text-2xl">
          Different methods. Same responsibility.
          <br />
          Every recommendation still has{" "}
          <span className="hand-underline-double font-semibold">your name</span> on it.
        </p>
      </div>
    </section>
  );
}
