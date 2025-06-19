import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5E2E91',        // paars uit je logo
    },
    secondary: {
      main: '#FF8200',        // oranje uit je logo
    },
    background: {
      default: '#F9FAFB',     // zacht wit-grijs
      paper: '#FFFFFF',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;