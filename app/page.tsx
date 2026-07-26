import Hero from "@/components/sections/hero";
import Introduction from "@/components/sections/introduction";
import Mission from "@/components/sections/mission";
import Services from "@/components/sections/services";
import Portfolio from "@/components/sections/portfolio";
import Testimonials from "@/components/sections/testimonials";
import Competitor from "@/components/sections/competitor";
import MarketAnalysis from "@/components/sections/market-analysis";
import Impact from "@/components/sections/impact";
import Promise from "@/components/sections/promise";
import CTA from "@/components/sections/cta";
import { MarqueeTicker } from "@/components/ui/marquee-ticker";

export default function Home() {
  return (
    <div className="bg-[#050505] text-white overflow-hidden">
      <Hero />
      <MarqueeTicker />
      <Introduction />
      <Mission />
      <Services />
      <Portfolio />
      <Testimonials />
      <Competitor />
      <MarketAnalysis />
      <Impact />
      <Promise />
      <CTA />
    </div>
  );
}
