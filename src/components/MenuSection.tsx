const MenuSection = () => {
    const smallBites = [
        {
            name: "HOUSE PRETZEL",
            description: "Warm, salted pretzel with ale mustard dip",
            price: "$25",
        },
        {
            name: "HOPCORN BITES",
            description: "Crispy beer-battered brussels, spicy aioli",
            price: "$37",
        },
        {
            name: "BARREL-AGED HUMMUS",
            description: "Creamy house-made hummus, local veggies, pita",
            price: "$37",
        },
    ];

    const mainPlates = [
        {
            name: "WEST COAST BURGER",
            description: "Beef patty, sharp cheddar, hoppy pickles, aioli",
            price: "$32",
        },
        {
            name: "BREWMASTER’S BOWL",
            description: "Grilled brussels, quinoa, roasted root veggies",
            price: "$30",
        },
        {
            name: "AMBER ALE MAC",
            description: "Rich cheese sauce, pasta shells, toasted crumb top",
            price: "$29",
        },
    ];

    return (
        <section className="w-full bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
                    {/* Small Bites Column */}
                    <div>
                        <h2 className="mb-8 border-b-2 border-[#5c4033] pb-4 text-4xl font-bold uppercase tracking-tight text-[#2d1b11] font-[family-name:var(--font-oswald)]">
                            Small Bites
                        </h2>
                        <div className="flex flex-col gap-10">
                            {smallBites.map((item, index) => (
                                <div key={index} className="flex justify-between items-start group">
                                    <div className="flex flex-col">
                                        <h3 className="text-xl font-semibold uppercase tracking-tight text-[#2d1b11] font-[family-name:var(--font-oswald)] mb-2 group-hover:text-[#d25d1e] transition-colors">
                                            {item.name}
                                        </h3>
                                        <p className="text-base text-[#1a1a1a]/60 font-medium">
                                            {item.description}
                                        </p>
                                    </div>
                                    <span className="text-xl font-semibold text-[#2d1b11] font-[family-name:var(--font-oswald)]">
                                        {item.price}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Main Plates Column */}
                    <div>
                        <h2 className="mb-8 border-b-2 border-[#5c4033] pb-4 text-4xl font-bold uppercase tracking-tight text-[#2d1b11] font-[family-name:var(--font-oswald)]">
                            Main Plates
                        </h2>
                        <div className="flex flex-col gap-10">
                            {mainPlates.map((item, index) => (
                                <div key={index} className="flex justify-between items-start group">
                                    <div className="flex flex-col">
                                        <h3 className="text-xl font-semibold uppercase tracking-tight text-[#2d1b11] font-[family-name:var(--font-oswald)] mb-2 group-hover:text-[#d25d1e] transition-colors">
                                            {item.name}
                                        </h3>
                                        <p className="text-base text-[#1a1a1a]/60 font-medium">
                                            {item.description}
                                        </p>
                                    </div>
                                    <span className="text-xl font-semibold text-[#2d1b11] font-[family-name:var(--font-oswald)]">
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
