import React from 'react';
import Separator from './Separator';
import BookItem from './BookItem';
const books = [
  { imgSrc: '/assets/menu/book-1.svg', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { imgSrc: '/assets/menu/book-2.svg', title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { imgSrc: '/assets/menu/book-3.svg', title: '1984', author: 'George Orwell' },
  { imgSrc: '/assets/menu/book-4.svg', title: 'Pride and Prejudice', author: 'Jane Austen' },
  { imgSrc: '/assets/menu/book-5.svg', title: 'Moby-Dick', author: 'Herman Melville' },
  { imgSrc: '/assets/menu/book-1.svg', title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { imgSrc: '/assets/menu/book-2.svg', title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
  { imgSrc: '/assets/menu/book-3.svg', title: "Harry Potter and the Sorcerer's Stone", author: 'J.K. Rowling' },
  { imgSrc: '/assets/menu/book-4.svg', title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
  { imgSrc: '/assets/menu/book-5.svg', title: 'Brave New World', author: 'Aldous Huxley' },
];
const Books = () => {
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
        
        <div className="flex flex-col items-center gap-12 xl:gap-24">
          <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-16 place-content-center">
            {books.map((book, index) => {
              const { title, author,imgSrc } = book;
              return (
                <BookItem
                  key={index}
                  title={book.title}
                  author={book.author}
                  imgSrc={book.imgSrc}
                />
              );
            })}
          </div>
          <button className="btn"><a href="/ourBooks">Browse our Collection</a></button>
        </div>
      </div>
    </section>
  );
};

export default Books;