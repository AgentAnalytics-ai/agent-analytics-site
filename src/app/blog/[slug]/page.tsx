import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getRelatedPosts } from '@/lib/blog';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { ShareButtons } from '@/components/blog/ShareButtons';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { compileMDX } from '@/lib/mdx';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Logo } from '@/components/ui/Logo';
import { MDXRemote } from "next-mdx-remote/rsc";

// Add these two exports at the top to make the page dynamic
export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Comment out generateStaticParams to prevent pre-rendering
// export async function generateStaticParams() {
//   const allPosts = getAllPosts();
//   return allPosts.map((post) => ({
//     slug: post.slug,
//   }));
// }

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found - Agent Analytics',
    };
  }

  return {
    title: `${post.title} - Agent Analytics`,
    description: post.seo?.metaDescription || post.excerpt,
    keywords: post.seo?.keywords,
    openGraph: {
      title: post.title,
      description: post.seo?.metaDescription || post.excerpt,
      images: post.seo?.ogImage ? [post.seo.ogImage] : [],
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.lastModified,
      authors: [post.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.seo?.metaDescription || post.excerpt,
      images: post.seo?.ogImage ? [post.seo.ogImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post);

  // Extract headings for TOC
  const headings = post.content
    .split('\n')
    .filter((line) => line.startsWith('## '))
    .map((line) => ({
      id: line
        .replace('## ', '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-'),
      text: line.replace('## ', ''),
      level: 2,
    }));

  // Compile MDX content
  const mdxContent = await compileMDX(post.content);

  // Generate structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.date,
    dateModified: post.lastModified,
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Agent Analytics',
      logo: {
        '@type': 'ImageObject',
        url: 'https://agentanalytics.com/Agent%20Analytics%20Logo.png',
      },
    },
    description: post.excerpt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://agentanalytics.com/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Section className="bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <article>
              {/* Header */}
              <header className="mb-8 relative">
                {/* Subtle logo watermark in header */}
                <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
                  <Logo variant="symbol" size="watermark" showLink={false} />
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200 overflow-hidden">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readingTime}</span>
                  </div>
                </div>

                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  {post.title}
                </h1>

                {post.subtitle && (
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                    {post.subtitle}
                  </p>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {post.author.avatar ? (
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                          {post.author.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')
                            .toUpperCase()}
                        </span>
                      </div>
                    )}
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {post.author.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Author
                      </p>
                    </div>
                  </div>

                  <ShareButtons
                    url={`https://agentanalytics.com/blog/${post.slug}`}
                    title={post.title}
                  />
                </div>
              </header>

              {/* Featured Image */}
              {post.seo?.ogImage && (
                <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
                  <Image
                    src={post.seo.ogImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              {/* Content */}
              <div
                className="prose prose-lg max-w-none 
                prose-gray 
                prose-headings:text-gray-900 
                prose-p:text-gray-700 
                prose-strong:text-gray-900 
                prose-li:text-gray-700 
                prose-ul:text-gray-700 
                prose-ol:text-gray-700
                prose-blockquote:text-gray-700
                prose-code:text-gray-900
                prose-pre:text-gray-900
                prose-a:text-blue-500
                prose-a:no-underline
                prose-a:font-medium
                hover:prose-a:text-blue-600
                [&>*]:text-gray-700
                [&>h1]:text-gray-900
                [&>h2]:text-gray-900
                [&>h3]:text-gray-900
                [&>h4]:text-gray-900
                [&>h5]:text-gray-900
                [&>h6]:text-gray-900
                [&>strong]:text-gray-900
                [&>b]:text-gray-900
                [&>em]:text-gray-700
                [&>i]:text-gray-700
                [&>ul]:text-gray-700
                [&>ol]:text-gray-700
                [&>li]:text-gray-700
                [&>p]:text-gray-700
                [&>blockquote]:text-gray-700
                [&>code]:text-gray-900
                [&>pre]:text-gray-900
                [&>pre_code]:text-gray-900
                prose-ul:list-disc
                prose-ul:pl-6
                prose-ol:list-decimal
                prose-ol:pl-6
                [&>ul]:list-disc
                [&>ul]:pl-6
                [&>ol]:list-decimal
                [&>ol]:pl-6
                [&>li]:list-item
                [&>li]:pl-2
              "
              >
                <MDXRemote source={mdxContent} />
              </div>

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Tags:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog?tag=${encodeURIComponent(tag)}`}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors border border-blue-200"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>
          </div>
        </Container>
      </Section>

      {/* Table of Contents */}
      <TableOfContents headings={headings} />

      {/* Related Posts */}
      <RelatedPosts posts={relatedPosts} />
    </>
  );
}
