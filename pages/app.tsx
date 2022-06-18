import type { NextPage } from 'next'
import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'
import { SyntheticEvent, useState } from 'react'
const Home: NextPage = () => {
  const [text, setText] = useState("अग्नि-स्खलन-सन्दग्ध-रिपु-वर्तप्रलयः");
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
        <textarea lipi-lang="Hindi" onChange={handleOnChange} value={text} className='block my-2 Lipi-LekhikA' style={{ height: '60%', width: '70%', border: '2px solid black' }}></textarea>
      </div>
      <Script
        src="https://cdn.jsdelivr.net/gh/ofsfobnelip/lipi/lipilekhika.min.js"
        onLoad={() => lipi_lekhika()}></Script>
    </>
  )
}

export default Home
