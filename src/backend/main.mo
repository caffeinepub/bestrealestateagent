import Text "mo:core/Text";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Nat "mo:core/Nat";
import Time "mo:core/Time";

actor {
  type Property = {
    id : Nat;
    title : Text;
    address : Text;
    price : Nat;
    bedrooms : Nat;
    bathrooms : Nat;
    sqft : Nat;
    propertyType : Text;
    description : Text;
    imageUrl : Text;
    featured : Bool;
  };

  type Testimonial = {
    id : Nat;
    clientName : Text;
    review : Text;
    rating : Nat;
    avatarUrl : Text;
  };

  type ContactSubmission = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Property {
    public func compare(property1 : Property, property2 : Property) : Order.Order {
      Nat.compare(property1.id, property2.id);
    };
  };

  module Testimonial {
    public func compare(testimonial1 : Testimonial, testimonial2 : Testimonial) : Order.Order {
      Nat.compare(testimonial1.id, testimonial2.id);
    };
  };

  module ContactSubmission {
    public func compare(submission1 : ContactSubmission, submission2 : ContactSubmission) : Order.Order {
      Nat.compare(submission1.id, submission2.id);
    };
  };

  let properties = Map.empty<Nat, Property>();
  let testimonials = Map.empty<Nat, Testimonial>();
  let contactSubmissions = Map.empty<Nat, ContactSubmission>();

  var nextPropertyId = 1;
  var nextTestimonialId = 1;
  var nextContactId = 1;

  // Seed data
  func seedProperties() {
    let property1 : Property = {
      id = nextPropertyId;
      title = "Beautiful Single Family Home";
      address = "123 Main St, Anytown, USA";
      price = 350_000;
      bedrooms = 4;
      bathrooms = 3;
      sqft = 2500;
      propertyType = "Single Family";
      description = "Spacious home with large backyard and modern upgrades.";
      imageUrl = "https://example.com/images/house1.jpg";
      featured = true;
    };
    nextPropertyId += 1;
    let property2 : Property = {
      id = nextPropertyId;
      title = "Modern Condo Downtown";
      address = "456 Center Ave, Cityville, USA";
      price = 220_000;
      bedrooms = 2;
      bathrooms = 2;
      sqft = 1200;
      propertyType = "Condo";
      description = "Convenient location with great amenities.";
      imageUrl = "https://example.com/images/condo1.jpg";
      featured = false;
    };
    nextPropertyId += 1;
    let property3 : Property = {
      id = nextPropertyId;
      title = "Charming Townhouse";
      address = "789 Elm St, Suburbia, USA";
      price = 280_000;
      bedrooms = 3;
      bathrooms = 2;
      sqft = 1800;
      propertyType = "Townhouse";
      description = "Cozy townhouse with updated kitchen.";
      imageUrl = "https://example.com/images/townhouse1.jpg";
      featured = true;
    };
    nextPropertyId += 1;
    let property4 : Property = {
      id = nextPropertyId;
      title = "Luxury Single Family Estate";
      address = "1010 Oak Dr, Prestigious, USA";
      price = 650_000;
      bedrooms = 6;
      bathrooms = 5;
      sqft = 4500;
      propertyType = "Single Family";
      description = "High-end finishes and beautiful landscaping.";
      imageUrl = "https://example.com/images/house2.jpg";
      featured = false;
    };
    nextPropertyId += 1;
    let property5 : Property = {
      id = nextPropertyId;
      title = "Affordable Condo";
      address = "111 Pine Ave, Budgettown, USA";
      price = 150_000;
      bedrooms = 1;
      bathrooms = 1;
      sqft = 800;
      propertyType = "Condo";
      description = "Perfect starter home. Low HOA fees.";
      imageUrl = "https://example.com/images/condo2.jpg";
      featured = true;
    };
    nextPropertyId += 1;
    let property6 : Property = {
      id = nextPropertyId;
      title = "Spacious Townhouse with Garage";
      address = "222 Maple St, Suburbia, USA";
      price = 310_000;
      bedrooms = 3;
      bathrooms = 2;
      sqft = 2000;
      propertyType = "Townhouse";
      description = "Extra storage and great location.";
      imageUrl = "https://example.com/images/townhouse2.jpg";
      featured = false;
    };
    nextPropertyId += 1;

    properties.add(property1.id, property1);
    properties.add(property2.id, property2);
    properties.add(property3.id, property3);
    properties.add(property4.id, property4);
    properties.add(property5.id, property5);
    properties.add(property6.id, property6);
  };

  func seedTestimonials() {
    let testimonial1 : Testimonial = {
      id = nextTestimonialId;
      clientName = "John Smith";
      review = "Amazing experience! The team was very helpful and professional.";
      rating = 5;
      avatarUrl = "https://example.com/images/client1.jpg";
    };
    nextTestimonialId += 1;
    let testimonial2 : Testimonial = {
      id = nextTestimonialId;
      clientName = "Sarah Johnson";
      review = "Found my dream home thanks to their wonderful service.";
      rating = 4;
      avatarUrl = "https://example.com/images/client2.jpg";
    };
    nextTestimonialId += 1;
    let testimonial3 : Testimonial = {
      id = nextTestimonialId;
      clientName = "Michael Lee";
      review = "Excellent communication and very knowledgeable agents.";
      rating = 5;
      avatarUrl = "https://example.com/images/client3.jpg";
    };
    nextTestimonialId += 1;

    testimonials.add(testimonial1.id, testimonial1);
    testimonials.add(testimonial2.id, testimonial2);
    testimonials.add(testimonial3.id, testimonial3);
  };

  // Initialize with seed data
  system func preupgrade() {};
  system func postupgrade() {
    seedProperties();
    seedTestimonials();
  };

  // Get all listings
  public query ({ caller }) func getAllListings() : async [Property] {
    properties.values().toArray().sort();
  };

  // Get featured listings
  public query ({ caller }) func getFeaturedListings() : async [Property] {
    properties.values().toArray().filter(func(p) { p.featured }).sort();
  };

  public query ({ caller }) func getAllTestimonials() : async [Testimonial] {
    testimonials.values().toArray().sort();
  };

  // Admin: Add property
  public shared ({ caller }) func addProperty(property : Property) : async Nat {
    let newId = nextPropertyId;
    let newProperty = {
      property with
      id = newId;
    };
    properties.add(newId, newProperty);
    nextPropertyId += 1;
    newId;
  };

  // Admin: Update property
  public shared ({ caller }) func updateProperty(id : Nat, property : Property) : async () {
    if (not properties.containsKey(id)) { Runtime.trap("Property not found") };
    let updatedProperty = {
      property with
      id;
    };
    properties.add(id, updatedProperty);
  };

  // Admin: Remove property
  public shared ({ caller }) func removeProperty(id : Nat) : async () {
    if (not properties.containsKey(id)) { Runtime.trap("Property not found") };
    properties.remove(id);
  };

  public shared ({ caller }) func addTestimonial(testimonial : Testimonial) : async Nat {
    let newId = nextTestimonialId;
    let newTestimonial = {
      testimonial with
      id = newId;
    };
    testimonials.add(newId, newTestimonial);
    nextTestimonialId += 1;
    newId;
  };

  public shared ({ caller }) func updateTestimonial(id : Nat, testimonial : Testimonial) : async () {
    if (not testimonials.containsKey(id)) { Runtime.trap("Testimonial not found") };
    let updatedTestimonial = {
      testimonial with
      id;
    };
    testimonials.add(id, updatedTestimonial);
  };

  public shared ({ caller }) func removeTestimonial(id : Nat) : async () {
    if (not testimonials.containsKey(id)) { Runtime.trap("Testimonial not found") };
    testimonials.remove(id);
  };

  public shared ({ caller }) func submitContact(contact : ContactSubmission) : async Nat {
    let newId = nextContactId;
    let newContact = {
      contact with
      id = newId;
      timestamp = Time.now();
    };
    contactSubmissions.add(newId, newContact);
    nextContactId += 1;
    newId;
  };

  public query ({ caller }) func getAllContactSubmissions() : async [ContactSubmission] {
    contactSubmissions.values().toArray().sort();
  };
};
