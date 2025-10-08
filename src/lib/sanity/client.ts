import { createClient } from 'next-sanity';

// Sanity client configuration
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id', // You'll get this from Sanity
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Use CDN for faster reads
  token: process.env.SANITY_API_TOKEN, // For write operations (optional for reading)
});

// Preview client for draft content
export const previewClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // Don't use CDN for previews
  token: process.env.SANITY_API_TOKEN,
});

export function getClient(preview = false) {
  return preview ? previewClient : client;
}
