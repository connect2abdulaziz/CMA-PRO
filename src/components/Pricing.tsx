import { ArrowRight } from "lucide-react";
import { Button } from "./Button";
import { CircleCheck, OpenHeadEmoji } from "./Doodles";

const leftFeatures = [
  "Full Comp Analysis workflow",
  "Seller Net Sheet",
  "Buyer Payment & Closing Costs",
];

const rightFeatures = ["Saved work", "Client-ready reports", "3-day free trial"];

export function Pricing() {
  return (
    <section id="pricing" className="section-rule px-4 py-16 sm:px-5 lg:px-6 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_1.45fr_0.6fr] lg:gap-10">
        <div>
          <h2 className="font-display text-2xl leading-snug text-navy sm:text-[1.9rem]">
            <span className="block whitespace-nowrap">A CMA process you can repeat.</span>
            <span className="block whitespace-nowrap">A recommendation you can defend.</span>
          </h2>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-navy/80">
            Build more consistently, reduce avoidable calculation errors, and give clients a
            clearer explanation of how you reached your recommendation.
          </p>
        </div>

        <div>
          <h3 className="font-display text-[1.65rem] font-bold leading-none text-navy sm:text-[1.85rem]">
            One product. One plan.
          </h3>

          <p className="mt-4 flex items-baseline gap-2">
            <span className="font-display text-[4.25rem] font-bold leading-none tracking-tight text-navy sm:text-[5rem]">
              $20
            </span>
            <span className="text-[15px] font-medium text-navy sm:text-base">/month</span>
          </p>

          <div className="mt-8 grid grid-cols-1 gap-x-12 gap-y-3 sm:grid-cols-2">
            <ul className="space-y-3">
              {leftFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-2.5 text-[15px] text-navy">
                  <CircleCheck className="h-[18px] w-[18px] shrink-0 text-navy" />
                  {feature}
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {rightFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-2.5 text-[15px] text-navy">
                  <CircleCheck className="h-[18px] w-[18px] shrink-0 text-navy" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 grid grid-cols-1 items-start gap-x-12 gap-y-4 sm:grid-cols-2">
            <Button href="#pricing" className="w-fit whitespace-nowrap !px-6 !py-3.5">
              Start Your 3-Day Free Trial
            </Button>
            <div className="sm:pt-1">
              <Button href="#how-it-works" variant="ghost" className="gap-1.5 !px-0 text-navy">
                See How It Works <ArrowRight className="h-4 w-4" />
              </Button>
              <p className="mt-1 text-[12px] leading-snug text-navy/55">
                No credit card required. Cancel anytime.
              </p>
            </div>
          </div>
        </div>

        <div className="relative inline-block lg:pl-2">
          <p className="font-hand pr-14 text-2xl leading-snug text-navy/80 sm:text-[1.7rem]">
            No confusing tiers.
            <br />
            No sales calls.
            <br />
            Just $20.
            <br />
            <span className="hand-underline">That&apos;s it.</span>
          </p>
          <OpenHeadEmoji className="absolute bottom-0 right-0 h-14 w-14 text-navy/75" />
        </div>
      </div>
    </section>
  );
}
