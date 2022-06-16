import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        w: '200px',
        fontFamily: 'monospace'
      }
    }
  }
});

export default theme;
