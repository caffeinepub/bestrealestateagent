import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Bath, Bed, ChevronRight, MapPin, Maximize } from "lucide-react";
import { motion } from "motion/react";
import { useGetFeaturedListings } from "../hooks/useQueries";

const FALLBACK_LISTINGS = [
  {
    id: BigInt(1),
    title: "Modern Coastal Estate",
    address: "1247 Ocean View Drive, Malibu, CA 90265",
    price: BigInt(3850000),
    bedrooms: BigInt(5),
    bathrooms: BigInt(4),
    sqft: BigInt(4200),
    propertyType: "Single Family",
    featured: true,
    imageUrl: "",
    description: "",
  },
  {
    id: BigInt(2),
    title: "Downtown Luxury Penthouse",
    address: "800 Wilshire Blvd #4201, Los Angeles, CA 90017",
    price: BigInt(2150000),
    bedrooms: BigInt(3),
    bathrooms: BigInt(3),
    sqft: BigInt(2800),
    propertyType: "Condo",
    featured: true,
    imageUrl: "",
    description: "",
  },
  {
    id: BigInt(3),
    title: "Hillside Contemporary Home",
    address: "523 Mulholland Drive, Beverly Hills, CA 90210",
    price: BigInt(5600000),
    bedrooms: BigInt(6),
    bathrooms: BigInt(5),
    sqft: BigInt(6100),
    propertyType: "Single Family",
    featured: true,
    imageUrl: "",
    description: "",
  },
];

function formatPrice(price: bigint): string {
  const n = Number(price);
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
  return `$${n.toLocaleString()}`;
}

export default function FeaturedListings() {
  const { data: listings, isLoading } = useGetFeaturedListings();
  const items = listings && listings.length > 0 ? listings : FALLBACK_LISTINGS;

  return (
    <section id="listings" className="py-20" style={{ background: "#ffffff" }}>
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
            Exclusive Properties
          </p>
          <h2
            className="font-serif font-bold text-4xl"
            style={{ color: "oklch(0.22 0.055 222)" }}
          >
            Featured Listings
          </h2>
        </motion.div>

        {isLoading ? (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-ocid="listings.loading_state"
          >
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-md">
                <Skeleton className="h-56 w-full" />
                <div className="p-5 space-y-3">
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-ocid="listings.list"
          >
            {items.map((listing, index) => (
              <motion.div
                key={Number(listing.id)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white group"
                data-ocid={`listings.item.${index + 1}`}
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={
                      listing.imageUrl ||
                      `https://picsum.photos/seed/property${Number(listing.id)}/600/400`
                    }
                    alt={listing.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge
                    className="absolute top-4 left-4 text-white font-bold text-base px-3 py-1"
                    style={{ background: "oklch(0.57 0.115 192)" }}
                  >
                    {formatPrice(listing.price)}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="absolute top-4 right-4 bg-white/90 text-xs font-medium"
                  >
                    {listing.propertyType}
                  </Badge>
                </div>
                <div className="p-5">
                  <h3
                    className="font-serif font-bold text-lg mb-1"
                    style={{ color: "oklch(0.22 0.055 222)" }}
                  >
                    {listing.title}
                  </h3>
                  <div className="flex items-center gap-1 mb-4">
                    <MapPin
                      className="w-3.5 h-3.5"
                      style={{ color: "oklch(0.57 0.115 192)" }}
                    />
                    <p
                      className="text-sm"
                      style={{ color: "oklch(0.48 0.02 222)" }}
                    >
                      {listing.address}
                    </p>
                  </div>
                  <div
                    className="flex items-center gap-4 mb-4 text-sm"
                    style={{ color: "oklch(0.48 0.02 222)" }}
                  >
                    <span className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      {Number(listing.bedrooms)} Beds
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath className="w-4 h-4" />
                      {Number(listing.bathrooms)} Baths
                    </span>
                    <span className="flex items-center gap-1">
                      <Maximize className="w-4 h-4" />
                      {Number(listing.sqft).toLocaleString()} sqft
                    </span>
                  </div>
                  <Button
                    className="w-full font-semibold text-white group/btn"
                    style={{ background: "oklch(0.22 0.055 222)" }}
                    data-ocid={`listings.item.${index + 1}`}
                  >
                    View Details
                    <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
