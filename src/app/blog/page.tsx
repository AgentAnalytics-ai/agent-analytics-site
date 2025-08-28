import React from 'react';
import BlogClient from './BlogClient';
import { getAllPosts } from '@/lib/blog';

// Simple ISR - revalidate every 24 hours
export const revalidate = 86400;

export default async function BlogPage() {
  const posts = getAllPosts();
  return <BlogClient posts={posts} />;
}
