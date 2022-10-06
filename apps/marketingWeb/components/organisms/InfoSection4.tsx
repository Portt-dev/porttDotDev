import { Box, Heading, Flex, Button, Text } from '@chakra-ui/react'
import Image from 'next/image'
import {useState} from 'react'


interface props {
    setShowPopup: React.Dispatch<React.SetStateAction<boolean>>
  }
const InfoSection4: React.FC<props> = ({ setShowPopup }: props) => {
    const [hover, setHover] = useState(-300)
    return (
        <Box>
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
                    onClick={() => setShowPopup(true)}
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
        </Box>
    )
}

export default InfoSection4
