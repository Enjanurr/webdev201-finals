import express from 'express';
import { books,addBook,borrow,profile,returned} from '../controller/homeControllers';
import { protectRoute } from '../middlewares/httpOnly';

const router = express.Router();

router.get("/getAllBooks",books);
router.post("/addBooks", addBook);
router.patch("/borrow",protectRoute,borrow);
router.get("/borrowed",protectRoute,profile);
router.patch("/return",returned);
export default router;