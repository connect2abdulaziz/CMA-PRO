import { EveningStory } from "@/components/EveningStory";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/SiteNav";
import { Hero } from "@/components/Hero";
import { Personas } from "@/components/Personas";
import { Pricing } from "@/components/Pricing";
import { PromiseCompare } from "@/components/PromiseCompare";
import { Workflow } from "@/components/Workflow";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Personas />
        <Workflow />
        <PromiseCompare />
        <EveningStory />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
