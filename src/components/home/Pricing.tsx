
import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Try our basic services with no commitment",
    features: [
      "Standard responsive design",
      "Basic SEO optimization",
      "1 revision round",
      "7-day support"
    ],
    cta: "Get Started",
    ctaClass: "neumorphic-btn text-white/80",
    highlighted: false
  },
  {
    name: "Pro",
    price: "$1,499",
    description: "Perfect for growing businesses",
    features: [
      "Custom responsive design",
      "Advanced SEO optimization",
      "5 revision rounds",
      "30-day support",
      "Performance optimization",
      "Analytics integration"
    ],
    cta: "Choose Pro",
    ctaClass: "neumorphic-btn text-purple-400",
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "$3,999",
    description: "For established businesses with complex needs",
    features: [
      "Premium custom design",
      "Complete SEO suite",
      "Unlimited revisions",
      "365-day support",
      "Performance optimization",
      "Analytics & reporting dashboard",
      "Custom integrations",
      "Dedicated project manager"
    ],
    cta: "Contact Us",
    ctaClass: "neumorphic-btn text-white/80",
    highlighted: false
  }
];

const Pricing = () => {
  return (
    <section className="section-padding" id="pricing">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl mb-4">Transparent <span className="text-purple-400">Pricing</span></h2>
          <p className="max-w-2xl mx-auto">
            Choose the perfect plan for your business needs with no hidden fees
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={cn(
                "glass-card p-8 flex flex-col h-full relative",
                "animate-fade-in-up transition-all duration-300",
                plan.highlighted ? 
                  "border-purple-400/50 shadow-[0_0_20px_rgba(139,92,246,0.2)]" : 
                  "hover:border-white/20"
              )}
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-400 text-navy px-4 py-1 rounded-full text-sm font-medium">
                  Recommended
                </div>
              )}
              
              <h3 className="text-xl mb-2">{plan.name}</h3>
              <div className="text-3xl font-light mb-2">{plan.price}</div>
              <p className="text-white/60 mb-6">{plan.description}</p>
              
              <div className="flex-1 mb-8">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check size={18} className="text-purple-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className={plan.ctaClass}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
