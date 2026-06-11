import { AxionHero } from "@/components/AxionHero";
import { AxionStats } from "@/components/AxionStats";
import { AxionAbout } from "@/components/AxionAbout";
import { AxionServicesPreview } from "@/components/AxionServicesPreview";
import { AxionCases } from "@/components/AxionCases";
import { AxionProductsPreview } from "@/components/AxionProductsPreview";
import { AxionTestimonials } from "@/components/AxionTestimonials";
import { AxionFinalCTA } from "@/components/AxionFinalCTA";
import { SiteFooter } from "@/components/axion/SiteFooter";

export default function Home() {
  return (
    <main className="relative w-full">
      <AxionHero />
      <AxionStats />
      <AxionAbout />
      <AxionServicesPreview />
      <AxionCases />
      <AxionProductsPreview />
      <AxionTestimonials />
      <AxionFinalCTA />
      <SiteFooter />
    </main>
  );
}
