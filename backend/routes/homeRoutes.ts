

import express from 'express';
import { books,addBook,borrow,borrowedBooksAndProfile,returned,dummy} from '../controller/homeControllers';
import { protectRoute } from '../middlewares/httpOnly';

const router = express.Router();

router.get("/getAllBooks",books);
router.post("/addBooks", addBook);
router.patch("/borrow",protectRoute,borrow);
router.get("/borrowed",protectRoute,borrowedBooksAndProfile);
router.patch("/return",returned);
router.get("/borrow",dummy);
export default router;