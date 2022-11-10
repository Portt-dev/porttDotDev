import { Box, Heading, Flex, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const InfoSection2: React.FC = () => {
  return (
    <Box mt={{ base: 0, md: 52 }} position="relative">
      <Box
        position="absolute"
        zIndex={-1}
        width={1200}
        height={800}
        left={-200}
        bgGradient="radial-gradient(closest-side, #A4BAED, transparent)"
      />
      <Box display={{ base: 'none', xl: 'block' }}>
        <Box width={300} zIndex={2} position="absolute" top={200} left={800}>
          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.6, opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              width="300"
              height="100"
              src="/assets/profileImg5.svg"
              alt="user profile"
            />
          </motion.div>
        </Box>
        <Box width={350} zIndex={2} position="absolute" top={300} left={1000}>
          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.6, opacity: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              width="400"
              height="200"
              src="/assets/profileImg13.svg"
              alt="user profile"
            />
          </motion.div>
        </Box>
        <Box width={300} zIndex={2} position="absolute" top={320} left={600}>
          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.6, opacity: 0 }}
            transition={{ delay: 1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              width="350"
              height="125px"
              src="/assets/profileImg7.svg"
              alt="user profile"
            />
          </motion.div>
        </Box>
        <Box width={300} zIndex={2} position="absolute" top={200} left={200}>
          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.6, opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              width="400"
              height="250px"
              src="/assets/profileImg8.svg"
              alt="user profile"
            />
          </motion.div>
        </Box>
        <Box width={250} zIndex={2} position="absolute" top={580} left={1000}>
          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.6, opacity: 0 }}
            transition={{ delay: 0.75, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              width="300"
              height="100px"
              src="/assets/profileImg9.svg"
              alt="user profile"
            />
          </motion.div>
        </Box>
        <Box width={250} zIndex={2} position="absolute" top={720} left={1100}>
          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.6, opacity: 0 }}
            transition={{ delay: 0.9, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              width="250px"
              height="100px"
              src="/assets/profileImg10.svg"
              alt="user profile"
            />
          </motion.div>
        </Box>
        <Box width={300} zIndex={2} position="absolute" top={850} left={500}>
          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.6, opacity: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              width="375px"
              height="150px"
              src="/assets/profileImg11.svg"
              alt="user profile"
            />
          </motion.div>
        </Box>
        <Box width={300} zIndex={2} position="absolute" top={730} left={200}>
          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.6, opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              width="325px"
              height="100px"
              src="/assets/profileImg12.svg"
              alt="user profile"
            />
          </motion.div>
        </Box>
      </Box>
      <Flex align="center" justify="center" direction="column">
        <Heading
          textAlign="center"
          fontSize={{ base: '35px', sm: '50px', lg: '60px' }}
          maxWidth="1200px"
          size="lg"
        >
          Network, vet, and partner with developers at any scale.
        </Heading>
        <Box>
          <VStack spacing={5} mt={{ base: 12, xl: 56 }}>
            <Box width="full" maxWidth={900}>
              <Image
                width="926.1"
                height="175px"
                src="/assets/TeamImage1.svg"
                alt="portt team"
              />
            </Box>
            <Box width="80%" maxWidth={750} opacity={0.8} filter="blur(1px)">
              <Image
                width="741.3"
                height="140px"
                src="/assets/TeamImage2.svg"
                alt="hackathon team"
              />
            </Box>
            <Box width="60%" maxWidth={555} opacity={0.6} filter="blur(1px)">
              <Image
                width="555.8px"
                height="105px"
                src="/assets/TeamImage3.svg"
                alt="supabase team"
              />
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Box>
  )
}

export default InfoSection2
