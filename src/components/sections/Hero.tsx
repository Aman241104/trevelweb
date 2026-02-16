import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-brand-white">

            {/* Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Clouds */}
                <img
                    src="/assets/soft-blue-clouds.png"
                    alt="Soft Blue Clouds"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply"
                />
                {/* God Rays - Top Left */}
                <img
                    src="/assets/god-rays.png"
                    alt="Sunlight Beams"
                    className="absolute top-0 left-0 w-[50%] h-auto opacity-40 mix-blend-screen"
                />
            </div>

            {/* Content Layer - Massive Typography BEHIND the plane */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <h1 className="text-[15vw] font-black text-brand-black tracking-tighter leading-none font-display mix-blend-hard-light opacity-80 blur-[0.5px] scale-105">
                    EXPLORE <br />
                    THE WORLD
                </h1>
            </div>

            {/* 3D Plane Element - Scalar 70%, Moved to allow text visibility, z-index higher than text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-[40%] -translate-y-[40%] w-[90%] md:w-[70%] max-w-[1200px] pointer-events-none z-20">
                <img
                    src="/assets/silver-plane.png"
                    alt="Silver Airplane"
                    className="w-full h-auto object-contain animate-float drop-shadow-2xl opacity-100 transform translate-x-12"
                />
            </div>

            {/* CTA Buttons - Interactive Layer */}
            <div className="absolute bottom-20 z-30 w-full flex justify-center">
                <button className="px-10 py-5 bg-high-voltage-orange hover:bg-orange-600 text-white rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-orange-500/40 transform hover:-translate-y-1 cursor-pointer flex items-center gap-2">
                    Plan Your Trip
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </section>
    );
}
