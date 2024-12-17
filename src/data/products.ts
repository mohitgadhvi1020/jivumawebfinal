import { CATEGORIES } from "./categories";

export interface Product {
  id: string;
  name: {
    en: string;
    hi: string;
  };
  description: string;
  price: number;
  image: string;
  category: string;
  features: string[];
  preparationTime?: string;
  spiceLevel?: "mild" | "medium" | "hot";
}
export const products: Product[] = [
  // Paneer Dishes / पनीर व्यंजन
  {
    id: "ptm-001",
    name: {
      en: "Paneer Tikka Masala",
      hi: "पनीर टिक्का मसाला",
    },
    description:
      "A classic dish featuring marinated and grilled paneer cubes in a rich, aromatic tomato-based gravy.",
    price: 45,
    image: "/assets/images/paneer_tikka_masala.png",
    category: CATEGORIES.PANEER,
    features: [
      "Restaurant-style taste",
      "Authentic spice blend",
      "Ready in 30 minutes",
    ],
    preparationTime: "15 minutes",
    spiceLevel: "medium",
  },
  {
    id: "pbm-001",
    name: {
      en: "Paneer Butter Masala",
      hi: "पनीर बटर मसाला",
    },
    description:
      "Creamy, rich gravy with soft paneer cubes, perfect blend of spices and butter.",
    price: 45,
    image: "/assets/images/paneer_butter_masala.png",
    category: CATEGORIES.PANEER,
    features: ["Creamy texture", "Perfect blend of spices", "Restaurant style"],
    preparationTime: "15 minutes",
    spiceLevel: "mild",
  },
  {
    id: "pmk-001",
    name: {
      en: "Paneer Makhani",
      hi: "पनीर मखनी",
    },
    description:
      "Luxurious, creamy tomato-based curry with soft paneer pieces and aromatic spices.",
    price: 45,
    image: "/assets/images/paneer_tikka_masala_jain.png", // Updated image based on your files
    category: CATEGORIES.PANEER,
    features: ["Rich and creamy", "Authentic taste", "Premium ingredients"],
    preparationTime: "15 minutes",
    spiceLevel: "mild",
  },
  {
    id: "pbh-001",
    name: {
      en: "Paneer Bhurji",
      hi: "पनीर भुर्जी",
    },
    description: "Scrambled paneer cooked with tomatoes, onions, and spices.",
    price: 45,
    image: "/assets/images/bharela_bhinda.png", // Updated image
    category: CATEGORIES.PANEER,
    features: ["Scrambled texture", "Flavorful", "Quick to prepare"],
    preparationTime: "15 minutes",
    spiceLevel: "medium",
  },
  {
    id: "ptn-001",
    name: {
      en: "Paneer Tikka (No Onion, No Garlic)",
      hi: "प्याज-लहसुन रहित पनीर टिक्का",
    },
    description: "Grilled paneer cubes with spices, without onion or garlic.",
    price: 45,
    image: "/assets/images/paneer_tikka_masala_jain.png", // Updated image
    category: CATEGORIES.PANEER,
    features: ["No onion, no garlic", "Grilled perfection", "Spicy and tasty"],
    preparationTime: "15 minutes",
    spiceLevel: "medium",
  },
  // Vegetarian Dishes / शाकाहारी व्यंजन
  {
    id: "rjm-001",
    name: {
      en: "Rajma",
      hi: "राजमा",
    },
    description:
      "Kidney beans cooked in a thick, spiced curry, a North Indian comfort food.",
    price: 45,
    image: "/assets/images/rajma_masala.png", // Updated image
    category: CATEGORIES.VEGETARIAN,
    features: ["Protein-rich", "Authentic Punjabi style", "Perfect with rice"],
    preparationTime: "15 minutes",
    spiceLevel: "medium",
  },
  {
    id: "chl-001",
    name: {
      en: "Chole",
      hi: "छोले",
    },
    description:
      "Spiced chickpeas curry made with special blend of aromatic spices.",
    price: 45,
    image: "/assets/images/chana_gravy.png", // Updated image
    category: CATEGORIES.VEGETARIAN,
    features: [
      "Traditional recipe",
      "Rich in protein",
      "Perfect blend of spices",
    ],
    preparationTime: "15 minutes",
    spiceLevel: "hot",
  },
  {
    id: "kda-001",
    name: {
      en: "Kashmiri Dum Aloo",
      hi: "कश्मीरी दम आलू",
    },
    description: "Baby potatoes cooked in a rich, spicy Kashmiri-style gravy.",
    price: 45,
    image: "/assets/images/kashmiri_dum_aloo.png", // Updated image
    category: CATEGORIES.VEGETARIAN,
    features: ["Rich and aromatic", "Vibrant flavors", "Comfort food"],
    preparationTime: "15 minutes",
    spiceLevel: "medium",
  },
  {
    id: "vkd-001",
    name: {
      en: "Veg Kadai",
      hi: "वेग कड़ाही",
    },
    description:
      "Mixed vegetables cooked in a spicy, tangy gravy with a blend of spices.",
    price: 45,
    image: "/assets/images/vegetable_kadai_mix.png", // Updated image
    category: CATEGORIES.VEGETARIAN,
    features: ["Perfect blend of spices", "Rich in vegetables", "Tangy flavor"],
    preparationTime: "15 minutes",
    spiceLevel: "medium",
  },
  {
    id: "vby-001",
    name: {
      en: "Veg Biryani",
      hi: "वेज बिरयानी",
    },
    description: "Fragrant rice mixed with spiced vegetables, a one-pot meal.",
    price: 45,
    image: "/assets/images/veg_biryani.png", // Updated image
    category: CATEGORIES.VEGETARIAN,
    features: ["Flavorful", "Basmati rice", "Perfectly spiced"],
    preparationTime: "15 minutes",
    spiceLevel: "medium",
  },
  {
    id: "bbh-001",
    name: {
      en: "Bharela Bhinda",
      hi: "भरेला भिंडा",
    },
    description: "Stuffed okra with a spicy, tangy filling.",
    price: 45,
    image: "/assets/images/bharela_bhinda.png", // Updated image
    category: CATEGORIES.VEGETARIAN,
    features: ["Stuffed okra", "Spicy and tangy", "Traditional recipe"],
    preparationTime: "15 minutes",
    spiceLevel: "hot",
  },
  {
    id: "brg-001",
    name: {
      en: "Bharela Ringan",
      hi: "भरेला रिंगन",
    },
    description: "Stuffed eggplant with aromatic spices and a tangy filling.",
    price: 45,
    image: "/assets/images/bharela_bhinda.png", // Updated image
    category: CATEGORIES.VEGETARIAN,
    features: ["Stuffed eggplant", "Tangy and flavorful", "Spiced filling"],
    preparationTime: "15 minutes",
    spiceLevel: "medium",
  },
  // Non-Vegetarian Dishes / मांसाहारी व्यंजन
  {
    id: "cbi-001",
    name: {
      en: "Chicken Biryani",
      hi: "चिकन बिरयानी",
    },
    description:
      "Aromatic rice dish with tender chicken pieces and signature biryani spices.",
    price: 45,
    image: "/assets/images/chicken_biryani_mix.png", // Updated image
    category: CATEGORIES.NON_VEGETARIAN,
    features: [
      "Authentic Hyderabadi style",
      "Long-grain basmati rice",
      "Perfect blend of spices",
    ],
    preparationTime: "15 minutes",
    spiceLevel: "medium",
  },
  {
    id: "ccg-001",
    name: {
      en: "Chicken Gravy",
      hi: "चिकन ग्रेवी",
    },
    description: "Tender chicken pieces cooked in a flavorful gravy.",
    price: 45,
    image: "/assets/images/chicken_gravy.png", // Updated image
    category: CATEGORIES.NON_VEGETARIAN,
    features: [
      "Tender chicken",
      "Flavorful gravy",
      "Perfect with rice or bread",
    ],
    preparationTime: "15 minutes",
    spiceLevel: "medium",
  },
  {
    id: "btc-001",
    name: {
      en: "Butter Chicken",
      hi: "बटर चिकन",
    },
    description:
      "Tender chicken in a rich, creamy tomato-based curry with butter and cream.",
    price: 45,
    image: "/assets/images/butter_chicken_mix.png", // Updated image
    category: CATEGORIES.NON_VEGETARIAN,
    features: ["Creamy texture", "Tender chicken pieces", "Mild and rich"],
    preparationTime: "15 minutes",
    spiceLevel: "mild",
  },
  {
    id: "mtg-001",
    name: {
      en: "Mutton Gravy",
      hi: "मटन ग्रेवी",
    },
    description: "Tender mutton pieces cooked in a rich and spicy gravy.",
    price: 45,
    image: "/assets/images/mutton_gravy_mix.png", // Updated image
    category: CATEGORIES.NON_VEGETARIAN,
    features: ["Tender mutton", "Rich and spicy", "Traditional recipe"],
    preparationTime: "15 minutes",
    spiceLevel: "hot",
  },
];
