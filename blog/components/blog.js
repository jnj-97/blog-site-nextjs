import Link from 'next/link'
export default function Blog({title,body,id}) {
  return (<>
    <div className='m-10 b-2 b-black bg-white p-5'>
      <h2 className='text-xl font-bold text-gray p-2'>{title}</h2>      
      <p className='truncate w-1/3 text-slate-600 p-2'>{body}</p>
      <Link href={`http://localhost:3000/${id}`} className='text-justify text-cyan-600'>Read More</Link>
    </div>
    </>)
}
