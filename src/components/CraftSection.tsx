import Image from "next/image";

const CraftSection = () => {
    return (
        <section className="relative w-full bg-[#1a0f0a] py-24 text-white">
            <div className="mx-auto max-w-7xl px-6">

                {/* Main Content Area */}
                <div className="relative mb-24 grid grid-cols-1 gap-12 lg:grid-cols-12">

                    {/* Left & Center: Headline */}
                    <div className="lg:col-span-8">
                        <h2 className="text-6xl font-bold uppercase leading-tight tracking-tight font-[family-name:var(--font-oswald)]">
                            Discover Authentic Flavors In Every Bite. Serving{' '}
                            <span className="text-[#eecb45]">
                                Korean Cuisine With Passion
                            </span>{' '}
                            To Bring People Together
                        </h2>
                    </div>

                    {/* Right: Beer Sketch & Description */}
                    <div className="flex flex-col justify-end lg:col-span-4">
                        {/* Placeholder for the beer sketch on the right edge */}
                        {/* We could use an absolute image here later if needed */}

                        <div className="mt-8 lg:mt-32">
                            <p className="text-lg leading-relaxed text-white/60">
                                Sohee's Kitchen serves bold, traditional dishes in a cozy setting, ensuring each guest enjoys fresh, distinctive flavors and a welcoming place to gather, relax, and unwind with good friends.
                            </p>
                        </div>
                    </div>
                </div>


                {/* Separator Line */}
                <div className="mb-12 h-px w-full bg-white/10"></div>


                {/* Content Items */}
                <div className="flex flex-col gap-12">
                    {[
                        {
                            date: "NEW ARRIVAL",
                            title: "BANG BANG MANDU\n(MOMOS)",
                            image: "/images/DSC09322.JPG"
                        },
                        {
                            date: "MUST TRY",
                            title: "BANG BANG SAUCE\nNOODLES",
                            image: "/images/DSC09301.JPG"
                        }
                    ].map((item, index) => (
                        <div key={index} className="group border-t border-white/10 pt-12 first:border-t-0 first:pt-0">
                            <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
                                {/* Left Image Placeholder */}
                                <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-sm md:w-80">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-grow">
                                    <span className="mb-2 text-sm text-white/50">
                                        {item.date}
                                    </span>
                                    <h3 className="mb-6 whitespace-pre-line text-3xl font-bold uppercase leading-tight text-white font-[family-name:var(--font-oswald)]">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Button */}
                                <button className="shrink-0 bg-white px-8 py-3 text-sm font-bold uppercase tracking-wider text-[#1a0f0a] transition-all hover:bg-[#eecb45]">
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default CraftSection;
