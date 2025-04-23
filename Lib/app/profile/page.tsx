'use client'

import Separator from '@/components/Separator';
import { FaUserCircle } from 'react-icons/fa';
import ReturnBook from '@/components/ReturnBook';
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import { useRouter } from 'next/navigation';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

interface Book {
  _id: string;
  imgSrc: string;
  title: string;
  author: string;
  description: string;
  isAvailable: boolean;
}

export default function Profile() {
  const [books, setBooks] = useState<Book[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  const [redirectMessage, setRedirectMessage] = useState<string>('');
  const router = useRouter();

  const logoutHandler = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/auth/logout`, {
        method: 'POST',
        credentials: 'include',
      });

      if (res.ok) {
        router.push('/auth/login');
      } else {
        console.error("Logout failed");
      }
    } catch (err) {
      console.error("Error logging out:", err);
    }
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/home/borrowed`, {
          credentials: 'include',
          cache: "no-store",
        });

        if (res.status === 401) {
          // Token expired or user not logged in
          setIsAuthenticated(false);
          setRedirectMessage("Session expired. Redirecting to login...");

          setTimeout(() => {
            router.push('/auth/login');
          }, 2000);

          return;
        }

        if (!res.ok) throw new Error("Failed to fetch books");

        const data = await res.json();
        setBooks(data.books);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [router]);

  return (
    <section className="w-full h-full pb-20">
      {/* Header */}
      <div className="bg-primary h-28 flex items-center px-4 xl:px-16">
        <Header />
      </div>

      {/* Main Content */}
      <div className="container mx-auto flex flex-col min-h-screen py-8">
        {/* Profile Card */}
        <div className="w-full flex flex-col items-center px-4 mb-12">
          <h2 className="text-4xl font-bold mb-8 text-white">Profile</h2>
          <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-6 sm:p-8 w-full max-w-3xl flex flex-col sm:flex-row items-center gap-6">
            
            {/* Avatar */}
            <FaUserCircle size={100} className="text-gray-700 dark:text-gray-300" />

            {/* Info */}
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">John Doe</h1>
              <p className="text-gray-600 dark:text-gray-400 text-base">john.doe@example.com</p>
              <p className="text-sm mt-1 text-gray-500 dark:text-gray-500">Member since: January 2024</p>
            </div>

            {/* Logout Button */}
            {isAuthenticated && (
              <div className="mt-4 sm:mt-0">
                <button
                  onClick={logoutHandler}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Redirect Message */}
          {redirectMessage && (
            <p className="text-red-500 mt-4 text-center">{redirectMessage}</p>
          )}
        </div>

        {/* Separator */}
        <div className="px-4 mb-8">
          <Separator bg="accent" />
        </div>

        {/* Books */}
        {isAuthenticated && (
          <div className="w-full flex flex-col items-center text-white px-4">
            <h2 className="h2 mb-6">Books</h2>

            <div className="mb-6 w-full">
              <Separator bg="accent" />
            </div>

            {books.length > 0 ? (
              <div className="w-full grid sm:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-4 place-content-center mt-14">
                {books.map((book) => (
                  <HoverCard key={book._id}>
                    <HoverCardTrigger>
                      <ReturnBook
                        book_id={book._id}
                        title={book.title}
                        author={book.author}
                        imgSrc={book.imgSrc}
                      />
                    </HoverCardTrigger>
                    <HoverCardContent className="bg-white dark:bg-zinc-900 p-4 rounded-md shadow-lg max-w-xs text-sm text-zinc-800 dark:text-zinc-200">
                      <p className="uppercase font-primary font-semibold text-[22px] leading-none text-primary">
                        {book.title}
                      </p>
                      {book.description}
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            ) : (
              <div className="flex justify-center items-center w-full h-40">
                <p className="text-center text-xl text-gray-300">
                  No borrowed books at the moment.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
