
import React, { useRef } from 'react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "Stellar AI",
    position: "Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    testimonial: "Working with Lunexa transformed our digital presence. Our website now perfectly captures our brand essence while delivering exceptional performance.",
    result: "Increased conversion rate by 42%"
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "NovaTech",
    position: "CTO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    testimonial: "The attention to detail and technical expertise from the Lunexa team is unmatched. They delivered a website that not only looks stunning but also performs flawlessly.",
    result: "Reduced page load time by 65%"
  },
  {
    id: 3,
    name: "Alicia Rodriguez",
    company: "Eleveight",
    position: "Marketing Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    testimonial: "The website Lunexa built for us has become our most valuable marketing asset. The design is beautiful, and the user experience is intuitive and engaging.",
    result: "Doubled online lead generation"
  },
  {
    id: 4,
    name: "David Wilson",
    company: "Quantum Finance",
    position: "CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    testimonial: "Lunexa understood our vision from day one and delivered a website that perfectly aligns with our brand values and business objectives.",
    result: "Improved customer retention by 38%"
  }
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="section-padding" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl mb-4">Client <span className="text-gold">Success Stories</span></h2>
          <p className="max-w-2xl mx-auto">
            Don't take our word for it – hear from the startups and businesses 
            we've helped transform their digital presence.
          </p>
        </div>
        
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={cn(
                "glass-card flex-shrink-0 w-full md:w-[500px] p-8 snap-center",
                "animate-fade-in-up"
              )}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-white/60">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
              <blockquote className="mb-4 italic text-white/80">"{testimonial.testimonial}"</blockquote>
              <div className="bg-gold/10 rounded-lg p-3 text-sm border border-gold/30">
                <span className="text-gold font-medium">Result:</span> {testimonial.result}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
