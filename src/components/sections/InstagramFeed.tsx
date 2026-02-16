"use client";

export default function InstagramFeed() {
    const images = [
        { src: "/assets/travel-bali.png", label: "Bali Escapes" },
        { src: "/assets/travel-paris.png", label: "Parisian Dreams" },
        { src: "/assets/travel-mountains.png", label: "Swiss Alps" },
        { src: "/assets/travel-bali.png", label: "Tropical Bliss" }, // Repeats for carousel effect
        { src: "/assets/travel-paris.png", label: "City Lights" },
    ];

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex items-end justify-between">
                <div>
                    <h2 className="text-4xl font-bold text-brand-black font-display mb-2">
                        Captured Moments
                    </h2>
                    <p className="text-gray-500">Follow our journey @destination__anywhere</p>
                </div>
                <a
                    href="https://instagram.com/destination__anywhere"
                    target="_blank"
                    className="hidden md:block text-high-voltage-orange font-bold hover:underline"
                >
                    View Instagram →
                </a>
            </div>

            {/* Horizontal Scroll Container (Hide Scrollbar) */}
            <div className="flex overflow-x-auto gap-6 px-4 pb-8 -mx-4 md:px-0 md:mx-auto noscrollbar snap-x">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="min-w-[300px] h-[400px] rounded-3xl overflow-hidden shadow-lg relative flex-shrink-0 snap-center group"
                    >
                        <img
                            src={img.src}
                            alt={img.label}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                            <span className="text-white font-bold text-lg">{img.label}</span>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
        .noscrollbar::-webkit-scrollbar {
          display: none;
        }
        .noscrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    );
}
