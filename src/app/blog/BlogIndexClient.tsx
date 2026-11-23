"use client";

import { useState } from "react";
import { BlogPost } from "@/data/blogData";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";

interface BlogIndexClientProps {
  posts: BlogPost[];
  categories: string[];
}

export default function BlogIndexClient({ posts, categories }: BlogIndexClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.metaDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.seoKeywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const featuredPost = posts[0];
  const regularPosts = filteredPosts.filter((p) => p.slug !== (selectedCategory === "All" && searchQuery === "" ? featuredPost.slug : ""));

  return (
    <div className="space-y-12">
      {/* Search & Category Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-white/70 backdrop-blur-md shadow-md border border-[#d25d1e]/15">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
              selectedCategory === "All"
                ? "bg-[#d25d1e] text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All Articles
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? "bg-[#d25d1e] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            placeholder="Search Korean food guides..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-full text-sm bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#d25d1e]/50 focus:border-[#d25d1e]"
          />
          <svg
            className="absolute left-3.5 top-3 h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Featured Post */}
      {selectedCategory === "All" && searchQuery === "" && featuredPost && (
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-[#1a1a1a] uppercase tracking-wider font-[family-name:var(--font-anton)]">
            Editor's Choice
          </h2>
          <BlogCard post={featuredPost} featured={true} />
        </section>
      )}

      {/* Grid Layout (2-3 columns desktop, 1-2 mobile) */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#1a1a1a] uppercase tracking-wider font-[family-name:var(--font-anton)]">
            {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
          </h2>
          <span className="text-xs font-semibold text-gray-500">
            Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
          </span>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow-inner border border-dashed border-gray-300">
            <p className="text-lg font-bold text-gray-700">No blog posts match your search.</p>
            <p className="text-sm text-gray-500 mt-1">Try clearing filters or searching another keyword.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 px-6 py-2 bg-[#d25d1e] text-white text-xs font-bold rounded-full uppercase tracking-wider hover:bg-[#b04a18]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>

      {/* CTA Box for Restaurant Visits */}
      <section className="mt-16 rounded-2xl bg-gradient-to-r from-[#1a1a1a] to-[#2c2c2c] p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-[#d25d1e]/30">
        <div className="max-w-xl space-y-3">
          <span className="inline-block text-[#d25d1e] font-bold text-xs uppercase tracking-widest">
            Visit Us in Greater Noida
          </span>
          <h3 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-anton)] uppercase leading-tight">
            Hungry for Authentic Korean Food?
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Visit Sohee's Kitchen at Ansal Golf Link-1, Greater Noida (near India Expo Mart & Pari Chowk).
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <a
            href="tel:+919711722273"
            className="px-8 py-4 bg-[#d25d1e] hover:bg-[#b04a18] text-white font-bold text-sm uppercase tracking-wider rounded-sm text-center shadow-lg transition-transform active:scale-95"
          >
            Call +91 9711722273
          </a>
        </div>
      </section>
    </div>
  );
}
