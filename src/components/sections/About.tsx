export default function About() {
    return (
        <section className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Image Side - Arch Shape */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative aspect-[3/4] w-full rounded-t-full rounded-b-[200px] overflow-hidden shadow-2xl">
                            <img
                                src="/assets/founder-portrait.png"
                                alt="Sujal Soni - Founder"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="order-1 lg:order-2 text-center lg:text-left">
                        <h2 className="text-xs font-bold tracking-[0.2em] text-high-voltage-orange uppercase mb-6">
                            The Pilot & Founder
                        </h2>

                        {/* Serif Typography for Quote */}
                        <h3 className="text-5xl md:text-6xl text-brand-black font-serif mb-8 leading-tight italic">
                            "Travel should be <br />
                            <span className="not-italic font-bold">seamless.</span>"
                        </h3>

                        <p className="text-lg text-gray-600 mb-6 leading-relaxed max-w-lg mx-auto lg:mx-0">
                            At Destination Anywhere & Co., we strip away the complexity of modern travel.
                            Sujal Soni established this platform with a singular vision: precision planning for the discerning traveler.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                            From business class logistics to curated leisure itineraries, every detail is engineered for perfection.
                        </p>

                        <div className="flex items-center gap-4 justify-center lg:justify-start">
                            <div className="h-px bg-gray-200 w-16" />
                            <span className="text-brand-black font-semibold font-display tracking-widest uppercase">
                                Sujal Soni
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
