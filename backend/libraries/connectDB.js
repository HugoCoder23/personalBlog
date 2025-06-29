import mongoose from "mongoose"

export const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("MongoDB is connected")
    }catch(err){
        console.log(err)
    }
}