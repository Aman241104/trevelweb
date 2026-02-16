import { ShieldCheck, BadgePercent, Headset } from "lucide-react";

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">

            {/* Flight Path Line (Dashed) */}
            <div className="absolute top-1/2 left-0 w-full h-px border-t-[3px] border-dashed border-gray-200 -z-0 hidden md:block" style={{ top: '40%' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

                    <div className="flex flex-col items-center bg-white p-4">
                        <div className="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center text-high-voltage-orange mb-6 shadow-sm border border-orange-100">
                            <ShieldCheck className="w-10 h-10" />
                        </div>
                        <h3 className="text-xl font-bold text-brand-black mb-3">Precise Planning</h3>
                        <p className="text-gray-500 leading-relaxed max-w-xs">
                            Meticulously crafted itineraries ensuring zero-error travel execution.
                        </p>
                    </div>

                    <div className="flex flex-col items-center bg-white p-4">
                        <div className="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center text-high-voltage-orange mb-6 shadow-sm border border-orange-100">
                            <BadgePercent className="w-10 h-10" />
                        </div>
                        <h3 className="text-xl font-bold text-brand-black mb-3">Optimal Pricing</h3>
                        <p className="text-gray-500 leading-relaxed max-w-xs">
                            Leveraging industry networks to secure the most competitive rates.
                        </p>
                    </div>

                    <div className="flex flex-col items-center bg-white p-4">
                        <div className="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center text-high-voltage-orange mb-6 shadow-sm border border-orange-100">
                            <Headset className="w-10 h-10" />
                        </div>
                        <h3 className="text-xl font-bold text-brand-black mb-3">24/7 Concierge</h3>
                        <p className="text-gray-500 leading-relaxed max-w-xs">
                            Round-the-clock support for immediate resolution of any contingencies.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
