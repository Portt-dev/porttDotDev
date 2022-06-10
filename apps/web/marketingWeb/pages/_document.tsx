import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="The platform where developers form dream teams for and at any scale"
        />
        <meta
          property="og:image"
          content="https://portt.dev/assets/blurBg.svg"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
