import { Inter } from 'next/font/google'
import Image from 'next/image'
import axios from 'axios'
import blogpic from '../../public/blog.webp'
import Link from 'next/link'
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
export default function Home({id,blog,comments}) {
  console.log("params: ",{id})
  return (<>
  <h1 className='text-center text-3xl font-bold'>{blog.blog.title}</h1>
  <p className='py-10 px-5 text-left text-md'>{blog.blog.body}</p>
  <h5 className='text-right pr-5 text-lg font-lg'>Written by Nobin Johnson</h5>
  
  <Image width={1000} className='pl-72' height={1000} src={blogpic}></Image>
   
   
    <h1 className='text-center text-3xl font-bold p-10'>Comments</h1>
    {comments.comments.map((comment)=>{
      return(<div className='bg-slate-200 m-4 p-10'>
        <h1><a className='text-md' href={`mailto:${comment.email}`}>{comment.email}</a><span className='pl-5 text-sm'>{comment.id} hours ago</span></h1>
        <h1 className='text-md font-bold pt-4 '>{comment.name}</h1>
        <p>{comment.body}</p>
      </div>)
    })}
   <p className='text-center'><Link href="http://localhost:3000" className=' text-center bg-slate-400 text-blue p-5 text-xl rounded-md'>Go Back Home</Link></p>
    </>)
}
