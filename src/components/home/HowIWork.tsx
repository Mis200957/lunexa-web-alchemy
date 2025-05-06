
import React from 'react';
import { cn } from '@/lib/utils';

const steps = [
  {
    title: "Understanding your needs",
    description: "We start with a deep dive into your business goals, target audience, and unique value proposition.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72"
  },
  {
    title: "Designing & developing",
    description: "Crafting a custom solution that perfectly balances aesthetics, functionality, and performance.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e"
  },
  {
    title: "Launching & optimizing",
    description: "Ensuring a smooth launch with ongoing support to continuously improve and optimize your digital presence.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  }
];

const HowIWork = () => {
  return (
    <section className="section-padding bg-navy-50" id="process">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl mb-4">The <span className="text-gold">Process</span></h2>
          <p className="max-w-2xl mx-auto">
            A methodical approach that ensures exceptional results for every project
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={cn(
                "glass-card overflow-hidden animate-fade-in-up",
                "flex flex-col h-full"
              )}
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl mb-3 text-white">{step.title}</h3>
                <p className="text-white/70 flex-1">{step.description}</p>
                <div className="mt-4 text-gold flex justify-between items-center">
                  <span className="text-4xl font-light">{index + 1}</span>
                  <div className="h-[1px] flex-1 bg-gold/30 mx-3"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
