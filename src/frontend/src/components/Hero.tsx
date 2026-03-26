import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Search } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function Hero() {
  const [location, setLocation] = useState("");
  const [_propertyType, setPropertyType] = useState("");
  const [_priceRange, setPriceRange] = useState("");

  const handleSearch = () => {
    document.querySelector("#listings")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
      style={{
        backgroundImage: `url('/assets/generated/hero-luxury-home.dim_1920x1080.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, oklch(0.1 0.04 222 / 0.92) 0%, oklch(0.1 0.04 222 / 0.75) 50%, oklch(0.1 0.04 222 / 0.4) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="text-sm font-semibold tracking-[0.3em] uppercase mb-4"
              style={{ color: "oklch(0.72 0.115 192)" }}
            >
              Premier Real Estate Services
            </p>
            <h1 className="font-serif font-extrabold text-white text-5xl sm:text-6xl lg:text-7xl leading-tight uppercase mb-6">
              Find Your
              <br />
              <span style={{ color: "oklch(0.72 0.115 192)" }}>Dream Home</span>
            </h1>
            <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-xl">
              Discover exceptional properties with Sarah Jenkins — your trusted
              partner in finding the perfect home in today&apos;s competitive
              market.
            </p>
          </motion.div>

          {/* Search Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-xl p-6 shadow-2xl"
            style={{ background: "oklch(0.57 0.115 192)" }}
          >
            <h3 className="text-white font-semibold text-sm tracking-wide uppercase mb-4">
              Search Properties
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                <Input
                  placeholder="City, ZIP, or Address"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="pl-9 bg-white/15 border-white/20 text-white placeholder:text-white/50 focus:bg-white/20"
                  data-ocid="hero.search_input"
                />
              </div>
              <Select onValueChange={setPropertyType}>
                <SelectTrigger
                  className="bg-white/15 border-white/20 text-white"
                  data-ocid="hero.select"
                >
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="single-family">Single Family</SelectItem>
                  <SelectItem value="condo">Condo</SelectItem>
                  <SelectItem value="townhouse">Townhouse</SelectItem>
                  <SelectItem value="multi-family">Multi-Family</SelectItem>
                </SelectContent>
              </Select>
              <Select onValueChange={setPriceRange}>
                <SelectTrigger
                  className="bg-white/15 border-white/20 text-white"
                  data-ocid="hero.select"
                >
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Price</SelectItem>
                  <SelectItem value="under-500k">Under $500K</SelectItem>
                  <SelectItem value="500k-1m">$500K &ndash; $1M</SelectItem>
                  <SelectItem value="1m-2m">$1M &ndash; $2M</SelectItem>
                  <SelectItem value="2m-plus">$2M+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              onClick={handleSearch}
              className="w-full font-bold tracking-widest uppercase"
              style={{ background: "oklch(0.22 0.055 222)", color: "white" }}
              data-ocid="hero.primary_button"
            >
              <Search className="w-4 h-4 mr-2" />
              Search Properties
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
