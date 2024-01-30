import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import sunImage from '../assets/images/sun.PNG'; // Make sure the path is correct

const Sun = ({ sx }) => {
  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ height: '100%', width: '100%', ...sx }}>
      <Grid item xs={12}>
        <Box
          component="img"
          sx={{
            maxWidth: '100%', // Set to 100% to fill the container
            maxHeight: '100%', // Set to 100% to fill the container
            objectFit: 'contain', // Use 'contain' to keep the aspect ratio
            ...sx, // Spread additional styles passed as props
          }}
          alt="Sun"
          src={sunImage}
        />
      </Grid>
    </Grid>
  );
}

export default Sun;
