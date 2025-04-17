'use client';
import React from 'react';
import Separator from '@/components/Separator';
import BookItem from '@/components/BookItem';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const books = [
  {
    imgSrc: '/assets/menu/book-1.svg',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
  },
  {
    imgSrc: '/assets/menu/book-2.svg',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
  },
  { imgSrc: '/assets/menu/book-3.svg', title: '1984', author: 'George Orwell' },
  {
    imgSrc: '/assets/menu/book-4.svg',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
  },
  {
    imgSrc: '/assets/menu/book-5.svg',
    title: 'Moby-Dick',
    author: 'Herman Melville',
  },
  {
    imgSrc: '/assets/menu/book-1.svg',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
  },
  {
    imgSrc: '/assets/menu/book-2.svg',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
  },
  {
    imgSrc: '/assets/menu/book-3.svg',
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
  },
  {
    imgSrc: '/assets/menu/book-4.svg',
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
  },
  {
    imgSrc: '/assets/menu/book-5.svg',
    title: 'Brave New World',
    author: 'Aldous Huxley',
  },
  {
    imgSrc: '/assets/menu/book-1.svg',
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
  },
  {
    imgSrc: '/assets/menu/book-2.svg',
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
  },
  {
    imgSrc: '/assets/menu/book-3.svg',
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
  },
  {
    imgSrc: '/assets/menu/book-4.svg',
    title: 'The Chronicles of Narnia',
    author: 'C.S. Lewis',
  },
  {
    imgSrc: '/assets/menu/book-5.svg',
    title: 'Frankenstein',
    author: 'Mary Shelley',
  },
  {
    imgSrc: '/assets/menu/book-1.svg',
    title: 'Dracula',
    author: 'Bram Stoker',
  },
  {
    imgSrc: '/assets/menu/book-2.svg',
    title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
  },
  {
    imgSrc: '/assets/menu/book-3.svg',
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
  },
  {
    imgSrc: '/assets/menu/book-4.svg',
    title: 'The Brothers Karamazov',
    author: 'Fyodor Dostoevsky',
  },
  {
    imgSrc: '/assets/menu/book-5.svg',
    title: 'The Old Man and the Sea',
    author: 'Ernest Hemingway',
  },
  {
    imgSrc: '/assets/menu/book-1.svg',
    title: 'The Grapes of Wrath',
    author: 'John Steinbeck',
  },
  {
    imgSrc: '/assets/menu/book-2.svg',
    title: 'Of Mice and Men',
    author: 'John Steinbeck',
  },
  {
    imgSrc: '/assets/menu/book-3.svg',
    title: 'Slaughterhouse-Five',
    author: 'Kurt Vonnegut',
  },
  {
    imgSrc: '/assets/menu/book-4.svg',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
  },
  {
    imgSrc: '/assets/menu/book-5.svg',
    title: 'Life of Pi',
    author: 'Yann Martel',
  },
  {
    imgSrc: '/assets/menu/book-1.svg',
    title: 'The Kite Runner',
    author: 'Khaled Hosseini',
  },
  {
    imgSrc: '/assets/menu/book-2.svg',
    title: 'A Thousand Splendid Suns',
    author: 'Khaled Hosseini',
  },
  {
    imgSrc: '/assets/menu/book-3.svg',
    title: 'The Book Thief',
    author: 'Markus Zusak',
  },
  {
    imgSrc: '/assets/menu/book-4.svg',
    title: 'The Road',
    author: 'Cormac McCarthy',
  },
  {
    imgSrc: '/assets/menu/book-5.svg',
    title: 'Norwegian Wood',
    author: 'Haruki Murakami',
  },
];

interface bookbyfive {
  arr: String;
  size: number;
}

const count = (arr: any[], size: number): any[][] => {
  const chunks: any[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};
export default function ourBook() {
  const bookChunks = count(books, 10);
  return (
    <section className="pt-12 pb-16 xl:pt-16 xl:mb-36">
      <div className="container mx-auto relative">
        <div className="flex flex-col gap-4 mb-12 xl:mb-24">
          <h2 className="h2 text-center">Our Books</h2>
          <div className="mb-4 bg-blue">
            <Separator bg="accent" />
          </div>
          <p className="text-center max-w-[620px] mx-auto">
            Discover a diverse collection of books across various genres, from
            timeless classics to the latest bestsellers.
          </p>
        </div>
        <div className='bg-black'></div>
        <Swiper navigation={true} modules={[Navigation]} className="">
          {bookChunks.map((group, idx) => (
            <SwiperSlide key={idx} className="w-full h-full p-16">
              <div className="flex flex-col items-center gap-12 xl:gap-24 px-4 ">
                <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-16 place-content-center">
                  {group.map((book, index) => (
                    <BookItem
                      key={index}
                      title={book.title}
                      author={book.author}
                      imgSrc={book.imgSrc}
                    />
                  ))}
                  
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className=' flex justify-center'> <button className="btn"><a href="/">Browse our Collection</a></button></div>
      </div>
    </section>
  );
}
