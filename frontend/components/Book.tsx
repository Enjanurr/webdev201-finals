'use client'
import React from 'react';
import Separator from './Separator';
import BookItem from './BookItem';
import { useRouter } from 'next/navigation';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";



const books = [
  {
    imgSrc: '/assets/book/the great gatsby.svg',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    description: 'A tale of wealth, love, and illusion set in the Roaring Twenties, exploring the mysterious life of Jay Gatsby.'
  },
  {
    imgSrc: '/assets/book/to kill a mocking bird.svg',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    description: 'A powerful story about racial injustice and childhood innocence in the Deep South, seen through the eyes of young Scout Finch.'
  },
  {
    imgSrc: '/assets/book/1984.svg',
    title: '1984',
    author: 'George Orwell',
    description: 'A dystopian novel depicting a totalitarian regime that watches and controls every aspect of human life.'
  },
  {
    imgSrc: '/assets/book/pride and prejudice.svg',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    description: 'A romantic classic that follows Elizabeth Bennet as she navigates love, class, and societal expectations in 19th-century England.'
  },
  {
    imgSrc: '/assets/book/mobydick.svg',
    title: 'Moby-Dick',
    author: 'Herman Melville',
    description: 'An epic sea adventure following Captain Ahab’s obsessive quest to hunt the elusive white whale, Moby Dick.'
  },
  {
    imgSrc: '/assets/book/the hobbit.svg',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    description: 'Bilbo Baggins embarks on an unexpected adventure filled with dragons, dwarves, and treasure in this beloved fantasy tale.'
  },
  {
    imgSrc: '/assets/book/the catcher in the rye.svg',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    description: 'A coming-of-age story of teenage alienation and rebellion, told through the voice of the cynical Holden Caulfield.'
  },
  {
    imgSrc: '/assets/book/sorcerer.svg',
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    description: 'An ordinary boy discovers he is a wizard and enters a world of magic, mystery, and friendship at Hogwarts School.'
  },
  {
    imgSrc: '/assets/book/the lord of the rings.svg',
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    description: 'An epic saga of good versus evil as Frodo Baggins journeys to destroy a powerful ring that threatens Middle-earth.'
  },
  {
    imgSrc: '/assets/book/the brave new world.svg',
    title: 'Brave New World',
    author: 'Aldous Huxley',
    description: 'A chilling vision of a future society driven by technology, control, and the loss of individuality and emotion.'
  },
  {
    imgSrc: '/assets/book/eleanor.svg',
    title: 'Eleanor',
    author: 'Jason Gurley',
    description: 'A moving story about grief, loss, and the power of time, as a girl uncovers the secrets of her family’s past.'
  },
  {
    imgSrc: '/assets/book/star girl.svg',
    title: 'Stargirl',
    author: 'Jerry Spinelli',
    description: 'A heartwarming tale about nonconformity and kindness, as a unique girl challenges the norms of high school life.'
  }
];

//localStorage.setItem("books",JSON.stringify(books));
const Books = () => {
 const router = useRouter();
  const handleClick = ()=>{
    
    router.push("/ourBooks");
  }
  return (
    <section className="pt-12 pb-16 xl:pt-16 xl:pb-36">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 mb-12 xl:mb-24">
          <h2 className="h2 text-center">Popular Books</h2>
          <div className="mb-4">
            <Separator bg="accent" />
          </div>
          <p className="text-center max-w-[620px] mx-auto">
          Explore some of the most popular and beloved books of all time, carefully 
          selected to spark your imagination and deepen your love for reading.
          </p>
        </div>
        
       
 <div className="flex flex-col items-center gap-12 xl:gap-24 ">
          <div className='flex justify-center'>
          <div className="w-full grid sm:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-1 place-content-center ">
            {books.map((book, index) => {
              const { title, author,imgSrc } = book;
              return (
               <HoverCard key={index}>
                <HoverCardTrigger> 
                  <BookItem
                  
                  title={book.title}
                  author={book.author}
                  imgSrc={book.imgSrc}
                /></HoverCardTrigger>
              <HoverCardContent className="bg-white dark:bg-zinc-900 p-4 rounded-md shadow-lg max-w-xs text-sm text-zinc-800 dark:text-zinc-200">
              <p className="uppercase font-primary font-semibold text-[22px] leading-none text-primary">{book.title}</p>{book.description}
</HoverCardContent>

              </HoverCard>
              

              );
            })}
          </div>
          </div>
          <button className="btn" onClick={handleClick}>Browse our Collection</button> {/* onClick={handleClick} */}
        </div>      </div>
    </section>
  );
};

export default Books;
//