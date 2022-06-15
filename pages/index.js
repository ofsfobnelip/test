import Head from 'next/head'
import styles from '../styles/test.module.scss'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Tailwind CSS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id={styles.lipi} className={styles.lipi + " my-2 mx-2 text-4xl font-semibold"}>
        Lipi Lekhika
      </div>
    </div>
  )
}
