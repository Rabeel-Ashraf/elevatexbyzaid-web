import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatsAppSection from "@/components/WhatsAppSection";
import About from "@/components/About";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhatsAppSection />
        <About />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;