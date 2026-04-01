import { useEffect } from "react";

function Index() {

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "canonical";
    link.href = "https://ashish-tamang.com.np/";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div>
      <h1>Homepage</h1>
    </div>
  );
}

export default Index;
import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

// Lazy load below-the-fold components
const TrustBadgesEnhanced = lazy(() => import("@/components/TrustBadgesEnhanced"));
const GuideProfiles = lazy(() => import("@/components/GuideProfiles"));
const GovernmentLicense = lazy(() => import("@/components/GovernmentLicense"));
const FeaturedTreks = lazy(() => import("@/components/FeaturedTreks"));
const HowBookingWorks = lazy(() => import("@/components/HowBookingWorks"));
const WhyBookDirect = lazy(() => import("@/components/WhyBookDirect"));
const QuickFactBar = lazy(() => import("@/components/QuickFactBar"));
const RealTrekkersGallery = lazy(() => import("@/components/RealTrekkersGallery"));
const ReviewSection = lazy(() => import("@/components/ReviewSection"));
const HomepageFAQ = lazy(() => import("@/components/HomepageFAQ"));
const BlogPreview = lazy(() => import("@/components/BlogPreview"));
const CTASection = lazy(() => import("@/components/CTASection"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Nepal Trekking 2026 – Licensed Local Guide | Go Nepal Adventure</title>
        <meta name="description" content="Trek Nepal directly with a licensed local guide. No agency fees. Everest, Annapurna & Langtang treks with safety-first protocols. Free custom itinerary in 24hrs." />
        <link rel="canonical" href="https://ashish-tamang.com.np/" />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <Suspense fallback={<div className="min-h-[60px] bg-secondary" />}>
          <TrustBadgesEnhanced />
        </Suspense>
        <Suspense fallback={<div className="min-h-[400px] bg-secondary" />}>
          <GuideProfiles />
          <GovernmentLicense />
          <FeaturedTreks />
          <HowBookingWorks />
          <WhyBookDirect />
          <QuickFactBar />
          <RealTrekkersGallery />
        </Suspense>
        <Suspense fallback={<div className="min-h-[300px] bg-background" />}>
          <ReviewSection />
        </Suspense>
        <Suspense fallback={null}>
          <HomepageFAQ />
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
