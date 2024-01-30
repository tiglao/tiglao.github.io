import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Header from './Header';
import Footer from './Footer';
import Sun from './Sun';

const MainContent = () => {

  return (
    <Box sx={{ display: 'flex', height: '100%', flexDirection: 'column', overflow: 'hidden' }}>
      <Header />
      <Box sx={{ flexGrow: 1, flexShrink: 1 }}>
  <Sun sx={{
    position: 'absolute',
    left: '70%',
    top: '30%',
    transform: 'translate(-50%, -50%)',
    width: '250px',
    height: '250px',
  }} />
</Box>
      <Footer isCompact={false} />
    </Box>
  );
};

export default MainContent;


