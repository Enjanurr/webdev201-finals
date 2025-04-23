import express from 'express';
import homeRoutes from "./homeRoutes";
import authRoutes from "./authRoutes"
import editProfileRoutes from './editProfileRoutes'
const router = express.Router();

router.use('/home',homeRoutes);
router.use("/auth",authRoutes);
router.use("/update",editProfileRoutes);

export default router