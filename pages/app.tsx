import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { SyntheticEvent, useState } from 'react'
const Home: NextPage = () => {
  const [text, setText] = useState("Test Textarea");
  const handleOnChange = (e: any) => {
    setText(e.target.value);
  }
  return (
    <>
      <Head>
        <title>TextArea</title>
      </Head>
      <div>
        <Link href='/'><a href="/" className='underline text-blue-800 hover:text-red-700 text-2xl'>Home</a></Link>
      </div>
      <div>
        <textarea onChange={handleOnChange} value={text} className='block my-2' style={{ height: '60%', width: '70%', border: '2px solid black' }}></textarea>
      </div>
    </>
  )
}

export default Home
