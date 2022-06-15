import '../styles/globals.scss'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta name="robots" content="noindex"></meta>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
