import { Skeleton } from "@/components/ui/skeleton";
import { Star } from "lucide-react";
import { motion } from "motion/react";
import { useGetTestimonials } from "../hooks/useQueries";

const FALLBACK_TESTIMONIALS = [
  {
    id: BigInt(1),
    clientName: "Michael & Jennifer Thompson",
    review:
      "Sarah helped us find our dream home in Beverly Hills. Her knowledge of the market and dedication to finding exactly what we wanted was extraordinary. We couldn't be happier!",
    rating: BigInt(5),
    avatarUrl: "",
  },
  {
    id: BigInt(2),
    clientName: "David Ramirez",
    review:
      "Working with Sarah to sell our property was seamless. She priced it perfectly, marketed aggressively, and we received multiple offers above asking price within the first week.",
    rating: BigInt(5),
    avatarUrl: "",
  },
  {
    id: BigInt(3),
    clientName: "Amanda & Chris Foster",
    review:
      "As first-time homebuyers, we were nervous about the process. Sarah guided us every step of the way and made the entire experience stress-free. Truly a 5-star agent!",
    rating: BigInt(5),
    avatarUrl: "",
  },
];

const STAR_KEYS = ["star-1", "star-2", "star-3", "star-4", "star-5"];

function getInitials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");
}

export default function Testimonials() {
  const { data: testimonials, isLoading } = useGetTestimonials();
  const items =
    testimonials && testimonials.length > 0
      ? testimonials
      : FALLBACK_TESTIMONIALS;

  return (
    <section
      id="testimonials"
      className="py-20"
      style={{ background: "oklch(0.94 0.015 80)" }}
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
            Client Stories
          </p>
          <h2
            className="font-serif font-bold text-4xl"
            style={{ color: "oklch(0.22 0.055 222)" }}
          >
            What Our Clients Say
          </h2>
        </motion.div>

        {isLoading ? (
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-ocid="testimonials.loading_state"
          >
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow space-y-3">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-ocid="testimonials.list"
          >
            {items.map((t, index) => (
              <motion.div
                key={Number(t.id)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                data-ocid={`testimonials.item.${index + 1}`}
              >
                <div className="flex items-center gap-1 mb-4">
                  {STAR_KEYS.slice(0, Number(t.rating)).map((key) => (
                    <Star
                      key={key}
                      className="w-4 h-4 fill-current"
                      style={{ color: "oklch(0.78 0.17 72)" }}
                    />
                  ))}
                </div>
                <p
                  className="text-sm leading-relaxed mb-6 italic"
                  style={{ color: "oklch(0.38 0.02 222)" }}
                >
                  &ldquo;{t.review}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ background: "oklch(0.57 0.115 192)" }}
                  >
                    {getInitials(t.clientName)}
                  </div>
                  <div>
                    <p
                      className="font-semibold text-sm"
                      style={{ color: "oklch(0.22 0.055 222)" }}
                    >
                      {t.clientName}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "oklch(0.57 0.115 192)" }}
                    >
                      Verified Client
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
