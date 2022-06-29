import type { NextPage } from 'next'
import styles from '../styles/main.module.scss'
import Head from 'next/head'
import Link from 'next/link'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react'
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tailwind CSS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="t" className={`${styles.lipi} p-2`}>
        Lipi Lekhika using Tailwind CSS
      </div>
      <div className='my-8 mx-4'>
        <button className='cursor-default text-2xl rounded-xl p-2 font-semibold border-2 border-black text-[red] active:text-[blue] focus:text-[orangered] focus:outline-none focus:ring focus:ring-violet-500'>Test</button>
      </div>
      <div>
        <Link href='/app' passHref={true}><a className='underline cursor-pointer text-blue-800 hover:text-red-700 text-2xl'>App</a></Link>
      </div>
      <div className='space-x-2 mt-2 border-2 border-black rounded-2xl inline-block px-2 py-2'>
        <Button variant="text">Text</Button>
        <Button variant="contained" className='text-black hover:text-white'>Text1</Button>
        <Button variant="outlined" className='text-black hover:text-green-600'>Text2</Button>
      </div>
    </>
  )
}

export default Home
