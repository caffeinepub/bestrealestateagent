import { useMutation, useQuery } from "@tanstack/react-query";
import type { ContactSubmission, Property, Testimonial } from "../backend.d";
import { useActor } from "./useActor";

export function useGetFeaturedListings() {
  const { actor, isFetching } = useActor();
  return useQuery<Property[]>({
    queryKey: ["featuredListings"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getFeaturedListings();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllListings() {
  const { actor, isFetching } = useActor();
  return useQuery<Property[]>({
    queryKey: ["allListings"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllListings();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetTestimonials() {
  const { actor, isFetching } = useActor();
  return useQuery<Testimonial[]>({
    queryKey: ["testimonials"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllTestimonials();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitContact() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (
      contact: Omit<ContactSubmission, "id" | "timestamp">,
    ) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitContact({
        ...contact,
        id: BigInt(0),
        timestamp: BigInt(Date.now()),
      });
    },
  });
}
