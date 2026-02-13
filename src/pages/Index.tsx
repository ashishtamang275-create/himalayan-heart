import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";

// Lazy load below-the-fold components
const FeaturedTreks = lazy(() => import("@/components/FeaturedTreks"));
const RegionGrid = lazy(() => import("@/components/RegionGrid"));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const GuideProfiles = lazy(() => import("@/components/GuideProfiles"));
const GallerySection = lazy(() => import("@/components/GallerySection"));
const ReviewSection = lazy(() => import("@/components/ReviewSection"));
const BlogPreview = lazy(() => import("@/components/BlogPreview"));
const CommunityImpact = lazy(() => import("@/components/CommunityImpact"));
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
        {/* Trust badges below hero */}
        <div className="py-8 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <TrustBadges />
          </div>
        </div>
        <Suspense fallback={<div className="min-h-[400px] bg-background" />}>
          <FeaturedTreks />
          <RegionGrid />
          <WhyChooseUs />
          <GuideProfiles />
          <GallerySection />
        </Suspense>
        <Suspense fallback={<div className="min-h-[300px] bg-background" />}>
          <ReviewSection />
        </Suspense>
        <Suspense fallback={null}>
          <BlogPreview />
          <CommunityImpact />
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
