'use client';
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import Explore from '@/components/Explore';
import About from '@/components/About';
import Menu from '@/components/Book';
import Book from '@/components/Book';
import Resume from '@/components/Resume';
import AboutUs from '@/components/Resume';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';
const Home = () => {
  const router = useRouter();

useEffect(()=>{
  //const user = localStorage.getItem("users");
  const isLoggedIn = localStorage.getItem("loggedInUser");
  if(!isLoggedIn){
    router.push("/auth/login")
  }
},[])

  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    };
    loadLocomotiveScroll();
  }, []);

  
  return (
    <div className="h-full overflow-x-hidden">
      <Header />
    <div>
    <Hero />
    </div>
      {/*  <Explore /> */}
    <div id="Book">
    <Book />
    </div>
    <div id='About'>    <About /></div>
  <div id='Resume'>
  <Resume />
  </div>
  
      <Footer />
    {/*   <div className="h-[3500px]"></div> */}
    </div>
  );
};

export default Home;
