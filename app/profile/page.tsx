import Separator from '@/components/Separator';
import { FaUserCircle } from 'react-icons/fa';
import BookItem from '@/components/BookItem';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

const books = [
  {
    imgSrc: '/assets/book/the great gatsby.svg',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    description:
      'A tale of wealth, love, and illusion set in the Roaring Twenties, exploring the mysterious life of Jay Gatsby.',
  },
  {
    imgSrc: '/assets/book/to kill a mocking bird.svg',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    description:
      'A powerful story about racial injustice and childhood innocence in the Deep South, seen through the eyes of young Scout Finch.',
  },
  {
    imgSrc: '/assets/book/1984.svg',
    title: '1984',
    author: 'George Orwell',
    description:
      'A dystopian novel depicting a totalitarian regime that watches and controls every aspect of human life.',
  },
  {
    imgSrc: '/assets/book/pride and prejudice.svg',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    description:
      'A romantic classic that follows Elizabeth Bennet as she navigates love, class, and societal expectations in 19th-century England.',
  },
  {
    imgSrc: '/assets/book/mobydick.svg',
    title: 'Moby-Dick',
    author: 'Herman Melville',
    description:
      'An epic sea adventure following Captain Ahab’s obsessive quest to hunt the elusive white whale, Moby Dick.',
  },
  {
    imgSrc: '/assets/book/the hobbit.svg',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    description:
      'Bilbo Baggins embarks on an unexpected adventure filled with dragons, dwarves, and treasure in this beloved fantasy tale.',
  },
  {
    imgSrc: '/assets/book/the catcher in the rye.svg',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    description:
      'A coming-of-age story of teenage alienation and rebellion, told through the voice of the cynical Holden Caulfield.',
  },
  {
    imgSrc: '/assets/book/sorcerer.svg',
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    description:
      'An ordinary boy discovers he is a wizard and enters a world of magic, mystery, and friendship at Hogwarts School.',
  },
  {
    imgSrc: '/assets/book/the lord of the rings.svg',
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    description:
      'An epic saga of good versus evil as Frodo Baggins journeys to destroy a powerful ring that threatens Middle-earth.',
  },
  {
    imgSrc: '/assets/book/the brave new world.svg',
    title: 'Brave New World',
    author: 'Aldous Huxley',
    description:
      'A chilling vision of a future society driven by technology, control, and the loss of individuality and emotion.',
  },
  {
    imgSrc: '/assets/book/eleanor.svg',
    title: 'Eleanor',
    author: 'Jason Gurley',
    description:
      'A moving story about grief, loss, and the power of time, as a girl uncovers the secrets of her family’s past.',
  },
  {
    imgSrc: '/assets/book/star girl.svg',
    title: 'Stargirl',
    author: 'Jerry Spinelli',
    description:
      'A heartwarming tale about nonconformity and kindness, as a unique girl challenges the norms of high school life.',
  },
];

export default function profile() {
  //const user = JSON.parse(localStorage.getItem("users",JSON.stringify()))
  return (
    <section className="w-full h-full">
      <div className="mx-auto container flex flex-col min-h-screen">
        {/* Profile Section - Always on top */}
        <div className="w-full flex flex-col items-center p-6">
  <h2 className="text-4xl font-bold mb-8 text-white">Profile</h2>

  <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-6 sm:p-8 w-full max-w-3xl flex items-center gap-6">
    <FaUserCircle size={100} className="text-gray-700 dark:text-gray-300" />
    <div>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">John Doe</h1>
      <p className="text-gray-600 dark:text-gray-400 text-base">john.doe@example.com</p>
      <p className="text-sm mt-1 text-gray-500 dark:text-gray-500">Member since: January 2024</p>
    </div>
  </div>
</div>

        <Separator bg="accent" />
        {/* Books Section */}
        <div className="w-full flex flex-col items-center text-white text-3xl p-4">
          <h2 className="h2 mb-6">Books</h2>
          <Separator bg="accent" />
          <div className="w-full grid sm:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-4 place-content-center mt-6">
            {books.map((book, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger>
                  <BookItem
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
        </div>
      </div>
    </section>
  );
}
