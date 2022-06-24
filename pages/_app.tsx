import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useState } from 'react'
function MyApp({ Component, pageProps }: AppProps) {
  const [tm, set_tm] = useState(0)
  const HangleClick=()=>set_tm(tm+1)
  return <>
    <Head>
      <meta name="robots" content="noindex"></meta>
    </Head>
    Test Parent Element - {tm} seconds
    <button className="border-2 border-black m-2 p-1" onClick={HangleClick}>Change</button>
    <Component {...pageProps} />
  </>
}

export default MyApp
