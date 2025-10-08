// Contentful image URL helper
import { ContentfulImage } from './types';

export function getContentfulImageUrl(image: ContentfulImage | undefined, width?: number, height?: number, quality = 80): string {
  if (!image?.fields?.file?.url) return '/images/placeholder.jpg';
  
  const baseUrl = image.fields.file.url.startsWith('//') 
    ? `https:${image.fields.file.url}` 
    : image.fields.file.url;
  
  if (!width && !height) return baseUrl;
  
  const params = new URLSearchParams();
  if (width) params.append('w', width.toString());
  if (height) params.append('h', height.toString());
  params.append('q', quality.toString());
  params.append('f', 'webp');
  
  return `${baseUrl}?${params.toString()}`;
}

// Format date for display
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Generate excerpt from content
export function generateExcerpt(content: string, maxLength = 160): string {
  if (!content) return '';
  
  // Remove HTML tags and get plain text
  const plainText = content.replace(/<[^>]*>/g, '');
  
  if (plainText.length <= maxLength) return plainText;
  
  return plainText.substring(0, maxLength).trim() + '...';
}
