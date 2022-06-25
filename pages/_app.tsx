import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider} from 'react-redux'
import { store } from '../state/store'
function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <meta name="robots" content="noindex"></meta>
    </Head>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>
}

export default MyApp
