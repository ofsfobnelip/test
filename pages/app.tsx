import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'
import About from '../components/About'
import { useState } from 'react'
import { useSelector } from 'react-redux'
const Home: NextPage = () => {
  const [text, setText] = useState("अग्नि-स्खलन-सन्दग्ध-रिपु-वर्तप्रलयः");
  const handleOnChange = (e: any) => {
    setText(e.target.value);
  }
  const amount=useSelector((state:any)=>state.amount)
  return (
    <>
      <Head>
        <title>TextArea New</title>
      </Head>
      <div>
        <Link href='/'><a className='underline cursor-pointer text-blue-800 hover:text-red-700 text-2xl'>Home</a></Link>
      </div>
      <textarea lipi-lang="Hindi" onChange={handleOnChange} value={text} className='block my-2 border-2 outline-none rounded p-1 border-black Lipi-LekhikA focus:border-blue-800 focus:shadow-lg h-2/3 w-2/3'></textarea>
      <div>
        <About text='Us'/>
      </div>
      <div className='bg-green-200 inline-block p-2'>{amount} Rupees</div>
      <Script src="https://cdn.jsdelivr.net/gh/ofsfobnelip/lipi/lipilekhika.min.js" strategy='lazyOnload'></Script>
    </>
  )
}

export default Home
