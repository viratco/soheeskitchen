const MenuSection = () => {
    const signatures = [
        {
            name: "TTEOKBOKKI",
            description: "Chewy Korean rice cakes simmered in a rich, spicy-sweet sauce",
            price: "₹ 240",
        },
        {
            name: "YAM YAM FRIED CHICKEN",
            description: "Boneless fried chicken stir-fried with our special Yangnyeom sauce",
            price: "₹ 450",
        },
        {
            name: "MANDU (MOMOS)",
            description: "Korean-style chicken dumplings, steamed or fried to perfection",
            price: "₹ 330",
        },
        {
            name: "KIMBAP",
            description: "Traditional Korean seaweed rice roll packed with fresh vegetables",
            price: "₹ 250",
        },
    ];

    const houseFavorites = [
        {
            name: "KIMCHI JJIGAE",
            description: "Spicy Korean stew with kimchi, vegetables, and tofu served with rice",
            price: "₹ 350",
        },
        {
            name: "CHICKEN KATSU",
            description: "Golden fried chicken cutlet with a savory sauce served with rice",
            price: "₹ 350",
        },
        {
            name: "JEYUK BOKKEUM",
            description: "Tender pork stir-fried in a rich, spicy Korean chilli sauce with fresh vegetables",
            price: "₹ 450",
        },
        {
            name: "YAM YAM CHICKEN BURGER",
            description: "Crispy fried chicken patty with our special Yangnyeom sauce",
            price: "₹ 390",
        },
    ];

    return (
        <section className="w-full bg-white py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
                    {/* Signatures Column */}
                    <div>
                        <h2 className="mb-8 border-b-2 border-[#d25d1e] pb-4 text-2xl md:text-4xl font-bold uppercase tracking-tight text-[#2d1b11] font-[family-name:var(--font-oswald)]">
                            Signatures
                        </h2>
                        <div className="flex flex-col gap-10">
                            {signatures.map((item, index) => (
                                <div key={index} className="flex justify-between items-start group">
                                    <div className="flex flex-col max-w-[75%]">
                                        <h3 className="text-xl font-semibold uppercase tracking-tight text-[#2d1b11] font-[family-name:var(--font-oswald)] mb-2 group-hover:text-[#d25d1e] transition-colors">
                                            {item.name}
                                        </h3>
                                        <p className="text-sm md:text-base text-[#1a1a1a]/60 font-medium">
                                            {item.description}
                                        </p>
                                    </div>
                                    <span className="text-xl font-semibold text-[#d25d1e] font-[family-name:var(--font-oswald)] shrink-0">
                                        {item.price}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* House Favorites Column */}
                    <div>
                        <h2 className="mb-8 border-b-2 border-[#d25d1e] pb-4 text-2xl md:text-4xl font-bold uppercase tracking-tight text-[#2d1b11] font-[family-name:var(--font-oswald)]">
                            House Favorites
                        </h2>
                        <div className="flex flex-col gap-10">
                            {houseFavorites.map((item, index) => (
                                <div key={index} className="flex justify-between items-start group">
                                    <div className="flex flex-col max-w-[75%]">
                                        <h3 className="text-xl font-semibold uppercase tracking-tight text-[#2d1b11] font-[family-name:var(--font-oswald)] mb-2 group-hover:text-[#d25d1e] transition-colors">
                                            {item.name}
                                        </h3>
                                        <p className="text-sm md:text-base text-[#1a1a1a]/60 font-medium">
                                            {item.description}
                                        </p>
                                    </div>
                                    <span className="text-xl font-semibold text-[#d25d1e] font-[family-name:var(--font-oswald)] shrink-0">
                                        {item.price}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MenuSection;
