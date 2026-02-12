import Image from "next/image";

const GallerySection = () => {
    const galleryItems = [
        {
            title: "DELICIOUS MOMENTS",
            subtitle: "Taste of Korea",
            image: "/images/IMG_6113.jpg",
            span: "large"
        },
        {
            title: "SIGNATURE DISHES",
            subtitle: "Chef's Special",
            image: "/images/IMG_6099.jpg",
            span: "normal"
        },
        {
            title: "WARM WELCOME",
            subtitle: "Join Us",
            image: "/images/IMG_6106.jpg",
            span: "normal"
        }
    ];

    return (
        <section className="relative w-full bg-[#1a0f0a] py-0">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {galleryItems.map((item, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden"
                        >
                            {/* Image Container */}
                            <div className="relative h-[400px] w-full overflow-hidden bg-neutral-800">
                                <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>

                            {/* Text Overlay */}
                            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-8">
                                <h3 className="mb-2 text-3xl font-bold uppercase tracking-tight text-white font-[family-name:var(--font-oswald)]">
                                    {item.title}
                                </h3>
                                <p className="text-lg text-white/70">
                                    {item.subtitle}
                                </p>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-[#d25d1e]/0 transition-all duration-300 group-hover:bg-[#d25d1e]/10"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
