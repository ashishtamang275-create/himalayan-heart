import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const TreksPage = lazy(() => import("./pages/TreksPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const WhyUsPage = lazy(() => import("./pages/WhyUsPage"));
const RegionPage = lazy(() => import("./pages/RegionPage"));
const TrekDetailPage = lazy(() => import("./pages/TrekDetailPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const PeakClimbingPage = lazy(() => import("./pages/PeakClimbingPage"));
const ToursPage = lazy(() => import("./pages/ToursPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const AboutGuidesPage = lazy(() => import("./pages/AboutGuidesPage"));
const TrekkingPermitsPage = lazy(() => import("./pages/TrekkingPermitsPage"));
const VisaInfoPage = lazy(() => import("./pages/VisaInfoPage"));
const AltitudeSicknessPage = lazy(() => import("./pages/AltitudeSicknessPage"));
const SafetyRescuePage = lazy(() => import("./pages/SafetyRescuePage"));
const EBCCostPage = lazy(() => import("./pages/EBCCostPage"));
const GuideRequirementPage = lazy(() => import("./pages/GuideRequirementPage"));
const DifficultyComparisonPage = lazy(() => import("./pages/DifficultyComparisonPage"));
const AnnapurnaVsEverestPage = lazy(() => import("./pages/AnnapurnaVsEverestPage"));
const BestTimeToTrekPage = lazy(() => import("./pages/BestTimeToTrekPage"));
const ThankYouPage = lazy(() => import("./pages/ThankYouPage"));
const TrekkingCostBreakdownPage = lazy(() => import("./pages/TrekkingCostBreakdownPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/treks" element={<TreksPage />} />
              <Route path="/trekking-packages" element={<TreksPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/guides" element={<Index />} />
              <Route path="/why-us" element={<WhyUsPage />} />
              <Route path="/region/:slug" element={<RegionPage />} />
              <Route path="/trek/:slug" element={<TrekDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/peak-climbing" element={<PeakClimbingPage />} />
              <Route path="/tours" element={<ToursPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/about-our-guides" element={<AboutGuidesPage />} />
              <Route path="/trekking-permits-nepal" element={<TrekkingPermitsPage />} />
              <Route path="/nepal-visa-information" element={<VisaInfoPage />} />
              <Route path="/altitude-sickness-guide" element={<AltitudeSicknessPage />} />
              <Route path="/safety-and-rescue" element={<SafetyRescuePage />} />
              <Route path="/everest-base-camp-cost" element={<EBCCostPage />} />
              <Route path="/do-you-need-guide-nepal" element={<GuideRequirementPage />} />
              <Route path="/nepal-trek-difficulty-comparison" element={<DifficultyComparisonPage />} />
              <Route path="/annapurna-vs-everest" element={<AnnapurnaVsEverestPage />} />
              <Route path="/best-time-to-trek-nepal" element={<BestTimeToTrekPage />} />
              <Route path="/thank-you" element={<ThankYouPage />} />
              <Route path="/trekking-cost-breakdown" element={<TrekkingCostBreakdownPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
