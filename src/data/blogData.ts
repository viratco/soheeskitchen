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
  },

  {
    slug: "korean-bbq-greater-noida",
    title: "Authentic Korean BBQ in Greater Noida: Sizzle, Wraps & Tradition | Sohee's Kitchen",
    metaDescription: "Craving authentic Korean BBQ in Greater Noida? Experience tender grilled meats, fresh lettuce wraps, ssamjang, and spicy Jeyuk Bokkeum at Sohee's Kitchen in Ansal Golf Links.",
    category: "Culinary Guide",
    publishedAt: "2026-08-10",
    readTime: "5 min read",
    author: {
      name: "Chef Sohee",
      role: "Head Chef & Founder",
      avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=150&auto=format&fit=crop&q=80",
    },
    coverImage: "https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&auto=format&fit=crop&q=80",
    coverImageAlt: "Authentic Korean BBQ feast with seasoned meats, lettuce wraps, and banchan side dishes in Greater Noida",
    seoKeywords: [
      "Korean BBQ Greater Noida",
      "Best Korean BBQ in Greater Noida",
      "KBBQ Pari Chowk",
      "Korean barbecue Noida",
      "Jeyuk Bokkeum Greater Noida",
      "Authentic Korean restaurant Delhi NCR"
    ],
    keyTakeaways: [
      "The authentic Korean BBQ culture has arrived in Greater Noida at Sohee's Kitchen (Ansal Golf Link-1).",
      "Features sizzling Jeyuk Bokkeum (₹450) and Yam Yam Chicken (₹450) paired with fresh lettuce wraps (Ssam) and homemade banchan.",
      "Communal, interactive dining experience ideal for corporate groups, families, and foodies across Delhi NCR.",
      "Located just minutes from India Expo Mart, Pari Chowk, and Knowledge Park."
    ],
    tableOfContents: [
      { id: "kbbq-culture", title: "What Makes Korean BBQ a Global Phenomenon?" },
      { id: "art-of-ssam", title: "The Art of Ssam: Lettuce Wraps, Garlic & Ssamjang" },
      { id: "sohees-bbq-specialties", title: "Signature Sizzling Favorites at Sohee's Kitchen" },
      { id: "visit-kbbq", title: "Plan Your K-BBQ Gathering in Greater Noida" }
    ],
    sections: [
      {
        id: "kbbq-culture",
        heading: "What Makes Korean BBQ a Global Phenomenon?",
        paragraphs: [
          "Korean BBQ (Gogi-gui) is more than just grilling meat—it is a cherished cultural tradition centered around shared laughter, aromatic sizzle, and customizable flavor combinations.",
          "Across Seoul, bustling barbecue houses bring friends and families together around tabletop grills. At Sohee's Kitchen in Greater Noida, we bring this exact authentic tradition to diners in Delhi NCR, using traditional marinades, fermented seasonings, and premium ingredients."
        ],
        quote: "Korean BBQ is an interactive dining ritual: wrapping warm, savory grilled meat inside a crisp, cold lettuce leaf is one of gastronomy's greatest harmonies."
      },
      {
        id: "art-of-ssam",
        heading: "The Art of Ssam: Lettuce Wraps, Garlic & Ssamjang",
        paragraphs: [
          "To truly enjoy Korean barbecue the authentic way, mastering 'Ssam' (wrapping) is essential. Take a fresh, crisp lettuce leaf, place a slice of savory meat inside, add a dab of pungent fermented Ssamjang (chili-soybean paste), a slice of garlic, and a bite of Kimchi.",
          "Fold it into a neat parcel and enjoy the whole parcel in a single bite. The contrast between tender, seasoned meat, cool crisp greens, and fiery fermentation is pure culinary magic."
        ],
        highlightBox: "Pro Tip: Never cut your Ssam wrap in half! In Korean dining culture, eating the wrap in one full bite symbolizes receiving complete good fortune and prosperity (Bok)."
      },
      {
        id: "sohees-bbq-specialties",
        heading: "Signature Sizzling Favorites at Sohee's Kitchen",
        paragraphs: [
          "Our Greater Noida kitchen serves standout barbecue-style dishes that hit all the right flavor notes:",
          "• Jeyuk Bokkeum (₹450): Thinly sliced pork tenderloin marinated in spicy Gochujang, garlic, and ginger, stir-fried until caramelized with sweet onions and scallions.",
          "• Yam Yam Fried Chicken (₹450): Double-fried golden boneless chicken glazed in sticky, sweet-spicy Yangnyeom sauce.",
          "• Tteokbokki (₹240): Sizzling soft rice cakes immersed in fiery red chili sauce—the quintessential companion to barbecue meats."
        ]
      },
      {
        id: "visit-kbbq",
        heading: "Plan Your K-BBQ Gathering in Greater Noida",
        paragraphs: [
          "Whether you are hosting coworkers after an exhibition at India Expo Mart or planning a weekend feast with friends from Jaypee Greens or Knowledge Park, Sohee's Kitchen provides the ultimate Korean dining atmosphere.",
          "Find us at First Floor, BB 28, Block B, Ansal Golf Link-1, Greater Noida. Call +91 9711722273 for reservations."
        ]
      }
    ],
    faqs: [
      {
        question: "Where can I get authentic Korean BBQ style food in Greater Noida?",
        answer: "Sohee's Kitchen, located at First Floor, BB 28, Block B, Ansal Golf Link-1 in Greater Noida, specializes in authentic Korean dishes including Jeyuk Bokkeum, Yam Yam Fried Chicken, and fresh banchan."
      },
      {
        question: "Do you accept group bookings for office parties or family dinners?",
        answer: "Yes, we welcome group reservations! We recommend calling ahead at +91 9711722273 to reserve tables for large parties."
      }
    ],
    menuItems: STANDARD_MENU_ITEMS,
    relatedSlugs: ["best-korean-restaurant-greater-noida", "korean-fried-chicken-greater-noida"]
  },

  {
    slug: "top-korean-dishes-greater-noida",
    title: "Top 7 Authentic Korean Dishes You Must Try in Greater Noida | Sohee's Kitchen",
    metaDescription: "Discover the top 7 must-try Korean dishes in Greater Noida at Sohee's Kitchen. From spicy Tteokbokki and Kimchi Jjigae to crispy Yam Yam chicken and Mandu.",
    category: "Food & Recipes",
    publishedAt: "2026-08-14",
    readTime: "6 min read",
    author: {
      name: "Chef Sohee",
      role: "Head Chef & Founder",
      avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=150&auto=format&fit=crop&q=80",
    },
    coverImage: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=1200&auto=format&fit=crop&q=80",
    coverImageAlt: "Top 7 authentic Korean dishes including Kimchi stew, fried chicken, and tteokbokki at Sohee's Kitchen Greater Noida",
    seoKeywords: [
      "Top Korean dishes Greater Noida",
      "Must try Korean food Noida",
      "Best Korean food in Greater Noida",
      "Tteokbokki Greater Noida",
      "Kimchi stew Delhi NCR",
      "Korean restaurant Pari Chowk"
    ],
    keyTakeaways: [
      "Greater Noida now boasts an authentic Korean culinary hotspot in Ansal Golf Link-1.",
      "The 7 essential dishes to try: Tteokbokki, Yam Yam Fried Chicken, Kimchi Jjigae, Mandu, Kimbap, Jeyuk Bokkeum, and Korean Burgers.",
      "All dishes prepared using genuine Korean fermented pastes, Gochugaru chili, and artisanal small-batch Kimchi.",
      "Affordable pricing ranging from ₹240 to ₹450 with generous portion sizes."
    ],
    tableOfContents: [
      { id: "korean-culinary-wave", title: "The Rise of Authentic Korean Food in Greater Noida" },
      { id: "the-top-7-dishes", title: "7 Iconic Korean Dishes at Sohee's Kitchen" },
      { id: "how-we-cook", title: "Traditional Cooking Methods & Imported Ingredients" },
      { id: "how-to-order", title: "Ordering Guide for First-Timers & Groups" }
    ],
    sections: [
      {
        id: "korean-culinary-wave",
        heading: "The Rise of Authentic Korean Food in Greater Noida",
        paragraphs: [
          "With the worldwide popularity of Korean music, cinema, and culinary culture, food lovers in Greater Noida are seeking the authentic flavors they see on screen. You no longer need to travel to South Delhi or Gurugram to savor real Korean cuisine.",
          "At Sohee's Kitchen, we prepare homestyle recipes that deliver the exact taste, spice levels, and textures found in Seoul's best neighborhood diners."
        ]
      },
      {
        id: "the-top-7-dishes",
        heading: "7 Iconic Korean Dishes at Sohee's Kitchen",
        paragraphs: [
          "Here are the top seven dishes that define our authentic Korean menu in Greater Noida:",
          "1. Tteokbokki (₹240): Korea's legendary street snack—chewy cylindrical rice cakes and fish cakes simmered in sweet-spicy gochujang broth.",
          "2. Yam Yam Fried Chicken (₹450): Double-fried boneless chicken bites tossed in our signature garlic-honey Yangnyeom glaze.",
          "3. Kimchi Jjigae (₹350): A comforting, steaming stew brewed with slow-fermented aged Kimchi, soft tofu, and aromatics, served alongside warm rice.",
          "4. Mandu (₹330): Handcrafted Korean chicken dumplings, either steamed to delicate tenderness or pan-fried for a satisfying golden crunch.",
          "5. Kimbap (₹250): Seasoned sushi-grade rice rolled with fresh vegetables, rolled in toasted nori seaweed, and brushed with fragrant sesame oil.",
          "6. Jeyuk Bokkeum (₹450): Tender pork marinated in spicy chili sauce, quickly wok-seared with crisp vegetables for an irresistible smoky aroma.",
          "7. Yam Yam Chicken Burger (₹390): Crispy fried chicken patty coated with house Korean glaze, fresh lettuce, and brioche bun for modern fusion indulgence."
        ],
        highlightBox: "Diner Favorite: Over 80% of first-time guests pair the Yam Yam Fried Chicken with a steaming bowl of Tteokbokki for the classic Korean 'Chimaek' street food combo!"
      },
      {
        id: "how-we-cook",
        heading: "Traditional Cooking Methods & Imported Ingredients",
        paragraphs: [
          "What sets Sohee's Kitchen apart as the best Korean restaurant in Greater Noida is our dedication to technique. We make our Kimchi in-house through natural cold fermentation, use authentic Korean Gochugaru (sun-dried red pepper flakes), and refuse shortcuts.",
          "The result is deep, multifaceted flavor—savory umami, natural sweetness, and a clean, invigorating chili heat that leaves you energized."
        ]
      },
      {
        id: "how-to-order",
        heading: "Ordering Guide for First-Timers & Groups",
        paragraphs: [
          "If visiting as a party of two, we recommend ordering one protein dish (Yam Yam Chicken or Jeyuk Bokkeum), one comforting carb (Kimbap or Tteokbokki), and one hot stew (Kimchi Jjigae) to enjoy a comprehensive Korean feast.",
          "Visit us today at First Floor, BB 28, Block B, Ansal Golf Link-1, Greater Noida, or call +91 9711722273."
        ]
      }
    ],
    faqs: [
      {
        question: "What is the most popular Korean dish at Sohee's Kitchen?",
        answer: "Our Yam Yam Fried Chicken (₹450) and Tteokbokki (₹240) are our top-selling dishes loved by both beginners and seasoned Korean food enthusiasts."
      },
      {
        question: "Is Korean food suitable for Indian palates?",
        answer: "Absolutely! Korean cuisine shares a deep love for bold garlic, ginger, spring onions, and vibrant chili heat, making it an instant hit with Indian food lovers."
      }
    ],
    menuItems: STANDARD_MENU_ITEMS,
    relatedSlugs: ["best-korean-restaurant-greater-noida", "korean-food-guide-first-timers"]
  },

  {
    slug: "student-hangout-korean-food-knowledge-park",
    title: "Best Affordable Korean Food Near Knowledge Park Greater Noida | Student Guide",
    metaDescription: "Looking for student-friendly Korean food near Knowledge Park, Greater Noida? Sohee's Kitchen offers budget-friendly K-drama favorites, crispy chicken, and Tteokbokki.",
    category: "Student Life & Dining",
    publishedAt: "2026-08-18",
    readTime: "4 min read",
    author: {
      name: "Sohee's Kitchen Team",
      role: "Culinary Team",
      avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=150&auto=format&fit=crop&q=80",
    },
    coverImage: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=1200&auto=format&fit=crop&q=80",
    coverImageAlt: "University students enjoying Korean street food and snacks near Knowledge Park Greater Noida",
    seoKeywords: [
      "Korean food Knowledge Park Greater Noida",
      "Student friendly restaurants Pari Chowk",
      "Budget Korean food Greater Noida",
      "Sharda University Korean food",
      "Bennett Galgotias food near",
      "Best hangout spots Greater Noida"
    ],
    keyTakeaways: [
      "Located in Ansal Golf Link-1, minutes away from Knowledge Park 1, 2, and 3 universities (Sharda, Galgotias, Bennett, NIET).",
      "Budget-friendly authentic meals starting from ₹240 for Tteokbokki and ₹250 for Kimbap rolls.",
      "The ultimate meetup spot for college K-drama, anime, and K-pop fan clubs.",
      "Fast takeaway, cheerful atmosphere, and generous sharing portions."
    ],
    tableOfContents: [
      { id: "k-culture-students", title: "K-Drama Street Food Cravings in Greater Noida" },
      { id: "budget-friendly-picks", title: "Top Pocket-Friendly Dishes Under ₹350" },
      { id: "easy-access-knowledge-park", title: "Location & Commute from Knowledge Park & Pari Chowk" },
      { id: "group-hangouts", title: "Hosting College Meetups & Birthday Celebrations" }
    ],
    sections: [
      {
        id: "k-culture-students",
        heading: "K-Drama Street Food Cravings in Greater Noida",
        paragraphs: [
          "If you have binge-watched 'Crash Landing on You', 'Itaewon Class', or 'Business Proposal', chances are you have craved steaming bowls of spicy Tteokbokki, golden fried chicken, and savory Kimbap.",
          "For thousands of college students living in Knowledge Park, finding authentic international cuisine at reasonable prices was difficult—until Sohee's Kitchen opened right in Ansal Golf Link-1."
        ],
        quote: "College life is made of late-night study sessions and shared meals. We wanted to give students authentic Korean comfort food that doesn't burn a hole in their pockets."
      },
      {
        id: "budget-friendly-picks",
        heading: "Top Pocket-Friendly Dishes Under ₹350",
        paragraphs: [
          "Students love our wallet-friendly menu packed with flavor and filling portions:",
          "• Tteokbokki (₹240): Spicy, sweet, and chewy rice cakes in rich chili sauce—easily shared between two friends.",
          "• Kimbap (₹250): Wholesome, portable sushi-style Korean rice rolls stuffed with vegetables and savory seasonings.",
          "• Chicken Mandu (₹330): Steamed or crispy fried dumplings packed with chicken meat and scallions.",
          "• Kimchi Jjigae with Rice (₹350): A hearty, nutrient-packed stew that keeps you energized through exam season."
        ]
      },
      {
        id: "easy-access-knowledge-park",
        heading: "Location & Commute from Knowledge Park & Pari Chowk",
        paragraphs: [
          "Sohee's Kitchen is conveniently located at First Floor, BB 28, Block B, Ansal Golf Link-1, just a quick 5-to-8-minute auto or cab ride from major campuses including Sharda University, Galgotias University, Bennett University, and NIET.",
          "It's an effortless hop from Pari Chowk Metro Station on the Aqua Line, making it easily accessible for commuters and hostelers alike."
        ]
      },
      {
        id: "group-hangouts",
        heading: "Hosting College Meetups & Birthday Celebrations",
        paragraphs: [
          "Looking for a unique venue for your friend's birthday or your society's weekend treat? Our cozy dining room offers warm lighting, friendly vibes, and food that looks incredible on Instagram and TikTok.",
          "Call us in advance at +91 9711722273 to reserve group tables or order party takeaway packs."
        ]
      }
    ],
    faqs: [
      {
        question: "How close is Sohee's Kitchen to Sharda and Galgotias University?",
        answer: "We are located in Ansal Golf Link-1, approximately 5-8 minutes away from Knowledge Park universities, right next to Pari Chowk."
      },
      {
        question: "Is there quick takeaway available for students between classes?",
        answer: "Yes, you can call us at +91 9711722273 to place your takeaway order ahead of time for swift pickup."
      }
    ],
    menuItems: STANDARD_MENU_ITEMS,
    relatedSlugs: ["top-korean-dishes-greater-noida", "korean-fried-chicken-greater-noida"]
  },

  {
    slug: "health-benefits-korean-food-kimchi",
    title: "Health Benefits of Korean Food: Fermentation, Kimchi & Gut Health | Sohee's Kitchen",
    metaDescription: "Explore the incredible health and wellness benefits of authentic Korean food. Learn how fermented Kimchi, probiotics, and balanced Korean meals support immunity and gut health.",
    category: "Health & Culture",
    publishedAt: "2026-08-22",
    readTime: "5 min read",
    author: {
      name: "Chef Sohee",
      role: "Head Chef & Founder",
      avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=150&auto=format&fit=crop&q=80",
    },
    coverImage: "https://images.unsplash.com/photo-1583032015879-bf659b8417c8?w=1200&auto=format&fit=crop&q=80",
    coverImageAlt: "Fermented Korean Kimchi and vibrant superfood side dishes promoting digestive health and wellness",
    seoKeywords: [
      "Health benefits of Korean food",
      "Fermented kimchi Greater Noida",
      "Probiotic Korean food Delhi NCR",
      "Healthy restaurants in Greater Noida",
      "Gut health superfoods",
      "Clean eating Greater Noida"
    ],
    keyTakeaways: [
      "Traditional Korean cuisine (Hansik) is recognized globally as one of the world's most nutritionally balanced diets.",
      "Naturally fermented Kimchi provides billions of gut-friendly Lactobacillus probiotics that enhance digestion and immunity.",
      "High concentration of bioactive ingredients: garlic, ginger, chili peppers (capsaicin), and nutrient-dense greens.",
      "Experience freshly prepared, unpasteurized artisan Kimchi at Sohee's Kitchen in Greater Noida."
    ],
    tableOfContents: [
      { id: "korean-diet-philosophy", title: "The Nutritional Philosophy of Korean Cuisine (Hansik)" },
      { id: "kimchi-powerhouse", title: "Fermented Kimchi: Nature's Ultimate Probiotic Superfood" },
      { id: "nutrient-dense-stews", title: "Healing Soups, Antioxidants & Metabolism Boosters" },
      { id: "healthy-eating-sohees", title: "How to Eat for Wellness at Sohee's Kitchen" }
    ],
    sections: [
      {
        id: "korean-diet-philosophy",
        heading: "The Nutritional Philosophy of Korean Cuisine (Hansik)",
        paragraphs: [
          "Traditional Korean dining revolves around the ancient concept of 'Yaksikdongwon'—the principle that food and medicine share the same origin. A proper Korean meal emphasizes colorful vegetables, lean proteins, and fermented condiments rather than heavy butter or excessive oils.",
          "Every dish is designed to restore balance in the body, promoting cardiovascular vitality, clear skin, and robust digestion."
        ],
        quote: "In Korea, food is preventative medicine. What you eat directly nourishes your spirit and bodily balance."
      },
      {
        id: "kimchi-powerhouse",
        heading: "Fermented Kimchi: Nature's Ultimate Probiotic Superfood",
        paragraphs: [
          "Kimchi, Korea's national dish made of fermented napa cabbage, radish, garlic, and red pepper, is widely celebrated by nutritionists as a probiotic powerhouse.",
          "During the natural fermentation process, beneficial lactic acid bacteria (Lactobacillus kimchii) flourish. These living microorganisms actively nourish the gut microbiome, enhance intestinal barrier strength, and help reduce systemic inflammation."
        ],
        highlightBox: "Did you know? A single serving of authentic fermented Kimchi contains billions of beneficial probiotic cultures, alongside rich doses of Vitamin A, Vitamin C, and fiber."
      },
      {
        id: "nutrient-dense-stews",
        heading: "Healing Soups, Antioxidants & Metabolism Boosters",
        paragraphs: [
          "Beyond Kimchi, dishes like Kimchi Jjigae deliver deep nourishment. Slow simmering extracts rich minerals, while garlic and scallions deliver potent allicin and sulfur compounds that support immune defense.",
          "Korean chili flakes (Gochugaru) contain capsaicin, a natural compound shown to gently stimulate metabolism and support healthy circulation without causing harsh acidity."
        ]
      },
      {
        id: "healthy-eating-sohees",
        heading: "How to Eat for Wellness at Sohee's Kitchen",
        paragraphs: [
          "At Sohee's Kitchen in Greater Noida, we take pride in preparing clean, nutritious food. We ferment our Kimchi in small batches with zero artificial preservatives, use fresh lean poultry, and pack our Kimbap rolls with crisp garden vegetables.",
          "Enjoy a restorative, healthy meal by visiting us at First Floor, BB 28, Block B, Ansal Golf Link-1, Greater Noida, or calling +91 9711722273."
        ]
      }
    ],
    faqs: [
      {
        question: "Is Kimchi vegetarian or vegan?",
        answer: "Traditional Kimchi can contain trace fish sauce or shrimp paste, but vegetarian options can be prepared upon request. Contact us at +91 9711722273 to inquire about customized dietary needs."
      },
      {
        question: "Does Sohee's Kitchen serve healthy options for fitness enthusiasts?",
        answer: "Yes! Dishes like Kimbap (vegetable rice rolls), Kimchi Jjigae (high-fiber probiotic stew), and steamed chicken Mandu provide excellent lean protein and clean energy."
      }
    ],
    menuItems: STANDARD_MENU_ITEMS,
    relatedSlugs: ["best-korean-restaurant-greater-noida", "top-korean-dishes-greater-noida"]
  },

  {
    slug: "korean-comfort-food-monsoon-winter-greater-noida",
    title: "Cozy Korean Comfort Food for Rainy & Chilly Days in Greater Noida | Sohee's Kitchen",
    metaDescription: "Warm up with piping-hot Kimchi Jjigae, spicy Tteokbokki, and sizzling Korean dishes at Sohee's Kitchen in Greater Noida during chilly evenings and rainy days.",
    category: "Culinary Guide",
    publishedAt: "2026-08-26",
    readTime: "5 min read",
    author: {
      name: "Chef Sohee",
      role: "Head Chef & Founder",
      avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=150&auto=format&fit=crop&q=80",
    },
    coverImage: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=1200&auto=format&fit=crop&q=80",
    coverImageAlt: "Steaming hot Korean stew and comforting soup served in traditional stone bowl on a rainy day in Greater Noida",
    seoKeywords: [
      "Korean comfort food Greater Noida",
      "Spicy Korean stew Noida",
      "Winter dining Greater Noida",
      "Best soup Pari Chowk",
      "Rainy day food Greater Noida",
      "Cozy restaurants near Jaypee Greens"
    ],
    keyTakeaways: [
      "Nothing warms the soul during Greater Noida's brisk winters or monsoon showers like piping-hot Korean stews.",
      "Featured comfort dish: Kimchi Jjigae (₹350), slow-simmered with aged kimchi, silky tofu, and aromatic chili broth.",
      "Pair with spicy Tteokbokki (₹240) and crispy fried Yam Yam Chicken (₹450) for the ultimate comforting feast.",
      "Cozy indoor dining in Ansal Golf Link-1 with convenient pickup and takeout."
    ],
    tableOfContents: [
      { id: "comfort-food-craving", title: "When the Weather Calls for Steaming Bowls of Comfort" },
      { id: "jjigae-tradition", title: "The Magic of Kimchi Jjigae: Korea's Ultimate Winter Stew" },
      { id: "warming-pairings", title: "Warm Side Dishes, Steamed Dumplings & Spicy Rice Cakes" },
      { id: "cozy-dining", title: "Visit Our Cozy Korean Oasis in Ansal Golf Links" }
    ],
    sections: [
      {
        id: "comfort-food-craving",
        heading: "When the Weather Calls for Steaming Bowls of Comfort",
        paragraphs: [
          "When chilly winter winds sweep through Greater Noida or sudden monsoon rains cool the city streets, typical dining out options can feel uninspiring. What you crave is deep, soul-soothing warmth: rich broth, fiery chili, and fragrant garlic.",
          "Korean culinary tradition is world-famous for its hearty stews (Jjigae) and sizzling street foods designed specifically to warm you from the inside out."
        ]
      },
      {
        id: "jjigae-tradition",
        heading: "The Magic of Kimchi Jjigae: Korea's Ultimate Winter Stew",
        paragraphs: [
          "At the heart of Korean winter comfort is Kimchi Jjigae (₹350). Prepared using fully fermented sour kimchi, this rich red stew is packed with soft tofu, scallions, and aromatics simmered to harmonious perfection.",
          "Served bubbling hot alongside a bowl of steaming white rice, each spoonful combines zesty acidity, savory richness, and a comforting heat that melts away the day's chill."
        ],
        quote: "A bubbling stone pot of Kimchi Jjigae on a cold winter night in Greater Noida is pure happiness in a bowl."
      },
      {
        id: "warming-pairings",
        heading: "Warm Side Dishes, Steamed Dumplings & Spicy Rice Cakes",
        paragraphs: [
          "Complete your comfort feast with these heartwarming selections:",
          "• Tteokbokki (₹240): Pillowy rice cakes bathed in thick, spicy-sweet glaze that brings instant energy.",
          "• Steamed Mandu (₹330): Plump, moist dumplings filled with seasoned chicken that burst with savory juice.",
          "• Yam Yam Fried Chicken (₹450): Crispy hot chicken glazed in Yangnyeom sauce that stays crunchy down to the last bite."
        ]
      },
      {
        id: "cozy-dining",
        heading: "Visit Our Cozy Korean Oasis in Ansal Golf Links",
        paragraphs: [
          "Escape the brisk weather inside Sohee's Kitchen. Our intimate, relaxed setting in Ansal Golf Link-1 offers the perfect respite for dates, friendly reunions, and family dinners.",
          "Visit us at First Floor, BB 28, Block B, Ansal Golf Link-1, Greater Noida, or call +91 9711722273 for reservations and hot takeout."
        ]
      }
    ],
    faqs: [
      {
        question: "Can I order hot Korean stews for home delivery or takeaway?",
        answer: "Yes, you can call us at +91 9711722273 to place takeaway orders securely packaged to maintain heat and freshness."
      },
      {
        question: "Is Kimchi Jjigae spicy?",
        answer: "Kimchi Jjigae has a moderate, invigorating chili heat from fermented gochugaru and aged kimchi, balanced with tender tofu and warm rice."
      }
    ],
    menuItems: STANDARD_MENU_ITEMS,
    relatedSlugs: ["best-korean-restaurant-greater-noida", "top-korean-dishes-greater-noida"]
  },

  {
    slug: "korean-spicy-noodles-ramyeon-greater-noida",
    title: "Spicy Korean Noodles & Authentic Ramyeon in Greater Noida | Sohee's Kitchen",
    metaDescription: "Craving authentic Korean spicy noodles and hot Ramyeon in Greater Noida? Savor steaming bowls cooked with kimchi, eggs, and rich broth at Sohee's Kitchen.",
    category: "Food & Recipes",
    publishedAt: "2026-08-30",
    readTime: "5 min read",
    author: {
      name: "Chef Sohee",
      role: "Head Chef & Founder",
      avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=150&auto=format&fit=crop&q=80",
    },
    coverImage: "https://images.unsplash.com/photo-1612927601601-6638404737ce?w=1200&auto=format&fit=crop&q=80",
    coverImageAlt: "Steaming hot bowl of authentic Korean Ramyeon spicy noodles with egg, scallions, and kimchi",
    seoKeywords: [
      "Korean noodles Greater Noida",
      "Spicy Ramyeon Greater Noida",
      "Authentic Korean ramen Noida",
      "Korean spicy food Pari Chowk",
      "Buldak style noodles Delhi NCR",
      "Best noodles near Knowledge Park"
    ],
    keyTakeaways: [
      "Authentic Korean Ramyeon is a beloved cultural obsession, celebrated for its springy noodles and fiery, umami broth.",
      "Prepared the traditional Seoul way: fast-simmered in golden nickel-brass pots with scallions, poached egg, and house-made kimchi.",
      "The ultimate comfort bowl for late evenings, monsoon showers, and study sessions near Knowledge Park.",
      "Pair with crispy Yam Yam Chicken (₹450) or savory Kimbap (₹250) for the iconic Korean street-food combo."
    ],
    tableOfContents: [
      { id: "ramyeon-culture", title: "Why Koreans Are Passionate About Ramyeon" },
      { id: "the-authentic-serve", title: "The Secret to the Perfect Springy Korean Noodle" },
      { id: "iconic-combos", title: "Bunsik Combos: Ramyeon, Kimbap & Fried Chicken" },
      { id: "satisfy-cravings", title: "Visit Sohee's Kitchen for Your Noodle Fix" }
    ],
    sections: [
      {
        id: "ramyeon-culture",
        heading: "Why Koreans Are Passionate About Ramyeon",
        paragraphs: [
          "In South Korea, Ramyeon is vastly different from typical instant ramen elsewhere. It is a deeply nostalgic comfort food, featured in almost every K-drama as a romantic icebreaker ('Do you want to eat Ramyeon before you go?') and late-night social ritual.",
          "Korean noodles are characterized by their signature yellow crinkly texture, intense chewiness (known as 'Ttaengttaenghada'), and deep chili-garlic seafood or beef-style broths that warm you to your core."
        ],
        quote: "There is no comfort quite like taking that first piping-hot slurp of spicy Korean noodles while listening to the sizzle of the kitchen."
      },
      {
        id: "the-authentic-serve",
        heading: "The Secret to the Perfect Springy Korean Noodle",
        paragraphs: [
          "At Sohee's Kitchen, we prepare noodles using precise thermal shocking—repeatedly lifting noodles into cool air during cooking to seal in maximum springiness and bounce.",
          "Simmered with aged Kimchi, fresh garlic, sliced red chilies, and a gently poached egg that enriches the broth into a velvety, spicy nectar, our Ramyeon delivers the exact sensation found in Seoul's university districts."
        ],
        highlightBox: "Pro Eating Tip: Slurping is encouraged! In Korean noodle culture, slurping cools the hot noodles while aerating the broth, enhancing its spicy, savory flavors."
      },
      {
        id: "iconic-combos",
        heading: "Bunsik Combos: Ramyeon, Kimbap & Fried Chicken",
        paragraphs: [
          "In Korean casual diners ('Bunsikjeom'), locals rarely eat noodles alone. They dip fresh vegetable Kimbap (₹250) directly into the spicy noodle broth, soaking up every drop of rich seasoning.",
          "Add our signature double-fried Yam Yam Fried Chicken (₹450) with honey-chili glaze, and you have an unforgettable feast for two in Greater Noida."
        ]
      },
      {
        id: "satisfy-cravings",
        heading: "Visit Sohee's Kitchen for Your Noodle Fix",
        paragraphs: [
          "Whether you are studying at Knowledge Park, living in Ansal Golf Links, or visiting Pari Chowk, our kitchen welcomes you with hot, energizing Korean noodle bowls.",
          "Find us at First Floor, BB 28, Block B, Ansal Golf Link-1, Greater Noida, or call +91 9711722273 for reservations."
        ]
      }
    ],
    faqs: [
      {
        question: "Can I adjust the spice level of Korean noodles at Sohee's Kitchen?",
        answer: "Yes, our team can tailor the heat level from mild warmth to authentic extra-spicy according to your preference."
      },
      {
        question: "Do you have vegetarian noodle options?",
        answer: "Yes! We can prepare vegetarian Korean noodle bowls with crisp vegetables, tofu, and rich vegetable broth upon request."
      }
    ],
    menuItems: STANDARD_MENU_ITEMS,
    relatedSlugs: ["top-korean-dishes-greater-noida", "student-hangout-korean-food-knowledge-park"]
  },

  {
    slug: "korean-dining-etiquette-table-manners",
    title: "Korean Dining Etiquette & Table Manners: A Complete Guide for Food Lovers | Sohee's Kitchen",
    metaDescription: "Learn authentic Korean dining etiquette, chopstick rules, and communal table manners. Master Korean food culture before your visit to Sohee's Kitchen Greater Noida.",
    category: "Culture & Dining",
    publishedAt: "2026-09-03",
    readTime: "6 min read",
    author: {
      name: "Chef Sohee",
      role: "Head Chef & Founder",
      avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=150&auto=format&fit=crop&q=80",
    },
    coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&auto=format&fit=crop&q=80",
    coverImageAlt: "Traditional Korean table setting with metal chopsticks, spoons, side dishes, and sharing bowls",
    seoKeywords: [
      "Korean dining etiquette",
      "Korean table manners",
      "how to eat Korean food",
      "Korean food culture Delhi NCR",
      "Korean chopstick rules",
      "Sohees Kitchen dining guide"
    ],
    keyTakeaways: [
      "Korean dining is rooted in 'Jeong' (warm affection and community bonding) and deep respect for dining companions.",
      "Never stick metal chopsticks vertically into a bowl of rice; place them horizontally across the bowl or on a rest.",
      "Use two hands when pouring or receiving drinks from elders or respected colleagues.",
      "Banchan (side dishes) are meant for everyone to share, fostering community around the table."
    ],
    tableOfContents: [
      { id: "korean-dining-spirit", title: "The Spirit of Jeong & Communal Dining" },
      { id: "chopstick-and-spoon", title: "Spoon vs. Chopstick: The Sujeo Tradition" },
      { id: "five-golden-rules", title: "5 Golden Rules of Korean Table Manners" },
      { id: "experience-korean-hospitality", title: "Experience Authentic Korean Hospitality in Greater Noida" }
    ],
    sections: [
      {
        id: "korean-dining-spirit",
        heading: "The Spirit of Jeong & Communal Dining",
        paragraphs: [
          "Unlike Western dining where each person orders an isolated individual plate, Korean dining is an interconnected communal experience. A centerpiece stew (Jjigae) or sizzling meat dish is placed in the center, surrounded by an array of colorful banchan (side dishes).",
          "This format reflects 'Jeong'—the Korean philosophy of mutual care, shared emotional bonding, and hospitality through food."
        ],
        quote: "Sharing a meal in Korean culture isn't just about nutrition; it is an act of welcoming another person into your inner circle."
      },
      {
        id: "chopstick-and-spoon",
        heading: "Spoon vs. Chopstick: The Sujeo Tradition",
        paragraphs: [
          "In Korea, cutlery is called 'Sujeo' (a portmanteau of Sutgarak for spoon and Jeotgarak for chopsticks), traditionally crafted from flat stainless steel.",
          "Unlike other East Asian cultures where chopsticks are used for rice, Koreans use the spoon exclusively for rice and soups, reserving chopsticks for dry side dishes and grilled meats."
        ]
      },
      {
        id: "five-golden-rules",
        heading: "5 Golden Rules of Korean Table Manners",
        paragraphs: [
          "1. Never stick chopsticks upright in rice: This resembles ancestral memorial incense (Jesa) and is considered unlucky. Always rest them horizontally on the table.",
          "2. Receive and offer with both hands: Using two hands (or placing your left hand supporting your right wrist) shows sincere politeness.",
          "3. Wait for the elders or hosts: Traditional etiquette suggests waiting for the senior diner to take the first bite before everyone begins.",
          "4. Don't lift your rice bowl off the table: In Korean customs, the bowl stays grounded on the table while you lift food with your spoon.",
          "5. Say 'Jal Meokgetseumnida' (I will eat well): Expressing gratitude before dining honors the chef, ingredients, and company."
        ],
        highlightBox: "Good to know: At Sohee's Kitchen in Greater Noida, we provide comfortable cutlery suited for beginners as well as traditional Sujeo for those seeking the full authentic experience."
      },
      {
        id: "experience-korean-hospitality",
        heading: "Experience Authentic Korean Hospitality in Greater Noida",
        paragraphs: [
          "Whether you are dining with Korean trade delegates, hosting family, or trying Korean dining for the first time, our friendly team is here to guide you through dishes, flavors, and pairings.",
          "Join us at First Floor, BB 28, Block B, Ansal Golf Link-1, Greater Noida. Reservations: +91 9711722273."
        ]
      }
    ],
    faqs: [
      {
        question: "Can beginners use regular forks and spoons at Sohee's Kitchen?",
        answer: "Yes, of course! While we offer authentic Korean metal chopsticks, we also provide standard forks and spoons for any guest who prefers them."
      },
      {
        question: "Is it rude to ask for refills of side dishes (banchan)?",
        answer: "Not at all! In Korean dining tradition, asking for extra banchan is a genuine compliment to the kitchen."
      }
    ],
    menuItems: STANDARD_MENU_ITEMS,
    relatedSlugs: ["korean-food-guide-first-timers", "best-korean-restaurant-greater-noida"]
  },

  {
    slug: "vegetarian-vegan-korean-food-greater-noida",
    title: "Vegetarian & Vegan Korean Food in Greater Noida: Delicious Plant-Based Guide | Sohee's Kitchen",
    metaDescription: "Discover delicious vegetarian and vegan Korean food in Greater Noida! From vegetable Kimbap to spicy Tteokbokki and tofu stews at Sohee's Kitchen, Ansal Golf Links.",
    category: "Dietary & Lifestyle",
    publishedAt: "2026-09-08",
    readTime: "5 min read",
    author: {
      name: "Chef Sohee",
      role: "Head Chef & Founder",
      avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=150&auto=format&fit=crop&q=80",
    },
    coverImage: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1200&auto=format&fit=crop&q=80",
    coverImageAlt: "Vibrant vegetarian Korean dishes with fresh vegetables, seasoned seaweed, tofu, and rice rolls in Greater Noida",
    seoKeywords: [
      "Vegetarian Korean food Greater Noida",
      "Vegan Korean food Noida",
      "Veg Tteokbokki Greater Noida",
      "Vegetarian Kimbap Pari Chowk",
      "Pure veg Korean dishes Delhi NCR",
      "Healthy plant based Korean dining"
    ],
    keyTakeaways: [
      "Korean cuisine has a rich centuries-old vegetarian heritage rooted in Buddhist temple cuisine (Sachal Eumsik).",
      "Vegetarian favorites at Sohee's Kitchen: Fresh Veg Kimbap (₹250), custom Veg Tteokbokki (₹240), and wholesome seasoned tofu.",
      "Prepared using fresh regional produce, toasted sesame oils, seaweed, and authentic fermented chili pastes.",
      "Clear ingredient transparency and dietary customization available upon request in Greater Noida."
    ],
    tableOfContents: [
      { id: "vegetarian-korean-roots", title: "The Buddhist Roots of Plant-Based Korean Cooking" },
      { id: "top-veg-dishes", title: "Top Vegetarian & Vegan Dishes at Sohee's Kitchen" },
      { id: "health-benefits-veg", title: "Health & Nutrition: Clean Plant-Forward Flavors" },
      { id: "plan-veg-visit", title: "Dine Vegetarian at Sohee's Kitchen Greater Noida" }
    ],
    sections: [
      {
        id: "vegetarian-korean-roots",
        heading: "The Buddhist Roots of Plant-Based Korean Cooking",
        paragraphs: [
          "There is a widespread myth that Korean food revolves solely around meat and barbecue. In reality, Korea has one of the world's most sophisticated plant-forward traditions, honed for over a millennium in Buddhist mountain monasteries.",
          "Temple cuisine celebrates the natural flavors of seasonal wild roots, medicinal herbs, mountain greens, soybean curds (Dubu), and deeply fermented seasonings with clean, wholesome energy."
        ],
        quote: "Korean cuisine honors the earth: seasonal vegetables, sesame oils, and seaweed create depth of umami without needing meat."
      },
      {
        id: "top-veg-dishes",
        heading: "Top Vegetarian & Vegan Dishes at Sohee's Kitchen",
        paragraphs: [
          "Vegetarian diners in Greater Noida can enjoy an exquisite Korean dining journey at Sohee's Kitchen:",
          "• Vegetable Kimbap (₹250): Seasoned sushi rice wrapped in toasted nori seaweed, stuffed with crisp cucumber, pickled radish (Danmuji), sweet braised carrots, and sesame oil.",
          "• Vegetarian Tteokbokki (₹240): Chewy artisanal rice cakes simmered in a 100% plant-based Gochujang chili glaze with cabbage and scallions.",
          "• Seasoned Dubu (Tofu) Delicacies: Silky or pan-seared tofu tossed in savory soy-garlic sauce.",
          "• Assorted Veg Banchan: Crisp pickled radishes, seasoned spinach (Sigeumchi Namul), and bean sprouts (Kongnamul)."
        ],
        highlightBox: "Dietary Note: Let our servers know if you follow a pure vegetarian or vegan diet—we are delighted to prepare your dishes without any shrimp paste or fish sauce."
      },
      {
        id: "health-benefits-veg",
        heading: "Health & Nutrition: Clean Plant-Forward Flavors",
        paragraphs: [
          "Plant-based Korean meals are inherently nutrient-dense, high in dietary fiber, low in saturated fats, and rich in phytonutrients.",
          "Fermented pastes provide natural digestive enzymes and probiotics, leaving you feeling light, clean, and energized after your meal."
        ]
      },
      {
        id: "plan-veg-visit",
        heading: "Dine Vegetarian at Sohee's Kitchen Greater Noida",
        paragraphs: [
          "Located at First Floor, BB 28, Block B, Ansal Golf Link-1, Greater Noida, Sohee's Kitchen welcomes plant-based food lovers from across Noida and Delhi NCR.",
          "For custom orders or party reservations, reach us at +91 9711722273."
        ]
      }
    ],
    faqs: [
      {
        question: "Can I get pure vegetarian Tteokbokki at Sohee's Kitchen?",
        answer: "Yes! Simply request pure vegetarian preparation, and we cook your rice cakes in a 100% plant-based savory broth without fish cakes."
      },
      {
        question: "Is Kimbap suitable for vegans?",
        answer: "Our vegetable Kimbap roll is naturally vegan, loaded with crisp fresh vegetables, seasoned sushi rice, toasted seaweed, and pure sesame oil."
      }
    ],
    menuItems: [
      {
        name: "Vegetable Kimbap",
        description: "Fresh vegetable Korean seaweed rice roll with pickled radish and sesame oil",
        price: "250",
      },
      {
        name: "Vegetarian Tteokbokki",
        description: "Chewy rice cakes simmered in plant-based spicy-sweet chili glaze",
        price: "240",
      }
    ],
    relatedSlugs: ["top-korean-dishes-greater-noida", "health-benefits-korean-food-kimchi"]
  },

  {
    slug: "korean-cafe-culture-desserts-vibes-greater-noida",
    title: "Aesthetic Korean Cafe Culture & Cozy Hangout Vibes in Greater Noida | Sohee's Kitchen",
    metaDescription: "Discover aesthetic Korean cafe culture in Greater Noida at Sohee's Kitchen. Cozy ambiance, warm lighting, delicious Korean bites, and tranquil vibes in Ansal Golf Links.",
    category: "Lifestyle & Dining",
    publishedAt: "2026-09-12",
    readTime: "4 min read",
    author: {
      name: "Sohee's Kitchen Team",
      role: "Culinary Team",
      avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=150&auto=format&fit=crop&q=80",
    },
    coverImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&auto=format&fit=crop&q=80",
    coverImageAlt: "Aesthetic cafe interior with warm lighting, cozy wooden decor, and tranquil dining ambiance in Greater Noida",
    seoKeywords: [
      "Korean cafe Greater Noida",
      "Aesthetic cafes Pari Chowk",
      "Cozy food spots Greater Noida",
      "Date night restaurants Greater Noida",
      "Instagrammable food places Noida",
      "Quiet cafes near Knowledge Park"
    ],
    keyTakeaways: [
      "Seoul's famous cafe culture blends minimalist interior design, cozy warmth, and thoughtful comfort foods.",
      "Sohee's Kitchen in Ansal Golf Link-1 offers a peaceful sanctuary away from traffic and crowded mall food courts.",
      "Ideal setting for romantic dinner dates, creative freelancing, and intimate conversations.",
      "Conveniently situated right near Pari Chowk and Knowledge Park."
    ],
    tableOfContents: [
      { id: "seoul-cafe-craze", title: "The Allure of Korean Cafe Culture" },
      { id: "the-ambiance", title: "Atmosphere & Design at Sohee's Kitchen" },
      { id: "dates-and-hangouts", title: "The Perfect Setting for Dates & Catch-Ups" },
      { id: "how-to-visit", title: "Plan Your Visit to Sohee's Kitchen" }
    ],
    sections: [
      {
        id: "seoul-cafe-craze",
        heading: "The Allure of Korean Cafe Culture",
        paragraphs: [
          "In South Korea, cafes and intimate dining nooks are an extension of the living room—peaceful, aesthetic retreats designed for unwinding, heartfelt talks, and mindful enjoyment.",
          "At Sohee's Kitchen, we captured this exact serene spirit right here in Greater Noida, creating an inviting space where time slows down and delicious food takes center stage."
        ]
      },
      {
        id: "the-ambiance",
        heading: "Atmosphere & Design at Sohee's Kitchen",
        paragraphs: [
          "Located on the First Floor of BB 28 in Ansal Golf Link-1, our space combines warm ambient illumination, clean modern lines, and authentic Korean hospitality.",
          "Soft background tunes, comfortable seating, and photogenic presentation make every visit feel like a weekend getaway to Seoul's Yeonnam-dong neighborhood."
        ],
        quote: "Great food tastes even better in a space designed with warmth, calm, and genuine hospitality."
      },
      {
        id: "dates-and-hangouts",
        heading: "The Perfect Setting for Dates & Catch-Ups",
        paragraphs: [
          "Tired of noisy, generic fast food joints? Sohee's Kitchen offers an intimate, memorable backdrop for first dates, anniversaries, and quality catch-ups with friends.",
          "Share steaming dumplings (₹330), crispy Yangnyeom chicken (₹450), and warm bowls of Kimchi Jjigae (₹350) while creating lasting memories."
        ]
      },
      {
        id: "how-to-visit",
        heading: "Plan Your Visit to Sohee's Kitchen",
        paragraphs: [
          "We are located at First Floor, BB 28, Block B, Ansal Golf Link-1, Greater Noida (UP 201315).",
          "For romantic table reservations or quiet corner seating, call us directly at +91 9711722273."
        ]
      }
    ],
    faqs: [
      {
        question: "Is Sohee's Kitchen good for a romantic date in Greater Noida?",
        answer: "Yes! The cozy lighting, attentive service, and unique Korean sharing dishes make it one of the top hidden gems for dates near Pari Chowk."
      },
      {
        question: "Can I reserve a table for special celebrations?",
        answer: "Absolutely. Call us at +91 9711722273 and our team will be delighted to prepare a special table for your celebration."
      }
    ],
    menuItems: STANDARD_MENU_ITEMS,
    relatedSlugs: ["where-to-eat-greater-noida", "best-korean-restaurant-greater-noida"]
  },

  {
    slug: "korean-street-food-market-guide-greater-noida",
    title: "Seoul to Greater Noida: Ultimate Korean Street Food & Pocha Guide | Sohee's Kitchen",
    metaDescription: "Experience Seoul's famous street food in Greater Noida! From spicy Tteokbokki and Mandu to Yangnyeom chicken burgers at Sohee's Kitchen in Ansal Golf Links.",
    category: "Food & Recipes",
    publishedAt: "2026-09-16",
    readTime: "5 min read",
    author: {
      name: "Chef Sohee",
      role: "Head Chef & Founder",
      avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=150&auto=format&fit=crop&q=80",
    },
    coverImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&auto=format&fit=crop&q=80",
    coverImageAlt: "Night market Korean street food cart with steaming hot Tteokbokki, golden fried skewers, and dumplings",
    seoKeywords: [
      "Korean street food Greater Noida",
      "Seoul pocha Greater Noida",
      "Korean snacks Pari Chowk",
      "Tteokbokki and Mandu Greater Noida",
      "Authentic Korean street snacks",
      "Asian street food Delhi NCR"
    ],
    keyTakeaways: [
      "Korean street food (Bunsik / Pocha) is a global culinary sensation famous for bold red chili glazes and satisfying textures.",
      "Enjoy authentic Seoul street favorites in Greater Noida: Tteokbokki (₹240), Mandu (₹330), and Kimbap (₹250).",
      "All snacks prepared fresh to order using traditional street vendor techniques and authentic spices.",
      "Quick dine-in or convenient takeout available right at Ansal Golf Link-1."
    ],
    tableOfContents: [
      { id: "pocha-phenomenon", title: "The Magic of Korea's Street Food & Pojangmacha Culture" },
      { id: "street-food-stars", title: "The Holy Trinity of Korean Street Food" },
      { id: "fusion-favorites", title: "Crispy Korean Chicken Burgers & Finger Foods" },
      { id: "taste-the-streets", title: "Taste Authentic Korean Street Food in Greater Noida" }
    ],
    sections: [
      {
        id: "pocha-phenomenon",
        heading: "The Magic of Korea's Street Food & Pojangmacha Culture",
        paragraphs: [
          "Anyone who has walked the neon-lit alleys of Seoul's Myeongdong or Hongdae remembers the irresistible aromas rising from 'Pojangmacha' (tented street stalls).",
          "Crowds gather around large simmering pans of fiery crimson Tteokbokki, giant steamers of plump dumplings, and sizzling fryers. At Sohee's Kitchen in Greater Noida, we bring those exact street-cart sensations to life with pristine hygiene and authentic flavor."
        ],
        quote: "Street food is the true heartbeat of Korean cuisine—bold, spicy, unpretentious, and unforgettable."
      },
      {
        id: "street-food-stars",
        heading: "The Holy Trinity of Korean Street Food",
        paragraphs: [
          "Korean street food enthusiasts live by three golden staples:",
          "1. Tteokbokki (₹240): Silky cylindrical rice cakes swimming in a bubbling, spicy-sweet glaze made from fermented red pepper paste and aromatics.",
          "2. Mandu (₹330): Steamed or pan-fried chicken dumplings bursting with juicy chicken mince, scallions, and ginger.",
          "3. Kimbap (₹250): Portable seasoned rice rolls packed with colorful, crunchy pickled vegetables and wrapped in crisp toasted nori."
        ],
        highlightBox: "Street Vendor Secret: Dip your crispy fried Mandu directly into the leftover spicy Tteokbokki sauce—this is how Seoul locals eat their street snacks!"
      },
      {
        id: "fusion-favorites",
        heading: "Crispy Korean Chicken Burgers & Finger Foods",
        paragraphs: [
          "Looking for modern Korean comfort food? Try our Yam Yam Chicken Burger (₹390)—featuring a crunchy double-fried chicken fillet glazed in sweet-garlic Yangnyeom sauce on a soft toasted bun.",
          "It's the ultimate fusion treat for food lovers seeking high crunch and bold Asian flavor."
        ]
      },
      {
        id: "taste-the-streets",
        heading: "Taste Authentic Korean Street Food in Greater Noida",
        paragraphs: [
          "Satisfy your K-drama street food cravings today at Sohee's Kitchen, located at First Floor, BB 28, Block B, Ansal Golf Link-1, Greater Noida.",
          "Order takeaway or reserve your table by calling +91 9711722273."
        ]
      }
    ],
    faqs: [
      {
        question: "Is Korean street food very spicy?",
        answer: "Dishes like Tteokbokki have a noticeable, spicy kick balanced by natural sweetness. Dishes like Kimbap and steamed Mandu are mild and savory."
      },
      {
        question: "Can I grab street snacks for fast takeaway?",
        answer: "Yes! Call us at +91 9711722273 for quick street food takeout packed hot and ready for pickup."
      }
    ],
    menuItems: STANDARD_MENU_ITEMS,
    relatedSlugs: ["student-hangout-korean-food-knowledge-park", "korean-fried-chicken-greater-noida"]
  },

  {
    slug: "korean-food-delivery-takeaway-greater-noida",
    title: "Authentic Korean Food Delivery & Takeaway in Greater Noida | Sohee's Kitchen",
    metaDescription: "Order piping-hot authentic Korean food delivery and takeaway in Greater Noida! Enjoy crispy fried chicken, spicy Tteokbokki, and kimchi stews at home or office.",
    category: "Local Dining",
    publishedAt: "2026-09-20",
    readTime: "4 min read",
    author: {
      name: "Sohee's Kitchen Team",
      role: "Culinary Team",
      avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=150&auto=format&fit=crop&q=80",
    },
    coverImage: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=1200&auto=format&fit=crop&q=80",
    coverImageAlt: "Freshly packed hot Korean food takeaway boxes with fried chicken, rice rolls, and side dishes in Greater Noida",
    seoKeywords: [
      "Korean food delivery Greater Noida",
      "Order Korean food online Greater Noida",
      "Korean takeaway Pari Chowk",
      "Korean food delivery Alpha Beta Gamma Greater Noida",
      "Kimchi delivery Noida",
      "Best food delivery Knowledge Park"
    ],
    keyTakeaways: [
      "Piping-hot authentic Korean home cooking delivered directly to your doorstep in Greater Noida.",
      "Serves Ansal Golf Links, Pari Chowk, Knowledge Park (colleges & hostels), Jaypee Greens, and Alpha/Beta/Gamma sectors.",
      "Custom leak-proof, heat-retentive packaging designed specifically for crispy chicken, hot stews, and fresh Kimbap.",
      "Call or WhatsApp +91 9711722273 for direct takeaway orders and quick pickup."
    ],
    tableOfContents: [
      { id: "korean-craving-home", title: "Craving Authentic Korean at Home or Dorm?" },
      { id: "popular-takeaway-items", title: "Top Delivery & Takeaway Dishes" },
      { id: "delivery-zones", title: "Delivery Coverage Across Greater Noida" },
      { id: "how-to-order-delivery", title: "How to Place Your Takeaway Order" }
    ],
    sections: [
      {
        id: "korean-craving-home",
        heading: "Craving Authentic Korean at Home or Dorm?",
        paragraphs: [
          "Whether you are having a relaxed weekend K-drama movie night, working late at your corporate office, or studying for exams in your Knowledge Park hostel, nothing satisfies hunger like piping-hot Korean comfort food.",
          "At Sohee's Kitchen, we ensure that our food travels just as deliciously as it tastes inside our restaurant, using specialized containers that preserve crunch, heat, and freshness."
        ],
        quote: "You don't need to step out into traffic to savor authentic Seoul flavors—we pack the warmth and crunch right to your door."
      },
      {
        id: "popular-takeaway-items",
        heading: "Top Delivery & Takeaway Dishes",
        paragraphs: [
          "Our takeaway menu highlights customer favorites that retain their texture during transit:",
          "• Yam Yam Fried Chicken (₹450): Double-fried boneless chicken in ventilated boxes so the crust stays crunchy, paired with sticky Yangnyeom sauce.",
          "• Fresh Kimbap (₹250): Neatly wrapped vegetable rice rolls sliced into easy, mess-free bite-sized pieces.",
          "• Tteokbokki (₹240): Chewy rice cakes packed with rich, spicy-sweet chili sauce sealed tightly against leaks.",
          "• Kimchi Jjigae (₹350): Insulated container keeping your rich, probiotic kimchi stew steaming hot."
        ],
        highlightBox: "Packaging Guarantee: We separate wet sauces and crispy components whenever needed so your chicken stays shatteringly crisp!"
      },
      {
        id: "delivery-zones",
        heading: "Delivery Coverage Across Greater Noida",
        paragraphs: [
          "We cater to key Greater Noida residential and academic sectors:",
          "• Ansal Golf Link-1 & 2 (Immediate neighbor pickup & fast delivery)",
          "• Pari Chowk & Knowledge Park 1, 2, 3 (Universities, hostels, student housing)",
          "• Jaypee Greens, Godrej Golf Links, Swarna Nagari",
          "• Sector Alpha 1 & 2, Beta 1 & 2, Gamma, and Delta"
        ]
      },
      {
        id: "how-to-order-delivery",
        heading: "How to Place Your Takeaway Order",
        paragraphs: [
          "Simply give us a call at +91 9711722273. Tell us your favorite dishes, and our kitchen team will have your order freshly cooked and packed for instant collection or dispatch.",
          "Pickup location: First Floor, BB 28, Block B, Ansal Golf Link-1, Greater Noida."
        ]
      }
    ],
    faqs: [
      {
        question: "How long does takeaway preparation take at Sohee's Kitchen?",
        answer: "Most orders are freshly prepared and ready for pickup within 15 to 25 minutes. Call +91 9711722273 ahead of time for zero wait."
      },
      {
        question: "Do you deliver to student hostels in Knowledge Park?",
        answer: "Yes, we regularly cater to students across Knowledge Park hostels and dorms near Pari Chowk."
      }
    ],
    menuItems: STANDARD_MENU_ITEMS,
    relatedSlugs: ["student-hangout-korean-food-knowledge-park", "korean-fried-chicken-greater-noida"]
  },

  {
    slug: "korean-fried-chicken-vs-regular-fried-chicken",
    title: "Korean Fried Chicken vs Regular Fried Chicken: Why KFC Wins | Sohee's Kitchen",
    metaDescription: "Discover why Korean Fried Chicken (KFC) is crunchier, lighter, and more flavorful than American fried chicken. The secrets of double frying at Sohee's Kitchen Greater Noida.",
    category: "Food & Recipes",
    publishedAt: "2026-09-24",
    readTime: "5 min read",
    author: {
      name: "Chef Sohee",
      role: "Head Chef & Founder",
      avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=150&auto=format&fit=crop&q=80",
    },
    coverImage: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=1200&auto=format&fit=crop&q=80",
    coverImageAlt: "Ultra-crispy Korean fried chicken coated in glossy sweet and spicy red Yangnyeom sauce",
    seoKeywords: [
      "Korean fried chicken vs American",
      "Why Korean fried chicken is better",
      "Crispy Yangnyeom chicken Greater Noida",
      "Secret to Korean fried chicken",
      "Best chicken wings Greater Noida",
      "Double fried chicken technique"
    ],
    keyTakeaways: [
      "Korean Fried Chicken uses an ultra-thin cornstarch/potato crust instead of thick, doughy wheat flour batter.",
      "The two-stage double frying process completely renders out subcutaneous fat, creating paper-thin glass-like crunch.",
      "Coated in handcrafted sauces like Yangnyeom (garlic, soy, honey, gochujang) without ever getting soggy.",
      "Experience authentic Yam Yam Fried Chicken (₹450) at Sohee's Kitchen in Ansal Golf Link-1, Greater Noida."
    ],
    tableOfContents: [
      { id: "the-crunch-showdown", title: "The Great Fried Chicken Showdown" },
      { id: "secret-double-fry", title: "The Science of the Double-Fry Method" },
      { id: "the-sauce-mastery", title: "Sauce Mastery: The Magic of Yangnyeom" },
      { id: "taste-real-kfc", title: "Taste the Real Thing in Greater Noida" }
    ],
    sections: [
      {
        id: "the-crunch-showdown",
        heading: "The Great Fried Chicken Showdown",
        paragraphs: [
          "Fried chicken exists across every continent, but South Korea revolutionized it into a global culinary art form. Diners everywhere are abandoning thick, greasy fast-food chicken in favor of Korean Fried Chicken ('Chikin').",
          "What makes Korean fried chicken distinctly superior? It comes down to crust thickness, fat rendering, and glaze chemistry."
        ],
        quote: "Traditional fried chicken has a heavy crust that gets soggy in minutes. Korean fried chicken has an eggshell-thin crust that stays crunchy for hours."
      },
      {
        id: "secret-double-fry",
        heading: "The Science of the Double-Fry Method",
        paragraphs: [
          "Standard American fried chicken is dipped in buttermilk, coated in seasoned all-purpose flour, and fried once at high heat. This often creates a heavy, bready crust that absorbs excess cooking oil.",
          "Korean fried chicken utilizes a light potato and cornstarch dusting. It is fried first at moderate temperature to cook the tender meat and render out subcutaneous fat, rested for several minutes to allow moisture to escape, and flash-fried a second time at high temperature.",
          "This second fry transforms the remaining starch matrix into a shatteringly crisp, paper-thin shell that never feels oily."
        ],
        highlightBox: "Did you know? In South Korea, there are over 87,000 fried chicken establishments—more than all McDonald's outlets worldwide combined!"
      },
      {
        id: "the-sauce-mastery",
        heading: "Sauce Mastery: The Magic of Yangnyeom",
        paragraphs: [
          "After frying, standard chicken is served dry with dipping pots. In Korea, chicken is wok-tossed in a hot, sticky glaze called Yangnyeom—blending fermented Gochujang, garlic, ginger, soy sauce, and honey.",
          "Because the crust is completely rendered and non-porous, the glaze clings intimately to every crevice without softening the crunch underneath."
        ]
      },
      {
        id: "taste-real-kfc",
        heading: "Taste the Real Thing in Greater Noida",
        paragraphs: [
          "At Sohee's Kitchen, our Yam Yam Fried Chicken (₹450) is prepared with strict adherence to this double-fry tradition using 100% tender boneless chicken.",
          "Visit us at First Floor, BB 28, Block B, Ansal Golf Link-1, Greater Noida, or call +91 9711722273 for fresh orders."
        ]
      }
    ],
    faqs: [
      {
        question: "Is Korean fried chicken boneless at Sohee's Kitchen?",
        answer: "Yes, our signature Yam Yam Fried Chicken is prepared using juicy, tender boneless chicken pieces for easy, mess-free dining."
      },
      {
        question: "What is the best side to eat with Korean fried chicken?",
        answer: "Pickled white radish (Danmuji) and spicy Tteokbokki (₹240) are the classic Korean pairings that cleanse the palate and enhance the crunch."
      }
    ],
    menuItems: [
      {
        name: "Yam Yam Fried Chicken",
        description: "Boneless double-fried chicken stir-fried with special Yangnyeom garlic-honey sauce",
        price: "450",
      },
      {
        name: "Yam Yam Chicken Burger",
        description: "Crispy fried chicken patty with our special Yangnyeom glaze on soft bun",
        price: "390",
      }
    ],
    relatedSlugs: ["korean-fried-chicken-greater-noida", "top-korean-dishes-greater-noida"]
  },

  {
    slug: "corporate-catering-events-korean-food-greater-noida",
    title: "Corporate Event Catering & Group Dining: Korean Food in Greater Noida | Sohee's Kitchen",
    metaDescription: "Elevate your corporate events, meetings, and trade shows with authentic Korean catering in Greater Noida. Bento boxes, team lunches, and event dining near India Expo Mart.",
    category: "Events & Corporate",
    publishedAt: "2026-09-28",
    readTime: "5 min read",
    author: {
      name: "Sohee's Kitchen Team",
      role: "Culinary Team",
      avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=150&auto=format&fit=crop&q=80",
    },
    coverImage: "https://images.unsplash.com/photo-1555244162-803834f70033?w=1200&auto=format&fit=crop&q=80",
    coverImageAlt: "Premium corporate event catering with Korean lunch boxes and sharing platters in Greater Noida",
    seoKeywords: [
      "Corporate catering Greater Noida",
      "Office party food Greater Noida",
      "India Expo Mart event catering",
      "Korean group lunch Greater Noida",
      "Corporate dinner Pari Chowk",
      "Exhibition food Greater Noida"
    ],
    keyTakeaways: [
      "Sophisticated Korean catering solutions for trade exhibitions, corporate conferences, and company milestones in Greater Noida.",
      "Customizable Korean Dosirak (bento meal boxes) packed with chicken, savory rice rolls, and traditional banchan.",
      "Conveniently positioned near India Expo Mart and Knowledge Park tech parks.",
      "Dedicated corporate booking assistance, GST invoicing, and flexible delivery schedules."
    ],
    tableOfContents: [
      { id: "corporate-dining-need", title: "Move Beyond Predictable Corporate Buffets" },
      { id: "dosirak-boxes", title: "The Elegance of Korean Dosirak (Meal Boxes)" },
      { id: "event-partnerships", title: "Catering for India Expo Mart Exhibitors & Teams" },
      { id: "book-corporate", title: "How to Book Catering with Sohee's Kitchen" }
    ],
    sections: [
      {
        id: "corporate-dining-need",
        heading: "Move Beyond Predictable Corporate Buffets",
        paragraphs: [
          "Corporate event organizers and HR managers in Greater Noida know that memorable food directly influences the success of business gatherings and team satisfaction. Typical catering often feels repetitive and heavy.",
          "Authentic Korean cuisine brings vibrant energy, colorful visual elegance, and refreshing umami balance that delights both local teams and international executives."
        ]
      },
      {
        id: "dosirak-boxes",
        heading: "The Elegance of Korean Dosirak (Meal Boxes)",
        paragraphs: [
          "In Korea, 'Dosirak' represents the ultimate balanced meal box. Every box features a harmonious distribution of protein, carbohydrates, and fermented vegetables.",
          "We offer customized event boxes featuring crispy Yam Yam Chicken, fresh vegetable Kimbap, Mandu dumplings, rice, and crisp kimchi, neatly divided in eco-friendly, premium compartments."
        ],
        highlightBox: "Stress-Free Logistics: Each meal box is labeled clearly with vegetarian and non-vegetarian indicators for swift, effortless distribution during business lunches."
      },
      {
        id: "event-partnerships",
        heading: "Catering for India Expo Mart Exhibitors & Teams",
        paragraphs: [
          "With major international summits, trade expos, and industrial conventions taking place at India Expo Mart throughout the year, our kitchen in Ansal Golf Link-1 is primed to serve exhibitors and delegations.",
          "We also partner closely with Sandane Homes to offer combined corporate stay-and-dine packages for overseas visitors.",
          "Enjoy seamless group reservations or order bulk hot meal drops delivered directly to your exhibition booth or hotel suite."
        ]
      },
      {
        id: "book-corporate",
        heading: "How to Book Catering with Sohee's Kitchen",
        paragraphs: [
          "We cater to groups of 10 to 100+ guests. To discuss your menu requirements, dietary preferences, and delivery schedules, contact our catering manager directly.",
          "• Phone: +91 9711722273",
          "• Email: soheeskitchen@gmail.com",
          "• Address: First Floor, BB 28, Block B, Ansal Golf Link-1, Greater Noida"
        ]
      }
    ],
    faqs: [
      {
        question: "How far in advance should we book corporate catering?",
        answer: "For meal box orders of 15+ guests, we recommend booking 24 to 48 hours in advance to guarantee fresh ingredient sourcing and punctual delivery."
      },
      {
        question: "Do you provide official GST invoices for corporate reimbursements?",
        answer: "Yes, we provide complete tax invoices with GST details for corporate expense processing."
      }
    ],
    menuItems: STANDARD_MENU_ITEMS,
    relatedSlugs: ["korean-food-near-india-expo-mart", "where-to-eat-greater-noida"]
  },

  {
    slug: "k-drama-foods-explained-what-are-they-eating",
    title: "Every K-Drama Food Explained: What Are They Actually Eating? | Sohee's Kitchen",
    metaDescription: "Ever wondered what Korean dishes your favorite K-drama actors are eating? From Tteokbokki to Jjigae and Chimaek, decode the food scenes at Sohee's Kitchen Greater Noida.",
    category: "Culture & Dining",
    publishedAt: "2026-10-02",
    readTime: "6 min read",
    author: {
      name: "Chef Sohee",
      role: "Head Chef & Founder",
      avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=150&auto=format&fit=crop&q=80",
    },
    coverImage: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=1200&auto=format&fit=crop&q=80",
    coverImageAlt: "Vibrant Korean dinner table spread with dishes popularized in beloved Korean television dramas",
    seoKeywords: [
      "K drama foods explained",
      "What do they eat in K dramas",
      "Korean food in movies",
      "Tteokbokki K drama meaning",
      "Korean food guide Greater Noida",
      "Crash Landing on You food"
    ],
    keyTakeaways: [
      "K-dramas use food as a storytelling metaphor for romance, healing, social status, and reconciliation.",
      "Tteokbokki represents comfort and unpretentious childhood nostalgia during emotional scenes.",
      "Chimaek (fried chicken and beer) is the universal symbol of camaraderie, unwinding, and romance.",
      "Taste every single iconic K-drama dish right here in Greater Noida at Sohee's Kitchen."
    ],
    tableOfContents: [
      { id: "kdrama-food-symbolism", title: "Why Food Is the Real Star of Korean Dramas" },
      { id: "five-kdrama-dishes", title: "5 Iconic Dishes Seen in Every Popular K-Drama" },
      { id: "the-comfort-scenes", title: "Why Characters Eat Spicy Food When Heartbroken" },
      { id: "recreate-scenes", title: "Live Your K-Drama Food Fantasy at Sohee's Kitchen" }
    ],
    sections: [
      {
        id: "kdrama-food-symbolism",
        heading: "Why Food Is the Real Star of Korean Dramas",
        paragraphs: [
          "Watch any Korean drama—from 'Crash Landing on You' and 'Guardian: The Lonely and Great God' to 'Extraordinary Attorney Woo'—and you will notice food is never just an afterthought. Characters bond over street-stall food, share emotional conversations over bubbling stews, and find comfort in meals.",
          "In Korean society, asking 'Bap meogeosseoyo?' (Have you eaten?) is the equivalent of asking 'How are you?'. Food is care, love, and community."
        ],
        quote: "In Korean dramas, sharing a meal marks the precise moment strangers become lifelong companions."
      },
      {
        id: "five-kdrama-dishes",
        heading: "5 Iconic Dishes Seen in Every Popular K-Drama",
        paragraphs: [
          "Here are the meals you see on screen, decoded:",
          "1. Tteokbokki: The fiery red rice cakes eaten by main leads at street stalls when feeling overwhelmed or celebrating small victories.",
          "2. Chimaek (Fried Chicken): The classic Friday night unwind—crispy golden chicken glazed in sweet Yangnyeom sauce.",
          "3. Kimbap: The beloved comfort roll featured centrally in 'Extraordinary Attorney Woo', beloved for its neat circular slices and balanced fillings.",
          "4. Kimchi Jjigae: The steamy red stew mothers and grandmothers serve when a character needs emotional healing.",
          "5. Mandu: Savory dumplings shared between family members, representing warmth and harmony."
        ]
      },
      {
        id: "the-comfort-scenes",
        heading: "Why Characters Eat Spicy Food When Heartbroken",
        paragraphs: [
          "Notice how characters immediately order fiery spicy Tteokbokki or hot stews after a breakup or tough work day? In Korea, this concept is called 'Maeun Eumsik-euro Seuteureseu Pulgi' (releasing stress through spicy food).",
          "The endorphin rush from spicy capsaicin combined with savory garlic clears the mind and revitalizes the spirit."
        ],
        highlightBox: "Fun Fact: The term 'Chimaek' is a portmanteau of 'Chikin' (chicken) and 'Maekju' (beer), and even inspired official summer festivals in South Korea!"
      },
      {
        id: "recreate-scenes",
        heading: "Live Your K-Drama Food Fantasy at Sohee's Kitchen",
        paragraphs: [
          "You don't need a flight to Seoul to taste what your favorite characters are enjoying. Step into Sohee's Kitchen in Greater Noida and order the authentic versions of every dish.",
          "Visit us at First Floor, BB 28, Block B, Ansal Golf Link-1, Greater Noida, or call +91 9711722273."
        ]
      }
    ],
    faqs: [
      {
        question: "Can I try all these K-drama dishes at Sohee's Kitchen?",
        answer: "Yes! Our menu features Tteokbokki (₹240), Yam Yam Fried Chicken (₹450), Kimbap (₹250), Kimchi Jjigae (₹350), and Mandu (₹330) prepared according to authentic Korean recipes."
      },
      {
        question: "Is Sohee's Kitchen a good place for K-pop and K-drama fans to meet?",
        answer: "Yes, our restaurant is a favorite gathering spot for Korean pop culture enthusiasts across Greater Noida and Delhi NCR."
      }
    ],
    menuItems: STANDARD_MENU_ITEMS,
    relatedSlugs: ["student-hangout-korean-food-knowledge-park", "top-korean-dishes-greater-noida"]
  },

  {
    slug: "korean-pork-dishes-jeyuk-bokkeum-greater-noida",
    title: "Authentic Korean Pork Dishes in Greater Noida: Sizzling Jeyuk Bokkeum Guide | Sohee's Kitchen",
    metaDescription: "Savor authentic Korean pork dishes in Greater Noida! Experience sizzling spicy Jeyuk Bokkeum stir-fried in Gochujang and garlic at Sohee's Kitchen Ansal Golf Links.",
    category: "Culinary Guide",
    publishedAt: "2026-10-06",
    readTime: "5 min read",
    author: {
      name: "Chef Sohee",
      role: "Head Chef & Founder",
      avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=150&auto=format&fit=crop&q=80",
    },
    coverImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&auto=format&fit=crop&q=80",
    coverImageAlt: "Sizzling spicy Korean Jeyuk Bokkeum pork stir-fry served with sesame seeds and fresh scallions",
    seoKeywords: [
      "Korean pork dishes Greater Noida",
      "Jeyuk Bokkeum Noida",
      "Spicy pork belly Greater Noida",
      "Authentic Korean pork Delhi NCR",
      "Non veg Korean restaurant Greater Noida",
      "Korean BBQ pork Pari Chowk"
    ],
    keyTakeaways: [
      "Pork holds an essential place in authentic Korean gastronomy, celebrated for its rich marbling and tenderness.",
      "Featured specialty at Sohee's Kitchen: Jeyuk Bokkeum (₹450)—tender pork marinated in spicy Gochujang and flash wok-seared.",
      "Perfect balance of sweet, savory, and smoky flavors garnished with toasted sesame and green scallions.",
      "Enjoyed with steaming white rice or wrapped inside crisp lettuce leaves with garlic and ssamjang."
    ],
    tableOfContents: [
      { id: "pork-in-korean-cuisine", title: "The Heritage of Pork in Korean Culinary Tradition" },
      { id: "what-is-jeyuk-bokkeum", title: "What Makes Jeyuk Bokkeum So Irresistible?" },
      { id: "how-to-enjoy-pork", title: "The Best Ways to Enjoy Sizzling Korean Pork" },
      { id: "dine-at-sohees", title: "Experience Sizzling Korean Pork in Greater Noida" }
    ],
    sections: [
      {
        id: "pork-in-korean-cuisine",
        heading: "The Heritage of Pork in Korean Culinary Tradition",
        paragraphs: [
          "While chicken and beef are popular worldwide, pork is indisputably Korea's everyday favorite meat. From famous Samgyeopsal (pork belly) grill houses to neighborhood stir-fry diners, pork is prized for its succulent texture, rich marbling, and ability to absorb deep marinades.",
          "For pork lovers in Delhi NCR seeking the genuine Seoul preparation, finding restaurants that do justice to traditional Korean pork recipes has long been a challenge—until now."
        ]
      },
      {
        id: "what-is-jeyuk-bokkeum",
        heading: "What Makes Jeyuk Bokkeum So Irresistible?",
        paragraphs: [
          "Jeyuk Bokkeum (literally 'stir-fried pork') is one of Korea's most iconic home-style dishes. Thinly sliced pork is marinated in a complex red sauce crafted from aged Gochujang (fermented chili paste), Gochugaru chili flakes, crushed garlic, grated ginger, soy sauce, and mirin.",
          "When cooked over roaring high heat in a smoking wok, the edges caramelize, locking in moisture and delivering a deep, smoky barbecue aroma ('Bul-mat').",
          "At Sohee's Kitchen, we prepare Jeyuk Bokkeum (₹450) with tender pork slices, sweet onions, and crisp cabbage for an intoxicating flavor profile."
        ],
        quote: "Jeyuk Bokkeum is the ultimate rice thief ('Bap-doduk')—the spicy savory sauce is so delicious you will finish two bowls of rice without noticing."
      },
      {
        id: "how-to-enjoy-pork",
        heading: "The Best Ways to Enjoy Sizzling Korean Pork",
        paragraphs: [
          "To experience Jeyuk Bokkeum like a Seoul native:",
          "1. Over Rice (Deopbap style): Spoon the steaming pork and glistening red sauce directly over hot rice.",
          "2. As a Ssam Wrap: Wrap tender pork inside a crisp lettuce leaf with a dab of house-made Kimchi and garlic for a refreshing, crunchy bite.",
          "3. Paired with a Stew: Contrast the fiery stir-fry with a soothing bowl of warm soup for balanced dining."
        ]
      },
      {
        id: "dine-at-sohees",
        heading: "Experience Sizzling Korean Pork in Greater Noida",
        paragraphs: [
          "Join us at Sohee's Kitchen to savor authentic Jeyuk Bokkeum cooked by experienced hands.",
          "Location: First Floor, BB 28, Block B, Ansal Golf Link-1, Greater Noida (UP 201315). Call +91 9711722273 for table reservations and takeaway orders."
        ]
      }
    ],
    faqs: [
      {
        question: "How spicy is Jeyuk Bokkeum at Sohee's Kitchen?",
        answer: "Our Jeyuk Bokkeum has an authentic, robust chili kick that warms the palate without overpowering the savory tenderness of the meat."
      },
      {
        question: "Can I order Jeyuk Bokkeum for home delivery or takeaway?",
        answer: "Yes, call +91 9711722273 to order Jeyuk Bokkeum freshly packed hot with complimentary rice."
      }
    ],
    menuItems: [
      {
        name: "Jeyuk Bokkeum",
        description: "Tender pork stir-fried in rich, spicy Korean chili sauce with fresh vegetables",
        price: "450",
      },
      {
        name: "Yam Yam Fried Chicken",
        description: "Boneless fried chicken stir-fried with special Yangnyeom sauce",
        price: "450",
      }
    ],
    relatedSlugs: ["korean-bbq-greater-noida", "top-korean-dishes-greater-noida"]
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(blogPosts.map((post) => post.category)));
}
