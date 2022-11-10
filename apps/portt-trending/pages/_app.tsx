import type { AppProps } from 'next/app'
import theme from '../styles/chakraConfig';
import { Chakra } from 'portt-ui';

function App({ Component, pageProps }: AppProps) {
  return <Chakra customTheme={theme}><Component {...pageProps} /></Chakra>
}

export default App;