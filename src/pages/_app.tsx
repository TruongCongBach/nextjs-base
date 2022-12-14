import '../../styles/index.scss';
import type { AppProps } from 'next/app'
import { Noop } from '../components/layout'
import { Header } from '../components/common'
import { ResourceApiProvider } from '../resource-api'

function App({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  return <>
    <ResourceApiProvider>
      <Header/>
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </ResourceApiProvider>
  </>
}

export default App
