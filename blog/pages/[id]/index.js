import { Inter } from 'next/font/google'
import Image from 'next/image'
import axios from 'axios'
import blogpic from '../../public/blog.webp'
import Link from 'next/link'
import Comment from '@/components/comment'
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
  return (<>
  <h1 data-testid="title" className='text-center text-3xl font-bold'>{blog.blog.title}</h1>
  <p data-testid="blog-body" className='py-10 px-5 text-left text-md'>{blog.blog.body}</p>
  <h5 data-testid="author" className='text-right pr-5 text-lg font-lg'>Written by Nobin Johnson</h5>
  <div className='flex justify-around'>
  <Image data-testid="image" className='pt-10' width={1000} height={1000} src={blogpic}></Image>
  </div>
   
    <h1 data-testid="comment" className='text-center text-3xl font-bold p-10'>Comments</h1>
    {comments.comments.map((comment)=>{
      return(<Comment email={comment.email} id={comment.id} body={comment.body} name={comment.name}/>)
    })}
   <p className='text-center'><Link data-testid="back" href="http://localhost:3000" className=' text-center bg-slate-400 text-blue p-5 text-xl rounded-md'>Go Back Home</Link></p>
    </>)
}
