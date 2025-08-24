import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import HowItWorksSection from "@/components/how-it-works-section";
import WhyChooseSection from "@/components/why-choose-section";
import FAQSection from "@/components/faq-section";
import CTASection from "@/components/cta-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-dark-primary text-white font-inter overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <WhyChooseSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
}
