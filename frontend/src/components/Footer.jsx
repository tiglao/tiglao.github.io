// Footer.tsx
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'; // Import Grid

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: 'background.paper' }}>
      <Container maxWidth={false}>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Typography variant="h4" component="p" sx={{ fontSize: '30px', fontWeight: 'normal' }}>
              systems-oriented
            </Typography>
            <Typography variant="h1" component="p" sx={{ fontSize: '70px', lineHeight: '70px', fontWeight: 'bold' }}>
              CONSULTANT
            </Typography>
            <Typography variant="h1" component="p" sx={{ fontSize: '70px', lineHeight: '70px', fontWeight: 'bold' }}>
              DEVELOPER
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center' }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              I'M A CONSULTANT AND DEVELOPER BASED IN BOSTON.
            </Typography>
            <Button href="#contact" variant="contained" sx={{ mt: 2 }}>
              Contact Me
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
