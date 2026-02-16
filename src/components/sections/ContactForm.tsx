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
        <section id="contact" className="py-24 bg-slate-blue text-white relative border-t border-white/5">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Contact Details (Left) */}
                    <div>
                        <h2 className="text-5xl md:text-6xl font-black font-display mb-10 tracking-tight leading-none">
                            READY FOR <br /> TAKEOFF?
                        </h2>

                        <div className="space-y-8">
                            <div className="flex flex-col gap-1">
                                <h4 className="font-bold text-gray-400 text-sm uppercase tracking-wider">Call Us</h4>
                                <p className="text-2xl font-medium tracking-tight">+91 85110 71506</p>
                            </div>

                            <div className="flex flex-col gap-1">
                                <h4 className="font-bold text-gray-400 text-sm uppercase tracking-wider">Email Us</h4>
                                <p className="text-2xl font-medium tracking-tight">destinationanywhereo@gmail.com</p>
                            </div>

                            <div className="flex flex-col gap-1">
                                <h4 className="font-bold text-gray-400 text-sm uppercase tracking-wider">Visit HQ</h4>
                                <p className="text-xl font-medium text-gray-300 max-w-xs leading-relaxed">
                                    Shop-106, Shayona Tilak-1 Complex, <br />New SG Road, Gota, Ahmedabad.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Form Card (Right Aligned) */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl text-brand-black w-full max-w-lg ml-auto">
                        <h3 className="text-2xl font-bold mb-8">Start Your Inquiry</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                            <div className="space-y-2">
                                <input
                                    {...register("name", { required: "Name is required" })}
                                    className="w-full px-6 py-4 bg-light-gray rounded-full text-brand-black focus:outline-none focus:ring-2 focus:ring-high-voltage-orange focus:bg-white transition-all font-medium placeholder-gray-400"
                                    placeholder="Full Name"
                                />
                                {errors.name && (
                                    <span className="text-red-500 text-xs px-4">
                                        {errors.name.message}
                                    </span>
                                )}
                            </div>

                            <div className="space-y-2">
                                <input
                                    {...register("destination", {
                                        required: "Destination is required",
                                    })}
                                    className="w-full px-6 py-4 bg-light-gray rounded-full text-brand-black focus:outline-none focus:ring-2 focus:ring-high-voltage-orange focus:bg-white transition-all font-medium placeholder-gray-400"
                                    placeholder="Dream Destination"
                                />
                                {errors.destination && (
                                    <span className="text-red-500 text-xs px-4">
                                        {errors.destination.message}
                                    </span>
                                )}
                            </div>

                            <div className="space-y-2">
                                <input
                                    {...register("date", { required: "Date is required" })}
                                    className="w-full px-6 py-4 bg-light-gray rounded-full text-brand-black focus:outline-none focus:ring-2 focus:ring-high-voltage-orange focus:bg-white transition-all font-medium placeholder-gray-400"
                                    placeholder="Preferred Dates"
                                />
                                {errors.date && (
                                    <span className="text-red-500 text-xs px-4">
                                        {errors.date.message}
                                    </span>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-high-voltage-orange hover:bg-orange-600 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-2 mt-4 cursor-pointer animate-pulse hover:animate-none"
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
