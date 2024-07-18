import { NextRequest } from "next/server";
import jwt from 'jsonwebtoken'


export const getDataFromToken = (request:NextRequest)=>{
    try {
        console.log("INSIDE");
        
        const encodedToken = request.cookies.get("token")?.value || '';
        console.log("encodedToken", encodedToken);
        
        const decodedToken:any = jwt.verify(encodedToken,process.env.TOKEN_SECRET!)
        return decodedToken.id
    } catch (error:any) {
        throw new Error(error.message)
    }
}