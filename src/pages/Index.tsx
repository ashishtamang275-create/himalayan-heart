import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const TrustBadgesEnhanced = lazy(() => import("@/components/TrustBadgesEnhanced"));
const FeaturedTreks = lazy(() => import("@/components/FeaturedTreks"));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const TrekkingResources = lazy(() => import("@/components/TrekkingResources"));
const ReviewSection = lazy(() => import("@/components/ReviewSection"));
const HomepageContact = lazy(() => import("@/components/HomepageContact"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Nepal Trekking 2026 – Licensed Local Guide | Go Nepal Adventure</title>
        <meta name="description" content="Trek Nepal with licensed local guides. Custom itineraries, safety-first support, and transparent pricing. Everest, Annapurna & Langtang treks. Get a free itinerary today." />
        <link rel="canonical" href="https://ashish-tamang.com.np/" />
      </Helmet>
      <Navbar />
      <main>
        <HeroSection />
        <Suspense fallback={<div className="min-h-[80px] bg-secondary" />}>
          <TrustBadgesEnhanced />
        </Suspense>
        <Suspense fallback={<div className="min-h-[400px] bg-background" />}>
          <FeaturedTreks />
        </Suspense>
        <Suspense fallback={<div className="min-h-[300px] bg-secondary" />}>
          <WhyChooseUs />
        </Suspense>
        <Suspense fallback={<div className="min-h-[300px] bg-background" />}>
          <TrekkingResources />
        </Suspense>
        <Suspense fallback={<div className="min-h-[300px] bg-background" />}>
          <ReviewSection />
        </Suspense>
        <Suspense fallback={null}>
          <HomepageContact />
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
