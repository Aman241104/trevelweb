import { BentoCard } from "@/components/ui/BentoCard";

const services = [
    {
        icon: "/assets/icon-globe-3d.png",
        title: "International Tours",
        description: "Bali, Dubai, Singapore & more.",
    },
    {
        icon: "/assets/icon-map-3d.png",
        title: "Domestic Tours",
        description: "Kashmir, Kerala, Goa & more.",
    },
    {
        icon: "/assets/icon-plane-3d.png",
        title: "Flight Tickets",
        description: "Best deals worldwide.",
    },
    {
        icon: "/assets/icon-hotel-3d.png",
        title: "Hotel Bookings",
        description: "Luxury stays at best rates.",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-32 bg-white relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <BentoCard
                            key={index}
                            className="flex flex-col items-center text-center h-full group"
                        >
                            <div className="w-24 h-24 mb-6 transition-transform duration-500 group-hover:scale-110 drop-shadow-xl">
                                <img
                                    src={service.icon}
                                    alt={service.title}
                                    className="w-full h-full object-contain"
                                />
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
