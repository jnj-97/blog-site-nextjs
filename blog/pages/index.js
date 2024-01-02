import { Inter } from 'next/font/google'
import axios from 'axios'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })
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
  return (<>
  <h1 className='text-5xl text-center'>Blogs</h1>
  {props.blogs.map((blog)=>{
    return(<div className='m-10 b-2 b-black bg-white p-5'>
      <h2 className='text-xl font-bold text-gray p-2'>{blog.title}</h2>
      
      <p className='truncate w-1/3 text-slate-600 p-2'>{blog.body}</p>
      <Link href={`http://localhost:3000/${blog.id}`} className='text-justify text-cyan-600'>Read More</Link>
    </div>)
  })}
   
    </>)
}
