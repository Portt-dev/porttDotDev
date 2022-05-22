import type {NextPage} from 'next'
import {useState} from 'react'
import {
  Box,
  Heading,
  Button,
  Flex,
  Center,
  Text,
  Container,
} from '@chakra-ui/react'
import Image from 'next/image'
import {motion} from 'framer-motion'
import BetaPopUp from '../components/BetaPopUp'
const Home: NextPage = () => {
  const [hover, setHover] = useState(-300)
  const [showPopUp, setShowPopUp] = useState(false)
  return (
    <Box>
      {showPopUp && <BetaPopUp setShow={setShowPopUp} />}
      <Container maxW="1600px" px={10} position="relative">
        <Box
          position="absolute"
          zIndex={-1}
          width={800}
          height={600}
          left={10}
          top={200}
          bgGradient="radial-gradient(closest-side, #A4BAED, transparent)"
        />
        <Box
          position="absolute"
          right={0}
          bgGradient="radial-gradient(closest-side, #A4BAED, transparent)"
          width={500}
          height={300}
        />
        {/* Hero Section */}
        <motion.div
          animate={{y: 0, visibility: 'visible'}}
          initial={{y: 200, visibility: 'hidden'}}
          transition={{duration: 0.5, delay: 0.25}}
        >
          <Center>
            <Flex
              flexDirection="column"
              textAlign="center"
              alignItems="center"
              justifyContent="center"
              mt={44}
              width={{base: 350, md: 600, lg: 800}}
            >
              <Heading fontSize={{base: '50px', md: '90px', lg: '120px'}}>
                The Open Source Turing alternative.
              </Heading>
              <Button onClick={() => setShowPopUp(true)} mt={6}>
                Get plugged in
              </Button>
            </Flex>
          </Center>
        </motion.div>
        {/* Info section */}
        <Box mt={{base: 56, md: 200}}>
          <Flex
            direction={{base: 'column', md: 'row'}}
            align={{base: 'center', md: 'center'}}
            justify="space-between"
          >
            <Box
              position="absolute"
              right={0}
              width={600}
              height={600}
              bgGradient="radial-gradient(closest-side, #A4BAED, transparent)"
            />
            <Box
              maxWidth={{base: 350, md: 400, lg: 500}}
              alignSelf={{base: 'start', md: 'center'}}
              zIndex={2}
            >
              <Heading
                fontSize={{base: '45px', sm: '50px', lg: '60px'}}
                size="lg"
              >
                Where developers form dream teams.
              </Heading>
              <Text mt={2}>
                Portt is a SaaS company that helps developers and employers form
                teams through code driven vetting systems.
              </Text>
            </Box>
            <Box maxWidth={{base: 'full', md: 400, lg: 600}}>
              <Image
                width="600"
                height="600"
                src="/assets/Hero1.svg"
                alt="profile cards"
              />
            </Box>
          </Flex>
        </Box>
        {/* Info section2 */}
        <Box mt={{base: 32, md: 12}}>
          <Flex
            direction={{base: 'column-reverse', md: 'row'}}
            align="center"
            justify="space-between"
          >
            <Box position="absolute">
              <Box
                width={600}
                height={600}
                bgGradient="radial-gradient(closest-side, #A4BAED, transparent)"
              />
            </Box>
            <Box
              maxWidth={{base: 400, md: 500, lg: 600}}
              m={{base: 'auto', md: 0}}
            >
              <Image
                width="800px"
                height="800px"
                src="/assets/Hero2.svg"
                alt="data cards"
              />
            </Box>
            <Box
              maxWidth={{base: 'full', md: 300, lg: 400}}
              zIndex={2}
              textAlign={{base: 'center', md: 'start'}}
            >
              <Heading
                size="lg"
                fontSize={{base: '45px', sm: '50px', lg: '60px'}}
              >
                Lets get plugged In.
              </Heading>
              <Text mt={2}>
                Portt is currently nearing its first beta launch. Provide us
                with your email and we will contact you when the product is
                ready!
              </Text>
              <Button
                mt={6}
                onMouseOver={() => setHover(-230)}
                onMouseLeave={() => setHover(-300)}
                _hover={{bg: 'brand.black', color: 'white'}}
                onClick={() => setShowPopUp(true)}
              >
                Get plugged in
              </Button>
            </Box>
          </Flex>
        </Box>
        <Box
          display={{base: 'none', xl: 'flex'}}
          position="absolute"
          zIndex={1}
          bottom={hover}
          right={260}
          transition="0.5s"
        >
          <Image
            width="200"
            height="400"
            src="/assets/cord.svg"
            alt="black cord"
          />
        </Box>
      </Container>
    </Box>
  )
}

export default Home
