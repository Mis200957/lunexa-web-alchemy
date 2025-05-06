
import React from 'react';

const Mission = () => {
  return (
    <section className="section-padding bg-navy-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-purple-400/10 blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-purple-400/10 blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-2xl md:text-4xl mb-8 animate-fade-in-up">Our <span className="text-purple-400">Mission</span></h2>
        <p className="text-xl md:text-2xl leading-relaxed mb-8 text-white/90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          To empower innovative businesses with digital experiences that 
          captivate, convert, and create lasting impressions.
        </p>
        <p className="text-lg text-white/70 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          We believe in the power of thoughtful design and clean code to transform 
          how businesses connect with their audience online. Every pixel and line of 
          code serves a purpose in telling your unique story.
        </p>
      </div>
    </section>
  );
};

export default Mission;
