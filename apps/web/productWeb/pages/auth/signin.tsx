import {getProviders, signIn, useSession} from 'next-auth/react'
import {useRouter} from 'next/router'
import {Box, Flex, Button, Heading, Container} from '@chakra-ui/react'
import Image from 'next/image'
export default function SignIn({providers}: any) {
  const {data: session} = useSession()
  console.log(session)
  const router = useRouter()
  // if there is a session then we want to redirect back
  if (session) router.push('/') // this is just here for if the user manually types in the auth/signin url
  return (
    <>
      <Box
        position="fixed"
        zIndex={-1}
        width={500}
        height={600}
        left="30%"
        transform="rotate(60deg)"
        top={200}
        bgGradient="radial-gradient(closest-side, #A4BAED, transparent)"
      />
      <Box
        zIndex={-1}
        position="fixed"
        right="28%"
        top={100}
        bgGradient="radial-gradient(closest-side, #A4BAED, transparent)"
        width={500}
        height={600}
      />
      <Container
        maxW="1600px"
        px={8}
        position="fixed"
        width="100%"
        height="100%"
        zIndex={12}
      >
        <Box
          position="relative"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          maxWidth={400}
          bg="white"
          width="full"
          rounded={25}
          p={12}
          boxShadow="2px 2px 200px #A4BAED"
        >
          <Flex mt={4} direction="column">
            <Image
              src="/assets/Portt.svg"
              alt="portt logo"
              width="150px"
              height="30px"
            />
            <Box mt={12}>
              <Heading fontSize="50px" textAlign="center">
                Lets get plugged in.
              </Heading>
              {Object.values(providers).map((provider: any) => (
                <Box mt={4} key={provider.name}>
                  <Button
                    mt={12}
                    leftIcon={
                      <Image
                        src="/assets/Github.svg"
                        alt="github logo"
                        width="30px"
                        height="30px"
                      />
                    }
                    bg="black"
                    color="white"
                    py={6}
                    w="full"
                    rounded="full"
                    onClick={() => signIn(provider.id)}
                    _hover={{}}
                  >
                    Sign in with {provider.name}
                  </Button>
                </Box>
              ))}
            </Box>
          </Flex>
        </Box>
      </Container>
    </>
  )
}

export async function getServerSideProps() {
  return {props: {providers: await getProviders()}}
}
