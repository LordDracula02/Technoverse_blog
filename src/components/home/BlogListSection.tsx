// src/components/home/BlogListSection.tsx
import React from 'react';
import Link from 'next/link';
import BlogCard from '../blog/Blogcard';
import { getPosts } from '@/lib/sanity/queries';

interface BlogListSectionProps {
  category?: string;
}

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  mainImage: {
    asset: {
      _ref: string;
    };
  };
  publishedAt: string;
  categories: Array<{
    title: string;
    slug: string;
  }>;
  author: {
    name: string;
    slug: string;
  };
}

const BlogListSection: React.FC<BlogListSectionProps> = async ({ category }) => {
  const posts = await getPosts(category);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">
          {category ? `Latest in ${category}` : 'Latest Insights in Tech'}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: BlogPost) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/blog" className="inline-block border border-black text-black px-6 py-2 rounded hover:bg-black hover:text-white transition-colors">
            View all
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogListSection;