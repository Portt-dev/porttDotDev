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
          content="The open source team creation platform for developers"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="The open source team creation platform for developers"
        />
        <meta name="twitter:site" content="@porttapp" />
        <meta
          name="twitter:title"
          content="Where developers form dream teams"
        />
        <meta
          name="twitter:image"
          content="https://portt.dev/assets/AltLogo.svg"
        />
        <meta
          property="og:image"
          content="https://portt.dev/assets/AltLogo.svg"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
