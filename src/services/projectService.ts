import strapiApi from './api';

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;

// Interface for media format
interface MediaFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

// Interface for media object with formats
interface Media {
  id: number;
  documentId?: string;
  name: string;
  alternativeText?: string | null;
  caption?: string | null;
  width: number;
  height: number;
  formats?: {
    large?: MediaFormat;
    medium?: MediaFormat;
    small?: MediaFormat;
    thumbnail?: MediaFormat;
  };
  url: string;
  size: number;
  sizeInBytes: number;
  ext: string;
  mime: string;
  provider?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

// Simple fetch all projects/articles
export const fetchAllProjects = async () => {
  try {
    const response = await strapiApi.get('/articles?populate=cover');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching all projects:', error);
    return [];
  }
};

// Fetch all projects/articles with populated relations
export const fetchArticles = async () => {
  try {
    const response = await strapiApi.get('/articles', {
      params: {
        populate: 'cover,author,category', // Include media and relations
        filters: {
          publishedAt: { $notNull: true }, // Only published articles
        },
        sort: 'publishedAt:desc', // Sort by latest first
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
};

// Fetch single article by slug
export const fetchArticleBySlug = async (slug: string) => {
  try {
    const response = await strapiApi.get('/articles', {
      params: {
        filters: { slug: { $eq: slug } },
        populate: 'cover,author,category,blocks',
      },
    });
    return response.data.data[0] || null;
  } catch (error) {
    console.error(`Error fetching article with slug ${slug}:`, error);
    return null;
  }
};

// Fetch articles with pagination
export const fetchArticlesWithPagination = async (pageSize: number = 10, page: number = 1) => {
  try {
    const response = await strapiApi.get('/articles', {
      params: {
        populate: 'cover,author,category',
        filters: {
          publishedAt: { $notNull: true },
        },
        sort: 'publishedAt:desc',
        pagination: {
          pageSize,
          page,
        },
      },
    });
    return {
      data: response.data.data,
      pagination: response.data.meta?.pagination,
    };
  } catch (error) {
    console.error('Error fetching articles with pagination:', error);
    return { data: [], pagination: null };
  }
};

// Get media URL helper - converts relative URLs to absolute
// Prioritizes medium format, falls back to small, then original
export const getMediaUrl = (media: Media | null | undefined): string | null => {
  if (!media) return null;
  
  let url: string | null = null;
  
  // Try to get medium format first (best for display)
  if (media.formats?.medium?.url) {
    url = media.formats.medium.url;
  }
  // Fall back to small format
  else if (media.formats?.small?.url) {
    url = media.formats.small.url;
  }
  // Fall back to thumbnail
  else if (media.formats?.thumbnail?.url) {
    url = media.formats.thumbnail.url;
  }
  // Fall back to original URL
  else if (media.url) {
    url = media.url;
  }
  
  if (url) {
    // If URL is relative, prepend Strapi URL
    return url.startsWith('http') ? url : `${STRAPI_URL}${url}`;
  }
  
  return null;
};

// Fetch articles by category
export const fetchArticlesByCategory = async (categoryId: number | string) => {
  try {
    const response = await strapiApi.get('/articles', {
      params: {
        filters: {
          category: { id: { $eq: categoryId } },
          publishedAt: { $notNull: true },
        },
        populate: 'cover,author,category',
        sort: 'publishedAt:desc',
      },
    });
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching articles by category ${categoryId}:`, error);
    return [];
  }
};

// Search articles by title or content
export const searchArticles = async (query: string) => {
  try {
    const response = await strapiApi.get('/articles', {
      params: {
        filters: {
          $or: [
            { title: { $containsi: query } },
            { description: { $containsi: query } },
          ],
          publishedAt: { $notNull: true },
        },
        populate: 'cover,author,category',
        sort: 'publishedAt:desc',
      },
    });
    return response.data.data;
  } catch (error) {
    console.error(`Error searching articles with query "${query}":`, error);
    return [];
  }
};
