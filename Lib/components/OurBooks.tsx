'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Import useRouter from Next.js

interface MenuProps {
  book_id: string;
  imgSrc: string;
  title: string;
  author: string;
  isAvailable: boolean;
}

const OurBook: React.FC<MenuProps> = ({
  book_id,
  imgSrc,
  title,
  author,
  isAvailable,
}) => {
  const [isBorrowed, setIsBorrowed] = useState(!isAvailable);
  const [message, setMessage] = useState<string>(''); // State to store the message
  const router = useRouter(); // Initialize Next.js router

  const borrow = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/home/borrow`, {
        method: 'PATCH',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ book_id }),
      });

      if (!res.ok) {
        const data = await res.json();
        if (data.message === 'Token has expired') {
          // Token expired, display the message and redirect to login
          setMessage('Your session has expired. Redirecting to login...');

          // Wait for 2 seconds before redirecting
          setTimeout(() => {
            router.push('/auth/login');
          }, 2000); // Redirect after 2 seconds
        } else {
          throw new Error('Failed to borrow the book');
        }
      } else {
        const data = await res.json();
        console.log('Borrowed book:', data);
        setIsBorrowed(true);
      }
    } catch (error) {
      console.log('Failed to fetch the book', error);
      setMessage(
        'An error occurred while borrowing the book. Please try again.'
      );
    }
  };

  return (
    <div className="flex flex-col items-center text-center gap-4 p-4 rounded-lg max-w-sm w-full">
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
        <div>
          {/* Show message with space above the button */}
          <div className="h-4">
            {message && (
              <p className="text-red-500 text-sm font-semibold">{message}</p>
            )}
          </div>
          <button className="btn mt-4" onClick={borrow} disabled={isBorrowed}>
            {isBorrowed ? 'Borrowed' : 'Borrow'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurBook;
