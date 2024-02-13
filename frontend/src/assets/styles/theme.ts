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
      fontSize: '10rem',
      textShadow: `
      -1px -1px 0 #FFFFFF,  
       1px -1px 0 #FFFFFF,
      -1px  1px 0 #FFFFFF,
       1px  1px 0 #FFFFFF`,
    },
    h2: {
      fontFamily: 'Righteous, cursive',
      fontSize: '7rem',
      textShadow: `
      -1px -1px 0 #FFFFFF,  
       1px -1px 0 #FFFFFF,
      -1px  1px 0 #FFFFFF,
       1px  1px 0 #FFFFFF`,
    },
    h3: {
      fontFamily: 'Righteous, cursive',
      fontSize: '2rem',
      textShadow: `
      -1px -1px 0 #FFFFFF,  
       1px -1px 0 #FFFFFF,
      -1px  1px 0 #FFFFFF,
       1px  1px 0 #FFFFFF`,
    },
    h4: {
      fontFamily: 'Righteous, cursive',
      fontSize: '1.5rem',
      textShadow: `
        -1px -1px 0 #FFFFFF,  
         1px -1px 0 #FFFFFF,
        -1px  1px 0 #FFFFFF,
         1px  1px 0 #FFFFFF`,
    },
    h5: {
      fontFamily: 'Righteous, cursive',
      fontSize: '1.25rem',
      textShadow: `
        -1px -1px 0 #FFFFFF,  
         1px -1px 0 #FFFFFF,
        -1px  1px 0 #FFFFFF,
         1px  1px 0 #FFFFFF`,
    },
    h6: {
      fontFamily: 'Righteous, cursive',
      fontSize: '1rem',
      textShadow: `
        -1px -1px 0 #FFFFFF,  
         1px -1px 0 #FFFFFF,
        -1px  1px 0 #FFFFFF,
         1px  1px 0 #FFFFFF`,
    },
    subtitle1: {
      fontFamily: 'Merienda, cursive',
      letterSpacing: '0.1em', 
      fontSize: '6rem',
      textShadow: `
        -1px -1px 0 #FFFFFF,  
         1px -1px 0 #FFFFFF,
        -1px  1px 0 #FFFFFF,
         1px  1px 0 #FFFFFF`,
    },
    body1: {
      fontFamily: 'Quicksand, Arial, sans-serif',
      fontSize: '1.2rem',
    },
    button: {
      textTransform: 'uppercase',
      fontSize: '1.3em',
      gap: '1em'
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
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          },
          '&:active': {
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          },
          '&:disabled': {
            backgroundColor: '#E6E6E6',
            color: '#A6A6A6',
          },
        },
      },
    },
  },
});

export default theme;
