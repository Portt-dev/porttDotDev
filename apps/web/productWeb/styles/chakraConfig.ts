import {background, extendTheme, theme as Theme} from '@chakra-ui/react'
import {createBreakpoints} from '@chakra-ui/theme-tools'
import {Button, Heading} from './components'
const breakpoints = createBreakpoints({
  sm: '30em',
  md: '50em',
  lg: '62em',
  x: '70em',
  xl: '80em',
  '2xl': '96em',
})

const colors = {
  brand: {
    blue: '#356DEE',
    lightBlue: '#0EC5FF',
    background: '#F5F5F7',
    black: '#000000',
    grey: '#212121',
  },
}

const theme = {
  breakpoints: breakpoints,
  colors: colors,

  fonts: {
    ...Theme.fonts,
    body: 'archivo',
    heading: 'archivo',
  },
  styles: {
    global: {
      body: {
        lineHeight: 1.5,
        background: '#F5F5F7',
      },

      html: {
        scrollBehavior: 'smooth',
      },
    },
  },
  components: {
    Button,
    Heading,
  },
}

export const customTheme = extendTheme(theme)
