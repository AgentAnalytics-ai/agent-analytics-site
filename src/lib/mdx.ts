import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrismPlus from 'rehype-prism-plus';
import { mdxComponents } from '@/components/blog/mdx-components-server';

export const mdxOptions = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [
    rehypeSlug,
    [rehypeAutolinkHeadings, { behavior: 'wrap' }],
    [rehypePrismPlus, { ignoreMissing: true }],
  ],
};

export function compileMDX(source: string) {
  return MDXRemote({ 
    source, 
    options: mdxOptions,
    components: mdxComponents
  });
} 