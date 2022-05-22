import {ChakraProvider, Box} from '@chakra-ui/react'
import {AppProps} from 'next/app'
import {customTheme} from '../styles/chakra.config'
import Layout from '../components/Layout'
import Head from 'next/head'

function App({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Head>
        <title>Portt - Where developers form dream teams.</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default App
