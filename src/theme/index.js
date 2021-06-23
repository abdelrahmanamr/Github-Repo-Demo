import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    typography: {
      fontFamily: 'Cairo',
      button: {
        textTransform: 'none'
      }
    },
    palette: {
        // primary: '#00bcd4',
        secondary: {
            A400:'#f9826c'
        },
      },
  });
export default theme;