import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Page(props:any) {
  const router = useRouter()
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Page: {router.query.slug}</h1>
      <p>Count: {count}</p>
      <button className='border-2 border-red-800 p-1 rounded' onClick={() => setCount(count + 1)}>Increase count</button>
      <Link href="/dvi">
        <a className='m-1 underline text-blue-800'>dvi</a>
      </Link> <Link href="/eka">
        <a className='m-1 underline text-blue-800'>eka</a>
      </Link>
    </div>
  )
}