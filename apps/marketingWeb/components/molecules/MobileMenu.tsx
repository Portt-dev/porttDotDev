import React from 'react'
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
} from '@chakra-ui/react'
import Image from 'next/image'
interface props {
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}
const MobileMenu = ({ setShow }: props) => {
  return (
    <Box >
      <Menu>
        <MenuButton>
          <Image
            width="42px"
            height="42px"
            src="/assets/Hamburger.svg"
            alt="menu button"
          />
        </MenuButton>
        <MenuList borderRadius={25} border="4px" width="56px" _hover={{}} p={2}>
          <Link href="https://github.com/Portt-dev" _hover={{}} isExternal>
            <MenuItem
              borderRadius={10}
              _hover={{ bg: 'brand.background' }}
              _focus={{}}
            >
              Open Source
            </MenuItem>
          </Link>
          <Link
            href="https://github.com/Portt-dev/portt-info"
            _hover={{}}
            isExternal
          >
            <MenuItem
              borderRadius={10}
              _hover={{ bg: 'brand.background' }}
              _focus={{}}
            >
              About
            </MenuItem>
          </Link>
          <MenuItem
            borderRadius={10}
            _hover={{ bg: 'brand.background' }}
            _focus={{}}
            onClick={() => setShow(true)}
          >
            Get plugged in
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  )
}

export default MobileMenu
