
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center section-padding pb-10 pt-32">
      <div className="max-w-4xl mx-auto text-center">
        <h1 
          className="text-3xl md:text-5xl lg:text-6xl mb-6 animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
        >
          Crafting <span className="text-gold">Digital Experiences</span> That Elevate Brands
        </h1>
        <p 
          className="text-lg md:text-xl mb-10 opacity-70 max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          Premium web development and design for ambitious startups 
          and established brands looking to make a lasting impression online.
        </p>
        <Link 
          to="/contact" 
          className={cn(
            "neumorphic-btn text-gold text-lg inline-block animate-fade-in-up"
          )}
          style={{ animationDelay: '0.5s' }}
        >
          Get Started
        </Link>
      </div>
      
      <div 
        className="w-full max-w-5xl mt-16 glass-card overflow-hidden animate-fade-in-up"
        style={{ animationDelay: '0.7s' }}
      >
        <img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
          alt="Lunexa Featured Project" 
          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>
    </section>
  );
};

export default Hero;
