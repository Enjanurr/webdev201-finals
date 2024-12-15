'use client';
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Explore from '@/components/Explore';

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
      <div className="h-[4800px]"></div>
    </div>
  );
};

export default Home;
