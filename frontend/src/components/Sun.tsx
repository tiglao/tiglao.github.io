import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import sunImage from '../assets/images/sun.PNG';

const Sun = ({ sx }) => {
  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ height: '100%', width: '100%', ...sx }}>
      <Grid item xs={12}>
        <Box
          component="img"
          sx={{
            maxWidth: '100%', 
            maxHeight: '100%',
            objectFit: 'contain', 
            ...sx, 
          }}
          alt="Sun"
          src={sunImage}
        />
      </Grid>
    </Grid>
  );
}

export default Sun;
