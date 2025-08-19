import React from 'react';
import BlogClient from './BlogClient';
import { getAllPosts } from '@/lib/blog';

// Add these two exports at the top to make the page dynamic
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function BlogPage() {
  const posts = await getAllPosts();

  return <BlogClient posts={posts} />;
}
