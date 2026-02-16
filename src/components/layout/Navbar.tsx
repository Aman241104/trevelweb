import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 transition-all duration-300">
            <nav className="max-w-7xl mx-auto flex items-center justify-between bg-white/70 backdrop-blur-md rounded-full px-8 py-3 shadow-sm border border-white/50">

                {/* Logo */}
                <Link href="/" className="text-xl font-bold font-display text-brand-black tracking-tight">
                    Destination Anywhere
                </Link>

                {/* Center Links */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-sm font-medium text-gray-600 hover:text-brand-black transition-colors">
                        Home
                    </Link>
                    <Link href="#services" className="text-sm font-medium text-gray-600 hover:text-brand-black transition-colors">
                        Packages
                    </Link>
                    <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-brand-black transition-colors">
                        About
                    </Link>
                    <Link href="#contact" className="text-sm font-medium text-gray-600 hover:text-brand-black transition-colors">
                        Contact
                    </Link>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    <button className="text-sm font-medium text-brand-black hover:text-high-voltage-orange transition-colors">
                        Sign In
                    </button>
                    <Link href="#contact" className="hidden sm:flex px-5 py-2 bg-brand-black text-white rounded-full text-sm font-bold hover:bg-gray-800 transition-all items-center gap-2">
                        Book Now
                    </Link>
                </div>

            </nav>
        </header>
    );
}
