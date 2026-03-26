import { Button } from "@/components/ui/button";
import { Award, ChevronRight, Home, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Home, value: "500+", label: "Homes Sold" },
  { icon: TrendingUp, value: "$2B+", label: "In Sales" },
];

export default function AboutSection() {
  const handleConsult = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="py-20"
      style={{ background: "oklch(0.97 0.005 220)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-2xl"
              style={{ background: "oklch(0.57 0.115 192 / 0.15)" }}
            />
            <img
              src="/assets/generated/agent-sarah-jenkins.dim_600x700.jpg"
              alt="Sarah Jenkins - Real Estate Agent"
              className="relative z-10 w-full h-[520px] object-cover object-top rounded-2xl shadow-2xl"
            />
            <div
              className="absolute bottom-6 left-6 z-20 rounded-xl p-4 shadow-lg"
              style={{ background: "oklch(0.57 0.115 192)" }}
            >
              <p className="text-white font-bold text-xl">Sarah Jenkins</p>
              <p className="text-white/80 text-sm">
                Top-Rated Real Estate Agent
              </p>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="text-sm font-semibold tracking-[0.3em] uppercase mb-3"
              style={{ color: "oklch(0.57 0.115 192)" }}
            >
              About The Agent
            </p>
            <h2
              className="font-serif font-bold text-4xl mb-6"
              style={{ color: "oklch(0.22 0.055 222)" }}
            >
              Meet Sarah Jenkins
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "oklch(0.48 0.02 222)" }}
            >
              With over 15 years of experience in luxury real estate across
              Southern California, Sarah Jenkins has built a reputation for
              delivering exceptional results and personalized service. Her deep
              market knowledge and unwavering commitment to clients sets her
              apart in every transaction.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "oklch(0.48 0.02 222)" }}
            >
              Whether you're buying your first home, selling an estate, or
              investing in premium properties, Sarah's expertise and extensive
              network ensure you get the best outcome possible in today's
              dynamic market.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="rounded-xl p-4 text-center"
                  style={{ background: "oklch(0.22 0.055 222)" }}
                >
                  <Icon
                    className="w-5 h-5 mx-auto mb-2"
                    style={{ color: "oklch(0.57 0.115 192)" }}
                  />
                  <p className="font-bold text-xl text-white">{value}</p>
                  <p
                    className="text-xs"
                    style={{ color: "oklch(0.7 0.02 220)" }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <Button
              onClick={handleConsult}
              size="lg"
              className="font-semibold text-white"
              style={{ background: "oklch(0.57 0.115 192)" }}
              data-ocid="about.primary_button"
            >
              Schedule a Consultation
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
