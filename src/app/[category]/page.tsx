// src/app/[category]/page.tsx
import React from 'react';
import CategoryHeader from '@/components/blog/CategoryHeader';
import BlogListSection from '@/components/home/BlogListSection';
import { client } from '@/sanity/lib/client';
import { notFound } from 'next/navigation';

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
  
  return categories.map((category: { slug: string }) => ({
    category: category.slug,
  }));
}

async function getCategory(slug: string) {
  const query = `*[_type == "category" && slug.current == $slug][0]`;
  return client.fetch(query, { slug });
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = await getCategory(params.category);
  
  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <CategoryHeader category={params.category} />
      <BlogListSection category={params.category} />
    </div>
  );
}