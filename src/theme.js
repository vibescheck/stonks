import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        w: '200px',
        p: '23px',
        fontFamily: 'monospace',
        _hover: {
          transform: 'scale(1.05)'
        },
        _active: {
          transform: 'scale(0.99)'
        },
        transition: '200ms',
        borderRadius: 15
      },
      variants: {
        black: {
          color: 'white',
          bgColor: 'black',
          _hover: {
            bgColor: 'gray.700'
          }
        }
      }
    }
  },
  Tabs: {
    variants: {
      unstyled: {
        size: 'lg',
        paddingY: '4',
        marging: '0',
        align: 'center',
        bg: 'black',
        color: 'lightgray',
        tab: {
          _selected: {
            color: 'white',
            fontWeight: 900,
            decoration: 'underline',
            transition: '200ms'
          }
        }
      }
    }
  }
});

export default theme;
