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
    imgSrc: '/assets/book/the great gatsby.svg',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
  },
  {
    imgSrc: '/assets/book/to kill a mocking bird.svg',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
  }, //
  { imgSrc: '/assets/book/1984.svg', title: '1984', author: 'George Orwell' },
  {
    imgSrc: '/assets/book/pride and prejudice.svg',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
  }, //
  {
    imgSrc: '/assets/book/mobydick.svg',
    title: 'Moby-Dick',
    author: 'Herman Melville',
  }, //
  {
    imgSrc: '/assets/book/the hobbit.svg',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
  }, //
  {
    imgSrc: '/assets/book/the catcher in the rye.svg',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
  }, //
  {
    imgSrc: '/assets/book/sorcerer.svg',
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
  }, //
  {
    imgSrc: '/assets/book/the lord of the rings.svg',
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
  }, //
  {
    imgSrc: '/assets/book/the brave new world.svg',
    title: 'Brave New World',
    author: 'Aldous Huxley',
  },//
  {
    imgSrc: '/assets/book/fahrenheit.svg',
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
  },
  {
    imgSrc: '/assets/book/jane eyre.svg',
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
  },
  {
    imgSrc: '/assets/book/wuthering the heights.svg',
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
  },
  {
    imgSrc: '/assets/book/the chronicles.svg',
    title: 'The Chronicles of Narnia',
    author: 'C.S. Lewis',
  },
  {
    imgSrc: '/assets/book/frankenstein.svg',
    title: 'Frankenstein',
    author: 'Mary Shelley',
  },
  {
    imgSrc: '/assets/book/dracula.svg',
    title: 'Dracula',
    author: 'Bram Stoker',
  },
  {
    imgSrc: '/assets/book/dorian gray.svg',
    title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
  },
  {
    imgSrc: '/assets/book/crime and punishment.svg',
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
  },
  {
    imgSrc: '/assets/book/brothers.svg',
    title: 'The Brothers Karamazov',
    author: 'Fyodor Dostoevsky',
  },
  {
    imgSrc: '/assets/book/old man.svg',
    title: 'The Old Man and the Sea',
    author: 'Ernest Hemingway',
  },
  {
    imgSrc: '/assets/book/grapes of wrath.svg',
    title: 'The Grapes of Wrath',
    author: 'John Steinbeck',
  },
  {
    imgSrc: '/assets/book/of mice.svg',
    title: 'Of Mice and Men',
    author: 'John Steinbeck',
  },
  {
    imgSrc: '/assets/book/slaugherhouse-Five.svg',
    title: 'Slaughterhouse-Five',
    author: 'Kurt Vonnegut',
  },
  {
    imgSrc: '/assets/book/alchemist.svg',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
  },
  {
    imgSrc: '/assets/book/life of pi.svg',
    title: 'Life of Pi',
    author: 'Yann Martel',
  },
  {
    imgSrc: '/assets/book/the kite runner.svg',
    title: 'The Kite Runner',
    author: 'Khaled Hosseini',
  },
  {
    imgSrc: '/assets/book/splendid suns.svg',
    title: 'A Thousand Splendid Suns',
    author: 'Khaled Hosseini',
  },
  {
    imgSrc: '/assets/book/book thief.svg',
    title: 'The Book Thief',
    author: 'Markus Zusak',
  },
  {
    imgSrc: '/assets/book/the road.svg',
    title: 'The Road',
    author: 'Cormac McCarthy',
  },
  {
    imgSrc: '/assets/book/norweigan wood.svg',
    title: 'Norwegian Wood',
    author: 'Haruki Murakami',
  },
  {
    imgSrc: '/assets/book/kafka.svg',
    title: 'Kafka on the Shore',
    author: 'Haruki Murakami',
  },
  {
    imgSrc: '/assets/book/the bell jar.svg',
    title: 'The Bell Jar',
    author: 'Sylvia Plath',
  },
  {
    imgSrc: '/assets/book/never let me go.svg',
    title: 'Never Let Me Go',
    author: 'Kazuo Ishiguro',
  },
  {
    imgSrc: '/assets/book/the stranger.svg',
    title: 'The Stranger',
    author: 'Albert Camus',
  },
  {
    imgSrc: '/assets/book/eleanor.svg',
    title: 'Eleanor',
    author: 'Jason Gurley',
  },
  {
    imgSrc: '/assets/book/star girl.svg',
    title: 'Stargirl',
    author: 'Jerry Spinelli',
  }
  
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
  const bookChunks = count(books, 12);
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
        <div className="bg-black"></div>
        <Swiper navigation={true} modules={[Navigation]} className="">
          {bookChunks.map((group, idx) => (
            <SwiperSlide key={idx} className="w-full h-full p-16">
              <div className="flex flex-col items-center gap-12 xl:gap-24 px-4 ">
                <div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-y-8 gap-x-16 place-content-center">
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
        <div className=" flex justify-center">
          {' '}
          <button className="btn">
            <a href="/">View popular Books</a>
          </button>
        </div>
      </div>
    </section>
  );
}
