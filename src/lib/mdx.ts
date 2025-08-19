import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkGfm from 'remark-gfm';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

type CompileMDXResult = Promise<MDXRemoteSerializeResult>;

export async function compileMDX(source: string): CompileMDXResult {
  return await serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
    },
    parseFrontmatter: true,
  });
}
