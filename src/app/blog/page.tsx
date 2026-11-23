import { Metadata } from "next";
import { blogPosts, getAllCategories } from "@/data/blogData";
import BlogIndexClient from "./BlogIndexClient";

export const metadata: Metadata = {
  title: "Blog & Culinary Guides | Sohee's Kitchen Greater Noida",
  description: "Explore authentic Korean recipes, dining etiquette, Korean BBQ guides, kimchi health benefits, and culinary stories from Sohee's Kitchen in Greater Noida.",
  keywords: [
    "Korean Food Blog",
    "Best Korean Restaurant Greater Noida",
    "Korean BBQ Guide",
    "Authentic Kimchi Recipe",
    "Korean Dining Etiquette",
    "Sohee's Kitchen Articles"
  ],
  openGraph: {
    title: "Blog & Culinary Insights | Sohee's Kitchen Greater Noida",
    description: "Discover authentic Korean BBQ, fermented Kimchi secrets, and Korean comfort food in Greater Noida.",
    type: "website",
    url: "https://soheeskitchen.com/blog",
  },
};

export default function BlogPage() {
  const categories = getAllCategories();

  return (
    <main className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <header className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-[#d25d1e]/15 text-[#d25d1e] font-bold text-xs uppercase tracking-widest mb-4">
          Sohee's Kitchen Stories & Insights
        </span>
        <h1 className="text-4xl sm:text-6xl font-normal tracking-tight font-[family-name:var(--font-anton)] text-[#1a1a1a] uppercase leading-none">
          Korean Culinary <span className="text-[#d25d1e]">Journal</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
          Deep dives into authentic Korean BBQ, traditional fermentation, vibrant side dishes, and food culture—brought to you by Sohee's Kitchen in Greater Noida.
        </p>
      </header>

      {/* Client-side filterable blog catalog */}
      <BlogIndexClient posts={blogPosts} categories={categories} />
    </main>
  );
}
