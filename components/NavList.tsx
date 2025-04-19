import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const links = [
  { href: '/auth/login', name: 'Login' },
  
  { href: '#Resume', name: 'Resume' },
  { href: '#Book', name: 'Book' },
  { href: '#About', name: 'About' },
  { href: '/profile', name: 'profile' },
];
/*
const letterAnim = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  enter: {
    y: 0,
    transition: { duration: 1, ease: [0.75, 0, 0.23, 1], delay: 0.03 },
  },
  exit: {
    y: '100%',
    transition: { duration: 0.8, ease: [0.75, 0, 0.23, 1], delay: 0.3 },
  },
};*/

const NavList = () => {
  
  return (
    <ul
      className="flex flex-col gap-8 font-primary text-4xl font-semibold
     text-accent items-center uppercase"
    >
      {links.map((link, index) => {
        return (
          <Link
            href={link.href}
            key={index}
            className="flex overflow-hidden hover:text-white transition-all"
          >
            {link.name}
          </Link>
        );
      })}
    </ul>
  );
};

export default NavList;
