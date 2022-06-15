import Head from 'next/head'
import styles from '../styles/main.module.scss'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Tailwind CSS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`${styles.lipi} p-2 m-2`}>
        Lipi Lekhika using Tailwind CSS
      </div>
    </div>
  )
}
