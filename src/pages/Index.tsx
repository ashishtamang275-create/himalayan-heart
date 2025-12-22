import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

// Lazy load below-the-fold components to reduce initial JS and defer image loading
const FeaturedTreks = lazy(() => import("@/components/FeaturedTreks"));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const GuideProfiles = lazy(() => import("@/components/GuideProfiles"));
const ReviewSection = lazy(() => import("@/components/ReviewSection"));
const Newsletter = lazy(() => import("@/components/Newsletter"));
const CTASection = lazy(() => import("@/components/CTASection"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <Suspense fallback={<div className="min-h-[400px] bg-background" />}>
          <FeaturedTreks />
          <WhyChooseUs />
          <GuideProfiles />
          <ReviewSection />
          <Newsletter />
          <CTASection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <WhatsAppButton />
      </Suspense>
    </div>
  );
};

export default Index;
