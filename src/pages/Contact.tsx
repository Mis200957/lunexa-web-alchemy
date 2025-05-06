
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    
    // Show success message
    toast.success("Message sent successfully! We'll get back to you soon.");
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 md:px-10 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl mb-6 animate-fade-in-up">
              Get In <span className="text-gold">Touch</span>
            </h1>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Have a project in mind? Let's discuss how we can help bring your vision to life.
            </p>
          </div>
        </section>

        {/* Contact Details & Form Section */}
        <section className="pb-24 px-4 md:px-10 lg:px-24">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="md:col-span-1">
              <div className="glass-card p-8 animate-fade-in-up">
                <h2 className="text-xl mb-6 border-b border-white/10 pb-4">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin size={20} className="text-gold mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-white mb-1">Address</h3>
                      <p className="text-white/60">123 Design Avenue<br />San Francisco, CA 94103</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail size={20} className="text-gold mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-white mb-1">Email</h3>
                      <p className="text-white/60">
                        <a href="mailto:hello@lunexa.com" className="hover:text-gold">hello@lunexa.com</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone size={20} className="text-gold mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-white mb-1">Phone</h3>
                      <p className="text-white/60">
                        <a href="tel:+15555555555" className="hover:text-gold">+1 (555) 555-5555</a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h3 className="text-white mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-white/50 hover:text-gold">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-white/50 hover:text-gold">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a href="#" className="text-white/50 hover:text-gold">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="glass-card p-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <h2 className="text-xl mb-6 border-b border-white/10 pb-4">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-white/80 mb-2">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-navy-50 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-gold"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white/80 mb-2">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-navy-50 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-gold"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-white/80 mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-navy-50 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-gold"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-white/80 mb-2">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-navy-50 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-gold resize-none"
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="neumorphic-btn text-gold px-8 py-3">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="pb-24 px-4 md:px-10 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="glass-card overflow-hidden animate-fade-in-up h-[400px]">
              {/* Placeholder for map - in a real project, would embed Google Maps or similar */}
              <div className="w-full h-full bg-navy-50 flex items-center justify-center">
                <p className="text-white/50">Interactive Map Would Be Embedded Here</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
