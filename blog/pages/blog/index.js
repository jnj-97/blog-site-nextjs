import { Inter } from 'next/font/google'
import axios from 'axios'
import { useState,useEffect } from 'react'
import Blog from '@/components/blog'
import { useRouter } from 'next/router'
import Signout from '@/components/signOut'
export async function getServerSideProps(){
  let response=await axios.get('http://localhost:3000/api/blogs/route')
  let blogs=response.data
  return{
    props:{
      blogs:blogs
    }
  }
}

export default function Home(props) {
  const [nextValue,setNextValue]=useState(5)
  const [prev,setPrev]=useState(0)
  const[subblogs,setSubblogs]=useState(props.blogs.slice(prev,nextValue))
  const [errorValue,setErrorValue]=useState(null)
  const [search,setSearch]=useState("")
  const [empty,setEmpty]=useState(null)
  const router=useRouter()
  useEffect(() => {
    
    // Update subblogs when prev or nextValue changes
    setSubblogs(props.blogs.slice(prev, nextValue));
  }, [prev, nextValue, props.blogs]);

  function previous() {
    if (prev - 5 < 0) {
      setErrorValue(true);
    } else {
      setErrorValue(false);
      setPrev(prev - 5);
      setNextValue(prev); // Update nextValue after setting prev
    }
  }
  
  function next() {
    if (nextValue + 5 > props.blogs.length) {
      setErrorValue(true);
    } else {
      setErrorValue(false);
      setPrev(nextValue); // Update prev after setting nextValue
      setNextValue(nextValue + 5);
    }
  }

  function searchElement(e) {
    setSearch(e);
    setEmpty(false);
  
    if (e === "") {
      // If the search bar is cleared, show the original set of blogs
      setSubblogs(props.blogs.slice(prev, nextValue));
    } else {
      let searchBlogs = props.blogs.filter((blog) =>
        blog.title.toLowerCase().startsWith(e.toLowerCase())
      );
      if (searchBlogs.length) {
        setSubblogs(searchBlogs);
      } else {
        setEmpty(true);
      }
    }
  }

  return (<>
  <Signout/>
  <h1 data-testid="heading" className='text-5xl text-center'>Blogs</h1>
  <div className='flex justify-between gap-3 text-lg mx-5 pt-10'>
    <button data-testid="prev" onClick={()=>{previous()}}>Previous</button>
    <input data-testid="search" className='p-5 rounded-md bg-slate-200' type='text' placeholder='Search for blogs by title' value={search} onChange={(e)=>searchElement(e.target.value)}/>
    <button data-testid="next" onClick={()=>{next()}}>Next</button>
  </div>
  {errorValue &&  <p data-testid="error" className='text-red-500 text-center'>There are no more blogs to show!</p>}
  {empty && <p data-testid="empty" className='text-red-500 text-center'>Blog with title {search} doesn't exist</p>}
  {!empty && subblogs.map((blog)=>{
    return(<Blog title={blog.title} body={blog.body} id={blog.id}/>
    )
  })}
   
    </>)
}
