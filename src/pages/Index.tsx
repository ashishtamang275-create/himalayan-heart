import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedTreks from "@/components/FeaturedTreks";
import WhyChooseUs from "@/components/WhyChooseUs";
import GuideProfiles from "@/components/GuideProfiles";
import ReviewSection from "@/components/ReviewSection";
import Newsletter from "@/components/Newsletter";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedTreks />
        <WhyChooseUs />
        <GuideProfiles />
        <ReviewSection />
        <Newsletter />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
