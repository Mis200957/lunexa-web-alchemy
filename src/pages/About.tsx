
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 md:px-10 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl mb-6 animate-fade-in-up">
              About <span className="text-gold">Lunexa</span>
            </h1>
            <p className="text-lg text-white/70 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              A web development studio focused on creating exceptional digital experiences
              that elevate brands and drive business growth.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-4 md:px-10 lg:px-24 bg-navy-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-2xl md:text-3xl mb-6">Our <span className="text-gold">Story</span></h2>
              <p className="text-white/70 mb-4">
                Lunexa was founded in 2018 by a team of designers and developers passionate 
                about creating websites that stand out in a crowded digital landscape.
              </p>
              <p className="text-white/70 mb-4">
                What started as a small freelance operation quickly evolved into a full-service 
                web development studio working with ambitious startups and established brands 
                across various industries.
              </p>
              <p className="text-white/70">
                Today, we're proud to have helped dozens of businesses transform their online 
                presence and achieve meaningful results through thoughtful design and clean code.
              </p>
            </div>
            <div className="glass-card overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4" 
                alt="Lunexa Team" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 md:px-10 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-4xl mb-4 animate-fade-in-up">Our <span className="text-gold">Values</span></h2>
              <p className="max-w-2xl mx-auto text-white/70 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                These core principles guide our approach to every project
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Excellence",
                  description: "We obsess over the details, believing that the difference between good and exceptional is found in the small touches."
                },
                {
                  title: "Transparency",
                  description: "Clear communication and honest feedback are essential to building trust and creating successful partnerships."
                },
                {
                  title: "Innovation",
                  description: "We continuously explore new technologies and approaches to create cutting-edge digital experiences."
                }
              ].map((value, index) => (
                <div 
                  key={index}
                  className="glass-card p-8 animate-fade-in-up"
                  style={{ animationDelay: `${0.3 + (0.15 * index)}s` }}
                >
                  <h3 className="text-xl mb-4 text-gold">{value.title}</h3>
                  <p className="text-white/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 md:px-10 lg:px-24 bg-navy-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-4xl mb-4">Meet The <span className="text-gold">Team</span></h2>
              <p className="max-w-2xl mx-auto text-white/70">
                The talented individuals behind Lunexa's success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Alex Morgan",
                  role: "Founder & Creative Director",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                },
                {
                  name: "Jordan Chen",
                  role: "Lead Developer",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
                },
                {
                  name: "Taylor Reed",
                  role: "UI/UX Designer",
                  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                },
                {
                  name: "Sam Williams",
                  role: "Project Manager",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                }
              ].map((member, index) => (
                <div 
                  key={index}
                  className="glass-card overflow-hidden text-center animate-fade-in-up"
                  style={{ animationDelay: `${0.2 * index}s` }}
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl mb-1">{member.name}</h3>
                    <p className="text-gold">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
