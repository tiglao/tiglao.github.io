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
      <Box sx={{
        transform: 'scale(1)', // Adjust scale as needed
        transformOrigin: 'center',
        width: '100%',
        height: '100%',
        overflow: 'auto', // Allow scrolling within scaled content
      }}>
        {children}
      </Box>
    </Box>
  );
};

export default Wrapper;
