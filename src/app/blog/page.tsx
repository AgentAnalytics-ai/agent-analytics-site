import React from 'react';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Sparkles, Brain, Target, Zap, Clock, User, Tag } from 'lucide-react';
import { getAllPosts } from '@/lib/blog';
import { BlogClient } from './BlogClient';

export default async function BlogPage() {
  const posts = await getAllPosts();

  return <BlogClient posts={posts} />;
} 