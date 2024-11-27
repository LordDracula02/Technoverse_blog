// src/app/blog/[slug]/page.tsx
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'

async function getPost(slug: string) {
  return await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug })
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  if (!post) return <div>Post not found</div>

  return (
    <article className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      {post.mainImage && (
        <Image
          src={urlFor(post.mainImage).url()}
          alt={post.title}
          width={800}
          height={400}
          className="mb-8 rounded-lg"
        />
      )}
      <div className="prose max-w-none">
        <PortableText value={post.body} />
      </div>
    </article>
  )
}