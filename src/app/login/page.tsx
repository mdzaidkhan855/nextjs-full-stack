'use client'
import Link from "next/link"
import React, { use, useState,useEffect } from "react"
import {useRouter} from "next/navigation"
import axios from "axios"
import toast from "react-hot-toast"

export default function LoginPage(){
    const router = useRouter();
    const[user,setUser] = useState({
        email:"",
        password:""      
    });
    const[buttonDisabled, setButtonDisabled] = useState(false)
    const[loading, setLoading] = useState(false)
    const onLogin = async ()=>{
        try {
            setLoading(true);
            const resp = await axios.post("/api/users/login", user)
            toast.success("Login Success")
            router.push("/profile")
        } catch (error:any) {
            toast.error(error.message);
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        if(user.email.length >0 && user.password.length>0 )
        {
            setButtonDisabled(false)
        }
        else{
            setButtonDisabled(true)
        }
    },[user])
    return(
        <div className="flex items-center justify-center 
            flex-col min-h-screen py-2">
            <h1 className="text-center  text-2xl">{loading? "Processing.......":"Login"}</h1>
            <hr />
            <label htmlFor="email">Email</label>
            <input className="p-2 border border-gray-50 rounded-lg mb-4
                               focus:outline-none "   
                    id="email" 
                    type="text" 
                    value={user.email}
                    onChange={(e)=>setUser({
                        ...user, email:e.target.value
                    })}
                    placeholder="email"
            />
            <label htmlFor="password">Password</label>
            <input className="p-2 border border-gray-50 rounded-lg mb-4
                               focus:outline-none "   
                    id="password" 
                    type="password" 
                    value={user.password}
                    onChange={(e)=>setUser({
                        ...user, password:e.target.value
                    })}
                    placeholder="Password"
            />
            <button className="p-2 border border-gray-50 rounded-lg mb-4
                               focus:outline-none "
             onClick={onLogin}                  
            >{buttonDisabled ? "No Login" : "Login"}</button>
            <Link href="/signup">Visit signup page</Link>
        </div>
        
    )
}