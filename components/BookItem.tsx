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
    <div className="flex flex-col items-center text-center gap-4 p-4 rounded-lg max-w-sm w-ful">
   
   <div className="relative w-[100px] h-[135px] xl:w-[100px] xl:h-[150px]">

       
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
          <p className="uppercase font-primary font-semibold text-[22px] leading-none text-primary">
            {title}
            
          </p>
        
     
         
        </div>
        
        <p>{author}</p>
        <div className=''><button className='btn'>Borrow</button>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
//<button className='btn'>Borrow</button>