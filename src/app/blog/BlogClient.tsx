'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Sparkles, Brain, Target, Zap } from 'lucide-react';
import { BlogMeta } from '@/lib/blog';

interface BlogClientProps {
  posts: BlogMeta[];
}

export function BlogClient({ posts }: BlogClientProps) {
  const featuredPosts = posts.slice(0, 3);
  const recentPosts = posts.slice(3, 9);

  return (
    <>
      {/* Hero Section */}
      <Section spacing="xl" background="dark" className="pt-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        
        <Container className="relative z-10">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-300 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-blue-500/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              Strategic Intelligence
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent">
              Insights for the Strategically-Minded
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Essays and frameworks for building agentic systems, scaling intelligent infrastructure, and making strategy real. Written for thinkers, operators, and those shaping the future.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* Featured Posts */}
      <Section spacing="xl" background="white">
        <Container>
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Posts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep dives into the most critical aspects of AI strategy and implementation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <Card 
                  variant="elevated" 
                  padding="lg" 
                  className="h-full hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border border-gray-200/20 hover:border-emerald-200/40 bg-white/5 backdrop-blur-sm"
                >
                  {/* Professional badge */}
                  <div className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium mb-4 border border-blue-500/30">
                    <Sparkles className="w-3 h-3" />
                    Featured
                  </div>

                  {/* Professional category */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-medium text-blue-300 uppercase tracking-wide">
                      {post.category || 'AI Strategy'}
                    </span>
                  </div>

                  {/* Professional title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                    {post.title}
                  </h3>

                  {/* Professional excerpt */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Professional metadata */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author?.name || 'Strategic Team'}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readingTime || '5 min read'}</span>
                      </div>
                    </div>
                    <span className="text-gray-500">{post.date}</span>
                  </div>

                  {/* Professional tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags?.slice(0, 3).map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="inline-flex items-center gap-1 bg-gray-800/50 text-gray-300 px-2 py-1 rounded-md text-xs font-medium border border-gray-700/50"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Professional CTA */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="group-hover:bg-blue-50 group-hover:border-blue-300 group-hover:text-blue-700 transition-all duration-300"
                    onClick={() => window.location.href = `/blog/${post.slug}`}
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Recent Posts Grid */}
      <Section spacing="xl" background="gray">
        <Container>
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay ahead with our latest strategic thinking and implementation guides.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <Card 
                  variant="elevated" 
                  padding="md" 
                  className="h-full hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1 border border-gray-200 hover:border-emerald-200"
                >
                  {/* Category */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm font-medium text-emerald-600 uppercase tracking-wide">
                      {post.category || 'AI Strategy'}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300 leading-tight">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>

                  {/* Metadata */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readingTime || '5 min read'}</span>
                    </div>
                    <span>{post.date}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
} 