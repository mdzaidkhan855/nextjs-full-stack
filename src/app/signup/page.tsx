'use client'
import Link from "next/link"
import React, { use, useState } from "react"
import {useRouter} from "next/navigation"
import axios from "axios"

export default function SignupPage(){
    const[user,setUser] = useState({
        email:"",
        password:"",
        username:""
    });
    const signup = async ()=>{

    }
    return(
        <div className="flex items-center justify-center 
            flex-col min-h-screen py-2">
            <h1 className="text-center  text-2xl">Signup Page</h1>
            <hr />
            <label htmlFor="username">Username</label>
            <input className="p-2 border border-gray-50 rounded-lg mb-4
                               focus:outline-none "   
                    id="username" 
                    type="text" 
                    value={user.username}
                    onChange={(e)=>setUser({
                        ...user, username:e.target.value
                    })}
                    placeholder="user name"
            />
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
                               focus:outline-none ">Signup</button>
        </div>
        
    )
}