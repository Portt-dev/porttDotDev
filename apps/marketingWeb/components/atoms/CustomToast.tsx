import { Box, Text, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import altLogo from '../../public/assets/roundedLogo.svg'
const CustomToast = () => {
  return (
    <Box
      bg="white"
      color="brand.back"
      p={4}
      borderRadius={20}
      border="4px"
      borderColor="brand.black"
    >
      <Flex align="center" gap={2}>
        <Image width={40} height={40} src={altLogo} alt="portt logo" />
        <Text
          bgGradient="linear(to-r, #092AD0, #356DEE, #0EC5FF)"
          bgClip="text"
        >
          We will contact you soon!
        </Text>
      </Flex>
    </Box>
  )
}

export default CustomToast
