import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getBlogPostBySlug, RESTAURANT_DETAILS } from "@/data/blogData";
import BlogCard from "@/components/BlogCard";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    return {
      title: "Article Not Found | Sohee's Kitchen",
    };
  }

  const canonicalUrl = `https://www.soheeskitchen.com/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.seoKeywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      url: canonicalUrl,
      publishedTime: post.publishedAt,
      modifiedTime: post.publishedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage,
          alt: post.coverImageAlt || post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Get related posts from explicit relatedSlugs or fallback
  const relatedPosts = blogPosts.filter((p) => post.relatedSlugs.includes(p.slug));
  const fallbackRelated = blogPosts.filter((p) => p.slug !== post.slug && !post.relatedSlugs.includes(p.slug));
  const displayRelatedPosts = [...relatedPosts, ...fallbackRelated].slice(0, 2);

  const canonicalUrl = `https://www.soheeskitchen.com/blog/${post.slug}`;

  // 1. Restaurant Schema (site-wide)
  const restaurantJsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: RESTAURANT_DETAILS.name,
    servesCuisine: RESTAURANT_DETAILS.cuisine,
    address: {
      "@type": "PostalAddress",
      streetAddress: RESTAURANT_DETAILS.address.streetAddress,
      addressLocality: RESTAURANT_DETAILS.address.addressLocality,
      addressRegion: RESTAURANT_DETAILS.address.addressRegion,
      postalCode: RESTAURANT_DETAILS.address.postalCode,
      addressCountry: RESTAURANT_DETAILS.address.addressCountry,
    },
    telephone: RESTAURANT_DETAILS.phone,
    url: RESTAURANT_DETAILS.url,
    priceRange: RESTAURANT_DETAILS.priceRange,
    areaServed: RESTAURANT_DETAILS.areaServed,
  };

  // 2. BlogPosting Schema
  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    author: {
      "@type": "Organization",
      name: "Sohee's Kitchen",
    },
    publisher: {
      "@type": "Organization",
      name: "Sohee's Kitchen",
      logo: {
        "@type": "ImageObject",
        url: "https://www.soheeskitchen.com/images/sohees_white_txt.png",
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    mainEntityOfPage: canonicalUrl,
  };

  // 3. Menu Schema (if menu items attached)
  const menuJsonLd = post.menuItems && post.menuItems.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "Menu",
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "Signatures",
        hasMenuItem: post.menuItems.map((item) => ({
          "@type": "MenuItem",
          name: item.name,
          description: item.description,
          offers: {
            "@type": "Offer",
            price: item.price,
            priceCurrency: "INR",
          },
        })),
      },
    ],
  } : null;

  // 4. BreadcrumbList Schema
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.soheeskitchen.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.soheeskitchen.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <>
      {/* Raw SSR head scripts for Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      {menuJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(menuJsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 text-xs font-semibold text-gray-600 flex items-center gap-2 flex-wrap">
          <Link href="/" className="hover:text-[#d25d1e] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#d25d1e] transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-[#d25d1e] truncate max-w-xs">{post.title}</span>
        </nav>

        {/* Header Section */}
        <header className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 rounded-full bg-[#d25d1e] text-white text-xs font-bold uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-xs font-semibold text-gray-500">{post.readTime}</span>
            <span className="text-xs font-semibold text-gray-500">• {post.publishedAt}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-[#1a1a1a] font-[family-name:var(--font-anton)] tracking-wide leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 py-4 border-y border-gray-200">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="h-12 w-12 rounded-full object-cover border-2 border-[#d25d1e]"
            />
            <div>
              <p className="text-base font-bold text-[#1a1a1a]">{post.author.name}</p>
              <p className="text-xs text-gray-600">{post.author.role} at Sohee's Kitchen</p>
            </div>
          </div>
        </header>

        {/* Cover Image */}
        <div className="my-8 overflow-hidden rounded-2xl shadow-xl max-h-[500px]">
          <img
            src={post.coverImage}
            alt={post.coverImageAlt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* AEO Key Takeaways Box */}
        <section className="my-8 p-6 sm:p-8 rounded-2xl bg-[#fff8eb] border-2 border-[#d25d1e]/30 shadow-md space-y-4">
          <div className="flex items-center gap-2 text-[#d25d1e] font-bold text-sm uppercase tracking-wider">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Key Takeaways & Summary</span>
          </div>
          <ul className="space-y-2.5 text-sm sm:text-base text-gray-800 font-medium">
            {post.keyTakeaways.map((takeaway, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-[#d25d1e] font-bold">✓</span>
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-10">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-4 lg:sticky lg:top-32 self-start p-6 rounded-xl bg-white shadow-md border border-gray-100 space-y-4">
            <h3 className="text-base font-bold text-[#1a1a1a] uppercase tracking-wider font-[family-name:var(--font-anton)] border-b border-gray-200 pb-2">
              In This Article
            </h3>
            <nav className="flex flex-col space-y-2 text-sm">
              {post.tableOfContents.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-gray-700 hover:text-[#d25d1e] hover:translate-x-1 transition-all py-1 font-medium"
                >
                  {item.title}
                </a>
              ))}
              {post.faqs && post.faqs.length > 0 && (
                <a href="#faqs" className="text-gray-700 hover:text-[#d25d1e] hover:translate-x-1 transition-all py-1 font-medium">
                  Frequently Asked Questions
                </a>
              )}
            </nav>

            {/* Quick Link to Sandane Homes if partner link exists */}
            {post.partnerLink && (
              <div className="pt-4 border-t border-gray-100 text-xs">
                <p className="font-bold text-gray-500 mb-1">Accommodation Partner:</p>
                <a
                  href={post.partnerLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d25d1e] font-semibold hover:underline block"
                >
                  {post.partnerLink.anchorText} &rarr;
                </a>
              </div>
            )}
          </aside>

          {/* Article Main Body */}
          <div className="lg:col-span-8 space-y-10 text-gray-800 leading-relaxed text-base sm:text-lg">
            {post.sections.map((section) => (
              <section key={section.id} id={section.id} className="space-y-4 scroll-mt-32">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] font-[family-name:var(--font-anton)] tracking-wide pt-2">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-gray-700 font-normal leading-relaxed">
                    {paragraph}
                  </p>
                ))}

                {section.quote && (
                  <blockquote className="my-6 p-6 border-l-4 border-[#d25d1e] bg-white rounded-r-xl shadow-sm italic text-gray-900 font-semibold">
                    "{section.quote}"
                  </blockquote>
                )}

                {section.externalLink && (
                  <div className="my-4 p-4 rounded-lg bg-gray-50 border border-gray-200 text-sm">
                    🔗{" "}
                    <a
                      href={section.externalLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#d25d1e] font-bold hover:underline"
                    >
                      {section.externalLink.text}
                    </a>
                  </div>
                )}
              </section>
            ))}

            {/* FAQs */}
            {post.faqs && post.faqs.length > 0 && (
              <section id="faqs" className="pt-8 border-t border-gray-300 space-y-6 scroll-mt-32">
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#d25d1e] uppercase tracking-widest">
                    Got Questions?
                  </span>
                  <h2 className="text-3xl font-bold text-[#1a1a1a] font-[family-name:var(--font-anton)]">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-4">
                  {post.faqs.map((faq, index) => (
                    <details
                      key={index}
                      className="group bg-white rounded-xl shadow-sm border border-gray-200 p-5 transition-all [&[open]]:shadow-md"
                    >
                      <summary className="font-bold text-[#1a1a1a] cursor-pointer list-none flex items-center justify-between text-lg">
                        <span>{faq.question}</span>
                        <span className="text-[#d25d1e] font-bold group-open:rotate-180 transition-transform">
                          ▼
                        </span>
                      </summary>
                      <p className="mt-3 text-sm text-gray-700 leading-relaxed font-normal pt-2 border-t border-gray-100">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* TASK 11: CTA BLOCK ON EVERY POST */}
            <section className="mt-12 p-8 rounded-2xl bg-[#d25d1e] text-white shadow-xl text-center space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-anton)] uppercase">
                Craving authentic Korean food in Greater Noida?
              </h3>
              <p className="text-white/90 text-base font-medium">
                Visit Sohee's Kitchen at Ansal Golf Link-1, Greater Noida.
              </p>
              <div className="flex justify-center pt-2">
                <a
                  href="tel:+919711722273"
                  className="px-8 py-3.5 bg-white text-[#d25d1e] hover:bg-gray-100 font-bold text-sm uppercase tracking-wider rounded-sm shadow-md transition-all active:scale-95"
                >
                  Call Now: +91 9711722273
                </a>
              </div>
            </section>
          </div>
        </div>

        {/* TASK 5: Related Posts Section */}
        {displayRelatedPosts.length > 0 && (
          <section className="mt-20 pt-12 border-t border-gray-300 space-y-8">
            <h3 className="text-3xl font-bold text-[#1a1a1a] font-[family-name:var(--font-anton)] tracking-wide">
              Related Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {displayRelatedPosts.map((rPost) => (
                <BlogCard key={rPost.slug} post={rPost} />
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
