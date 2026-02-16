export default function InstagramFeed() {
    // Placeholders for instagram images
    const images = [
        "bg-blue-100",
        "bg-sky-200",
        "bg-indigo-100",
        "bg-blue-50",
        "bg-slate-100",
        "bg-sky-50",
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-deep-navy font-display mb-2">
                        Travel Stories
                    </h2>
                    <a
                        href="https://instagram.com/destination__anywhere"
                        target="_blank"
                        className="text-sunset-orange font-medium hover:underline"
                    >
                        @destination__anywhere
                    </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {images.map((bgClass, index) => (
                        <div
                            key={index}
                            className={`aspect-square rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-md ${bgClass}`}
                        >
                            <div className="w-full h-full flex items-center justify-center text-sky-900/20 font-bold text-2xl">
                                IG {index + 1}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
