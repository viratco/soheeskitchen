export interface MenuItemData {
  name: string;
  description: string;
  price: string; // e.g. "240"
}

export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  category: string;
  publishedAt: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  coverImage: string;
  coverImageAlt: string;
  seoKeywords: string[];
  keyTakeaways: string[];
  tableOfContents: { id: string; title: string }[];
  contentHtml?: string;
  sections: {
    id: string;
    heading: string;
    paragraphs: string[];
    quote?: string;
    highlightBox?: string;
    externalLink?: {
      url: string;
      text: string;
    };
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  menuItems?: MenuItemData[];
  relatedSlugs: string[];
  partnerLink?: {
    url: string;
    anchorText: string;
  };
}

export const RESTAURANT_DETAILS = {
  name: "Sohee's Kitchen",
  cuisine: "Authentic Korean",
  phone: "+91 9711722273",
  email: "soheeskitchen@gmail.com",
  address: {
    streetAddress: "First Floor, BB 28, Block B, Ansal Golf Link-1",
    addressLocality: "Greater Noida",
    addressRegion: "Uttar Pradesh",
    postalCode: "201315",
    addressCountry: "IN",
  },
  url: "https://www.soheeskitchen.com",
  priceRange: "₹₹",
  areaServed: [
    "India Expo Mart",
    "Pari Chowk",
    "Knowledge Park",
    "Ansal Golf Links",
    "Jaypee Greens",
    "Godrej Golf Link",
  ],
};

export const STANDARD_MENU_ITEMS: MenuItemData[] = [
  {
    name: "Tteokbokki",
    description: "Chewy Korean rice cakes simmered in a rich, spicy-sweet sauce",
    price: "240",
  },
  {
    name: "Yam Yam Fried Chicken",
    description: "Boneless fried chicken stir-fried with special Yangnyeom sauce",
    price: "450",
  },
  {
    name: "Mandu",
    description: "Korean-style chicken dumplings, steamed or fried",
    price: "330",
  },
  {
    name: "Kimbap",
    description: "Traditional Korean seaweed rice roll with fresh vegetables",
    price: "250",
  },
  {
    name: "Kimchi Jjigae",
    description: "Spicy Korean stew with kimchi, vegetables, and tofu",
    price: "350",
  },
  {
    name: "Jeyuk Bokkeum",
    description: "Tender pork stir-fried in spicy Korean chilli sauce",
    price: "450",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "korean-food-near-india-expo-mart",
    title: "Korean Food Near India Expo Mart | Sohee's Kitchen",
    metaDescription: "Authentic Korean restaurant near India Expo Mart, Greater Noida. Perfect for exhibitors and delegates after a long event day.",
    category: "Local Dining",
    publishedAt: "2026-07-24",
    readTime: "4 min read",
    author: {
      name: "Sohee's Kitchen Team",
      role: "Culinary Team",
      avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=150&auto=format&fit=crop&q=80",
    },
    coverImage: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&auto=format&fit=crop&q=80",
    coverImageAlt: "Authentic Korean dishes served at Sohee's Kitchen near India Expo Mart Greater Noida",
    seoKeywords: [
      "Korean food near India Expo Mart",
      "restaurants near Expo Mart Greater Noida",
      "exhibitor dining Greater Noida",
      "Sohee's Kitchen Expo Mart",
      "Korean restaurant Pari Chowk"
    ],
    keyTakeaways: [
      "Located just minutes from India Expo Mart in Ansal Golf Link-1, Greater Noida.",
      "Ideal post-exhibition dining destination for international delegates and business travelers.",
      "Serves authentic Korean comfort foods including Tteokbokki (₹240), Yam Yam Fried Chicken (₹450), and Kimchi Jjigae (₹350).",
      "Partnered with Sandane Homes for comfortable hotel stays and serviced apartments near Expo Mart."
    ],
    tableOfContents: [
      { id: "expo-mart-dining", title: "Where to Eat Near India Expo Mart?" },
      { id: "menu-highlights", title: "Signature Korean Dishes After a Long Event Day" },
      { id: "partner-accommodation", title: "Stay & Dine with Sandane Homes" },
      { id: "visit-us", title: "How to Visit Sohee's Kitchen" }
    ],
    sections: [
      {
        id: "expo-mart-dining",
        heading: "Where to Eat Near India Expo Mart?",
        paragraphs: [
          "Attending a major trade show, convention, or exhibition at India Expo Mart in Greater Noida can be an exhilarating yet exhausting experience. After spending hours walking event halls, finding a quiet, cozy restaurant with authentic, high-quality food is essential.",
          "Sohee's Kitchen, situated in Ansal Golf Link-1 just a short drive from India Expo Mart and Pari Chowk, provides international trade delegates and food enthusiasts with genuine Korean hospitality and homemade Korean flavors."
        ],
        quote: "After a busy exhibition day at India Expo Mart, nothing restores energy quite like a steaming bowl of Kimchi Jjigae and crispy Korean Fried Chicken."
      },
      {
        id: "menu-highlights",
        heading: "Signature Korean Dishes to Recharge Your Energy",
        paragraphs: [
          "Whether you are dining solo or unwinding with your exhibition team, our kitchen prepares fresh, authentic meals to satisfy your palate:",
          "• Yam Yam Fried Chicken (₹450): Double-fried boneless chicken glazed in signature Yangnyeom sauce.",
          "• Kimchi Jjigae (₹350): A rich, spicy Korean stew packed with aged kimchi, tofu, and savory broth.",
          "• Tteokbokki (₹240): Chewy Korean rice cakes simmered in a spicy-sweet red sauce."
        ]
      },
      {
        id: "partner-accommodation",
        heading: "Stay & Dine in Greater Noida with Sandane Homes",
        paragraphs: [
          "For event organizers, trade delegates, and corporate travelers seeking premium accommodation near India Expo Mart, we are proud to partner with Sandane Homes.",
          "Sandane Homes offers luxury serviced apartments and hotels in Greater Noida, combining comfortable long-stay amenities with easy access to Sohee's Kitchen."
        ],
        externalLink: {
          url: "https://sandanehomes.com",
          text: "Explore premium accommodation at Sandane Homes"
        }
      },
      {
        id: "visit-us",
        heading: "How to Visit Sohee's Kitchen",
        paragraphs: [
          "We are located at First Floor, BB 28, Block B, Ansal Golf Link-1, Greater Noida (near Pari Chowk and Knowledge Park).",
          "For table reservations or takeout orders, call us directly at +91 9711722273."
        ]
      }
    ],
    faqs: [
      {
        question: "How far is Sohee's Kitchen from India Expo Mart?",
        answer: "Sohee's Kitchen is located in Ansal Golf Link-1, approximately 8-10 minutes by car from India Expo Mart, near Pari Chowk."
      },
      {
        question: "Does Sohee's Kitchen accommodate large groups of Expo exhibitors?",
        answer: "Yes! We welcome group bookings for event delegates and exhibitors. Please call +91 9711722273 to reserve tables in advance."
      }
    ],
    menuItems: STANDARD_MENU_ITEMS,
    relatedSlugs: ["best-korean-restaurant-greater-noida", "where-to-eat-greater-noida"],
    partnerLink: {
      url: "https://sandanehomes.com",
      anchorText: "Sandane Homes - Premium Serviced Apartments in Greater Noida"
    }
  },

  {
    slug: "best-korean-restaurant-greater-noida",
    title: "Best Korean Restaurant in Greater Noida | Sohee's Kitchen",
    metaDescription: "Authentic Korean restaurant in Greater Noida. Traditional recipes, fresh ingredients. Tteokbokki, kimchi jjigae, Korean fried chicken. Ansal Golf Link-1.",
    category: "Culinary Guide",
    publishedAt: "2026-07-26",
    readTime: "5 min read",
    author: {
      name: "Chef Sohee",
      role: "Head Chef & Founder",
      avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=150&auto=format&fit=crop&q=80",
    },
    coverImage: "https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=1200&auto=format&fit=crop&q=80",
    coverImageAlt: "Best Korean restaurant spread with Bibimbap, Tteokbokki, and Korean side dishes in Greater Noida",
    seoKeywords: [
      "Best Korean restaurant Greater Noida",
      "Korean restaurant Ansal Golf Links",
      "Authentic Korean food Delhi NCR",
      "Sohee's Kitchen review",
      "Kimchi Jjigae Greater Noida"
    ],
    keyTakeaways: [
      "Sohee's Kitchen delivers genuine home-style Korean cooking in Ansal Golf Link-1, Greater Noida.",
      "Traditional recipes using authentic Korean spices, imported Gochujang, and house-made Kimchi.",
      "Popular menu items include Yam Yam Fried Chicken (₹450), Mandu (₹330), and Tteokbokki (₹240).",
      "Cozy dining ambiance suitable for families, students from Knowledge Park, and business delegates."
    ],
    tableOfContents: [
      { id: "authentic-korean-experience", title: "The Authentic Korean Experience in Greater Noida" },
      { id: "our-signature-menu", title: "Signature Menu Offerings" },
      { id: "why-diners-love-us", title: "Why Food Lovers Choose Sohee's Kitchen" }
    ],
    sections: [
      {
        id: "authentic-korean-experience",
        heading: "The Authentic Korean Experience in Greater Noida",
        paragraphs: [
          "Finding genuine Korean food that stays true to Seoul's culinary heritage can be a challenge. At Sohee's Kitchen, located at First Floor, BB 28, Block B, Ansal Golf Link-1, we honor traditional Korean cooking techniques.",
          "From small-batch fermented Kimchi to double-fried crispy chicken and slow-simmered stews, every dish is crafted with care using authentic ingredients."
        ]
      },
      {
        id: "our-signature-menu",
        heading: "Signature Menu Offerings",
        paragraphs: [
          "Our menu balances bold, spicy Korean classics with mild, comforting flavors:",
          "• Tteokbokki (₹240): Chewy Korean rice cakes simmered in spicy-sweet red sauce.",
          "• Yam Yam Fried Chicken (₹450): Crisp boneless chicken glazed in authentic Yangnyeom sauce.",
          "• Mandu (₹330): Steamed or crispy fried Korean dumplings packed with savory chicken filling.",
          "• Kimbap (₹250): Fresh Korean seaweed rice roll packed with vegetables.",
          "• Jeyuk Bokkeum (₹450): Tender pork stir-fried in rich Korean chili sauce."
        ]
      },
      {
        id: "why-diners-love-us",
        heading: "Why Food Lovers Choose Sohee's Kitchen",
        paragraphs: [
          "Whether you live in Ansal Golf Links, study at Knowledge Park, or are visiting Pari Chowk, Sohee's Kitchen offers warm hospitality, generous portions, and unmatched taste."
        ]
      }
    ],
    faqs: [
      {
        question: "What is the best dish to order at Sohee's Kitchen for a beginner?",
        answer: "We recommend starting with Kimbap (₹250), Mandu (₹330), and Yam Yam Fried Chicken (₹450) for a delightful introduction to Korean flavors."
      }
    ],
    menuItems: STANDARD_MENU_ITEMS,
    relatedSlugs: ["korean-food-near-india-expo-mart", "korean-food-guide-first-timers"],
  },

  {
    slug: "where-to-eat-greater-noida",
    title: "Where to Eat in Greater Noida: Best Food Guide | Sohee's Kitchen",
    metaDescription: "A local guide to the best food in Greater Noida, including authentic Korean cuisine at Sohee's Kitchen, Ansal Golf Link-1.",
    category: "Local Dining",
    publishedAt: "2026-07-28",
    readTime: "5 min read",
    author: {
      name: "Sohee's Kitchen Team",
      role: "Culinary Team",
      avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=150&auto=format&fit=crop&q=80",
    },
    coverImage: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=1200&auto=format&fit=crop&q=80",
    coverImageAlt: "Dining options and authentic Korean food spread at Sohee's Kitchen in Greater Noida",
    seoKeywords: [
      "Where to eat in Greater Noida",
      "Best food guide Greater Noida",
      "Top restaurants Pari Chowk",
      "Korean dining Greater Noida",
      "Ansal Golf Links food spots"
    ],
    keyTakeaways: [
      "Greater Noida's dining scene is growing rapidly, with Ansal Golf Link-1 becoming a prime culinary destination.",
      "Sohee's Kitchen stands out for genuine Korean home cooking, spicy stews, and double-fried chicken.",
      "Great dining options for students in Knowledge Park, visitors to Jaypee Greens, and residents of Godrej Golf Link.",
      "Seamless stays and dining partnerships with Sandane Homes serviced apartments."
    ],
    tableOfContents: [
      { id: "culinary-landscape", title: "Greater Noida's Evolving Food Scene" },
      { id: "korean-gem", title: "Sohee's Kitchen: The Hidden Korean Gem" },
      { id: "stay-and-dine", title: "Corporate Stays & Sandane Homes Partnership" }
    ],
    sections: [
      {
        id: "culinary-landscape",
        heading: "Greater Noida's Evolving Food Scene",
        paragraphs: [
          "Greater Noida has transformed into a vibrant hub for students, corporate professionals, and travelers. Neighborhoods like Pari Chowk, Knowledge Park, Jaypee Greens, and Ansal Golf Links now host diverse dining destinations."
        ]
      },
      {
        id: "korean-gem",
        heading: "Sohee's Kitchen: The Hidden Korean Gem",
        paragraphs: [
          "Located at First Floor, BB 28, Block B, Ansal Golf Link-1, Sohee's Kitchen offers authentic Korean dishes like Kimchi Jjigae (₹350) and Yam Yam Fried Chicken (₹450)."
        ]
      },
      {
        id: "stay-and-dine",
        heading: "Corporate Stays & Sandane Homes Partnership",
        paragraphs: [
          "Planning a trip to Greater Noida? Sandane Homes provides high-end serviced apartments right near Ansal Golf Links and India Expo Mart."
        ],
        externalLink: {
          url: "https://sandanehomes.com",
          text: "Book your stay with Sandane Homes"
        }
      }
    ],
    faqs: [
      {
        question: "Where is the best Korean food located in Greater Noida?",
        answer: "Sohee's Kitchen is located at First Floor, BB 28, Block B, Ansal Golf Link-1, Greater Noida."
      }
    ],
    menuItems: STANDARD_MENU_ITEMS,
    relatedSlugs: ["korean-food-near-india-expo-mart", "restaurants-near-ansal-golf-links"],
    partnerLink: {
      url: "https://sandanehomes.com",
      anchorText: "Sandane Homes - Premium Serviced Apartments in Greater Noida"
    }
  },

  {
    slug: "korean-food-guide-first-timers",
    title: "A Beginner's Guide to Korean Food | Sohee's Kitchen Greater Noida",
    metaDescription: "New to Korean food? A practical ordering guide covering tteokbokki, kimchi jjigae, Korean fried chicken, and more.",
    category: "Culinary Guide",
    publishedAt: "2026-07-30",
    readTime: "6 min read",
    author: {
      name: "Chef Sohee",
      role: "Head Chef & Founder",
      avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=150&auto=format&fit=crop&q=80",
    },
    coverImage: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&auto=format&fit=crop&q=80",
    coverImageAlt: "Beginner guide to Korean dishes including Kimbap, Mandu, and Tteokbokki at Sohee's Kitchen",
    seoKeywords: [
      "Beginners guide to Korean food",
      "What to order at Korean restaurant",
      "Korean food for first timers",
      "Tteokbokki price Greater Noida",
      "Sohee's Kitchen menu guide"
    ],
    keyTakeaways: [
      "Korean cuisine is known for balancing sweet, savory, spicy, and tangy flavors with fermented side dishes (Banchan).",
      "Ideal starter items: Kimbap (₹250), Mandu dumplings (₹330), and Yam Yam Fried Chicken (₹450).",
      "Spicy stews like Kimchi Jjigae (₹350) provide ultimate comfort on chilly evenings.",
      "Visit Sohee's Kitchen in Ansal Golf Link-1, Greater Noida for guided menu recommendations."
    ],
    tableOfContents: [
      { id: "korean-flavor-profile", title: "Understanding Korean Flavor Profiles" },
      { id: "starter-dishes", title: "Best Starter Dishes for Beginners" },
      { id: "ordering-tips", title: "How to Order Like a Pro" }
    ],
    sections: [
      {
        id: "korean-flavor-profile",
        heading: "Understanding Korean Flavor Profiles",
        paragraphs: [
          "If you are exploring Korean food for the first time, expect deep umami, sesame oil aromas, garlic, fermented soybean paste (Doenjang), and sweet-spicy chili paste (Gochujang)."
        ]
      },
      {
        id: "starter-dishes",
        heading: "Best Starter Dishes for Beginners",
        paragraphs: [
          "1. Kimbap (₹250): Seaweed rice roll filled with crisp vegetables.",
          "2. Mandu (₹330): Pan-fried or steamed chicken dumplings.",
          "3. Tteokbokki (₹240): Chewy rice cakes in savory chili sauce.",
          "4. Yam Yam Fried Chicken (₹450): Crispy double-fried chicken with glossy sweet-spicy glaze."
        ]
      },
      {
        id: "ordering-tips",
        heading: "How to Order Like a Pro at Sohee's Kitchen",
        paragraphs: [
          "Combine one staple rice or noodle dish, one crispy appetizer, and a sharing stew for the ultimate balanced table!"
        ]
      }
    ],
    faqs: [
      {
        question: "Is all Korean food spicy?",
        answer: "No! Items like Kimbap (₹250), Mandu (₹330), and Bulgogi are mild and non-spicy."
      }
    ],
    menuItems: STANDARD_MENU_ITEMS,
    relatedSlugs: ["best-korean-restaurant-greater-noida", "korean-fried-chicken-greater-noida"],
  },

  {
    slug: "korean-fried-chicken-greater-noida",
    title: "Best Korean Fried Chicken in Greater Noida | Sohee's Kitchen",
    metaDescription: "Authentic Korean fried chicken (yangnyeom) in Greater Noida. Double-fried, house sauce, made fresh. Ansal Golf Link-1.",
    category: "Menu Highlights",
    publishedAt: "2026-08-01",
    readTime: "4 min read",
    author: {
      name: "Sohee's Kitchen Team",
      role: "Culinary Team",
      avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=150&auto=format&fit=crop&q=80",
    },
    coverImage: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=1200&auto=format&fit=crop&q=80",
    coverImageAlt: "Crispy double-fried Yam Yam Korean Fried Chicken glazed with Yangnyeom sauce at Sohee's Kitchen",
    seoKeywords: [
      "Korean fried chicken Greater Noida",
      "Yangnyeom chicken near me",
      "Yam Yam fried chicken price",
      "Crispy Korean chicken Ansal Golf Links",
      "Best fried chicken Greater Noida"
    ],
    keyTakeaways: [
      "Korean Fried Chicken is world-famous for its ultra-crispy skin created by double-frying.",
      "Yam Yam Fried Chicken (₹450) is glazed in house-made authentic Yangnyeom sauce.",
      "Made fresh to order at Sohee's Kitchen in Ansal Golf Link-1, Greater Noida.",
      "Pairs amazingly with pickled radish, Tteokbokki (₹240), and cold beverages."
    ],
    tableOfContents: [
      { id: "secret-to-crunch", title: "The Secret Behind Korean Fried Chicken Crunch" },
      { id: "yam-yam-chicken", title: "Yam Yam Fried Chicken at Sohee's Kitchen (₹450)" },
      { id: "how-to-enjoy", title: "Best Pairings with Korean Fried Chicken" }
    ],
    sections: [
      {
        id: "secret-to-crunch",
        heading: "The Secret Behind Korean Fried Chicken Crunch",
        paragraphs: [
          "Unlike Western fried chicken which relies on thick flour batter, Korean Fried Chicken uses a light potato starch coating and is double-fried. This renders out fat and locks in juices, creating an impossibly crispy skin that stays crunchy even after being tossed in sauce."
        ]
      },
      {
        id: "yam-yam-chicken",
        heading: "Yam Yam Fried Chicken at Sohee's Kitchen (₹450)",
        paragraphs: [
          "Our signature Yam Yam Fried Chicken features tender boneless chicken pieces fried to golden perfection and stir-fried with our proprietary Yangnyeom sauce (crafted from garlic, soy, honey, and Korean chili)."
        ]
      },
      {
        id: "how-to-enjoy",
        heading: "Best Pairings with Korean Fried Chicken",
        paragraphs: [
          "Pair your fried chicken order with Tteokbokki (₹240) and crisp pickled radish for the ultimate sweet-spicy-crunchy bite!"
        ]
      }
    ],
    faqs: [
      {
        question: "How much does Korean Fried Chicken cost at Sohee's Kitchen?",
        answer: "Our signature Yam Yam Fried Chicken is priced at ₹450 for a generous portion."
      }
    ],
    menuItems: [
      {
        name: "Yam Yam Fried Chicken",
        description: "Boneless fried chicken stir-fried with special Yangnyeom sauce",
        price: "450",
      },
      {
        name: "Tteokbokki",
        description: "Chewy Korean rice cakes simmered in a rich, spicy-sweet sauce",
        price: "240",
      },
      {
        name: "Mandu",
        description: "Korean-style chicken dumplings, steamed or fried",
        price: "330",
      }
    ],
    relatedSlugs: ["korean-food-guide-first-timers", "best-korean-restaurant-greater-noida"],
  },

  {
    slug: "restaurants-near-ansal-golf-links",
    title: "Restaurants Near Ansal Golf Links Greater Noida | Sohee's Kitchen",
    metaDescription: "Looking for restaurants near Ansal Golf Links, Greater Noida? Authentic Korean cuisine at Sohee's Kitchen, right in Ansal Golf Link-1.",
    category: "Local Dining",
    publishedAt: "2026-08-03",
    readTime: "4 min read",
    author: {
      name: "Sohee's Kitchen Team",
      role: "Culinary Team",
      avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=150&auto=format&fit=crop&q=80",
    },
    coverImage: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&auto=format&fit=crop&q=80",
    coverImageAlt: "Sohee's Kitchen restaurant dining atmosphere in Ansal Golf Link-1 Greater Noida",
    seoKeywords: [
      "Restaurants near Ansal Golf Links",
      "Restaurants in Ansal Golf Link 1 Greater Noida",
      "Best food Ansal Golf Links",
      "Korean food Knowledge Park Pari Chowk",
      "Sohee's Kitchen location"
    ],
    keyTakeaways: [
      "Located at First Floor, BB 28, Block B, Ansal Golf Link-1, Greater Noida.",
      "Serving authentic Korean home cooking right inside Ansal Golf Links.",
      "Convenient dining spot for local residents, Knowledge Park students, and India Expo Mart delegates.",
      "Call +91 9711722273 for reservations and directions."
    ],
    tableOfContents: [
      { id: "dining-in-ansal-golf-links", title: "Dining in Ansal Golf Link-1, Greater Noida" },
      { id: "why-visit-sohees", title: "Why Visit Sohee's Kitchen?" },
      { id: "location-details", title: "Address & Contact Details" }
    ],
    sections: [
      {
        id: "dining-in-ansal-golf-links",
        heading: "Dining in Ansal Golf Link-1, Greater Noida",
        paragraphs: [
          "Ansal Golf Link-1 is one of Greater Noida's finest residential and commercial hubs, close to Pari Chowk, Knowledge Park, and Jaypee Greens. Whether you live in the locality or are visiting nearby, finding great authentic cuisine is right at your doorstep."
        ]
      },
      {
        id: "why-visit-sohees",
        heading: "Why Visit Sohee's Kitchen?",
        paragraphs: [
          "Sohee's Kitchen offers authentic Korean dining right in Ansal Golf Link-1. Enjoy signature dishes such as Yam Yam Fried Chicken (₹450), Tteokbokki (₹240), Kimbap (₹250), and Kimchi Jjigae (₹350)."
        ]
      },
      {
        id: "location-details",
        heading: "Address & Contact Details",
        paragraphs: [
          "• Address: First Floor, BB 28, Block B, Ansal Golf Link-1, Greater Noida, UP 201315",
          "• Phone: +91 9711722273",
          "• Email: soheeskitchen@gmail.com"
        ]
      }
    ],
    faqs: [
      {
        question: "Where is Sohee's Kitchen located in Ansal Golf Links?",
        answer: "We are situated at First Floor, BB 28, Block B, Ansal Golf Link-1, Greater Noida, UP 201315."
      }
    ],
    menuItems: STANDARD_MENU_ITEMS,
    relatedSlugs: ["best-korean-restaurant-greater-noida", "where-to-eat-greater-noida"],
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(blogPosts.map((post) => post.category)));
}
