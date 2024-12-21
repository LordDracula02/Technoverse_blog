import { NextResponse } from 'next/server'
import { getPosts } from '@/lib/sanity/queries'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')
  
  try {
    const posts = await getPosts(category || 'autofocus')
    return NextResponse.json({ 
      category,
      postsCount: posts.length,
      posts 
    })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}
