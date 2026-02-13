import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const PrivacyPage = () => (
  <div className="min-h-screen">
    <Helmet>
      <title>Privacy Policy | Go Nepal Adventures</title>
      <meta name="description" content="Read Go Nepal Adventures' privacy policy. Learn how we collect, use, and protect your personal information." />
    </Helmet>
    <Navbar />
    <main className="pt-32 pb-16">
      <div className="container mx-auto px-4 max-w-3xl prose prose-lg [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-muted-foreground [&_li]:mb-2">
        <h1 className="font-display text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
        <p>Last updated: February 2026</p>
        <h2>Information We Collect</h2>
        <p>We collect information you provide directly when submitting inquiry forms, booking requests, or contacting us via WhatsApp or email. This includes your name, email address, phone number, travel dates, and trek preferences.</p>
        <h2>How We Use Your Information</h2>
        <p>Your information is used solely to respond to your inquiries, create customized trek itineraries, process bookings, and communicate important trip details. We never sell or share your personal information with third parties for marketing purposes.</p>
        <h2>Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, or destruction.</p>
        <h2>Contact</h2>
        <p>For questions about this privacy policy, contact us at ashishtamang12340@gmail.com or via WhatsApp at +977 9818800584.</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default PrivacyPage;
