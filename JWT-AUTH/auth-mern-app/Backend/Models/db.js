import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const mongoDB_URL = process.env.DB_URL

mongoose.connect(mongoDB_URL)
.then(()=>{
    console.log("MongoDB Connected")
})
.catch((err)=>{
    console.error("MongoDB Connection Error:", err)
})