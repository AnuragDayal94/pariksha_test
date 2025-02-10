import FAQSection from "../components/defaultPage/FAQSection";
import Features from "../components/defaultPage/Features";
import Footer from "../components/defaultPage/Footer";
import Header from "../components/defaultPage/Header";
import HeroSection from "../components/defaultPage/HeroSection";

const Default = () => {
  return (
    <div className="font-sans bg-[#f8fafc] text-gray-900 min-h-screen w-full overflow-x-hidden overflow-y-auto">
      <Header />
      <HeroSection />
      <Features />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Default;