// src/app/[category]/page.tsx
import React from 'react';
import CategoryHeader from '@/components/blog/CategoryHeader';
import BlogListSection from '@/components/home/BlogListSection';
import { client } from '@/sanity/lib/client';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export async function generateStaticParams() {
  const query = `*[_type == "category"] {
    "slug": slug.current
  }`;
  const categories = await client.fetch(query);
  
  return categories.map((category: { slug: string }) => ({
    category: category.slug,
  }));
}

const CategoryPage: React.FC<CategoryPageProps> = ({ params }) => {
  return (
    <div className="min-h-screen">
      <CategoryHeader category={params.category} />
      <BlogListSection category={params.category} />
    </div>
  );
};

export default CategoryPage;