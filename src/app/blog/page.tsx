import React from 'react';
import BlogClient from './BlogClient';
import { getAllPosts } from '@/lib/blog';

export default async function BlogPage() {
  const posts = await getAllPosts();

  return <BlogClient posts={posts} />;
}
