'use client'
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast"

export default function ProfilePage(){
    const router = useRouter();
    const [data, setData] = useState("nothing");
    async function  logout(){
        try {
            const resp = await axios.get("/api/users/logout")
            toast.success("Login Success")
            router.push("/login")
        } catch (error:any) {
            toast.error(error.message);
        }
    }

    async function getUserDetails(){
        const res = await axios.get('/api/users/me');
        console.log("id:" , res.data.data._id)
        setData(res.data.data._id)
    }
    return(
        <div className="flex flex-col items-center justify-center
            min-h-screen py-2">
                <h1>Profile</h1>
                <hr />
                <p>Profile Page</p>
                <h2>{data === "nothing" ? "nothing ": <Link href={`/profile/${data}`}>
                {data}
                </Link>}</h2>
                <hr />
                <button
                    onClick={logout}
                    className="bg-blue-500 mt-4 hover:bg-blue-700
                    text-white font-bold py-2 px-4 rounded">
                    Logout
                </button>
                <button
                    onClick={getUserDetails}
                    className="bg-blue-500 mt-4 hover:bg-blue-700
                    text-white font-bold py-2 px-4 rounded">
                    User Details
                </button>
        </div>
    )
}