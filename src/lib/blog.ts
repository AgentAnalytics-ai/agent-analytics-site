import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

export interface BlogPost {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  lastModified?: string;
  author: {
    name: string;
    avatar?: string;
  };
  category: string;
  tags: string[];
  excerpt: string;
  featured?: boolean;
  readingTime: string;
  coverImage?: string;
  seo?: {
    metaDescription?: string;
    ogImage?: string;
    keywords?: string[];
  };
  relatedPosts?: string[];
  content: string;
}

export interface BlogMeta {
  slug: string;
  title: string;
  subtitle?: string;
  date: string;
  lastModified?: string;
  author: {
    name: string;
    avatar?: string;
  };
  category: string;
  tags: string[];
  excerpt: string;
  featured?: boolean;
  readingTime: string;
  coverImage?: string;
  seo?: {
    metaDescription?: string;
    ogImage?: string;
    keywords?: string[];
  };
  relatedPosts?: string[];
}

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export function getAllPosts(): BlogMeta[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      const stats = readingTime(content);

      return {
        slug,
        title: data.title,
        subtitle: data.subtitle,
        date: data.date,
        lastModified: data.lastModified || data.date,
        author: data.author,
        category: data.category,
        tags: data.tags || [],
        excerpt: data.excerpt,
        featured: data.featured || false,
        readingTime: stats.text,
        coverImage: data.coverImage,
        seo: data.seo,
        relatedPosts: data.relatedPosts || [],
      };
    });

  // Sort posts by date (newest first)
  return allPostsData.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const stats = readingTime(content);

    return {
      slug,
      title: data.title,
      subtitle: data.subtitle,
      date: data.date,
      lastModified: data.lastModified || data.date,
      author: data.author,
      category: data.category,
      tags: data.tags || [],
      excerpt: data.excerpt,
      featured: data.featured || false,
      readingTime: stats.text,
      coverImage: data.coverImage,
      seo: data.seo,
      relatedPosts: data.relatedPosts || [],
      content,
    };
  } catch {
    return null;
  }
}

export function getPostsByCategory(category: string): BlogMeta[] {
  const allPosts = getAllPosts();
  return allPosts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}

export function getRelatedPosts(
  currentPost: BlogMeta,
  limit: number = 3
): BlogMeta[] {
  const allPosts = getAllPosts();

  // First, try to use manually specified related posts
  if (currentPost.relatedPosts && currentPost.relatedPosts.length > 0) {
    const manualRelated = allPosts.filter((post) =>
      currentPost.relatedPosts!.includes(post.slug)
    );
    if (manualRelated.length >= limit) {
      return manualRelated.slice(0, limit);
    }
  }

  // Otherwise, find posts with similar tags
  const currentTags = new Set(currentPost.tags.map((tag) => tag.toLowerCase()));

  const scoredPosts = allPosts
    .filter((post) => post.slug !== currentPost.slug)
    .map((post) => {
      const postTags = new Set(post.tags.map((tag) => tag.toLowerCase()));
      const sharedTags = [...currentTags].filter((tag) => postTags.has(tag));
      const categoryMatch =
        post.category.toLowerCase() === currentPost.category.toLowerCase()
          ? 2
          : 0;

      return {
        post,
        score: sharedTags.length + categoryMatch,
      };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  return scoredPosts.slice(0, limit).map((item) => item.post);
}

export function getAllCategories(): string[] {
  const allPosts = getAllPosts();
  const categories = new Set(allPosts.map((post) => post.category));
  return Array.from(categories).sort();
}

export function getAllTags(): string[] {
  const allPosts = getAllPosts();
  const tags = new Set(allPosts.flatMap((post) => post.tags));
  return Array.from(tags).sort();
}
