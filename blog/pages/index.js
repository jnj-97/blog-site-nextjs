import { Inter } from 'next/font/google'
import axios from 'axios'
import { useState,useEffect } from 'react'
import Link from 'next/link'
import Blog from '@/components/blog'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/router'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [email,setEmail]=useState("")
    const router=useRouter()
    function submit(){
        localStorage.setItem("email",email)
        router.push('http://localhost:3000/blog')
    }
  
  
  return (<>
  <h1 className='text-center text-3xl font-bold'>Simple Blog App using NextJS</h1>
  <form onSubmit={(e)=> { e.preventDefault(); submit(); }} >
  <div className='flex flex-col justify-center items-center h-screen pt-5'>
    <label className='text-left text-2xl p-10'>Enter your email</label>
    <input className='p-5 rounded-md bg-slate-100' placeholder='Enter your email' type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <button type='submit' className='p-2 mt-5 bg-green-500 rounded-md'>Submit</button>
  </div>
  </form>
    </>)
}
