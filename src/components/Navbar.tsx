"use client"
import Link from "next/link";

const Navbar = () => {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="absolute top-0 z-50 w-full" style={{ background: 'var(--background)' }}>
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <span className="text-3xl font-[family-name:var(--font-anton)] uppercase tracking-tighter text-[#1a1a1a]">
                        Sohee's
                    </span>
                    <div className="h-8 w-[2px] bg-[#d25d1e]" />
                </div>

                {/* Links */}

                {/* Contact & CTA */}
                <div className="flex items-center gap-6">
                    <div className="hidden items-center gap-2 md:flex">
                        <svg
                            className="h-5 w-5 text-[#d25d1e]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                        </svg>
                        <span className="text-lg font-bold text-[#1a1a1a]">91+ 9711722273</span>
                    </div>
                    <button
                        onClick={scrollToContact}
                        className="rounded-sm bg-[#d25d1e] px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-[#b04a18] hover:shadow-lg active:scale-95"
                    >
                        Get in touch
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
