import React, {useEffect, useState} from 'react'
import {Button, Flex, Container, Box, Link} from '@chakra-ui/react'
import MobileMenu from './MobileMenu'
import Image from 'next/image'
import {motion} from 'framer-motion'
interface props {
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}
const Navigation = ({setShow}: props) => {
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <Box position="fixed" zIndex={10} width="full">
      <motion.div
        whileInView={{y: 0, visibility: 'visible'}}
        initial={{y: 50, visibility: 'hidden'}}
        transition={{duration: 0.5, delay: 0.25}}
      >
        <Box
          bg={scrollY > 10 ? 'rgba(255,255,255,0.7)' : 'none'}
          py={6}
          transition="0.5s"
        >
          <Container maxW="1600px" px={10}>
            <Flex justifyContent="space-between" alignItems="center">
              <Image
                width="150px"
                height="30px"
                src="/assets/Logo.svg"
                alt="portt logo"
              />
              <Box
                display={{base: 'flex', md: 'none'}}
                _hover={{cursor: 'pointer'}}
              >
                <MobileMenu setShow={setShow} />
              </Box>
              <Flex
                gap={12}
                alignItems="center"
                display={{base: 'none', md: 'flex'}}
              >
                <Link
                  _hover={{}}
                  href="https://github.com/Portt-dev"
                  isExternal
                >
                  Open Source
                </Link>
                <Link
                  _hover={{}}
                  href="https://github.com/Portt-dev/portt-info"
                  isExternal
                >
                  About
                </Link>
                <Button
                  onClick={() => setShow(true)}
                  bg="brand.black"
                  color="white"
                  _hover={{}}
                >
                  Get plugged in
                </Button>
              </Flex>
            </Flex>
          </Container>
        </Box>
      </motion.div>
    </Box>
  )
}

export default Navigation
