'use client';

import React, { useState } from 'react';
import Image from "next/image";

interface MenuProps {
  book_id: string;
  imgSrc: string;
  title: string;
  author: string;
  returnDate:string;
}

const ReturnBook: React.FC<MenuProps> = ({ book_id, imgSrc, title, author, returnDate }) => {
  const [isReturned, setIsReturned] = useState(false);

  const handleReturn = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/home/return`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ book_id }),
      });

      if (!res.ok) {
        throw new Error("Failed to return the book");
      }

      const data = await res.json();
      console.log("Returned book:", data);
      setIsReturned(true);
      window.location.reload();
    } catch (error) {
      console.error("Failed to return the book", error);
    }
  };

  // Format returnDate nicely
  const formattedReturnDate = new Date(returnDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="flex flex-col items-center text-center gap-4 p-4 rounded-lg max-w-sm w-full">
      <div className="relative w-[100px] h-[135px] xl:w-[100px] xl:h-[150px]">
        <Image src={imgSrc} fill alt="" priority quality={100} className="object-cover" />
      </div>
      <div className="flex flex-col flex-1 gap-2">
        <div className="flex justify-center items-center gap-4">
          <p className="uppercase font-primary font-semibold text-[22px] leading-none text-primary">
            {title}
          </p>
        </div>
        <p>{author}</p>

        {/* 👇 The simple return warning */}
        <p className="text-yellow-600 font-semibold">
          Return the book before {formattedReturnDate}
        </p>

        <div>
          <button className="btn" onClick={handleReturn} disabled={isReturned}>
            Return
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReturnBook;
