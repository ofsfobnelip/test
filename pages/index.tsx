import type { NextPage } from 'next'
import styles from '../styles/main.module.scss'
import Head from 'next/head'
import Link from 'next/link'
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Tailwind CSS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id="t" className={`${styles.lipi} p-2`}>
        Lipi Lekhika using Tailwind CSS
      </div>
      <div>
        <Link href='/app'><span className='underline cursor-pointer text-blue-800 hover:text-red-700 text-2xl'>App</span></Link>
      </div>
    </div>
  )
}

export default Home
