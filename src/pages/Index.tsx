import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

// Lazy load below-the-fold components
const TrustBadgesEnhanced = lazy(() => import("@/components/TrustBadgesEnhanced"));
const WhyGoNepal = lazy(() => import("@/components/WhyGoNepal"));
const FeaturedTreks = lazy(() => import("@/components/FeaturedTreks"));
const HowBookingWorks = lazy(() => import("@/components/HowBookingWorks"));
const QuickFactBar = lazy(() => import("@/components/QuickFactBar"));
const GuideProfiles = lazy(() => import("@/components/GuideProfiles"));
const GovernmentLicense = lazy(() => import("@/components/GovernmentLicense"));
const RealTrekkersGallery = lazy(() => import("@/components/RealTrekkersGallery"));
const ReviewSection = lazy(() => import("@/components/ReviewSection"));
const BlogPreview = lazy(() => import("@/components/BlogPreview"));
const CTASection = lazy(() => import("@/components/CTASection"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <Suspense fallback={<div className="min-h-[60px] bg-secondary" />}>
          <TrustBadgesEnhanced />
        </Suspense>
        <Suspense fallback={<div className="min-h-[400px] bg-secondary" />}>
          <WhyGoNepal />
          <FeaturedTreks />
          <HowBookingWorks />
          <QuickFactBar />
          <GuideProfiles />
          <GovernmentLicense />
          <RealTrekkersGallery />
        </Suspense>
        <Suspense fallback={<div className="min-h-[300px] bg-background" />}>
          <ReviewSection />
        </Suspense>
        <Suspense fallback={null}>
          <BlogPreview />
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
