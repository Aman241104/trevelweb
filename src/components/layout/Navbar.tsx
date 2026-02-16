import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            <nav className="w-full flex items-center justify-between bg-white/10 backdrop-blur-md px-10 py-4 border-b border-white/20">

                {/* Logo */}
                <Link href="/" className="text-xl font-bold font-display text-brand-black tracking-tight">
                    Destination Anywhere
                </Link>

                {/* Center Links */}
                <div className="hidden md:flex items-center gap-10">
                    <Link href="/" className="text-sm font-medium text-gray-700 hover:text-brand-black transition-colors">
                        Home
                    </Link>
                    <Link href="#services" className="text-sm font-medium text-gray-700 hover:text-brand-black transition-colors">
                        Packages
                    </Link>
                    <Link href="#about" className="text-sm font-medium text-gray-700 hover:text-brand-black transition-colors">
                        About
                    </Link>
                    <Link href="#contact" className="text-sm font-medium text-gray-700 hover:text-brand-black transition-colors">
                        Contact
                    </Link>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-6">
                    <button className="text-sm font-medium text-brand-black hover:text-high-voltage-orange transition-colors">
                        Sign In
                    </button>
                    <Link href="#contact" className="hidden sm:flex px-6 py-2.5 bg-brand-black text-white rounded-full text-sm font-bold hover:bg-gray-800 transition-all items-center gap-2">
                        Book Now
                    </Link>
                </div>

            </nav>
        </header>
    );
}
