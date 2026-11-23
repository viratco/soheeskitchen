import Link from "next/link";
import { BlogPost } from "@/data/blogData";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <article className="group relative overflow-hidden rounded-2xl bg-white shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl grid grid-cols-1 lg:grid-cols-12 border border-[#d25d1e]/20">
        <div className="relative h-64 sm:h-80 lg:h-full lg:col-span-7 overflow-hidden">
          <img
            src={post.coverImage}
            alt={post.coverImageAlt || post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-block rounded-full bg-[#d25d1e] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-md">
              Featured • {post.category}
            </span>
          </div>
        </div>
        <div className="p-6 sm:p-8 lg:p-10 lg:col-span-5 flex flex-col justify-between bg-[#fffdfa]">
          <div>
            <div className="flex items-center gap-3 text-xs font-semibold text-gray-500 mb-3">
              <span>{post.publishedAt}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] font-[family-name:var(--font-anton)] tracking-wide group-hover:text-[#d25d1e] transition-colors leading-snug">
              <Link href={`/blog/${post.slug}`}>
                <span className="absolute inset-0" aria-hidden="true" />
                {post.title}
              </Link>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600 line-clamp-3 leading-relaxed">
              {post.metaDescription}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-10 w-10 rounded-full object-cover border border-[#d25d1e]"
              />
              <div>
                <p className="text-sm font-bold text-[#1a1a1a]">{post.author.name}</p>
                <p className="text-xs text-gray-500">{post.author.role}</p>
              </div>
            </div>
            <span className="text-sm font-bold text-[#d25d1e] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Read Article &rarr;
            </span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-xl border border-gray-100">
      <div className="relative h-48 sm:h-56 w-full overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.coverImageAlt || post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="inline-block rounded-full bg-[#1a1a1a]/80 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white">
            {post.category}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between p-6 bg-[#fffdfa]">
        <div>
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
            <span>{post.publishedAt}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h3 className="text-xl font-bold text-[#1a1a1a] font-[family-name:var(--font-anton)] tracking-wide group-hover:text-[#d25d1e] transition-colors line-clamp-2 leading-snug">
            <Link href={`/blog/${post.slug}`}>
              <span className="absolute inset-0" aria-hidden="true" />
              {post.title}
            </Link>
          </h3>
          <p className="mt-3 text-sm text-gray-600 line-clamp-3 leading-relaxed">
            {post.metaDescription}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="h-7 w-7 rounded-full object-cover border border-[#d25d1e]"
            />
            <span className="text-xs font-semibold text-gray-700">{post.author.name}</span>
          </div>
          <span className="text-xs font-bold text-[#d25d1e] group-hover:translate-x-1 transition-transform">
            Read &rarr;
          </span>
        </div>
      </div>
    </article>
  );
}
