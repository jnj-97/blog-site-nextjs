import Link from 'next/link'
export default function Blog({title,body,id}) {
  return (<>
    <div data-testid="container" className='m-10 b-2 b-black bg-white p-5'>
      <h2 data-testid="title" className='text-xl font-bold text-gray p-2'>{title}</h2>      
      <p data-testid="body" className='truncate w-1/3 text-slate-600 p-2'>{body}</p>
      <Link data-testid="link" href={`http://localhost:3000/${id}`} className='text-justify text-cyan-600'>Read More</Link>
    </div>
    </>)
}
