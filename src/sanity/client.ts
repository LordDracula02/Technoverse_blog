import { createClient } from '@sanity/client'
import { apiVersion, dataset, projectId } from './env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

export const previewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

// Helper function to choose preview client or regular client
export const getClient = (preview?: boolean) => (preview ? previewClient : client)
