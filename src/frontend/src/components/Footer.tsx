import { Home } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Property Listings", href: "#listings" },
  { label: "About Sarah", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: SiFacebook, href: "#", label: "Facebook" },
  { icon: SiInstagram, href: "#", label: "Instagram" },
  { icon: SiLinkedin, href: "#", label: "LinkedIn" },
  { icon: SiX, href: "#", label: "X (Twitter)" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? window.location.hostname
      : "bestrealestateagent.info";

  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "oklch(0.18 0.055 222)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-md flex items-center justify-center"
                style={{ background: "oklch(0.57 0.115 192)" }}
              >
                <Home className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-serif font-bold text-white text-sm tracking-wide">
                  PREMIER PROPERTIES
                </div>
                <div
                  className="text-xs"
                  style={{ color: "oklch(0.57 0.115 192)" }}
                >
                  bestrealestateagent.info
                </div>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: "oklch(0.62 0.02 220)" }}
            >
              Your trusted partner in luxury real estate. Helping clients find
              their perfect home since 2009.
            </p>
            <p className="text-sm" style={{ color: "oklch(0.62 0.02 220)" }}>
              9840 Wilshire Blvd, Suite 200
              <br />
              Beverly Hills, CA 90210
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNav(link.href)}
                    className="text-sm transition-colors hover:text-white"
                    style={{ color: "oklch(0.62 0.02 220)" }}
                    data-ocid="footer.link"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Connect
            </h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                  style={{
                    background: "oklch(0.25 0.055 222)",
                    color: "oklch(0.62 0.02 220)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "oklch(0.57 0.115 192)";
                    (e.currentTarget as HTMLElement).style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "oklch(0.25 0.055 222)";
                    (e.currentTarget as HTMLElement).style.color =
                      "oklch(0.62 0.02 220)";
                  }}
                  data-ocid="footer.link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <div
              className="space-y-1 text-sm"
              style={{ color: "oklch(0.62 0.02 220)" }}
            >
              <p>(310) 555-0192</p>
              <p>sarah@bestrealestateagent.info</p>
            </div>
          </div>
        </div>

        <div
          className="border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs"
          style={{
            borderColor: "oklch(0.28 0.04 222)",
            color: "oklch(0.48 0.02 222)",
          }}
        >
          <p>
            &copy; {currentYear} BestRealEstateAgent.info. All rights reserved.
          </p>
          <p>
            Built with &hearts; using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              style={{ color: "oklch(0.57 0.115 192)" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
