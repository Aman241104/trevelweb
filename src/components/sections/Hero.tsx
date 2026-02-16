import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-brand-white">

            {/* 3D Plane Element - Floating Freely, No Box */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[120%] md:w-[90%] max-w-[1400px] pointer-events-none z-0">
                {/* Parallax effect would ideally go here, using simple CSS animation for now */}
                <img
                    src="/assets/silver-plane.png"
                    alt="Silver Airplane"
                    className="w-full h-auto object-contain animate-float drop-shadow-2xl opacity-100 transform translate-x-10"
                />
            </div>

            {/* Content Layer - Massive Typography overlapping the plane */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-20">
                <h1 className="text-[12vw] md:text-[10vw] font-black text-brand-black tracking-tighter leading-[0.8] mb-8 font-display mix-blend-overlay md:mix-blend-normal opacity-90">
                    EXPLORE <br />
                    THE WORLD
                </h1>

                <div className="flex flex-col sm:flex-row gap-6 mt-8">
                    <button className="px-10 py-5 bg-high-voltage-orange hover:bg-orange-600 text-white rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-orange-500/40 transform hover:-translate-y-1 cursor-pointer flex items-center gap-2 z-20">
                        Plan Your Trip
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}
