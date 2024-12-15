/*'use client';
import React from 'react';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Badge from './Badge';

const data = [
  {
    imgSrc: '/assets/about/photo-1.jpg',
    title: 'Our Journey',
    description:
      "Founded in 2000, Zenbrew started as a small café with a vision for exceptional coffee. Now a beloved brand, we're known for quality and sustainability. Driven by passion, we create memorable coffee experiences. Join us in exploring coffee, one cup at a time.",
  },
  {
    imgSrc: '/assets/about/photo-2.jpg',
    title: 'Our Promise',
    description:
      'At Zenbrew, we promise the finest coffee with a positive impact. We source beans from sustainable farms, respecting people and the planet. Our meticulous roasting ensures a rich, satisfying experience. We are committed to quality, sustainability, and community.',
  },
  {
    imgSrc: '/assets/about/photo-3.jpg',
    title: 'Our Team',
    description:
      'At Zenbrew, our dedicated team is behind every great cup. Our skilled baristas and expert roasters work with passion and precision, making each coffee experience special. Meet the people who bring creativity and care to every cup and learn their unique stories.',
  },
];

const About = () => {
  const scrollableSectionRef = useRef(null);
  const scrollTriggerRef = useRef(null);
  return (
    <section className="overflow-hidden bg-primary">
      <div ref={scrollTriggerRef}>
        <div ref={scrollableSectionRef}>
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="w-screen h-screen flex flex-col justify-center items-center relative"
              >
                <div className="container mx-auto">
                  <div className="flex gap-[30px] relative">
                    <div className="flex-1 flex-col justify-center items-center">
                      <Badge containerStyles="w-[180px] h-[180px]" />
                      <div>
                        <h2 className='h2 text-white mb-4'>{item.title}</h2>
                      </div>
                    </div>
                    <div className='hidden xl:flex flex-1 w-full h-[70vh] relative'>image</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
*/

import React from 'react'

const About = () => {
  return <h1>hello world</h1>
}

export default About
