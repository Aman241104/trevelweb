import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-slate-50">

            {/* 3D Plane Element - Centered & Premium */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none z-0">
                {/* Using the generated silver plane asset */}
                <img
                    src="/assets/silver-plane.png"
                    alt="Silver Airplane"
                    className="w-full h-full object-contain animate-float drop-shadow-2xl opacity-90"
                />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-32">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-brand-black tracking-tighter leading-[0.9] mb-8 font-display">
                    EXPLORE <br />
                    THE WORLD.
                </h1>

                <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mb-12 font-medium tracking-tight">
                    Experience the polished precision of premium travel. <br />
                    Book flights, hotels, and tours with zero friction.
                </p>

                <div className="flex flex-col sm:flex-row gap-6">
                    <button className="px-10 py-5 bg-high-voltage-orange hover:bg-orange-600 text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-1 cursor-pointer flex items-center gap-2">
                        Plan Your Trip
                        <ArrowRight className="w-5 h-5" />
                    </button>
                    <button className="px-10 py-5 bg-white border border-gray-200 text-brand-black rounded-full font-bold text-lg hover:bg-gray-50 transition-all cursor-pointer">
                        View Packages
                    </button>
                </div>
            </div>
        </section>
    );
}
