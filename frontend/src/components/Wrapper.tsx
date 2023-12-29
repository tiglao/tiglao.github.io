import React from 'react';
import Box from '@mui/material/Box';

const Wrapper = ({ children }) => {
  return (
    <Box sx={{
      border: '5px solid #E6E6E6',
      margin: '10px',
      height: 'calc(100vh - 20px)',
      overflow: 'auto'
    }}>
      {children}
    </Box>
  );
};

export default Wrapper;
