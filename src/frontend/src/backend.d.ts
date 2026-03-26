import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Property {
    id: bigint;
    title: string;
    featured: boolean;
    propertyType: string;
    bedrooms: bigint;
    sqft: bigint;
    description: string;
    imageUrl: string;
    address: string;
    bathrooms: bigint;
    price: bigint;
}
export type Time = bigint;
export interface ContactSubmission {
    id: bigint;
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export interface Testimonial {
    id: bigint;
    review: string;
    clientName: string;
    avatarUrl: string;
    rating: bigint;
}
export interface backendInterface {
    addProperty(property: Property): Promise<bigint>;
    addTestimonial(testimonial: Testimonial): Promise<bigint>;
    getAllContactSubmissions(): Promise<Array<ContactSubmission>>;
    getAllListings(): Promise<Array<Property>>;
    getAllTestimonials(): Promise<Array<Testimonial>>;
    getFeaturedListings(): Promise<Array<Property>>;
    removeProperty(id: bigint): Promise<void>;
    removeTestimonial(id: bigint): Promise<void>;
    submitContact(contact: ContactSubmission): Promise<bigint>;
    updateProperty(id: bigint, property: Property): Promise<void>;
    updateTestimonial(id: bigint, testimonial: Testimonial): Promise<void>;
}
