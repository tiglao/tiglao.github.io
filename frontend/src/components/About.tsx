  import * as React from 'react';
  import { Box, Grid, Typography, Link } from '@mui/material';
  import Header from './Header';
  import Footer from './Footer';
  import AboutBio from './Bio';
  import Sun from './Sun';

  const About = () => {
    return (
      <Box sx={{ 
        display: 'flex', 
        height: '100%', 
        flexDirection: 'column',
        position: 'relative', // Necessary for positioning the circle
        overflow: 'hidden' // Prevents scrolling due to the background circle
      }}>
          <Box sx={{ 
            position: 'absolute',
            left: '17%',
            top: '28%',
            width: '12vw',
            height: '60vw',
            backgroundColor: 'orange',
            borderRadius: '10px',
            zIndex: -1
          }} />
        <Box sx={{
          position: 'absolute',
          left: '5%',
          top: '36%',
          transform: 'translate(-50%, -50%)',
          zIndex: -2,
          width: '85%',
          height: '85%',
        }}>
          <Sun sx={{ width: '100%', height: '100%' }} />
        </Box>
        <Box sx={{ 
          position: 'absolute',
          top: '-3%',
          left: '25%',
          width: '70vw',
          height: '70vw',
          backgroundColor: '#f0f0f0',
          borderRadius: '50%',
          zIndex: -3,
        }} />

        <Header />
        <Grid container sx={{ height: '100%', flexGrow: 1, px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid item xs={6}>
            <Box sx={{ height: '65%' }} />    
            <Box>
              <Typography variant="subtitle1" sx={{ fontSize: '4.5rem' }}>Ellie Tiglao</Typography>
              <Typography variant="h3" component="p" sx={{ textTransform: 'uppercase' }}>
                <Link href="#" underline="none">LinkedIn</Link>
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={4} sx={{ overflowY: 'auto', pt: 5 }}>
            <Box sx={{ pr: 2, maxHeight: 'calc(800px)', overflowY: 'auto' }}>
              <AboutBio />
            </Box>
          </Grid>

          <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start' }}>
            <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>
              <Link href="/blog" underline="none">Blog</Link>
            </Typography>
          </Grid>
        </Grid>
        <Footer isCompact={true} />
      </Box>
    );
  };

  export default About;
