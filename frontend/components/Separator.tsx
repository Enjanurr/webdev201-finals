import React from 'react';
import Image from "next/image";
//import Image from "next/legacy/image";

const Separator = ({ bg = "white" }) => {
  const imgsrc =
    bg ==='accent'
      ? '/assets/separator-brown.svg'
      : '/assets/separator-white-1.svg';
  return (
    <div className="relative w-[168px] h-[26px] mx-auto">
      <Image src={imgsrc} fill alt="" />
    </div>
  );
};

export default Separator;
