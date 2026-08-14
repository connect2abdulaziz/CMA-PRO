import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "./Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 sm:px-5 lg:grid-cols-[0.82fr_1.18fr] lg:gap-6 lg:px-6 lg:py-16">
        <div className="animate-fade-up max-w-[22rem] lg:max-w-none">
          <h1 className="font-display max-w-[11.5em] text-[2.15rem] leading-[1.15] text-navy sm:text-4xl lg:text-[2.65rem]">
            You already know
            <br />
            how to price a home.
            <br />
            <span className="text-gold">
              We just made the
              <br />
              process less scattered.
            </span>
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-navy/80 sm:text-base">
            My CMA Pro brings your comp analysis, seller net sheet, buyer estimates, and
            client-ready reports into one consistent workflow—without taking the judgment out of
            your hands.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="#pricing">Start Your 3-Day Free Trial</Button>
            <Button href="#login" variant="ghost" className="gap-1.5">
              Sign In <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <p className="font-hand mt-6 max-w-xs text-lg leading-snug text-navy/75 sm:text-xl">
            No secret formula. No robot price.
            <br />
            Just your expertise in a{" "}
            <span className="hand-underline">better system</span>.
          </p>
        </div>

        <div className="animate-fade-up delay-1 relative">
          <Image
            src="/images/hero-section.png"
            alt="My CMA PRO Comp Analysis on laptop and phone — you choose the comps, make the adjustments, and own the recommendation"
            width={1397}
            height={1126}
            priority
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
