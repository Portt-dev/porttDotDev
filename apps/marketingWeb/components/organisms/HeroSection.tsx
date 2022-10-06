import { Heading, Button, Flex, Center } from '@chakra-ui/react'
import { motion } from 'framer-motion'

interface props {
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>
}

const HeroSection: React.FC<props> = ({ setShowPopup }: props) => {
  return (
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
            zIndex="9"
          >
            The team building platform for developers.
          </Heading>
          <Button
            _hover={{ bg: 'brand.black', color: 'white' }}
            onClick={() => setShowPopup(true)}
            mt={6}
          >
            Get plugged in
          </Button>
        </Flex>
      </Center>
    </motion.div>
  )
}

export default HeroSection
