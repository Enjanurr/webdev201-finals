import { Request,Response } from "express";
import { User } from "../initializers/database";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config()

// auth controlet

export const login = async (req: Request, res: Response): Promise<any> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Create JWT Token
    const payload = { _id: user._id, email: user.email };
    const token = jwt.sign(payload, process.env.TOKEN_STRING!, { expiresIn: '10s' });

    // Set JWT token as HttpOnly cookie
    res.cookie('token', token, {
      httpOnly: true, // Prevents JS access to cookies
      secure: process.env.NODE_ENV === 'production', // Use only in production
      sameSite: 'strict', // Prevents CSRF attacks
    });
    //console.log("Sending cookie with token:", token);

    return res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error("Login Error: ", error);
    return res.status(500).json({ message: "Something went wrong, please try again." });
  }
};


export const register = async(req:Request, res:Response):Promise<any>=>{
    try {
        const {userName , email,password} = req.body;
        if(!userName||!email||!password){
            return res.status(400).json({message:"All fields are required"})
        }
        const extinguisher =  await User.findOne({email}); //extinguish already used email
        if(extinguisher){
            return res.status(409).json({message:"Email already registered"});
        }
        const hashedPassword=await bcrypt.hash(password,10);
      const newUser = await User.create({
        userName,
        email,
        password:hashedPassword
      })
      return res.status(201).json({message:"User registered successfully",user:newUser})
    } catch (error) {
        console.error("Server error",error);
    }
}


export const logout = async (req: Request, res: Response): Promise<any> => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout error:", error);
    return res.status(500).json({ message: "Something went wrong during logout" });
  }
};
