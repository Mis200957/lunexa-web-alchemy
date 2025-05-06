
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const blogPosts = [
  {
    id: 1,
    title: "Essential UX Principles Every Developer Should Know",
    excerpt: "Understanding key UX concepts can dramatically improve how users interact with your web applications...",
    image: "https://images.unsplash.com/photo-1540349220179-09d3866f2e74",
    date: "May 2, 2023",
    category: "Design",
    author: "Alex Morgan"
  },
  {
    id: 2,
    title: "The Future of Web Development: What to Expect in 2024",
    excerpt: "From AI-driven development to advanced no-code tools, the landscape of web development continues to evolve rapidly...",
    image: "https://images.unsplash.com/photo-1607798748738-b15c40d33d57",
    date: "April 15, 2023",
    category: "Technology",
    author: "Jordan Chen"
  },
  {
    id: 3,
    title: "Optimizing Website Performance: A Complete Guide",
    excerpt: "Learn how to identify performance bottlenecks and implement proven optimization techniques for faster load times...",
    image: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667",
    date: "March 28, 2023",
    category: "Performance",
    author: "Sam Williams"
  },
  {
    id: 4,
    title: "Designing for Accessibility: Best Practices",
    excerpt: "Creating inclusive web experiences isn't just a legal requirement—it's a crucial aspect of modern web development...",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    date: "February 19, 2023",
    category: "Accessibility",
    author: "Taylor Reed"
  }
];

const Blog = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 md:px-10 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl mb-6 animate-fade-in-up">
              Our <span className="text-gold">Blog</span>
            </h1>
            <p className="text-lg text-white/70 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Insights, tutorials, and thoughts on web development, design, and technology
            </p>
          </div>
        </section>

        {/* Featured Post Section */}
        <section className="pb-16 px-4 md:px-10 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="glass-card overflow-hidden grid grid-cols-1 md:grid-cols-2 animate-fade-in-up">
              <div className="h-full">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col">
                <div className="mb-4">
                  <span className="text-gold text-sm">{blogPosts[0].category}</span>
                  <span className="text-white/40 mx-2">•</span>
                  <span className="text-white/40 text-sm">{blogPosts[0].date}</span>
                </div>
                <h2 className="text-2xl mb-4">{blogPosts[0].title}</h2>
                <p className="text-white/70 mb-6 flex-grow">{blogPosts[0].excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-white/60">By {blogPosts[0].author}</span>
                  <Link to={`/blog/${blogPosts[0].id}`} className="text-gold hover:underline">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid Section */}
        <section className="pb-24 px-4 md:px-10 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl mb-8">Latest <span className="text-gold">Articles</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <div 
                  key={post.id}
                  className="glass-card overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${0.2 * index}s` }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="text-gold text-sm">{post.category}</span>
                      <span className="text-white/40 mx-2">•</span>
                      <span className="text-white/40 text-sm">{post.date}</span>
                    </div>
                    <h3 className="text-xl mb-3">{post.title}</h3>
                    <p className="text-white/70 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-white/60 text-sm">By {post.author}</span>
                      <Link to={`/blog/${post.id}`} className="text-gold hover:underline text-sm">
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="pb-24 px-4 md:px-10 lg:px-24 bg-navy-50">
          <div className="max-w-3xl mx-auto text-center py-16">
            <h2 className="text-2xl md:text-3xl mb-4">Stay <span className="text-gold">Updated</span></h2>
            <p className="text-white/70 mb-8">
              Subscribe to our newsletter to receive the latest articles and updates
            </p>
            
            <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow bg-navy border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-gold"
              />
              <button type="submit" className="neumorphic-btn text-gold whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
