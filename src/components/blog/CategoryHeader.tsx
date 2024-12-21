import React from 'react';
import { client } from '@/sanity/lib/client';

export type Category = 'consumer-tech' | 'autofocus' | 'open-source' | 'ai-ml' | 'fin-tech';

interface CategoryHeaderProps {
  category: string;
}

async function getCategoryInfo(slug: string) {
  const query = `*[_type == "category" && slug.current == $slug][0] {
    title,
    description
  }`;
  return client.fetch(query, { slug });
}

const CategoryHeader: React.FC<CategoryHeaderProps> = async ({ category }) => {
  const categoryInfo = await getCategoryInfo(category);

  if (!categoryInfo) {
    return null;
  }

  return (
    <div className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">{categoryInfo.title}</h1>
        <p className="text-xl text-muted-foreground">{categoryInfo.description}</p>
      </div>
    </div>
  );
};

export default CategoryHeader;