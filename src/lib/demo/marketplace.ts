export type DemoMarketplaceProduct = {
  id: string;
  name: string;
  category: string;
  price: string;
  moq: string;
  rating: number;
  image: string;
  origin: string;
  traceScore: number;
  tags: string[];
  batchCode?: string;
  grade?: string;
  certifications?: string[];
  description?: string;
  packaging?: string;
  availability?: string;
};

export const DEMO_PRODUCTS: DemoMarketplaceProduct[] = [
  {
    id: "1",
    name: "Premium Arabica Coffee",
    category: "Coffee Beans",
    price: "$14.20 / kg",
    moq: "100 kg",
    rating: 4.9,
    image: "/coffee-beans.png",
    origin: "Nyeri, Kenya",
    traceScore: 98,
    tags: ["Verified", "Sustainable"],
    grade: "Specialty",
    certifications: ["Farmicle-Verified", "Sustainable Practices"],
    packaging: "60kg jute bags",
    availability: "Available now (weekly export lots)",
    description:
      "Single-origin Arabica sourced from verified smallholder farms. Batch-level traceability enables buyers to verify origin, handling, and quality checkpoints.",
  },
  {
    id: "2",
    name: "Export Grade Hass Avocados",
    category: "Fruits",
    price: "$2.50 / kg",
    moq: "500 kg",
    rating: 4.8,
    image: "/image2.jpg",
    origin: "Meru, Kenya",
    traceScore: 95,
    tags: ["Traceable", "High-Yield"],
    grade: "Export Grade",
    certifications: ["Farmicle-Verified"],
    packaging: "4kg cartons",
    availability: "Seasonal lots (2–3 weeks lead time)",
    description:
      "Export-grade Hass avocados with verifiable farm origin and movement logs through warehousing and dispatch milestones.",
  },
  {
    id: "3",
    name: "Single-Origin Cocoa Beans",
    category: "Cocoa Pods",
    price: "$18.00 / kg",
    moq: "50 kg",
    rating: 5.0,
    image: "/image3.jpg",
    origin: "Western Ghana",
    traceScore: 100,
    tags: ["Verified", "Fair Trade"],
    batchCode: "FG-2024-089",
    grade: "Export Grade",
    certifications: ["Fair Trade", "Farmicle-Verified", "Traceable Batch"],
    packaging: "64kg sacks",
    availability: "Available now (2,500kg demo lot)",
    description:
      "A demo batch wired to the traceability timeline. Use this product to showcase QR-based tracking from farm to warehouse to buyer delivery milestones.",
  },
  {
    id: "4",
    name: "White Penja Pepper",
    category: "Grains",
    price: "$28.00 / kg",
    moq: "10 kg",
    rating: 4.9,
    image: "/image4.jpg",
    origin: "Penja, Cameroon",
    traceScore: 99,
    tags: ["Rare", "Verified"],
    grade: "Premium",
    certifications: ["Farmicle-Verified"],
    packaging: "25kg bags",
    availability: "Limited lots",
    description:
      "Premium pepper sourced from verified cooperatives with audit-ready documentation and traceability scoring.",
  },
  {
    id: "5",
    name: "Raw Macadamia Nuts",
    category: "Macadamia",
    price: "$12.50 / kg",
    moq: "100 kg",
    rating: 4.7,
    image: "/image5.jpg",
    origin: "Thika, Kenya",
    traceScore: 92,
    tags: ["Direct Trade"],
    grade: "A",
    certifications: ["Farmicle-Verified"],
    packaging: "vacuum-packed liners in cartons",
    availability: "Available on request",
    description:
      "Direct trade macadamia sourced with verified farmer profiles and batch tracking for warehousing and dispatch.",
  },
  {
    id: "6",
    name: "Organic Honey Pods",
    category: "Honey",
    price: "$9.00 / kg",
    moq: "20 kg",
    rating: 4.9,
    image: "/image1.jpg",
    origin: "Tanzania Hub",
    traceScore: 96,
    tags: ["Verified", "Wild Harvest"],
    grade: "Organic",
    certifications: ["Organic", "Farmicle-Verified"],
    packaging: "food-grade buckets",
    availability: "Available now",
    description:
      "Organic honey with verified sourcing and compliance-ready documentation.",
  },
];

export function getDemoProduct(id: string) {
  return DEMO_PRODUCTS.find((p) => p.id === id) ?? null;
}
