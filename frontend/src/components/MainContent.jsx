import * as React from 'react';
import Box from '@mui/material/Box';
import Header from './Header';
import Footer from './Footer';
import Sun from './Sun';


const MainContent = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <Sun />
      <Footer />
    </Box>
  );
};

export default MainContent;
