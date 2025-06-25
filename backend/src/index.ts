
import express, {Express, Request, Response} from "express";
import { connectDb } from "../initializers/database";
import routes from "../routes"
import cors from 'cors';
import cookieParser from "cookie-parser";

const app: Express = express();
const port = 8080;


// make sure to run this before anything else
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
    methods: ['GET','POST','PATCH'],
    allowedHeaders: ["Content-Type","Authorization"]
}))
// order matters broo, make sure to put this here before anything else or you get an error, you don't code in c
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));
app.use("/api",routes);


app.get('/',(req:Request, res:Response)=>{
    res.send("Express + Typescript server")
})
app.listen(port, ()=>{
    try {
        console.log(`Server running at http://localhost:${port}`);
        connectDb();
    } catch (error) {
        console.error("Server failed",error);
    }
})