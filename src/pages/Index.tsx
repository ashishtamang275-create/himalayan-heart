import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedTreks from "@/components/FeaturedTreks";

// Lazy load below-the-fold components to reduce initial JS
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
        <FeaturedTreks />
        <Suspense fallback={<div className="min-h-[200px]" />}>
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
