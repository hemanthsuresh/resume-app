import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#0079BF',
    },
    secondary: {
      main: '#00CFC1',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
