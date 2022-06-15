import Head from 'next/head'
import styles from '../styles/main.module.scss'
export default function Home() {
  return (
    <>
      <Head>
        <title>Lipi Tester</title>
      </Head>

      <div className={`${styles.lipi} p-2 m-2`}>
        Lipi Lekhika Using FastAPI and Express.js
      </div>
    </>
  )
}
