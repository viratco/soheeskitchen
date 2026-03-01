
import Image from "next/image";

const StorySection = () => {
    return (
        <section className="relative w-full min-h-[600px] md:h-[800px]">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 bg-neutral-800 overflow-hidden">
                {/* We'll use a gray placeholder or later replace with a real image */}
                <Image
                    src="/images/IMG_6108.jpg"
                    alt="Cafe Background"
                    fill
                    className="object-cover opacity-50"
                />
            </div>

            <div className="relative mx-auto h-full max-w-7xl px-4 md:px-6">
                <div className="flex h-full flex-col justify-center py-16 md:py-0 md:flex-row md:items-center">

                    {/* Spacer for Left Side (where "FRIENDS" will be later, positioned absolute) */}
                    <div className="hidden w-1/2 md:block"></div>

                    {/* Right Content Box */}
                    <div className="relative z-10 w-full bg-[#fcfbf9] p-8 md:p-12 shadow-2xl md:w-1/2 md:-ml-20 lg:p-16">
                        <h2 className="mb-4 md:mb-6 text-3xl md:text-5xl font-black uppercase leading-[0.9] text-[#2d1b11] font-[family-name:var(--font-oswald)]">
                            Discover The
                            <br />
                            Story <span className="text-[#ecd449]">Behind</span>
                            <br />
                            <span className="text-[#ecd449]">Our Food</span>
                        </h2>

                        <p className="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-[#1a1a1a]/70">
                            Food is more than sustenance. It is where friends gather, flavors shine, and our love for Korean cuisine comes alive. Celebrate community and cooking.
                        </p>

                        <h3 className="text-sm font-bold uppercase tracking-widest text-[#2d1b11] font-[family-name:var(--font-oswald)]">
                            Curious About Our Journey?
                        </h3>
                    </div>
                </div>

                {/* Logo Image Overlay */}
                <div className="hidden absolute z-20 md:block md:bottom-60 md:left-20 md:top-auto md:translate-x-0 pointer-events-none">
                    <div className="relative h-64 w-64 -rotate-6 transform md:h-96 md:w-96">
                        <Image
                            src="/images/sohees_white_txt.png"
                            alt="Sohee's Kitchen Logo"
                            fill
                            className="object-contain drop-shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StorySection;
