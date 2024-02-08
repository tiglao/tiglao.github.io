import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ellieOrange from '../assets/images/ellie_portfolio_image_orange.png'; // Make sure the path is correct

const Ellie = ({ sx }) => {
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
          alt="Ellie portrait, orange overlay"
          src={ellieOrange}
        />
      </Grid>
    </Grid>
  );
}

export default Ellie;
