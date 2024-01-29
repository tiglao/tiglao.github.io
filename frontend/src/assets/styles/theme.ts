import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#FFFFFF',
    },
    accent: {
      main: '#FFA629',
    },
    background: {
      default: '#E6E6E6',
    },
    text: {
      primary: '#000000',
      secondary: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Quicksand, Arial, sans-serif',
    h1: {
      fontFamily: 'Righteous, cursive',
      fontSize: '10rem', // Example size, adjust as needed
    },
    h2: {
      fontFamily: 'Righteous, cursive',
      fontSize: '7rem', // Example size
    },
    h3: {
      fontFamily: 'Righteous, cursive',
      fontSize: '2rem', // Example size
    },
    h4: {
      fontFamily: 'Righteous, cursive',
      fontSize: '1.5rem', // Example size
    },
    h5: {
      fontFamily: 'Righteous, cursive',
      fontSize: '1.25rem', // Example size
    },
    h6: {
      fontFamily: 'Righteous, cursive',
      fontSize: '1rem', // Example size
    },
    subtitle1: {
      fontFamily: 'Merienda, cursive',
      fontSize: '6rem',
    },
    body1: {
      fontFamily: 'Quicksand, Arial, sans-serif',
      fontSize: '1.2rem', // Example size
    },
    button: {
      textTransform: 'uppercase',
      fontSize: '1.3em'
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransForm: 'uppercase',
          backgroundColor: '#000000',
          color: '#FFFFFF',
          height: '50px',
          borderRadius: '8px',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.8)', // Lighten for hover
          },
          '&:active': {
            backgroundColor: 'rgba(0, 0, 0, 0.6)', // Darken for active
          },
          '&:disabled': {
            backgroundColor: '#E6E6E6',
            color: '#A6A6A6', // Greyed out
          },
        },
      },
    },
  },
});

export default theme;
