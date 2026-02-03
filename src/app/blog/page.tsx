import { getAllPosts } from '@/lib/blog';
import BlogClient from './BlogClient';

export default function Blog() {
  const posts = getAllPosts();
  return <BlogClient posts={posts} />;
}
