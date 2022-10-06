import type { NextPage } from 'next'
import { useState } from 'react'
import {
  Box,
  Container,
  Fade

} from '@chakra-ui/react'
import { BetaPopup } from '../components/molecules/molecules'
import { HeroSection, InfoSection1, InfoSection2, InfoSection3, InfoSection4 } from '../components/organisms/organisms'

const Home: NextPage = () => {
  const [showPopUp, setShowPopUp] = useState(false)
  return (
    <Box>
      {showPopUp && <Fade in={showPopUp}><BetaPopup setShow={setShowPopUp} /></Fade>}
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
        <HeroSection setShowPopup={setShowPopUp}/>
        {/* Info #1 section */}
        <InfoSection1 />
        {/* Info #2 section */}
        <InfoSection2 />
        {/* Info #3 section */}
        <InfoSection3 />
        {/* Info #4 section */}
        <InfoSection4 setShowPopup={setShowPopUp}/>
      </Container>
    </Box>
  )
}

export default Home
