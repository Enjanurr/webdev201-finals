  'use client'

  import React, { useEffect, useState } from 'react';
  import { useRouter } from 'next/navigation';
  import Separator from '@/components/Separator';
  import OurBook from '@/components/OurBooks';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import { Navigation } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/react';
  import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card";
  import Header from '@/components/Header';

  interface Book {
    imgSrc: string;
    title: string;
    author: string;
    description: string;
    isAvailable: boolean;
  }

  const count = (arr: any[], size: number): any[][] => {
    const chunks: any[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  export default function OurBooksSection() {
    const router = useRouter();
    
    const handleClick = ()=>{
    
      router.push("/");
    }
    const [books, setBooks] = useState<Book[]>([]);
    const [borrowed, setBorrowed] = useState<{ [title: string]: boolean }>({});
  

    useEffect(() => {
      const fetchBooks = async () => {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/home/getAllBooks`, {
            cache: "no-store",
          });
        

          if (!res.ok) throw new Error("Failed to fetch books");

          const data = await res.json();
          setBooks(data);
        } catch (error) {
          console.error("Error fetching books:", error);
        }
      };

      fetchBooks();
    }, []);

    const handleBorrow = (title: string) => {
      setBorrowed((prev) => ({
        ...prev,
        [title]: true,
      }));
    };

    const bookChunks = count(books, 12);

    return (
      <section className=" pb-16  xl:mb-36">
    {/* Header Wrapper */}
    <div className="bg-primary h-28 flex items-center px-4 xl:px-16">
      <Header />
    </div>

    {/* Main Content */}
    <div className="container mx-auto relative mt-16">
      <div className="flex flex-col gap-4 mb-12 xl:mb-24">
        <h2 className="h2 text-center mt-6">Our Books</h2>
        <div className="mb-4">
          <Separator bg="accent" />
        </div>
        <p className="text-center max-w-[620px] mx-auto">
          Discover a diverse collection of books across various genres, from timeless classics to the latest bestsellers.
        </p>
      </div>

      <Swiper navigation={true} modules={[Navigation]}>
        {bookChunks.map((group, idx) => (
          <SwiperSlide key={idx} className="w-full h-full px-4 py-8 xl:px-16 xl:py-16">
            <div className="flex flex-col items-center gap-12 xl:gap-24 px-4">
              <div className="w-full grid sm:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-1 place-items-center">
                {group.map((book) => (
                  <HoverCard key={book.title}>
                    <HoverCardTrigger>
                      <OurBook
                        book_id={book._id}
                        title={book.title}
                        author={book.author}
                        imgSrc={book.imgSrc}
                        isAvailable={book.isAvailable}
                       
                      />
                    </HoverCardTrigger>
                    <HoverCardContent className="bg-white dark:bg-zinc-900 p-4 rounded-md shadow-lg max-w-xs text-sm text-zinc-800 dark:text-zinc-200">
                      <p className="uppercase font-primary font-semibold text-[22px] leading-none text-primary">{book.title}</p>
                      {book.description}
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center mt-8">
        <button className="btn" onClick={handleClick}>
          View popular Books
        </button>
      </div>
    </div>
  </section>

    );
  }
