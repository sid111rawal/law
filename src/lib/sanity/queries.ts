// GROQ queries for fetching blog data from Sanity

// Get all published blog posts
export const allPostsQuery = `
  *[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "author": author->{name, credentials, image},
    "category": category->{title, slug, color},
    mainImage,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 200 )
  }
`;

// Get a single blog post by slug
export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    _id,
    title,
    slug,
    publishedAt,
    _updatedAt,
    excerpt,
    "author": author->{name, credentials, bio, image},
    "category": category->{title, slug, color},
    mainImage,
    body,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 200 ),
    seo
  }
`;

// Get related posts by category
export const relatedPostsQuery = `
  *[_type == "post" && category._ref == $categoryId && slug.current != $currentSlug && !(_id in path("drafts.**"))] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "category": category->{title, slug, color},
    mainImage
  }
`;

// Get posts by category
export const postsByCategoryQuery = `
  *[_type == "post" && category->slug.current == $category && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "author": author->{name, credentials, image},
    "category": category->{title, slug, color},
    mainImage,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 200 )
  }
`;

// Get all categories
export const allCategoriesQuery = `
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description,
    color,
    "postCount": count(*[_type == "post" && category._ref == ^._id && !(_id in path("drafts.**"))])
  }
`;

// Get popular/featured posts
export const popularPostsQuery = `
  *[_type == "post" && featured == true && !(_id in path("drafts.**"))] | order(publishedAt desc) [0...5] {
    _id,
    title,
    slug,
    publishedAt,
    "category": category->{title, slug, color},
    mainImage
  }
`;

// Search posts
export const searchPostsQuery = `
  *[_type == "post" && [title, excerpt, pt::text(body)] match $searchTerm && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "category": category->{title, slug, color},
    mainImage
  }
`;
