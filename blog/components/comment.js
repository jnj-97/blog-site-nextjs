
import Link from 'next/link'



export default function Comment({email,id,body,name}) {
  return (<>
  <div className='bg-slate-200 m-4 p-10'>
        <h1><a className='text-md' href={`mailto:${email}`}>{email}</a><span className='pl-5 text-sm'>{id} hours ago</span></h1>
        <h1 className='text-md font-bold pt-4 '>{name}</h1>
        <p>{body}</p>
      </div></>)
}
