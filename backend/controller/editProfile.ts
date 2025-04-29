import { Request, Response } from "express";
import bcrypt from "bcrypt";

import { User } from "../initializers/database";


interface DecodedUser {
  _id: string;
  email?: string;
  iat?: number;
  exp?: number;
}

interface CustomRequest extends Request {
  user?: DecodedUser;
}

// Edit Profile function
export const editProfile = async (req: CustomRequest, res: Response): Promise<any> => {
  try {
    const userId = req.user?._id;
    if (!userId) return res.status(400).json({ message: "User not authenticated" });
    console.log(req.file); // The uploaded file information
    console.log(req.body); 
    const { newUserName, newEmail, newPassword } = req.body;

    let profilePicture = req.file?.path; // Normalize the path for the browser
    // Add this
    const updateFields: any = {};

    // Add fields to be updated
    if (newUserName) updateFields.userName = newUserName;
    if (newEmail) updateFields.email = newEmail;
    if (profilePicture) {
      profilePicture = profilePicture.replace(/\\/g, "/");
      console.log("Normalized path:", profilePicture);
      updateFields.profilePicture = profilePicture;
    }
    if(newPassword.length<5){
      return res.status(401).json({message:"Password too short"});
    }
    if (newPassword) {
      // If a new password is provided, hash it before storing
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      updateFields.password = hashedPassword;
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updateFields },
      { new: true } // return updated user
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Failed to update the profile", error);
    return res.status(500).json({ message: "Something went wrong", error });
  }
};
