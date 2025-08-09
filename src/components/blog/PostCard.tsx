import Link from 'next/link';
import Image from 'next/image';
import { BlogMeta } from '@/lib/blog';
import {
  Brain,
  Rocket,
  Target,
  Monitor,
  TrendingUp,
  Users,
  Cpu,
  BarChart3,
  Lightbulb,
  Zap,
  Database,
  Code,
  Globe,
  Shield,
  Network,
  FileText,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface PostCardProps {
  post: BlogMeta;
  featured?: boolean;
}

export default function PostCard({ post, featured = false }: PostCardProps) {
  const cardClasses = featured
    ? 'group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02]'
    : 'group relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01]';

  const imageClasses = featured
    ? 'aspect-[16/9] w-full object-cover transition-transform group-hover:scale-105'
    : 'aspect-[4/3] w-full object-cover transition-transform group-hover:scale-105';

  // Generate a placeholder gradient based on the post title
  const getPlaceholderGradient = (title: string) => {
    const colors = [
      'from-blue-50 via-blue-100 to-indigo-100 dark:from-blue-900/30 dark:via-blue-800/20 dark:to-indigo-900/30',
      'from-purple-50 via-purple-100 to-pink-100 dark:from-purple-900/30 dark:via-purple-800/20 dark:to-pink-900/30',
      'from-emerald-50 via-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:via-emerald-800/20 dark:to-teal-900/30',
      'from-orange-50 via-orange-100 to-red-100 dark:from-orange-900/30 dark:via-orange-800/20 dark:to-red-900/30',
      'from-amber-50 via-amber-100 to-yellow-100 dark:from-amber-900/30 dark:via-amber-800/20 dark:to-yellow-900/30',
      'from-slate-50 via-slate-100 to-gray-100 dark:from-slate-900/30 dark:via-slate-800/20 dark:to-gray-900/30',
    ];
    const index = title.length % colors.length;
    return colors[index];
  };

  // Get a professional icon based on the category
  const getCategoryIcon = (category: string) => {
    const categoryIcons: {
      [key: string]: LucideIcon;
    } = {
      'AI Implementation': Brain,
      'AI Strategy': Cpu,
      'Digital Transformation': Rocket,
      Strategy: Target,
      Technology: Monitor,
      Leadership: Users,
      Analytics: BarChart3,
      Consulting: Lightbulb,
      Innovation: Zap,
      'Machine Learning': Brain,
      'Data Science': Database,
      'Software Development': Code,
      Business: TrendingUp,
      Marketing: Globe,
      Security: Shield,
      Infrastructure: Network,
    };

    const IconComponent = categoryIcons[category] || FileText;
    return (
      <IconComponent
        className="w-12 h-12 text-gray-600 dark:text-gray-400"
        strokeWidth={1.5}
      />
    );
  };

  return (
    <article className={cardClasses}>
      <Link href={`/blog/${post.slug}`} className="block">
        {/* Featured badge */}
        {featured && (
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-3 py-1 text-xs font-medium text-blue-800 dark:text-blue-200">
              Featured
            </span>
          </div>
        )}

        {/* Image */}
        <div className="relative">
          {post.coverImage ? (
            <div className={`${imageClasses} relative overflow-hidden`}>
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Subtle overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          ) : (
            <div
              className={`${imageClasses} bg-gradient-to-br ${getPlaceholderGradient(post.title)} flex items-center justify-center relative overflow-hidden`}
            >
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              </div>

              {/* Icon with subtle shadow */}
              <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg backdrop-blur-sm">
                {getCategoryIcon(post.category)}
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category */}
          <div className="mb-3">
            <span className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-xs font-medium text-gray-800 dark:text-gray-200">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h3
            className={`font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ${
              featured ? 'text-xl' : 'text-lg'
            }`}
          >
            {post.title}
          </h3>

          {/* Subtitle */}
          {post.subtitle && (
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
              {post.subtitle}
            </p>
          )}

          {/* Excerpt */}
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="mt-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <span>{post.author.name}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span>{post.readingTime}</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </time>
            </div>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/30 px-2 py-0.5 text-xs font-medium text-blue-700 dark:text-blue-300"
                >
                  {tag}
                </span>
              ))}
              {post.tags.length > 3 && (
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  +{post.tags.length - 3} more
                </span>
              )}
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}
