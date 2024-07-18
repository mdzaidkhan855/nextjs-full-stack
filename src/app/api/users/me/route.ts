import { getDataFromToken } from "@/helpers/getDataFromToken";

import { NextRequest,NextResponse } from "next/server";
import User from "@/models/userModel";
import connect from "@/dbConfig/dbConfig";

connect();

export async function GET(request:NextRequest){
    try {
        const userid = await getDataFromToken(request)
        console.log("USER ID", userid);
        
        const user = await User.findById({_id:userid}).select("-password")
        return NextResponse.json({
            message:"user found",
            data:user
        })
    } catch (error:any) {
        return NextResponse.json({error:error.message},
            {status:400}
        )
    }
}