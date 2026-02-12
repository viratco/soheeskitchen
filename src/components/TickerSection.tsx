"use client";

const TickerSection = () => {
    const tickerText = "KOREAN CAFE • FRESH INGREDIENTS • AUTHENTIC TASTE • COZY AMBIENCE • ";

    return (
        <section className="relative w-full overflow-hidden bg-[#1a0f0a] py-16">
            <div className="ticker-wrapper">
                <div className="ticker-content">
                    {/* Repeat the text multiple times for seamless loop */}
                    {[...Array(20)].map((_, index) => (
                        <span key={index} className="ticker-item text-9xl font-bold uppercase text-[#d25d1e] font-[family-name:var(--font-oswald)]">
                            {tickerText}
                        </span>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .ticker-wrapper {
                    width: 100%;
                    overflow: hidden;
                }
                
                .ticker-content {
                    display: flex;
                    animation: scroll 30s linear infinite;
                    white-space: nowrap;
                }
                
                .ticker-item {
                    padding-right: 2rem;
                }
                
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </section>
    );
};

export default TickerSection;
