import { client } from '../src/sanity/lib/client.ts'

async function getCategories() {
  const query = `*[_type == "category"] {
    _id,
    title,
    description,
    "slug": slug.current
  }`
  
  return client.fetch(query)
}

async function main() {
  try {
    const categories = await getCategories()
    console.log('Available categories:', categories)
  } catch (error) {
    console.error('Error fetching categories:', error)
  }
}

main()
