import React from 'react';
import Image from "next/image";
//import Image from "next/legacy/image";

interface MenuProps {
  imgSrc: string;
  title: string;
  author: string;
 // price?: number; // Make price optional
}

const BookItem: React.FC<MenuProps> = ({ imgSrc, title, author }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="relative w-[60px] h-[60px] xl:w-[72px] xl:h-[72px] rounded-full">
        <Image
          src={imgSrc}
          fill
          alt=""
          priority
          quality={100}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col flex-1 gap-2">
        <div className="flex justify-between gap-4 items-baseline">
          <p className="  uppercase font-primary font-semibold text-[22px] leading-none text-primary">
            {title}
            
          </p>
        
     
         
           <button className='btn'>Borrow</button>
        </div>
        
        <p>{author}</p>
      </div>
    </div>
  );
};

export default BookItem;
