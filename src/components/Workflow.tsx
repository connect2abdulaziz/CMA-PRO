import Image from "next/image";
import { BarChart3, Calculator, FileText, Receipt } from "lucide-react";
import { CircleCheck } from "./Doodles";

const painPoints = [
  "MLS in one tab.",
  "Adjustments somewhere else.",
  "Seller proceeds in another tool.",
  "Buyer estimates in another calculator.",
  "Presentation assembled afterward.",
  "Then back to the MLS because you forgot one thing.",
];

const jobs = [
  {
    icon: BarChart3,
    title: "Comp Analysis",
    desc: "Enter the comparable properties you've selected. Adjust, analyze, and build a recommendation you can explain.",
  },
  {
    icon: Receipt,
    title: "Seller Net Sheet",
    desc: "Carry your proposed price into an accurate estimated seller proceeds.",
  },
  {
    icon: Calculator,
    title: "Buyer Payment & Closing Costs",
    desc: "Give buyers a clear picture of the payment and estimated cash needed.",
  },
  {
    icon: FileText,
    title: "Client-Ready Reports",
    desc: "Turn your analysis into polished, professional reports in minutes.",
  },
];

export function Workflow() {
  return (
    <section id="how-it-works" className="section-rule px-4 py-16 sm:px-5 lg:px-6 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_0.95fr_1.3fr] lg:items-start lg:gap-8">
        <div>
          <h2 className="font-display text-2xl leading-snug text-navy sm:text-[1.85rem]">
            Your CMA isn&apos;t the problem.{" "}
            <span className="text-gold">The shuffle is.</span>
          </h2>
          <ul className="mt-6 space-y-3">
            {painPoints.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-navy/85">
                <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                {item}
              </li>
            ))}
          </ul>
          <p className="font-hand mt-6 max-w-[240px] text-lg leading-snug text-navy/70">
            This is not advanced technology.
            <br />
            It&apos;s mostly{" "}
            <span className="hand-underline">fewer tabs</span>.
          </p>
        </div>

        <div className="text-center">
          <Image
            src="/images/person-with-PC.png"
            alt="Agent at a laptop surrounded by MLS, spreadsheet, net sheet, slides, and buyer calc"
            width={1254}
            height={1254}
            className="mx-auto h-auto w-full max-w-sm"
          />
        </div>

        <div className="rounded-[22px] border border-line bg-cream-soft p-6 pr-10 sm:p-8 sm:pr-14">
          <h2 className="font-display text-2xl leading-snug text-navy sm:text-[1.75rem]">
            Three familiar jobs.{" "}
            <span className="text-gold">One connected workflow.</span>
          </h2>
          <ul className="mt-5 space-y-5">
            {jobs.map((job) => (
              <li key={job.title} className="flex gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center text-navy/70">
                  <job.icon className="h-5 w-5 stroke-[1.4]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-navy">{job.title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-muted">{job.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
