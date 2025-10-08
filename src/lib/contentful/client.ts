import { createClient } from 'contentful';

// Validate environment variables
const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

if (!spaceId || !accessToken) {
  console.warn('Contentful environment variables are not set. Please create a .env.local file with NEXT_PUBLIC_CONTENTFUL_SPACE_ID and NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN');
}

// Contentful client configuration
export const contentfulClient = createClient({
  space: spaceId || 'placeholder',
  accessToken: accessToken || 'placeholder',
});

// Preview client for draft content
export const contentfulPreviewClient = createClient({
  space: spaceId || 'placeholder',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN || 'placeholder',
  host: 'preview.contentful.com',
});

export function getContentfulClient(preview = false) {
  return preview ? contentfulPreviewClient : contentfulClient;
}
