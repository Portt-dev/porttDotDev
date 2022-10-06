import {
    Box,
    Heading,
    Flex,
    Button,
  } from '@chakra-ui/react'
  import Image from 'next/image'
  
  const InfoSection3: React.FC = () => {
      return (
        <Box mt={{ base: 56, md: 200 }}>
        <Box
          position="absolute"
          zIndex={-1}
          width={800}
          height={600}
          left={10}
          top={200}
          bgGradient="radial-gradient(closest-side, #A4BAED, transparent)"
        />
        <Heading 
          fontSize={{ base: '45px', sm: '50px', lg: '60px' }}
          maxWidth="1200px"
          size="lg"
        >
          Fully open source.
          <br />
          Built for developers. 
          <br />
          Powered by Github.
        </Heading>
        <Box mt={12} borderRadius={25} backgroundColor='#ffffff'>
          <Box padding="25px">
              <Flex justify='space-between'>
                <Flex direction='column' justify='space-between' align='start'>
                  <Box>
                    <Image src='/assets/portt.svg' width="100px" height="100px"/>
                    <Heading maxWidth="800px" fontSize={{ base: '30px', md: '50px', lg: '60px' }}>Contribute to building the ultimate developer profile.</Heading>
                  </Box>
                  <Button onClick={() => window.open('https://github.com/Portt-dev', '_blank')} bg='black' color='white' _hover={{}} leftIcon={
                        <Image
                          src="/assets/Github2.svg"
                          alt="github logo"
                          width="25px"
                          height="25px"
                        />
                      } mt={12}>
                        Contribute on Github
                  </Button>
                </Flex>
                <Box display={{base: 'none', xl: 'flex'}} filter='blur(80px)'>
                  <Box
                    width={400}
                    height={400}
                    bgGradient="radial-gradient(closest-side, #A4BAED, transparent)"
                  />
                </Box>
              </Flex>
          </Box>
        </Box>
      </Box>
      )
  }
  
  export default InfoSection3
  
  
  
  
  
  