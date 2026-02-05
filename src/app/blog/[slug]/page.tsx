import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import MDXContent from '@/components/MDXContent';
import ReadingProgress from '@/components/ui/ReadingProgress';
import { getAllPosts } from '@/lib/blog';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join('content/blog'));
  return files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const markdownWithMeta = fs.readFileSync(
    path.join('content/blog', slug + '.mdx'),
    'utf-8'
  );
  const { data: frontMatter } = matter(markdownWithMeta);

  return {
    title: frontMatter.title,
    description: frontMatter.excerpt,
    alternates: {
      canonical: `https://spaceforedu.com/blog/${slug}`,
    },
    openGraph: {
      title: frontMatter.title,
      description: frontMatter.excerpt,
      images: [frontMatter.image],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const markdownWithMeta = fs.readFileSync(
    path.join('content/blog', slug + '.mdx'),
    'utf-8'
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  });

  // Get related posts (same category, excluding current)
  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter(post => post.category === frontMatter.category && post.slug !== slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-transparent text-white font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <ReadingProgress />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": frontMatter.title,
            "image": frontMatter.image,
            "datePublished": frontMatter.date,
            "author": {
              "@type": "Organization",
              "name": "SpaceForEdu"
            },
            "description": frontMatter.excerpt
          })
        }}
      />
      
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Back Button */}
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Назад к блогу
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-xs font-bold border border-cyan-500/20">
                {frontMatter.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {frontMatter.title}
            </h1>

            <div className="flex items-center gap-6 text-sm text-gray-400 border-b border-white/10 pb-8">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                {frontMatter.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                {frontMatter.readTime}
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-[400px] w-full rounded-3xl overflow-hidden mb-12 border border-white/10 shadow-2xl">
            <Image 
              src={frontMatter.image} 
              alt={frontMatter.title} 
              fill
              className="object-cover"
              unoptimized={true}
            />
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-cyan-400 prose-strong:text-white prose-li:text-gray-300 text-gray-300 mb-20 border-b border-white/5 pb-20">
            <MDXContent source={mdxSource} />
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-20">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Tag className="text-cyan-400" />
                Читайте также
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map((post) => (
                  <Link 
                    key={post.slug} 
                    href={`/blog/${post.slug}`}
                    className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-all flex flex-col"
                  >
                    <div className="relative h-40 rounded-xl overflow-hidden mb-4">
                      <Image 
                        src={post.image} 
                        alt={post.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-500" 
                        unoptimized
                      />
                    </div>
                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-2 line-clamp-2">
                      {post.title}
                    </h4>
                    <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold mt-auto group-hover:gap-3 transition-all">
                      Читать статью <ArrowRight size={16} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </div>
  );
}
