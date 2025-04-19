'use client';
import React,{useEffect,useState} from 'react';
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
const books = [
  {
    imgSrc: '/assets/book/the great gatsby.svg',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    description: 'A tragic tale of wealth and obsession in the Jazz Age, centered around the mysterious Jay Gatsby.',
    isAvailable: true
  },
  {
    imgSrc: '/assets/book/to kill a mocking bird.svg',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    description: 'A profound exploration of racial injustice and moral growth in the American South through a child’s eyes.',
    isAvailable: true
  },
  {
    imgSrc: '/assets/book/1984.svg',
    title: '1984',
    author: 'George Orwell',
    description: 'A chilling dystopia where Big Brother controls everything, and independent thought is a crime.',
    isAvailable: true
  },
  {
    imgSrc: '/assets/book/pride and prejudice.svg',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    description: 'A witty romantic drama about societal expectations, class, and misunderstandings.',
    isAvailable: true
  },
  {
    imgSrc: '/assets/book/mobydick.svg',
    title: 'Moby-Dick',
    author: 'Herman Melville',
    description: 'Captain Ahab’s obsessive hunt for a legendary white whale becomes a deep, philosophical journey.',
    isAvailable: true
  },
  {
    imgSrc: '/assets/book/the hobbit.svg',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    description: 'A reluctant hobbit joins a group of dwarves on a grand quest to reclaim treasure guarded by a dragon.',
    isAvailable: true
  },
  {
    imgSrc: '/assets/book/the catcher in the rye.svg',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    description: 'A rebellious teenager roams New York City, grappling with isolation and growing pains.',
    isAvailable: true
  },
  {
    imgSrc: '/assets/book/sorcerer.svg',
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    description: 'An orphan discovers he is a wizard and enters a magical world full of adventure and wonder.',
    isAvailable: true
  },
  {
    imgSrc: '/assets/book/the lord of the rings.svg',
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    description: 'A perilous journey to destroy a powerful ring that could doom the world if it falls into the wrong hands.',
    isAvailable: true
  },
  {
    imgSrc: '/assets/book/the brave new world.svg',
    title: 'Brave New World',
    author: 'Aldous Huxley',
    description: 'A futuristic society thrives on control and consumerism, where individuality is sacrificed for stability.',
    isAvailable: true
  },
  {
    imgSrc: '/assets/book/fahrenheit.svg',
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    description: 'In a world where books are banned, a fireman begins to question the system he enforces.',
    isAvailable: true
  },
  {
    imgSrc: '/assets/book/jane eyre.svg',
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    description: 'An orphaned girl grows into an independent woman while facing love, loss, and mystery.',
    isAvailable: true
  },
  {
    imgSrc: '/assets/book/wuthering the heights.svg',
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    description: 'A dark tale of passion and revenge set on the bleak Yorkshire moors.',
    isAvailable: true
  },
  {
    imgSrc: '/assets/book/the chronicles.svg',
    title: 'The Chronicles of Narnia',
    author: 'C.S. Lewis',
    description: 'Children step through a wardrobe into a magical land ruled by good and evil forces.',
    isAvailable: true
  },
  {
    imgSrc: '/assets/book/frankenstein.svg',
    title: 'Frankenstein',
    author: 'Mary Shelley',
    description: 'A scientist creates a living being, only to face the terrifying consequences of playing God.',
    isAvailable: true
  },
  {
    imgSrc: '/assets/book/dracula.svg',
    title: 'Dracula',
    author: 'Bram Stoker',
    description: 'A vampire moves to England, spreading fear as a group of heroes races to stop him.',
    isAvailable: true
  },
  {
    imgSrc: '/assets/book/dorian gray.svg',
    title: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
    description: 'A man remains young while his portrait ages, reflecting his inner corruption.',
    isAvailable: true
  },
  {
    imgSrc: '/assets/book/crime and punishment.svg',
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    description: 'A psychological drama following a man’s descent into guilt after committing murder.',
    isAvailable: true
  },
  {
    imgSrc: '/assets/book/brothers.svg',
    title: 'The Brothers Karamazov',
    author: 'Fyodor Dostoevsky',
    description: 'An exploration of faith, morality, and free will within a family torn by conflict and tragedy.',
    isAvailable: true
  },
  {
    imgSrc: '/assets/book/old man.svg',
    title: 'The Old Man and the Sea',
    author: 'Ernest Hemingway',
    description: 'An aging fisherman’s struggle with a giant marlin becomes a story of perseverance and dignity.',
    isAvailable: true
  },
  {
    imgSrc: '/assets/book/grapes of wrath.svg',
    title: 'The Grapes of Wrath',
    author: 'John Steinbeck',
    description: 'A family journeys west during the Great Depression, seeking survival and justice.',
    isAvailable: true
  },
  {
    imgSrc: '/assets/book/of mice.svg',
    title: 'Of Mice and Men',
    author: 'John Steinbeck',
    description: 'Two drifters chase the American Dream but face heartbreaking realities.',
    isAvailable: true
  },
  {
    imgSrc: '/assets/book/slaugherhouse-Five.svg',
    title: 'Slaughterhouse-Five',
    author: 'Kurt Vonnegut',
    description: 'A soldier becomes unstuck in time, offering a surreal look at war and fate.',
    isAvailable: true
  },
  {
    imgSrc: '/assets/book/alchemist.svg',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    description: 'A young shepherd follows a prophetic dream in search of treasure and self-discovery.',
    isAvailable: true
  },
  {
    imgSrc: '/assets/book/life of pi.svg',
    title: 'Life of Pi',
    author: 'Yann Martel',
    description: 'A boy survives a shipwreck and shares a lifeboat with a Bengal tiger in a tale of faith and survival.',
    isAvailable: true
  },
  {
    imgSrc: '/assets/book/the kite runner.svg',
    title: 'The Kite Runner',
    author: 'Khaled Hosseini',
    description: 'A moving story of friendship, betrayal, and redemption set against the backdrop of Afghanistan.',
    isAvailable: true
  },
  {
    imgSrc: '/assets/book/splendid suns.svg',
    title: 'A Thousand Splendid Suns',
    author: 'Khaled Hosseini',
    description: 'Two Afghan women form a deep bond amidst war, oppression, and heartbreak.',
    isAvailable: true
  },
  {
    imgSrc: '/assets/book/book thief.svg',
    title: 'The Book Thief',
    author: 'Markus Zusak',
    description: 'A girl finds solace in books during Nazi Germany, with Death himself narrating her story.',
    isAvailable: true
  },
  {
    imgSrc: '/assets/book/the road.svg',
    title: 'The Road',
    author: 'Cormac McCarthy',
    description: 'A father and son journey through a post-apocalyptic world, clinging to hope and love.',
    isAvailable: true
  },
  {
    imgSrc: '/assets/book/norweigan wood.svg',
    title: 'Norwegian Wood',
    author: 'Haruki Murakami',
    description: 'A nostalgic and melancholic tale of love and loss in 1960s Tokyo.',
    isAvailable: true
  },
  {
    imgSrc: '/assets/book/kafka.svg',
    title: 'Kafka on the Shore',
    author: 'Haruki Murakami',
    description: 'A surreal blend of reality and fantasy, exploring fate, identity, and metaphysical mysteries.',
    isAvailable: true
  },
  {
    imgSrc: '/assets/book/the bell jar.svg',
    title: 'The Bell Jar',
    author: 'Sylvia Plath',
    description: 'A raw and poignant exploration of mental illness and the pressure of societal expectations.',
    isAvailable: true
  },
  {
    imgSrc: '/assets/book/never let me go.svg',
    title: 'Never Let Me Go',
    author: 'Kazuo Ishiguro',
    description: 'A haunting tale of friendship, love, and the ethical implications of cloning.',
    isAvailable: true
  },
  {
    imgSrc: '/assets/book/the stranger.svg',
    title: 'The Stranger',
    author: 'Albert Camus',
    description: 'A detached man’s indifferent reaction to life and death challenges the meaning of morality.',
    isAvailable: true
  },
  {
    imgSrc: '/assets/book/eleanor.svg',
    title: 'Eleanor',
    author: 'Jason Gurley',
    description: 'A young girl experiences loss and self-discovery across dimensions of time and reality.',
    isAvailable: true
  },
  {
    imgSrc: '/assets/book/star girl.svg',
    title: 'Stargirl',
    author: 'Jerry Spinelli',
    description: 'A free-spirited girl challenges high school conformity and inspires others to embrace individuality.',
    isAvailable: true
  }
];


//localStorage.setItem("books",JSON.stringify(books));

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
  const router = useRouter();
  useEffect(()=>{
    const user = localStorage.getItem("users");
    const isLoggedIn = localStorage.getItem("loggedInUser");
    if(!user || !isLoggedIn){
      router.push("/auth/login")
    }
  },[])

  const [borrowed , setBorrowed] = useState<{[title:string]:boolean}>({});
  const handleBorrow  = (title:string)=>{
    setBorrowed((prev)=>({
      ...prev,
      [title]:true,
    }))
  }
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
   
        <Swiper navigation={true} modules={[Navigation]} className="">
          {bookChunks.map((group, idx) => (
           <SwiperSlide key={idx} className="w-full h-full px-4 py-8 xl:px-16 xl:py-16">

              <div className="flex flex-col items-center gap-12 xl:gap-24 px-4 ">
              <div className="w-full grid sm:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-1 place-items-center"> 

                  {group.map((book) => (
                     <HoverCard>
                     <HoverCardTrigger>
                       <OurBook
                      key={book.title}
                       title={book.title}
                       author={book.author}
                       imgSrc={book.imgSrc}
                       isBorrowed = {!!borrowed[book.title]}
                       onBorrow = {()=>handleBorrow(book.title)}
                     /></HoverCardTrigger>
                   <HoverCardContent className="bg-white dark:bg-zinc-900 p-4 rounded-md shadow-lg max-w-xs text-sm text-zinc-800 dark:text-zinc-200">
                   <p className="uppercase font-primary font-semibold text-[22px] leading-none text-primary">{book.title}</p>{book.description}
     </HoverCardContent>
     
                   </HoverCard>
                   
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className=" flex justify-center">
       
          <button className="btn">
            <a href="/">View popular Books</a>
          </button>
        </div>
      </div>
    </section>
  );
}
