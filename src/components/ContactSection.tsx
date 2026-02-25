const ContactSection = () => {
    return (
        <section id="contact" className="relative w-full bg-white py-24">
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
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:col-span-2 lg:gap-12">

                        {/* Email Column */}
                        <div className="flex flex-col border-l-2 border-[#e5e5e5] pl-6 lg:pl-8">
                            <h3 className="mb-4 text-xl font-bold uppercase tracking-tight text-[#2d1b11] font-[family-name:var(--font-oswald)]">
                                E-MAIL
                            </h3>
                            <p className="mb-2 text-sm uppercase tracking-wider text-[#1a1a1a]/50">
                                General Inquiries
                            </p>
                            <a
                                href="mailto:soheeskitchen@gmail.com"
                                className="mb-8 text-lg lg:text-xl font-semibold break-words text-[#2d1b11] transition-colors hover:text-[#d25d1e]"
                            >
                                SOHEESKITCHEN@GMAIL.COM
                            </a>

                            <button className="mt-auto flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#d25d1e] transition-colors hover:text-[#b04a18]">
                                Send Email
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* Phone Column */}
                        <div className="flex flex-col border-l-2 border-[#e5e5e5] pl-6 lg:pl-8">
                            <h3 className="mb-4 text-xl font-bold uppercase tracking-tight text-[#2d1b11] font-[family-name:var(--font-oswald)]">
                                Make A Call
                            </h3>
                            <p className="mb-2 text-sm uppercase tracking-wider text-[#1a1a1a]/50">
                                Sales Department
                            </p>
                            <a
                                href="tel:+919711722273"
                                className="mb-8 text-lg lg:text-xl font-semibold break-words text-[#2d1b11] transition-colors hover:text-[#d25d1e]"
                            >
                                +91 9711722273
                            </a>

                            <button className="mt-auto flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#d25d1e] transition-colors hover:text-[#b04a18]">
                                Book A Call
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* Address Column */}
                        <div className="flex flex-col border-l-2 border-[#e5e5e5] pl-6 lg:pl-8">
                            <h3 className="mb-4 text-xl font-bold uppercase tracking-tight text-[#2d1b11] font-[family-name:var(--font-oswald)]">
                                Visit Us
                            </h3>
                            <p className="mb-2 text-sm uppercase tracking-wider text-[#1a1a1a]/50">
                                Location
                            </p>
                            <span className="mb-8 text-base font-semibold leading-relaxed text-[#2d1b11]">
                                First Floor, BB 28, Block B, <br />
                                Ansal Golf Link -1, <br />
                                Greater Noida, UP 201315
                            </span>

                            <a
                                href="https://maps.google.com/?q=First+Floor,+BB+28,+Block+B,+Ansal+Golf+Link+-1,+Greater+Noida,+Uttar+Pradesh+201315"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-auto flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#d25d1e] transition-colors hover:text-[#b04a18]"
                            >
                                Get Directions
                                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
