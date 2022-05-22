import React, {useState} from 'react'
import {
  Box,
  Container,
  Button,
  Flex,
  Input,
  Link,
  Image as Img,
  useToast,
  Spinner,
} from '@chakra-ui/react'
import Image from 'next/image'
import CustomToast from './CustomToast'
import createBetaEmail from '../scripts/createBetaEmail'
const Footer: React.FC = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const toast = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // attempt email entry creation to our db
    const result = await createBetaEmail(email, setLoading)
    // clear the form
    setEmail('')
    // if successful -- show the toast
    if (result) {
      toast({
        position: 'bottom-right',
        render: () => <CustomToast />,
      })
    }
    // if not, dont do anything...
    // @TODO - at some point we could show a error toast/banner but not a priority right now
  }
  return (
    <Box>
      <Box
        display={{base: 'none', md: 'block'}}
        position="absolute"
        zIndex={-1}
        right={0}
        bottom={0}
        width={600}
        height={600}
        bgGradient="radial-gradient(closest-side, #A4BAED, transparent)"
      />
      <Box bg="#ffffff" py={12} zIndex={2}>
        <Container maxW="1600px" px={10}>
          <Flex align="center" justify="space-between">
            <Image
              width="148.74px"
              height="31px"
              src="/assets/Logo.svg"
              alt="portt logo"
            />
            <form onSubmit={e => handleSubmit(e)}>
              <Box
                border="4px"
                p={1}
                rounded="full"
                display={{base: 'none', md: 'flex'}}
              >
                <Flex align="center">
                  <Input
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setEmail(e.target.value)
                    }
                    ml={4}
                    value={email}
                    variant="unstyled"
                    placeholder="johnDoe@gmail.com"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    fontSize="12"
                    bg="brand.black"
                    color="white"
                    ml={2}
                    _hover={{}}
                  >
                    {loading ? (
                      <Spinner size="sm" color="white" />
                    ) : (
                      <>Get plugged In</>
                    )}
                  </Button>
                </Flex>
              </Box>
            </form>
            <Flex align="center" gap={2}>
              <Link _focus={{}} href="https://twitter.com/Porttapp" isExternal>
                <Box _hover={{cursor: 'pointer'}}>
                  <Image
                    width="40px"
                    height="40px"
                    src="/assets/Twitter.svg"
                    alt="Twitter"
                  />
                </Box>
              </Link>
              <Link _focus={{}} href="#" isExternal>
                <Box _hover={{cursor: 'pointer'}}>
                  <Image
                    width="40px"
                    height="40px"
                    src="/assets/LinkedIn.svg"
                    alt="LinkedIn"
                  />
                </Box>
              </Link>
              <Link _focus={{}} href="https://github.com/Portt-dev" isExternal>
                <Box _hover={{cursor: 'pointer'}}>
                  <Image
                    width="40px"
                    height="40px"
                    src="/assets/Github.svg"
                    alt="Github"
                  />
                </Box>
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}

export default Footer
