import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from 'dotenv';

dotenv.config();

interface DecodedUser {
  _id: string; // adjust this based on your JWT payload
  email?: string;
  iat?: number;
  exp?: number;
}

interface CustomRequest extends Request {
  user?: DecodedUser;
}

export const protectRoute = async (req: CustomRequest, res: Response, next: NextFunction): Promise<void> => {
  const token = req.cookies.token;

  if (!token) {
    res.status(401).json({ message: "No token found" });
    console.log("lolz");
    return; // just return without a value
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_STRING!) as DecodedUser;
    req.user = decoded;
    next();
  } catch (error: unknown) {
    // You can now check the error type safely
    if (error instanceof jwt.TokenExpiredError) {
      res.status(401).json({ message: "Token has expired" });
      return;
    }
    // Handle other errors (e.g., invalid token)
    res.status(401).json({ message: "Invalid token" });
    return;
  }
};

