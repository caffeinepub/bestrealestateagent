import { BarChart2, Home, Search, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Home,
    title: "Buy a Home",
    description:
      "Find your perfect property with expert guidance at every step. We negotiate the best price and terms to protect your investment.",
  },
  {
    icon: TrendingUp,
    title: "Sell Your Home",
    description:
      "Maximize your sale price with strategic marketing and pricing expertise. Our proven process gets results faster than the market average.",
  },
  {
    icon: BarChart2,
    title: "Investment Properties",
    description:
      "Build your real estate portfolio with confidence. We identify high-yield opportunities and guide you through smart investment decisions.",
  },
  {
    icon: Search,
    title: "Market Analysis",
    description:
      "Make informed decisions with comprehensive market reports. We provide in-depth data on trends, comparables, and neighborhood insights.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20"
      style={{ background: "oklch(0.22 0.055 222)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p
            className="text-sm font-semibold tracking-[0.3em] uppercase mb-3"
            style={{ color: "oklch(0.57 0.115 192)" }}
          >
            What We Offer
          </p>
          <h2 className="font-serif font-bold text-4xl text-white">
            Our Services
          </h2>
        </motion.div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          data-ocid="services.list"
        >
          {services.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl p-6 hover:scale-105 transition-transform cursor-default"
              style={{ background: "oklch(0.27 0.055 222)" }}
              data-ocid={`services.item.${index + 1}`}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ background: "oklch(0.57 0.115 192 / 0.15)" }}
              >
                <Icon
                  className="w-6 h-6"
                  style={{ color: "oklch(0.72 0.115 192)" }}
                />
              </div>
              <h3 className="font-serif font-bold text-lg text-white mb-2">
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "oklch(0.68 0.02 220)" }}
              >
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
