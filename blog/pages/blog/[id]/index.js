import { Inter } from 'next/font/google'
import Image from 'next/image'
import axios from 'axios'
import blogpic from '../../../public/blog.webp'
import Link from 'next/link'
import Comment from '@/components/comment'
import Signout from '@/components/signOut'
import { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps({ params }) {
  const { id } = params;
  let response = await axios.get(`http://localhost:3000/api/blog/route?id=${id}`);
  const blog = response.data;
  response=await axios.get(`http://localhost:3000/api/comments/route?id=${id}`);
  const comments=response.data
  console.log("comments: ",comments)
  return {
    props: {
      id,
      blog,
      comments
    },
  };
}
export default function BlogPage({blog,comments}) {
  const [title,setTitle]=useState("")
  const [comment,setComment]=useState("")
  const [commentsList, setCommentsList] = useState(comments.comments);
  function addComment(){
   const newComment= {
      postId: comments.comments[0].id,
      id: 0,
      name: title,
      email: localStorage.getItem("email"),
      body:comment
    }
    const updatedComments = [newComment, ...commentsList];
    setCommentsList(updatedComments);
  }
  return (<>
  <Signout/>
  <h1 data-testid="title" className='text-center text-3xl font-bold'>{blog.blog.title}</h1>
  <p data-testid="blog-body" className='py-10 px-5 text-left text-md'>{blog.blog.body}</p>
  <h5 data-testid="author" className='text-right pr-5 text-lg font-lg'>Written by Nobin Johnson</h5>
  <div className='flex justify-around'>
  <Image data-testid="image" className='pt-10' width={1000} height={1000} src={blogpic}></Image>
  </div>
   
    <h1 data-testid="comment" className='text-center text-3xl font-bold p-10'>Comments</h1>
    <form onSubmit={(e)=>{e.preventDefault();addComment();}}>
    <div className='m-4 bg-slate-200 flex flex-col'>  
      <h1 data-testid="add-comment" className='text-2xl pt-2 font-lg text-center'>Add Comment</h1>
      <label data-testid="comment-title" className='p-4 text-xl font-lg'>Title</label>
      <input data-testid="comment-title-input" className='m-4 p-4 rounded-md' placeholder='Enter the Title'  value={title} required onChange={(e)=>setTitle(e.target.value)}/>
      <label data-testid="comment-label" className='p-4 text-xl font-lg'>Comment</label>
      <input data-testid="comment-input" className='m-4 p-4 rounded-md' placeholder='Enter the Comment' value={comment} required onChange={(e)=>setComment(e.target.value)}/>
      <button data-testid="submit" className='m-4 p-4 bg-green-400 text-white rounded-md' type='submit'>Comment</button>
    </div>
    </form>
    {commentsList.map((comment)=>{
      return(<Comment email={comment.email} id={comment.id} body={comment.body} name={comment.name}/>)
    })}
   <p className='text-center'><Link data-testid="back" href="http://localhost:3000/blog" className=' text-center bg-slate-400 text-blue p-5 text-xl rounded-md'>Go Back Home</Link></p>
    </>)
}
