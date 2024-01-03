export default function Comment({email,id,body,name}) {
  return (<>
  <div data-testid="container" className='bg-slate-200 m-4 p-10'>
        <h1><a data-testid="email" className='text-md' href={`mailto:${email}`}>{email}</a><span data-testid="id" className='pl-5 text-sm'>{id} hours ago</span></h1>
        <h1 data-testid="name" className='text-md font-bold pt-4 '>{name}</h1>
        <p data-testid="body">{body}</p>
      </div></>)
}
