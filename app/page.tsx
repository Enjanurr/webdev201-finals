'use client';
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Explore from '@/components/Explore';
import About from '@/components/About';
import Menu from '@/components/Menu';
import Testimonials from '@/components/Testimonials';


const Home = () => {
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    };
    loadLocomotiveScroll();
  }, []);
  return (
    <div className="h-full overflow-x-hidden">
      <Hero />
      <Explore />
      <About />
      <Menu />
      <Testimonials />
      <div className="h-[4800px]"></div>
    </div>
  );
};

export default Home