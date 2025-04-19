'use client';
import React from 'react';
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from "next/image";
//import Image from "next/legacy/image";
import Badge from './Badge';
import Separator from './Separator';

//dummy data
const data = [
  {
    imgSrc: '/assets/about/book-1.jpg', // Keeping the placeholder image for now
    title: 'Our Mission',
    description:
      'At Zenith Library, we believe in the power of knowledge. Our mission is to provide access to books, research materials, and digital resources to inspire learning and personal growth for everyone.',
  },
  {
    imgSrc: '/assets/about/book-2.jpg',
    title: 'Our Collection',
    description:
      'With a vast collection of books, journals, and digital archives, we cater to readers of all ages. From classic literature to modern research, we strive to make knowledge accessible to all.',
  },
  {
    imgSrc: '/assets/about/book-3.jpg',
    title: 'Our Community',
    description:
      'Zenith Library is more than just books—it’s a place for community, creativity, and collaboration. We host events, workshops, and reading programs to bring people together through the love of learning.',
  },
  {
    imgSrc: '/assets/about/book-4.jpg', // Reusing an image for now
    title: 'Our Future',
    description:
      'We are committed to innovation and expanding our digital resources. Our goal is to embrace technology and continue serving as a hub of knowledge for generations to come.',
  },
];

const About = () => {
  const scrollableSectionRef = useRef(null);
  const scrollTriggerRef = useRef(null);
    
//gsap scroll effect in the about section
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const animation = gsap.fromTo(
      scrollableSectionRef.current,
      { translateX: 0 },
      {
        translateX: '-200vw',
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: scrollTriggerRef.current,
          start: 'top top',
          end: '1800vw top',
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      animation.kill();
    };
  }, []);
  return (
    <section className="overflow-hidden bg-primary">
      <div ref={scrollTriggerRef}>
        <div
          ref={scrollableSectionRef}
          className="h-screen w-[300vw] flex relative"
        >
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="w-screen h-screen flex flex-col justify-center items-center relative"
              >
                <div className="container mx-auto">
                  <div className="flex gap-[30px] relative">
                    <div className="flex-1 flex flex-col justify-center items-center">
                      <Badge containerStyles="w-[180px] h-[180px]" />
                      <div className="max-w-[560px] text-center">
                        <h2 className="h2 text-white mb-4">
                          <span className="mr-4">
                            {item.title.split(' ')[0]}
                          </span>
                          <span className="text-accent">
                            {item.title.split(' ')[1]}
                          </span>
                        </h2>
                        <div className="mb-8">
                          <Separator />
                        </div>
                        <p className="leading-relaxed mb-14 px-8 xl:px-0 text-white">
                          {item.description}
                        </p>
                        <button className="btn">See more</button>
                      </div>
                    </div>
                    <div className="hidden xl:flex flex-1 w-full h-[70vh] relative">
                      <Image
                        src={item.imgSrc}
                        fill
                        className="object-cover"
                        quality={100}
                        priority
                        alt=""  
                      />
                    </div>
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
  