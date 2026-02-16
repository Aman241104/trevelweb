export default function About() {
    return (
        <section className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Image Side - Clean Rounded Rectangle */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative aspect-square w-full rounded-3xl overflow-hidden shadow-lg bg-gray-100">
                            {/* Placeholder for Founder Image */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
                                Sujal Soni <br /> Founder Portrait
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="order-1 lg:order-2">
                        <h2 className="text-xs font-bold tracking-[0.2em] text-high-voltage-orange uppercase mb-6">
                            Meet The Founder
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-brand-black font-display mb-8 leading-tight">
                            TRAVEL SHOULD BE <br />
                            SEAMLESS.
                        </h3>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            At Destination Anywhere & Co., we strip away the complexity of modern travel.
                            Sujal Soni established this platform with a singular vision: precision planning for the discerning traveler.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            From business class logistics to curated leisure itineraries, every detail is engineered for perfection.
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="h-px bg-gray-200 flex-1" />
                            <span className="text-brand-black font-semibold">
                                Sujal Soni
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
