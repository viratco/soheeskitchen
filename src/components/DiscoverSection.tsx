import Image from "next/image";

const DiscoverSection = () => {
    return (
        <section className="relative w-full bg-white pb-16 pt-20 md:pb-24 md:pt-32">
            {/* Grange/Torn effect divider could go here */}
            <div className="absolute -top-10 left-0 h-16 w-full bg-[url('/images/white-torn-paper.png')] bg-cover bg-repeat-x"></div>

            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="grid grid-cols-1 items-center gap-10 md:gap-16 md:grid-cols-2">
                    {/* Left Image */}
                    <div className="relative h-[350px] md:h-[700px] w-full overflow-hidden rounded-sm shadow-xl">
                        <Image
                            src="/images/discover_main.jpg"
                            alt="Brewing Passion"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="flex flex-col text-left">
                        <span className="mb-4 text-sm font-bold uppercase tracking-widest text-[#1a1a1a] opacity-60">
                            Discover Our Story
                        </span>
                        <h2 className="mb-6 md:mb-8 text-4xl md:text-6xl font-black uppercase leading-none tracking-tight text-[#2d1b11] font-[family-name:var(--font-oswald)]">
                            We Cook And
                            <br />
                            Share Our
                            <br />
                            <span className="text-[#eacb37]">Passion For Food</span>
                        </h2>
                        <p className="mb-6 md:mb-8 text-base md:text-lg leading-relaxed text-[#1a1a1a]/70">
                            We craft exceptional dishes and foster a warm, lively space for all who love authentic Korean cuisine. Our mission is to bring people together and celebrate community, flavor, and tradition.
                        </p>

                        <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-[#1a1a1a]">
                            Join Us For A Meal Today!
                        </h3>

                        <div className="mt-6 md:mt-8">
                            <h3 className="mb-4 text-2xl md:text-3xl font-bold uppercase leading-tight text-[#2d1b11] font-[family-name:var(--font-oswald)]">
                                Passion For Cooking
                            </h3>
                            <p className="text-base md:text-lg leading-relaxed text-[#1a1a1a]/70">
                                Every dish is prepared with care and creativity, blending traditional recipes with modern touches. Our team is devoted to quality, freshness, and sharing great moments over a delicious meal.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DiscoverSection;
