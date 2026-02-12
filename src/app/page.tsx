import Image from "next/image";
import FeatureSection from "@/components/FeatureSection";
import DiscoverSection from "@/components/DiscoverSection";
import ServiceSection from "@/components/ServiceSection";
import MenuSection from "@/components/MenuSection";
import StorySection from "@/components/StorySection";
import CraftSection from "@/components/CraftSection";
import TickerSection from "@/components/TickerSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen w-full justify-center pt-[32vh]">
        <div className="relative flex flex-col items-center">
          {/* Subtitle Text */}
          <div className="absolute -top-18 -left-35 max-w-[600px] text-left">
            <p className="text-sm font-bold uppercase tracking-wide text-[#1a1a1a] leading-tight">
              Experience authentic Korean tastes, bold spices, <br />
              and the warmest dining atmosphere in town
            </p>
          </div>

          {/* Hero Text */}
          <div className="flex flex-col items-center gap-8 text-center uppercase leading-[0.85] font-[family-name:var(--font-anton)]">
            <div className="relative">
              {/* Right Top Image Decor */}
              <div className="absolute -right-[22vw] -top-8 z-10 h-[16vw] w-[16vw] rotate-9 overflow-hidden rounded-sm shadow-2xl">
                <img
                  src="/images/DSC09606.JPG"
                  alt="Cafe Decor"
                  className="h-full w-full object-cover"
                />
              </div>
              <h1 className="text-[15vw] font-normal tracking-[0.05em] text-[#d25d1e]">
                Sohee's
              </h1>
            </div>
            <div className="relative">
              {/* Circular Image Decor */}
              <div className="absolute -left-[12vw] bottom-18 z-10 h-[18vw] w-[18vw] rotate-9 overflow-hidden rounded-full shadow-xl">
                <img
                  src="/images/bar_decor.png"
                  alt="Bar Atmosphere"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Beer Mug Image */}
              <div className="absolute left-[45%] top-4 z-30 h-[30vw] w-[30vw] -translate-x-1/2">
                <img
                  src="/images/beer_mug.png"
                  alt="Beer Mug"
                  className="h-full w-full object-contain drop-shadow-2xl"
                />
              </div>
              <h1 className="relative z-20 text-[22vw] font-normal tracking-[0.05em] text-[#d25d1e]">
                Kitchen
              </h1>
            </div>
          </div>
        </div>
      </main>
      <FeatureSection />
      <DiscoverSection />
      <ServiceSection />
      <MenuSection />
      <StorySection />
      <CraftSection />
      <TickerSection />
      <GallerySection />
      <ContactSection />
    </>
  );
}
