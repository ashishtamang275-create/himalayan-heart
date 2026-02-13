import { Link } from "react-router-dom";
import { Mountain, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-mountain-dark text-snow">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Mountain className="w-8 h-8 text-accent" />
              <span className="font-display text-xl font-bold tracking-wider">
                GO NEPAL TREKS
              </span>
            </Link>
            <p className="text-snow/70 mb-6 leading-relaxed">
              Your trusted partner for unforgettable Himalayan adventures. 
              Experienced local guides, personalized itineraries, and memories 
              that last a lifetime.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Visit our Facebook page"
                className="w-10 h-10 rounded-full bg-snow/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Visit our Instagram page"
                className="w-10 h-10 rounded-full bg-snow/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Visit our YouTube channel"
                className="w-10 h-10 rounded-full bg-snow/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 text-snow">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Treks", path: "/treks" },
                { name: "Peak Climbing", path: "/peak-climbing" },
                { name: "Tours", path: "/tours" },
                { name: "About Us", path: "/about" },
                { name: "Blog", path: "/blog" },
                { name: "FAQ", path: "/faq" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-snow/70 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Treks */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 text-snow">
              Popular Treks
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Everest Base Camp", slug: "everest-base-camp" },
                { name: "Annapurna Base Camp", slug: "annapurna-base-camp" },
                { name: "Langtang Valley", slug: "langtang-valley" },
                { name: "Manaslu Circuit", slug: "manaslu-circuit" },
                { name: "Poon Hill", slug: "ghorepani-poonhill" },
              ].map((trek) => (
                <li key={trek.slug}>
                  <Link
                    to={`/trek/${trek.slug}`}
                    className="text-snow/70 hover:text-accent transition-colors"
                  >
                    {trek.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6 text-snow">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-snow/70">
                  Thamel, Kathmandu, Nepal
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="tel:+9779818800584"
                  className="text-snow/70 hover:text-accent transition-colors"
                >
                  +977 9818800584
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a
                  href="mailto:ashishtamang12340@gmail.com"
                  className="text-snow/70 hover:text-accent transition-colors"
                >
                  ashishtamang12340@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-snow/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-snow/50 text-sm">
            © {currentYear} Go Nepal Treks. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-snow/50">
            <Link to="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
