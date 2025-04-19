import React from 'react';
import Image from "next/image";
  //import Image from "next/legacy/image";

interface BadgeProps {
  containerStyles?: string; // Define as a string (optional)
}

const Badge =({ containerStyles = '' }: BadgeProps) => {
  return (
    <div className={`relative ${containerStyles}`}>
      <Image src="/assets/badge-1.svg" fill alt="" className="object-contain" />
    </div>
  );
};

export default Badge;
