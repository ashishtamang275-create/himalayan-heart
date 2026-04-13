import { useState, useEffect, lazy, Suspense } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mountain, Send, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const InquiryFormDialog = lazy(() => import("@/components/InquiryFormDialog"));

const travelGuides = [
  { name: "Altitude Sickness Guide", path: "/altitude-sickness-guide" },
  { name: "Do You Need a Guide?", path: "/do-you-need-guide-nepal" },
  { name: "Safety & Rescue", path: "/safety-and-rescue" },
  { name: "Best Time to Trek", path: "/best-time-to-trek-nepal" },
  { name: "Trek Difficulty Comparison", path: "/nepal-trek-difficulty-comparison" },
  { name: "Trekking Permits", path: "/trekking-permits-nepal" },
  { name: "EBC Cost Breakdown", path: "/everest-base-camp-cost" },
  { name: "Annapurna vs Everest", path: "/annapurna-vs-everest" },
  { name: "Visa Information", path: "/nepal-visa-information" },
];

const navLinks = [
  { name: "Treks", path: "/treks" },
  { name: "Blog", path: "/blog" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = () => setGuidesOpen(false);
    if (guidesOpen) {
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
    }
  }, [guidesOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-soft"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-2 group">
              <Mountain
                className={`w-8 h-8 transition-colors ${
                  scrolled ? "text-primary" : "text-[hsl(var(--snow-white))]"
                } group-hover:text-accent`}
              />
              <span
                className={`font-display text-xl font-bold tracking-wider transition-colors ${
                  scrolled ? "text-foreground" : "text-[hsl(var(--snow-white))]"
                }`}
              >
                GO NEPAL TREKS
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-all duration-300 hover:text-accent relative ${
                    scrolled ? "text-foreground" : "text-[hsl(var(--snow-white))]"
                  } ${location.pathname === link.path ? "text-accent" : ""}`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent" />
                  )}
                </Link>
              ))}

              <div className="relative">
                <button
                  onClick={(e) => { e.stopPropagation(); setGuidesOpen(!guidesOpen); }}
                  className={`text-sm font-medium transition-all duration-300 hover:text-accent flex items-center gap-1 ${
                    scrolled ? "text-foreground" : "text-[hsl(var(--snow-white))]"
                  }`}
                >
                  Travel Guides
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${guidesOpen ? "rotate-180" : ""}`} />
                </button>
                {guidesOpen && (
                  <div className="absolute top-full right-0 mt-2 w-64 bg-card rounded-xl shadow-elevated border border-border overflow-hidden z-50">
                    {travelGuides.map((guide) => (
                      <Link
                        key={guide.path}
                        to={guide.path}
                        onClick={() => setGuidesOpen(false)}
                        className={`block px-4 py-2.5 text-sm hover:bg-secondary transition-colors ${
                          location.pathname === guide.path ? "text-accent bg-secondary" : "text-foreground"
                        }`}
                      >
                        {guide.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Button variant="hero" size="default" onClick={() => setInquiryOpen(true)}>
                <Send className="w-4 h-4" />
                Get Free Itinerary
              </Button>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <Button
                variant="hero"
                size="sm"
                onClick={() => setInquiryOpen(true)}
                className="text-xs"
              >
                <Send className="w-3.5 h-3.5" />
                Inquire
              </Button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className={`p-2 transition-colors ${
                  scrolled ? "text-foreground" : "text-[hsl(var(--snow-white))]"
                }`}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="lg:hidden absolute top-20 left-0 right-0 bg-background shadow-elevated max-h-[80vh] overflow-y-auto">
              <div className="flex flex-col p-4 gap-2">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-md font-medium transition-colors hover:bg-secondary ${
                    location.pathname === "/" ? "bg-secondary text-accent" : "text-foreground"
                  }`}
                >
                  Home
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-md font-medium transition-colors hover:bg-secondary ${
                      location.pathname === link.path ? "bg-secondary text-accent" : "text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-2">
                  Travel Guides
                </div>
                {travelGuides.map((guide) => (
                  <Link
                    key={guide.path}
                    to={guide.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-2.5 rounded-md text-sm transition-colors hover:bg-secondary ${
                      location.pathname === guide.path ? "bg-secondary text-accent" : "text-muted-foreground"
                    }`}
                  >
                    {guide.name}
                  </Link>
                ))}
                <Button variant="hero" className="mt-2" onClick={() => { setIsOpen(false); setInquiryOpen(true); }}>
                  <Send className="w-4 h-4" />
                  Get Free Itinerary
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {inquiryOpen && (
        <Suspense fallback={null}>
          <InquiryFormDialog open={inquiryOpen} onOpenChange={setInquiryOpen} />
        </Suspense>
      )}
    </>
  );
};

export default Navbar;
