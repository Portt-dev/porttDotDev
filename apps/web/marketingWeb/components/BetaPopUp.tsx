import React, {useState} from 'react'
import {
  Box,
  Button,
  Input,
  Flex,
  Text,
  useToast,
  Spinner,
} from '@chakra-ui/react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import createBetaEmail from '../scripts/createBetaEmail'
import CustomToast from './CustomToast'
interface props {
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}
const BetaPopUp = ({setShow}: props) => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const toast = useToast()
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // attempt email entry creation to our db
    const result = await createBetaEmail(email, setLoading)
    // clear the form
    setEmail('')
    // if successful -- remove the popup and show the toast
    if (result) {
      setShow(false)
      toast({
        position: 'bottom-right',
        render: () => <CustomToast />,
      })
    }
    // if not, dont do anything...
    // @TODO - at some point we could show a error toast/banner but not a priority right now
  }
  return (
    <Box
      position="fixed"
      width="100%"
      height="100%"
      zIndex={12}
      bg="rgba(255,255,255,0.6)"
    >
      <motion.div
        style={{
          position: 'relative',
          top: '50%',
        }}
        animate={{y: 0, visibility: 'visible'}}
        initial={{y: -200, visibility: 'hidden'}}
        transition={{delay: 0.25, duration: 1}}
      >
        <Box
          position="relative"
          width={{base: '80%', sm: 400}}
          borderRadius={25}
          p={6}
          border="4px"
          borderColor="brand.black"
          bg="white"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
          <form onSubmit={e => handleSubmit(e)}>
            <Flex direction="column" align="center" justify="center" gap={12}>
              <Flex
                direction="column"
                gap={4}
                w={300}
                textAlign="center"
                align="center"
              >
                <Image
                  width="150"
                  height="30"
                  src="/assets/portt.svg"
                  alt="portt logo"
                />
                <Text
                  bgGradient="linear(to-r, #092AD0, #356DEE, #0EC5FF)"
                  bgClip="text"
                  width={{base: 200, sm: 300}}
                >
                  Interested in joining our beta? Provide us with your email
                  bellow!
                </Text>
              </Flex>
              <Box>
                <Input
                  onChange={e => setEmail(e.target.value)}
                  _hover={{}}
                  _focus={{boxShadow: '0 0 0 3px #0EC5FF'}}
                  borderRadius="full"
                  border="4px"
                  value={email}
                  borderColor="brand.black"
                  placeholder="johnDoe@gmail.com"
                  py={5}
                />
                <Button
                  type="submit"
                  width="full"
                  bg="brand.black"
                  color="white"
                  mt={2}
                >
                  {loading ? <Spinner color="white" /> : <>Get plugged In</>}
                </Button>
              </Box>
            </Flex>
          </form>
        </Box>
      </motion.div>
    </Box>
  )
}

export default BetaPopUp
