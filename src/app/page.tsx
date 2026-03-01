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
      <main className="flex min-h-[60vh] lg:min-h-screen w-full justify-center pt-[20vh] lg:pt-[32vh]">
        <div className="relative flex flex-col items-center px-4 md:px-0">
          {/* Subtitle Text */}
          <div className="relative lg:absolute lg:-top-18 lg:-left-35 mb-12 lg:mb-0 w-full lg:w-auto max-w-[600px] text-center lg:text-left z-20">
            <p className="text-sm md:text-base font-bold uppercase tracking-wide text-[#1a1a1a] leading-loose lg:leading-tight px-4 lg:px-0">
              Experience authentic Korean tastes, bold spices, <br className="hidden md:block" />
              and the warmest dining atmosphere in town
            </p>
          </div>

          {/* Hero Text */}
          <div className="flex flex-col items-center gap-4 lg:gap-8 text-center uppercase leading-[0.85] font-[family-name:var(--font-anton)]">
            <div className="relative">
              {/* Right Top Image Decor */}
              <div className="absolute -right-[5vw] lg:-right-[22vw] -top-8 lg:-top-8 z-10 h-[22vw] w-[22vw] lg:h-[16vw] lg:w-[16vw] rotate-9 overflow-hidden rounded-sm shadow-2xl">
                <img
                  src="/images/DSC09606.JPG"
                  alt="Cafe Decor"
                  className="h-full w-full object-cover"
                />
              </div>
              <h1 className="relative z-20 text-[20vw] lg:text-[15vw] font-normal tracking-[0.05em] text-[#d25d1e] whitespace-nowrap">
                Sohee's
              </h1>
            </div>
            <div className="relative mt-8 lg:mt-0">
              {/* Circular Image Decor */}
              <div className="absolute -left-[5vw] lg:-left-[12vw] bottom-10 lg:bottom-18 z-10 h-[28vw] w-[28vw] lg:h-[18vw] lg:w-[18vw] -rotate-9 lg:rotate-9 overflow-hidden rounded-full shadow-xl">
                <img
                  src="/images/bar_decor.png"
                  alt="Bar Atmosphere"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Beer Mug Image */}
              <div className="absolute left-[50%] lg:left-[45%] -top-[10vw] lg:top-4 z-30 h-[40vw] w-[40vw] lg:h-[30vw] lg:w-[30vw] -translate-x-1/2">
                <img
                  src="/images/beer_mug.png"
                  alt="Beer Mug"
                  className="h-full w-full object-contain drop-shadow-2xl"
                />
              </div>
              <h1 className="relative z-20 text-[26vw] lg:text-[22vw] font-normal tracking-[0.05em] text-[#d25d1e] whitespace-nowrap">
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
