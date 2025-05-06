
import React from 'react';
import { Code, LifeBuoy, Rocket, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    title: "Responsive Design",
    description: "Websites that look and function beautifully across all devices, from desktops to smartphones.",
    icon: <Code className="text-gold" size={24} />
  },
  {
    title: "High Performance",
    description: "Lightning-fast load times and smooth interactions for an exceptional user experience.",
    icon: <Rocket className="text-gold" size={24} />
  },
  {
    title: "SEO Optimization",
    description: "Built-in best practices that help your site rank higher in search engine results.",
    icon: <Search className="text-gold" size={24} />
  },
  {
    title: "Ongoing Support",
    description: "Dedicated assistance and maintenance to keep your website running flawlessly.",
    icon: <LifeBuoy className="text-gold" size={24} />
  }
];

const Features = () => {
  return (
    <section className="section-padding" id="features">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl mb-4">Premium <span className="text-gold">Features</span></h2>
          <p className="max-w-2xl mx-auto">
            Every website we build comes with these essential capabilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "glass-card p-6 animate-fade-in-up",
                "hover:border-gold/30 transition-all duration-300"
              )}
              style={{ animationDelay: `${0.15 * index}s` }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl mb-3 text-white">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
