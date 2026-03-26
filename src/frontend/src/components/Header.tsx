import { Button } from "@/components/ui/button";
import { Home, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Listings", href: "#listings" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{ background: "oklch(0.22 0.055 222)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <button
            type="button"
            onClick={() => handleNav("#home")}
            className="flex items-center gap-2 text-white hover:opacity-90 transition-opacity"
            data-ocid="nav.link"
          >
            <div
              className="w-9 h-9 rounded-md flex items-center justify-center"
              style={{ background: "oklch(0.57 0.115 192)" }}
            >
              <Home className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <div className="font-serif font-bold text-base tracking-wide">
                PREMIER PROPERTIES
              </div>
              <div className="text-xs opacity-60 tracking-widest">
                bestrealestateagent.info
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors"
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-white/30 text-white bg-transparent hover:bg-white/10 text-xs tracking-wide"
              data-ocid="nav.secondary_button"
            >
              Client Login
            </Button>
            <Button
              size="sm"
              onClick={() => handleNav("#contact")}
              className="text-xs tracking-wide font-semibold"
              style={{ background: "oklch(0.57 0.115 192)", color: "white" }}
              data-ocid="nav.primary_button"
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-ocid="nav.toggle"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t border-white/10"
          style={{ background: "oklch(0.18 0.055 222)" }}
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="block w-full text-left text-white/80 hover:text-white py-2 text-sm font-medium"
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <Button
                size="sm"
                onClick={() => handleNav("#contact")}
                className="w-full text-xs font-semibold"
                style={{ background: "oklch(0.57 0.115 192)", color: "white" }}
                data-ocid="nav.primary_button"
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
