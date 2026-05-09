import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import HowItWorks from "./components/HowItWorks";
import LaunchingSoon from "./components/LaunchingSoon";
import MeaningSection from "./components/MeaningSection";
import LegacySection from "./components/LegacySection";
import WhyBuy from "./components/WhyBuy";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-claddagh-ivory text-claddagh-charcoal antialiased">
      <Header />
      <main>
        <Hero />
        <Products />
        <HowItWorks />
        <LaunchingSoon />
        <MeaningSection />
        <LegacySection />
        <WhyBuy />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
