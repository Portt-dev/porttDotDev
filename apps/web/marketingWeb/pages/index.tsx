import type { NextPage } from 'next'
import { useState } from 'react'
import {
  Box,
  Heading,
  Button,
  Flex,
  Center,
  Text,
  Container,
  VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import { motion } from 'framer-motion'
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
          animate={{ y: 0, visibility: 'visible' }}
          initial={{ y: 200, visibility: 'hidden' }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <Center>
            <Flex
              flexDirection="column"
              textAlign="center"
              alignItems="center"
              justifyContent="center"
              mt={44}
              width={{ base: 327.68, sm: 512, md: 640, lg: 800, x: 1000 }}
            >
              <Heading
                fontSize={{
                  base: '39.3216px',
                  sm: '61.44px',
                  md: '76.8px',
                  lg: '96px',
                  x: '120px',
                }}
                zIndex="10"
              >
                The team building platform for developers.
              </Heading>
              <Button
                _hover={{ bg: 'brand.black', color: 'white' }}
                onClick={() => setShowPopUp(true)}
                mt={6}
              >
                Get plugged in
              </Button>
            </Flex>
          </Center>
        </motion.div>
        {/* Info #2 section */}
        <Box mt={{ base: 56, md: 200 }}>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            align={{ base: 'center', md: 'center' }}
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
              maxWidth={{ base: 350, md: 400, lg: 500 }}
              alignSelf={{ base: 'start', md: 'center' }}
              zIndex={2}
            >
              <Heading
                fontSize={{ base: '45px', sm: '50px', lg: '60px' }}
                size="lg"
              >
                Where developers form dream teams.
              </Heading>
              <Text mt={2}>
                Portt is a fully open-source platform that helps developers form
                their dream teams. Discover, vet, and partner with software
                teams at any scale, all in one place.
              </Text>
            </Box>
            <Box maxWidth={{ base: 'full', md: 400, lg: 600 }}>
              <Image
                width="600"
                height="600"
                src="/assets/Hero1.svg"
                alt="profile cards"
              />
            </Box>
          </Flex>
        </Box>
        {/* Info #1 section */}
        <Box mt={{ base: 56, md: 200 }} position="relative">
          <Box
            position="absolute"
            zIndex={-1}
            width={1200}
            height={800}
            left={-200}
            bgGradient="radial-gradient(closest-side, #A4BAED, transparent)"
          />
          <Box zIndex={2} position="absolute" top={200} left={800}>
            <motion.div             
              whileInView={{ scale: 1, opacity: 1 }}
              initial={{ scale: 0.6, opacity: 0}}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <Image
                width="262.5px"
                height="71.4px"
                src="/assets/profileImg5.svg"
                alt="user profile"
              />
            </motion.div> 
          </Box>
          <Box zIndex={2} position="absolute" top={300} left={1000}>
            <motion.div             
              whileInView={{ scale: 1, opacity: 1 }}
              initial={{ scale: 0.6, opacity: 0}}
              transition={{ delay: 0.25, duration: 0.4 }}
            >
              <Image
                width="350px"
                height="94.5px"
                src="/assets/profileImg11.svg"
                alt="user profile"
              />
            </motion.div> 
           
          </Box>
          <Box zIndex={2} position="absolute" top={350} left={600}>
            <motion.div             
              whileInView={{ scale: 1, opacity: 1 }}
              initial={{ scale: 0.6, opacity: 0}}
              transition={{ delay: 1, duration: 0.4 }}
            >
              <Image
                width="268.1px"
                height="77px"
                src="/assets/profileImg7.svg"
                alt="user profile"
              />
            </motion.div> 
          </Box>
          <Box zIndex={2} position="absolute" top={250} left={200}>
            <motion.div             
              whileInView={{ scale: 1, opacity: 1 }}
              initial={{ scale: 0.6, opacity: 0}}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              <Image
                width="268.1px"
                height="77px"
                src="/assets/profileImg8.svg"
                alt="user profile"
              />
            </motion.div> 

          </Box>
          <Box zIndex={2} position="absolute" top={580} left={1000}>
            <motion.div             
              whileInView={{ scale: 1, opacity: 1 }}
              initial={{ scale: 0.6, opacity: 0}}
              transition={{ delay: 0.75, duration: 0.4 }}
            >
              <Image
                width="268.1px"
                height="77px"
                src="/assets/profileImg9.svg"
                alt="user profile"
              />
            </motion.div> 

          </Box>
          <Box zIndex={2} position="absolute" top={720} left={1100}>
            <motion.div             
              whileInView={{ scale: 1, opacity: 1 }}
              initial={{ scale: 0.6, opacity: 0}}
              transition={{ delay: 0.9, duration: 0.4 }}
            >
              <Image
                width="180.6px"
                height="53.2px"
                src="/assets/profileImg10.svg"
                alt="user profile"
              />
            </motion.div> 
          </Box>
          <Box zIndex={2} position="absolute" top={850} left={500}>
            <motion.div             
              whileInView={{ scale: 1, opacity: 1 }}
              initial={{ scale: 0.6, opacity: 0}}
              transition={{ delay: 0.25, duration: 0.4 }}
            >
              <Image
                width="355.6px"
                height="100.1px"
                src="/assets/profileImg11.svg"
                alt="user profile"
              />
            </motion.div> 
          </Box>
          <Box zIndex={2} position="absolute" top={730} left={250}>
            <motion.div             
              whileInView={{ scale: 1, opacity: 1 }}
              initial={{ scale: 0.6, opacity: 0}}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              <Image
                width="268.1px"
                height="77px"
                src="/assets/profileImg12.svg"
                alt="user profile"
              />
            </motion.div> 
          </Box>
          <Flex align="center" justify="center" direction="column">
            <Heading
              textAlign="center"
              fontSize={{ base: '45px', sm: '50px', lg: '60px' }}
              width="1200px"
              size="lg"
            >
              Network, vet, and partner with developers at any scale.
            </Heading>
            <VStack spacing={5} mt={56}>
              <Box>
                <Image
                  width="926.1"
                  height="175px"
                  src="/assets/TeamImage1.svg"
                  alt="portt team"
                />
              </Box>
              <Box opacity={0.8} filter="blur(1px)">
                <Image
                  width="741.3"
                  height="140px"
                  src="/assets/TeamImage2.svg"
                  alt="hackathon team"
                />
              </Box>
              <Box opacity={0.6} filter="blur(1px)">
                <Image
                  width="555.8px"
                  height="105px"
                  src="/assets/TeamImage3.svg"
                  alt="supabase team"
                />
              </Box>
            </VStack>
          </Flex>
        </Box>
        {/* Info #3 section */}
        <Box mt={{ base: 56, md: 200 }}>
          <Flex
            direction={{ base: 'column-reverse', md: 'row' }}
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
              maxWidth={{ base: 400, md: 500, lg: 600 }}
              m={{ base: 'auto', md: 0 }}
            >
              <Image
                width="800px"
                height="800px"
                src="/assets/Hero2.svg"
                alt="data cards"
              />
            </Box>
            <Box
              maxWidth={{ base: 'full', md: 300, lg: 400 }}
              zIndex={2}
              textAlign={{ base: 'center', md: 'start' }}
            >
              <Heading
                size="lg"
                fontSize={{ base: '45px', sm: '50px', lg: '60px' }}
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
                _hover={{ bg: 'brand.black', color: 'white' }}
                onClick={() => setShowPopUp(true)}
              >
                Get plugged in
              </Button>
            </Box>
          </Flex>
        </Box>
        <Box
          display={{ base: 'none', xl: 'flex' }}
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
