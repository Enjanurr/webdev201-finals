import React from 'react';
import Separator from './Separator';
import Badge from './Badge';
const Hero = () => {
  return (
    <section className="h-[80vh] xl:h-screen relative text-write">
      <div className="bg-hero_overlay absolute w-full h-full z-10 bg-primary/[0.93]"></div>
      <video
        autoPlay
        loop    
        muted
        className="absolute top-0 w-full h-full object-cover"
      >
        <source src="/assets/hero/lib.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className="container mx-auto h-full flex flex-col xl:flex-row items-center 
  z-30 relative"
      >
        <div
          data-scroll
          data-scroll-speed="0.4"
          className="flex-1 flex flex-col text-center justify-center items-center 
    xl:pb-12 gap-10 h-full"
        >
          <div className="flex flex-col items-center">
           <Badge containerStyles="hidden md:flex  xl:w-[180px] xl:h-[180px]" /> 
            <h1 className="h1 text-white mt-12">
              <span className="text-accent">Read</span> with Joy
            </h1>
          </div>
          <Separator />
          <p className="lead font-light text-white max-w-[300px] md:max-w-[430px] xl:max-w-[560px] mb-4">
          Immerse yourself in the joy of reading in our cozy library, where every book opens a world of knowledge and imagination.
          </p>
          <button className="btn"><a href='#Book'>Our Books</a></button>
        </div>
      </div> 
    </section>
  );
};

export default Hero;
