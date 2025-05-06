
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/home/Hero';
import FeaturedIn from '../components/home/FeaturedIn';
import Testimonials from '../components/home/Testimonials';
import HowIWork from '../components/home/HowIWork';
import Features from '../components/home/Features';
import Mission from '../components/home/Mission';
import Pricing from '../components/home/Pricing';
import FAQ from '../components/home/FAQ';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedIn />
      <Testimonials />
      <HowIWork />
      <Features />
      <Mission />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
};

export default Index;
