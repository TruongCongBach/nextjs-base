import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Noop } from '../src/components/layout'
import { Header } from '../src/components/common'

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  return <>
    <Header/>
    <Layout pageProps={pageProps}>
      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
