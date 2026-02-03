"use client";

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import RevealOnScroll from '../../components/RevealOnScroll';
import { 
  Search, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Tag,
  BookOpen
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Mock Data based on 9_blog.md
const BLOG_POSTS = [
  {
    id: 1,
    title: "Образование в Испании: дошкольное, базовое, профессиональное и высшее",
    excerpt: "Испания является одним из наиболее популярных направлений для получения высшего образования среди иностранных студентов. Здесь можно найти множество престижных университетов...",
    category: "Образование",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
    date: "14 Ноя 2023",
    readTime: "5 мин"
  },
  {
    id: 2,
    title: "Как выбрать школу в Испании для ребенка 6-11 лет?",
    excerpt: "Выбор школы и оформление в школу в Испании может быть сложной задачей для иностранных студентов, особенно если они никогда не сталкивались с этой процедурой раньше.",
    category: "Школа",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
    date: "10 Ноя 2023",
    readTime: "7 мин"
  },
  {
    id: 3,
    title: "Омологация диплома: как подтвердить диплом в Испании",
    excerpt: "Омологация диплома – это приравнивание квалификации, полученной в другой стране, к испанскому аналогу. Диплом будет иметь такую же официальную силу.",
    category: "Документы",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    date: "05 Окт 2023",
    readTime: "4 мин"
  },
  {
    id: 4,
    title: "Как заговорить по-испански за 70 часов",
    excerpt: "Для минимального уровня испанского языка обычно требуется знать около 500 различных слов. Это включает базовую лексику и фразы.",
    category: "Язык",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800",
    date: "21 Сен 2023",
    readTime: "6 мин"
  },
  {
    id: 5,
    title: "Лучшие международные школы в Испании",
    excerpt: "Топ-10 международных школ Испании, которые отличаются высоким уровнем преподавания и разнообразием академических программ.",
    category: "Рейтинги",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    date: "15 Сен 2023",
    readTime: "8 мин"
  },
  {
    id: 6,
    title: "Сколько в среднем стоит обучение в Испании?",
    excerpt: "Обзор цен на обучение в государственных и частных вузах, расходы на проживание и питание для иностранного студента.",
    category: "Финансы",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=800",
    date: "01 Сен 2023",
    readTime: "3 мин"
  }
];

const BlogHero = () => (
  <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
    <div className="absolute inset-0 bg-[#020617]"></div>
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[120px]"></div>
    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px]"></div>
    
    <div className="container mx-auto px-6 relative z-10 text-center">
      <RevealOnScroll>
        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-cyan-400 text-sm mb-8">
          <BookOpen className="w-4 h-4" />
          <span>База знаний Space EDU</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
          БЛОГ ОБ ОБРАЗОВАНИИ
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-10">
          Советы экспертов, гайды по поступлению и истории успеха наших студентов.
        </p>
        
        {/* Search Bar */}
        <div className="max-w-xl mx-auto relative group">
          <input 
            type="text" 
            placeholder="Найти статью..." 
            className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-6 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
          />
          <button className="absolute right-2 top-2 p-2 bg-cyan-500 rounded-full text-white hover:bg-cyan-400 transition-colors cursor-pointer">
            <Search size={20} />
          </button>
        </div>
      </RevealOnScroll>
    </div>
  </section>
);

const BlogGrid = () => {
  const [activeCategory, setActiveCategory] = useState("Все");
  const categories = ["Все", "Образование", "Школа", "Документы", "Язык", "Рейтинги", "Финансы"];

  const filteredPosts = activeCategory === "Все" 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  return (
    <section className="py-20 bg-[#020617]">
      <div className="container mx-auto px-6">
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                activeCategory === cat 
                  ? "bg-cyan-500 text-white" 
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <RevealOnScroll key={post.id}>
              <Link href="#" className="group block bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all h-full flex flex-col">
                <div className="relative h-60 overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1">
                    <Tag size={12} className="text-cyan-400" />
                    {post.category}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold mt-auto group/link">
                    Читать далее
                    <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <BlogHero />
      <BlogGrid />
      <Contact />
      <Footer />
    </div>
  );
}
