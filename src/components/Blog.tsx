import React from 'react';
import Container from './Container';
import SectionTitle from './SectionTitle';
import { blogPosts } from '../constants';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

const Blog = () => {
  return (
    <section id="blog" className="section-padding bg-white">
      <Container>
        <SectionTitle
          title="Latest Articles"
          subtitle="Stay updated with our latest news, success stories, and insights from our programs."
          center
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-block bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
                  <a href={`#blog/${post.id}`}>{post.title}</a>
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={14} className="mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <span className="text-sm font-medium text-gray-600">
                    By {post.author}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="#blog/all"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
          >
            View All Articles
            <ChevronRight size={16} className="ml-1" />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Blog;