import Head from 'next/head'
import styles from '../styles/test.module.scss'
export default function Home() {
  return (
    <>
      <Head>
        <title>Lipi Tester</title>
      </Head>

      <div id={styles.lipi} className={`${styles.lipi} ${styles.lp} inline-block rounded-md px-2 py-2 lipi my-2 mx-2 text-4xl font-semibold`}>
        Lipi Lekhika Using Fastapi
      </div>
    </>
  )
}
