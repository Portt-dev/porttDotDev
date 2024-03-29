import Head from 'next/head';
import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Text>{count}</Text>
      <Button onClick={() => setCount(count + 1)} bg='brand.blue' color='white' _hover={{}}>Click me!</Button>
    </div>
  )
}
