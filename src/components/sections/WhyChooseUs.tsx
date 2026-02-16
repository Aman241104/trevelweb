import { ShieldCheck, BadgePercent, Headset } from "lucide-react";

export default function WhyChooseUs() {
    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-high-voltage-orange mb-6">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-brand-black mb-3">Precise Planning</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Meticulously crafted itineraries ensuring zero-error travel execution.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-high-voltage-orange mb-6">
                            <BadgePercent className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-brand-black mb-3">Optimal Pricing</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Leveraging industry networks to secure the most competitive rates.
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-high-voltage-orange mb-6">
                            <Headset className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-brand-black mb-3">24/7 Concierge</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Round-the-clock support for immediate resolution of any contingencies.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
