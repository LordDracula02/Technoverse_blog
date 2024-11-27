import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { urlFor } from '@/sanity/lib/image';
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

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

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        {post.mainImage && (
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            fill
            className="object-cover"
          />
        )}
      </div>
      <CardHeader>
        <div className="flex gap-2 mb-2">
          {post.categories?.map((category) => (
            <Link
              key={category.slug}
              href={`/${category.slug}`}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              {category.title}
            </Link>
          ))}
        </div>
        <CardTitle className="line-clamp-2">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardFooter className="flex justify-between items-center">
        <div className="text-sm text-muted-foreground">
          {post.author && (
            <>
              By{' '}
              <Link href={`/author/${post.author.slug}`} className="hover:underline">
                {post.author.name}
              </Link>
            </>
          )}
        </div>
        <div className="text-sm text-muted-foreground">
          {format(new Date(post.publishedAt), 'MMM d, yyyy')}
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;