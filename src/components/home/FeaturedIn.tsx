
import React from 'react';
import { cn } from '@/lib/utils';

// Array of company names featured in
const companies = [
  'TechCrunch',
  'Forbes',
  'Wired',
  'Fast Company',
  'Inc'
];

const FeaturedIn = () => {
  return (
    <section className="py-16 bg-navy-50">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-sm uppercase tracking-widest mb-8 text-white/50">Featured in</p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {companies.map((company, index) => (
            <div 
              key={company} 
              className={cn(
                "text-2xl md:text-3xl font-light text-white/30 hover:text-purple-400 transition-colors duration-300",
                "animate-fade-in"
              )}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
