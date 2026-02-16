import { BentoCard } from "@/components/ui/BentoCard";
import { Plane, Map, Hotel, Globe } from "lucide-react";

const services = [
    {
        icon: <Globe className="w-6 h-6 text-high-voltage-orange" />,
        title: "International Tours",
        description: "Bali, Dubai, Singapore & more.",
    },
    {
        icon: <Map className="w-6 h-6 text-high-voltage-orange" />,
        title: "Domestic Tours",
        description: "Kashmir, Kerala, Goa & more.",
    },
    {
        icon: <Plane className="w-6 h-6 text-high-voltage-orange" />,
        title: "Flight Tickets",
        description: "Best deals worldwide.",
    },
    {
        icon: <Hotel className="w-6 h-6 text-high-voltage-orange" />,
        title: "Hotel Bookings",
        description: "Luxury stays at best rates.",
    },
];

export default function Services() {
    return (
        <section className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <BentoCard
                            key={index}
                            className="flex flex-col items-start text-left h-full"
                        >
                            <div className="p-3 bg-orange-50 rounded-full mb-6 border border-orange-100">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-brand-black mb-2 font-display">
                                {service.title}
                            </h3>
                            <p className="text-gray-500 font-medium text-sm leading-relaxed">{service.description}</p>
                        </BentoCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
