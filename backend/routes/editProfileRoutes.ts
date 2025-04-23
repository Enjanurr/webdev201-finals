import express from 'express';
import { editProfile } from '../controller/editProfile';
import { protectRoute } from '../middlewares/httpOnly';
import upload from '../middlewares/fileUpload';

const router = express.Router();

// Use .single('profilePicture') to handle single file upload with field name 'profilePicture'
router.patch("/editProfile",protectRoute, upload.single('profilePicture'), editProfile);

export default router;
