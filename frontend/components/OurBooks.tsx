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
  
      // Check for non-2xx HTTP responses
      if (res.status === 400) {
        const data = await res.json();
        setMessage(data.message || 'Bad request. Please check the data you provided.');
        return; // Early exit to prevent further execution
      }
  
      if (res.status === 401 || res.status === 403) {
        setMessage('You are not authorized. Redirecting to login...');
        setTimeout(() => router.push('/auth/login'), 2000);
        return;
      }
  
      if (res.redirected || res.status === 307 || res.status === 302) {
        setMessage('Session expired. Redirecting to login...');
        setTimeout(() => router.push('/auth/login'), 2000);
        return;
      }
  
      if (!res.ok) {
        const data = await res.json();
        setMessage(data.message || 'Something went wrong');
        return; // Early exit to prevent further execution
      }
  
      // If no errors, assume the request succeeded
      const data = await res.json();
      console.log('Borrowed book:', data);
      setIsBorrowed(true);
      setMessage(data.message || 'Book borrowed successfully.');
  
    } catch (error) {
      // This will only catch network or unexpected errors, not HTTP errors like 400, 401, etc.
      console.log('Error:', error);
      setMessage('An error occurred while borrowing the book. Please try again.');
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
        <div className="flex justify-center gap-4 items-center">
          <p className="uppercase font-primary font-semibold text-[22px] leading-none text-primary">
            {title}
          </p>
        </div>

        <p>{author}</p>
        <div>
          {/* Show message with space above the button */}
          <div className="h-4">
          {message && (
  <p
    className={`text-sm font-semibold ${
      message.toLowerCase().includes('error') ||
      message.toLowerCase().includes('not') ||
      message.toLowerCase().includes('unauthorized') ||
      message.toLowerCase().includes('expired')
        ? 'text-red-500'
        : 'text-green-500'
    }`}
  >
    {message}
  </p>
)}

          </div>
          <button className="btn mt-4" onClick={borrow}>
            {isBorrowed ? 'Borrowed' : 'Borrow'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurBook;
