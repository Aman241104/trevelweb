"use client";

import { useForm } from "react-hook-form";
import { generateWhatsAppLink } from "@/lib/whatsapp-util";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";

type FormData = {
    name: string;
    destination: string;
    date: string;
};

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        const link = generateWhatsAppLink(data);
        window.open(link, "_blank");
    };

    return (
        <section id="contact" className="py-32 bg-slate-blue text-white relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Contact Details */}
                    <div>
                        <h2 className="text-5xl font-bold font-display mb-10 tracking-tight">
                            Ready for <br /> Takeoff?
                        </h2>

                        <div className="space-y-8">
                            <div className="flex flex-col gap-1">
                                <h4 className="font-bold text-gray-400 text-sm uppercase tracking-wider">Call Us</h4>
                                <p className="text-xl font-medium">+91 85110 71506</p>
                            </div>

                            <div className="flex flex-col gap-1">
                                <h4 className="font-bold text-gray-400 text-sm uppercase tracking-wider">Email Us</h4>
                                <p className="text-xl font-medium">destinationanywhereo@gmail.com</p>
                            </div>

                            <div className="flex flex-col gap-1">
                                <h4 className="font-bold text-gray-400 text-sm uppercase tracking-wider">Visit HQ</h4>
                                <p className="text-xl font-medium max-w-xs leading-relaxed">
                                    Shop-106, Shayona Tilak-1 Complex, <br />New SG Road, Gota, Ahmedabad.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* SaaS Style Form */}
                    <div className="bg-white p-10 rounded-3xl shadow-2xl text-brand-black">
                        <h3 className="text-2xl font-bold mb-8">Start Your Inquiry</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                                    Full Name
                                </label>
                                <input
                                    {...register("name", { required: "Name is required" })}
                                    className="w-full px-6 py-4 bg-light-gray rounded-full text-brand-black focus:outline-none focus:ring-2 focus:ring-high-voltage-orange focus:bg-white transition-all font-medium"
                                    placeholder="John Doe"
                                />
                                {errors.name && (
                                    <span className="text-red-500 text-xs px-4">
                                        {errors.name.message}
                                    </span>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                                    Destination
                                </label>
                                <input
                                    {...register("destination", {
                                        required: "Destination is required",
                                    })}
                                    className="w-full px-6 py-4 bg-light-gray rounded-full text-brand-black focus:outline-none focus:ring-2 focus:ring-high-voltage-orange focus:bg-white transition-all font-medium"
                                    placeholder="e.g. London, Tokyo"
                                />
                                {errors.destination && (
                                    <span className="text-red-500 text-xs px-4">
                                        {errors.destination.message}
                                    </span>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                                    Travel Dates
                                </label>
                                <input
                                    {...register("date", { required: "Date is required" })}
                                    className="w-full px-6 py-4 bg-light-gray rounded-full text-brand-black focus:outline-none focus:ring-2 focus:ring-high-voltage-orange focus:bg-white transition-all font-medium"
                                    placeholder="e.g. Next Month"
                                />
                                {errors.date && (
                                    <span className="text-red-500 text-xs px-4">
                                        {errors.date.message}
                                    </span>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-high-voltage-orange hover:bg-orange-600 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-2 mt-4 cursor-pointer"
                            >
                                <span>Proceed to WhatsApp</span>
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
