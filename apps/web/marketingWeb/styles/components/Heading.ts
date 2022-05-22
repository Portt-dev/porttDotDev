export const Heading = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    md: {
      fontSize: '20px',
    },
    lg: {
      fontSize: '60px',
    },
    xl: {
      fontSize: '90px',
    },
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: {
      bgGradient: 'linear(to-r, #092AD0, #356DEE, #0EC5FF)',
      bgClip: 'text',
    },
    // we could declare other variants here
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: 'xl',
    variant: 'primary',
  },
}
