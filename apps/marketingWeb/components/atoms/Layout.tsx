import React, { useState } from 'react'
import { Box } from '@chakra-ui/react'
import Footer from '../molecules/Footer'
import Navigation from './Navigation'
import BetaPopUp from '../molecules/BetaPopUp'
interface Props {
  children: React.ReactChild
}
type LayoutComp = (props: Props) => React.ReactElement
const Layout: LayoutComp = ({ children }) => {
  const [showPopUp, setShowPopUp] = useState(false)
  return (
    <Box overflow="hidden">
      {showPopUp && <BetaPopUp setShow={setShowPopUp} />}
      <Navigation setShow={setShowPopUp} />
      {children}
      <Footer />
    </Box>
  )
}

export default Layout
