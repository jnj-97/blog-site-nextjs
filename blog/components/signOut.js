import { useRouter } from "next/router"
import { useEffect, useState } from "react";
export default function Signout() {
    const router=useRouter()
    const [user,setUser]=useState(null)
  useEffect(() => {
    // Check if email is stored in localStorage
    const storedEmail = localStorage.getItem('email');

    // If email is not stored, redirect to login page
    if (!storedEmail) {
      router.push('/'); 
    }
    else{
        setUser(storedEmail)
    }
}, [router]);
    function signOut(){
        localStorage.removeItem("email")
        router.push('/')
    }
    return (<>
    <p data-testid="Welcome" className='text-right text-slate-600'>Welcome {user} <button data-testid="sign out" onClick={()=>signOut()} className='mx-2 p-4 bg-red-400 rounded-md'>Sign Out</button></p>
   </>)
  }
  