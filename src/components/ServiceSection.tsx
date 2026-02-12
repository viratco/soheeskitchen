const ServiceSection = () => {
    const services = [
        {
            title: "CONNECT WITH\nSANDANE HOMES",
            description: "Partnered with Sandane Homes for a premium living and dining experience.",
            icon: (
                <svg className="h-12 w-12 text-[#d25d1e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            ),
        },
        {
            title: "NEAR EXPO MART\nGREATER NOIDA",
            description: "Conveniently located near Expo Mart, perfect for post-event dining and relaxing.",
            icon: (
                <svg className="h-12 w-12 text-[#d25d1e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
        },
        {
            title: "AUTHENTIC\nKOREAN CUISINE",
            description: "Experience the true taste of Korea with our traditional recipes and fresh ingredients.",
            icon: (
                <svg className="h-12 w-12 text-[#d25d1e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
        },
        {
            title: "COZY\nAMBIENCE",
            description: "Relax in our warm, inviting space designed for comfort and great conversations.",
            icon: (
                <svg className="h-12 w-12 text-[#d25d1e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            ),
        },
    ];

    return (
        <section className="w-full bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 divide-y divide-[#e5e5e5] border-[#e5e5e5] md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4 lg:divide-x">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col items-start p-8 first:pl-0 last:pr-0">
                            <div className="mb-6">
                                {service.icon}
                            </div>
                            <h3 className="mb-4 whitespace-pre-line text-2xl font-bold uppercase leading-tight tracking-tight text-[#2d1b11] font-[family-name:var(--font-oswald)]">
                                {service.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-[#1a1a1a]/70">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
