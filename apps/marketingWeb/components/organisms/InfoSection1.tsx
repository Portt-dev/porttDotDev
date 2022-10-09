import { Heading, Flex, Box, Image, Text } from '@chakra-ui/react'

const InfoSection1: React.FC = () => {
  return (
    <Box mt={52}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'center', md: 'center' }}
        justify="space-between"
      >
        <Box
          zIndex={-1}
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
            their dream teams. Discover, vet, and partner with software teams at
            any scale, all in one place.
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
  )
}

export default InfoSection1
