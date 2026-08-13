import { Quicksand } from "next/font/google";
import { CircleCheck, CircleX, FatArrow, NoteArrow, SmileyFace, StarBurst } from "./Doodles";

const round = Quicksand({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const dontPromise = [
  "We will not 10x your business.",
  "We will not replace your market knowledge.",
  "We will not choose the list price.",
  "We will not attend the listing appointment on your behalf.",
];

const weBuilt = [
  "A repeatable CMA workflow you control.",
  "Connected calculations.",
  "Fewer opportunities for mistakes.",
  "More professional client reports.",
  "Less rebuilding the same thing from scratch.",
];

export function PromiseCompare() {
  return (
    <section className="section-rule px-4 py-16 sm:px-5 lg:pl-6 lg:pr-12 lg:py-20">
      <div className="relative mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:gap-16">
        <article className="relative rounded-[22px] border border-line bg-cream-soft px-8 py-8 pr-12 pb-16 shadow-[0_12px_40px_rgba(13,28,40,0.06)] sm:px-10 sm:pr-16 sm:py-10">
          <h2
            className={`${round.className} text-center text-[1.65rem] font-bold leading-snug text-navy sm:text-[1.85rem]`}
          >
            Things we{" "}
            <span className="hand-underline">don&apos;t</span> promise.
          </h2>

          <ul className="mt-8 space-y-4">
            {dontPromise.map((item) => (
              <li key={item} className="flex items-start gap-3.5">
                <CircleX className="mt-0.5 h-[22px] w-[22px] shrink-0 text-navy" />
                <span className="text-[15px] font-medium leading-snug text-navy sm:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-start gap-2">
            <NoteArrow className="mt-1 h-8 w-12 shrink-0 text-navy" />
            <p className="font-hand max-w-[240px] text-[18px] leading-snug text-navy">
              If the software picked the price, it would have to explain it to the seller. It
              declined.
            </p>
          </div>

          <SmileyFace className="absolute bottom-6 right-7 h-9 w-9 text-navy" />
        </article>

        <div className="pointer-events-none absolute left-1/2 top-[42%] z-10 hidden -translate-x-1/2 -translate-y-1/2 md:block">
          <FatArrow className="h-[4.25rem] w-[7.25rem] text-navy drop-shadow-[0_2px_0_#fdfbf7]" />
        </div>

        <article className="relative rounded-[22px] border border-line bg-cream-soft px-8 py-8 pr-12 pb-16 shadow-[0_12px_40px_rgba(13,28,40,0.06)] sm:px-10 sm:pr-16 sm:py-10">
          <h2
            className={`${round.className} text-center text-[1.65rem] font-bold leading-snug text-navy sm:text-[1.85rem]`}
          >
            What we <span className="hand-underline">actually</span> built.
          </h2>

          <ul className="mt-8 space-y-4">
            {weBuilt.map((item) => (
              <li key={item} className="flex items-start gap-3.5">
                <CircleCheck className="mt-0.5 h-[22px] w-[22px] shrink-0 text-gold" />
                <span className="text-[15px] font-medium leading-snug text-navy sm:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <StarBurst className="absolute bottom-6 right-7 h-11 w-11 text-gold" />
        </article>
      </div>
    </section>
  );
}
