import express from 'express';
import homeRoutes from "./homeRoutes";
import authRoutes from "./authRoutes"
const router = express.Router();

router.use('/home',homeRoutes);
router.use("/auth",authRoutes);

export default router