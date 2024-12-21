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
  
  if (!categories || categories.length === 0) {
    console.warn("No categories found in Sanity dataset.");
    return [];
  }
  
  // Normalize category slugs to ensure consistency
  return categories.map((category: { slug: string }) => ({
    category: category.slug.toLowerCase().replace(/\s+/g, '-'),
  }));
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ params }) => {
  // Normalize the category parameter
  const normalizedCategory = params.category.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className="min-h-screen">
      <CategoryHeader category={normalizedCategory} />
      <BlogListSection category={normalizedCategory} />
    </div>
  );
};

export default CategoryPage;