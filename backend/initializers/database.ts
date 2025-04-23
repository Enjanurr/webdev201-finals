import mongoose,{Schema,Document, Types} from "mongoose";
import dotenv from "dotenv";
dotenv.config()
const connection_string_atlas = process.env.DATABASE_URI_ATLAS || "Failed to connect";
const connection_string_compass = process.env.DATABASE_URI_COMPASS || "Failed to connect"

interface IUser extends Document {
    userName:string;
    email:string;
    password:string;
    joined:string;
    profilePicture?:string;
}
const userSchema = new Schema<IUser>({
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    joined: { type: String, required: true },
    profilePicture: { 
      data: Buffer, 
      contentType: String 
    }
  });
  

interface IBook extends Document{
    imgSrc:string;
    title:string;
    author:string;
    description:string;
    isAvailable:boolean;

    //borrow details
    borrowedBy?: Types.ObjectId;
    borrowAt: Date;
    returnDate: Date;
}
const bookSchema = new Schema<IBook>({
    title:{type:String,required:true},
    imgSrc:{type:String,required:true},
    author:{type:String,required:true},
    description:{type:String,required:true},
    isAvailable:{type:Boolean, default:true},

    //borrowing details
     borrowedBy: {type: Schema.Types.ObjectId, ref:"User",default:null},
     borrowAt: {type:Date, default:null},
     returnDate: {type:Date, default:null}
})
export const User = mongoose.model<IUser>("User",userSchema);
export const Books = mongoose.model<IBook>("Books",bookSchema);

export const connectDb = async () =>{
    try {
        await mongoose.connect(connection_string_compass);
      
        console.log("Database connected succesfully")
    } catch (error) {
        console.log("Database connection failed",error);
        process.exit(1);
    }
}