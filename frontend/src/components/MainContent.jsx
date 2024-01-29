import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Header from './Header';
import Footer from './Footer';
import Sun from './Sun';

const MainContent = () => {

  return (
    <Box sx={{ display: 'flex', height: `98%`, flexDirection: 'column' }}>
      <Header />
      <Box sx={{ flexGrow: 1, flexShrink: 1, overflow: 'auto' }}>
        <Sun />
      </Box>
      <Footer />
    </Box>
  );
};

export default MainContent;