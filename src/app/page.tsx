import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import InstagramFeed from "@/components/sections/InstagramFeed";
import ContactForm from "@/components/sections/ContactForm";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-white selection:bg-high-voltage-orange selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <InstagramFeed />
      <ContactForm />
    </main>
  );
}
