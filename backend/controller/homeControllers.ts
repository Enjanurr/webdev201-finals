import { Request, Response } from "express";
import { Books,User } from "../initializers/database";


interface DecodedUser {
  _id: string;
  email?: string;
  iat?: number;
  exp?: number;
}

interface CustomRequest extends Request {
  user?: DecodedUser;
}
//works
export const books = async (req: Request, res: Response): Promise<any> => {
  try {
    const allBooks = await Books.find();
    return res.status(200).json(allBooks);
  } catch (error) {
    console.error("Error in fetching books", error);
    return res.status(500).json({ message: "Internal Server error" });
  }
};

// this is where I add the book to the schema via postman , we don't have an admin/librarian dashboard
export const addBook = async (req: Request, res: Response): Promise<any> => {
  try {
    const {imgSrc, title, author, description, isAvailable}= req.body;
    const newBook = await Books.create({imgSrc, title, author, description, isAvailable});
    console.log("Book added succesfully");
    return res.status(200).json({message:"Book added successfully",book:newBook});
  } catch (error) {
    console.error("Error in adding a book", error);
    return res.status(500).json({ message: "Failed in adding books" });
  }
};

// it works


export const borrow = async (req: CustomRequest, res: Response): Promise<any> => {
  try {
    const userId = req.user?._id;
    if (!userId) {
      return res.status(401).json({ message: "Unauthorized: No user found" });
    }

    const { book_id } = req.body;

    const book = await Books.findOne({ _id: book_id, isAvailable: true });

    if (!book) {
      return res.status(400).json({ message: "Book not available or already borrowed" });
    }

    const borrowDate = new Date();
    const returnDate = new Date(borrowDate.getTime() + 7 * 24 * 60 * 60 * 1000);

    const updatedBook = await Books.findOneAndUpdate(
      { _id: book_id },
      {
        isAvailable: false,
        borrowedBy: userId,
        borrowAt: borrowDate,
        returnDate: returnDate,
      },
      { new: true }
    );

    return res.status(200).json({ message: "Book borrowed successfully", book: updatedBook });
  } catch (error) {
    console.error("Error borrowing the book", error);
    return res.status(500).json({ message: "Something went wrong", error });
  }
};


export const borrowedBooksAndProfile = async (req: CustomRequest, res: Response): Promise<any> => {
  try {
    const userId = req.user?._id; // Get the logged-in user's ID

    // Fetch books specifically borrowed by the current user
    const borrowedBooks = await Books.find({ borrowedBy: userId }); // Books where borrowedBy matches the userId

    // Fetch user information
    const userInfo = await User.findOne({ _id: userId });

    return res.status(200).json({
      message: "Books fetched successfully",
      borrowedBooks: borrowedBooks,   // Books that the current user has borrowed
      userInfo: userInfo
    });
  } catch (error) {
    console.error("Failed to fetch books", error);
    return res.status(500).json({ message: "Something went wrong", error });
  }
};


// it works
export const returned = async(req:Request,res:Response):Promise<any> =>{
    try {
        const {book_id} = req.body;
         const book = await Books.findOne({_id:book_id, isAvailable:false});
         // return the book
         const returned = await Books.findOneAndUpdate(
          { _id: book_id },
          {
              isAvailable: true,
              borrowedBy: null,
              borrowAt: null,
              returnDate: null
          },
          { new: true }
      );
         return res.status(200).json({message:"Returned successfully", returnedBook: returned})
    } catch (error) {
        console.error("Failed to return book",error)
        return res.status(500).json({message:"Failed to return the book",error})
    }
}

export const dummy= async(req:Request,res:Response):Promise<any>=>{
  try {
      const borrowed = await Books.find({isAvailable:false});
      return res.status(200).json({ message: "Borrowed books fetched successfully", books: borrowed});
  } catch (error) {
      console.error("Failed to return the book",error);
      return res.status(500).json({message:"Something went wrong", error})
  }
  }
