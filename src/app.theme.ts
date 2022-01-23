import { createTheme } from '@mui/material';

export const appTheme = createTheme({
  palette: {
    mode: 'dark',
    background: { paper: 'darkslategray' },
    primary: {
      main: '#49a39f',
    },
    secondary: {
      main: '#0d3c59',
    },
  },
});
