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
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(blogPosts.map((post) => post.category)));
}
