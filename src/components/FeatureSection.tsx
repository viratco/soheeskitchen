const FeatureSection = () => {
    const features = [
        {
            title: "BEST KOREAN\nFOOD",
            description:
                "Savor the rich, authentic flavors of Korea with our traditional recipes and fresh ingredients, prepared with passion.",
        },
        {
            title: "AUTHENTIC\nVIBE",
            description:
                "Immerse yourself in a warm, welcoming atmosphere that captures the essence of Korean dining culture and hospitality.",
        },
        {
            title: "CHEF'S\nSPECIALS",
            description:
                "Experience our rotating menu of innovative dishes where traditional techniques meet modern creativity for a unique taste.",
        },
    ];

    return (
        <section className="mt-52 w-full bg-[var(--background)] py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col">
                            <h2 className="mb-6 whitespace-pre-line border-b-4 border-[#d25d1e] pb-4 text-4xl font-bold uppercase leading-tight tracking-tight text-[#1a1a1a]">
                                {feature.title}
                            </h2>
                            <p className="text-base leading-relaxed text-[#1a1a1a]/70">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
