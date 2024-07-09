import mongoose from "mongoose";

export default async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection;
        connection.on('connected', ()=>{
            console.log('momgodb connected successfully');
            
        })
        connection.on('error', ()=>{
            console.log('Error while getting connected, exiting gracefully');
            process.exit()
        })
    } catch (error) {
        console.log("Connection error: Something went wrong");
        console.log(error);
        
    }
}