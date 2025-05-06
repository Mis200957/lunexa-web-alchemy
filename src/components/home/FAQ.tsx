
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it typically take to build a website?",
    answer: "Most projects are completed within 4-6 weeks, depending on complexity and scope. We'll provide a detailed timeline during our initial consultation based on your specific requirements."
  },
  {
    question: "Do you only build websites or offer other services?",
    answer: "While our core expertise is web development, we offer complementary services including SEO optimization, performance auditing, analytics setup, and ongoing maintenance to ensure your digital presence remains effective."
  },
  {
    question: "How do we get started working together?",
    answer: "The process begins with a discovery call where we discuss your goals, timeline, and budget. From there, we'll craft a proposal tailored to your needs, and once approved, we'll kick off the project with an in-depth strategy session."
  },
  {
    question: "Do you work with clients internationally?",
    answer: "Yes! We work with clients worldwide. Our collaborative process is designed to be effective regardless of location or time zone differences."
  },
  {
    question: "What technologies do you use?",
    answer: "We select the best technology for each project, typically working with modern frameworks like React, Vue.js, and Next.js. For content management, we implement solutions like Sanity, Strapi, or WordPress depending on your specific needs."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Absolutely. We offer various support and maintenance packages to ensure your website remains secure, updated, and optimized after launch."
  }
];

const FAQ = () => {
  return (
    <section className="section-padding" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl mb-4">Frequently Asked <span className="text-gold">Questions</span></h2>
          <p className="max-w-2xl mx-auto">
            Everything you need to know about working with us
          </p>
        </div>
        
        <div className="animate-fade-in-up">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card border-0 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-white hover:text-gold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-white/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
