import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import MDXContent from '@/components/MDXContent';

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

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const markdownWithMeta = fs.readFileSync(
    path.join('content/blog', slug + '.mdx'),
    'utf-8'
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return (
    <div className="min-h-screen bg-transparent text-white font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      
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
          <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-cyan-400 prose-strong:text-white prose-li:text-gray-300 text-gray-300">
            <MDXContent source={mdxSource} />
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
