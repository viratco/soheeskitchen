const ContactSection = () => {
    return (
        <section className="relative w-full bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">

                    {/* Left: Heading */}
                    <div className="lg:col-span-1">
                        <h2 className="text-6xl font-bold uppercase leading-tight tracking-tight text-[#2d1b11] font-[family-name:var(--font-oswald)]">
                            Ready To
                            <br />
                            <span className="text-[#ecd449]">Start?</span>
                        </h2>
                    </div>

                    {/* Right: Contact Info Grid */}
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:col-span-2">

                        {/* Email Column */}
                        <div className="flex flex-col border-l-2 border-[#e5e5e5] pl-8">
                            <h3 className="mb-4 text-xl font-bold uppercase tracking-tight text-[#2d1b11] font-[family-name:var(--font-oswald)]">
                                E-MAIL
                            </h3>
                            <p className="mb-2 text-sm uppercase tracking-wider text-[#1a1a1a]/50">
                                General Inquiries
                            </p>
                            <a
                                href="mailto:info@beer.com"
                                className="mb-8 text-xl font-semibold text-[#2d1b11] transition-colors hover:text-[#d25d1e]"
                            >
                                INFO@BEER.COM
                            </a>

                            <button className="mt-auto flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#d25d1e] transition-colors hover:text-[#b04a18]">
                                Send Email
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* Phone Column */}
                        <div className="flex flex-col border-l-2 border-[#e5e5e5] pl-8">
                            <h3 className="mb-4 text-xl font-bold uppercase tracking-tight text-[#2d1b11] font-[family-name:var(--font-oswald)]">
                                Make A Call
                            </h3>
                            <p className="mb-2 text-sm uppercase tracking-wider text-[#1a1a1a]/50">
                                Sales Department
                            </p>
                            <a
                                href="tel:+18408412569"
                                className="mb-8 text-xl font-semibold text-[#2d1b11] transition-colors hover:text-[#d25d1e]"
                            >
                                +1 840 841 25 69
                            </a>

                            <button className="mt-auto flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#d25d1e] transition-colors hover:text-[#b04a18]">
                                Book A Call
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
