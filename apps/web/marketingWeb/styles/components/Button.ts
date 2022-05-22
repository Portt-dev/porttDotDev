export const Button = {
  // style object for base or default style
  baseStyle: {
    _focus: {
      boxShadow: '0 0 0 3px #0EC5FF',
    },
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    sm: {
      fontSize: '10px',
    },
    md: {
      fontSize: '15px',
    },
    lg: {
      width: 200,
    },
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: {
      color: 'brand.black',
      border: '4px',
      borderColor: 'brand.black',
      borderRadius: 'full',
      paddingX: 6,
      paddingY: 5,
    },
    solid: {
      color: '#ffffff',
      backgroundColor: 'brand.black',
      border: '4px',
      borderColor: 'brand.black',
      borderRadius: 'full',
      paddingX: 6,
      paddingY: 4,
    },
    // we could declare other variants here
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
}
