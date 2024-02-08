  import * as React from 'react';
  import { Grid, Typography, Link, Box } from '@mui/material';
  import Header from './Header';
  import Footer from './Footer';
  import AboutBio from './Bio';
  import Sun from './Sun';
  import Ellie from './EllieOrange';
  
  const About = () => {
    return (
      <Grid container sx={{ 
        height: '100%', 
        flexDirection: 'column',
      }}>
        {/* Background portrait, sun, circle */}
        <Box sx={{
          position: 'absolute',
          left: '12%',
          top: '-25%',
          width: '12vw',
          height: '60vw',
          zIndex: -1
        }}>
          <Ellie sx = {{ width: '200%', height: '200%' }}/>
        </Box>
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
  
        <Grid item>
          <Header />
        </Grid>
        <Grid item container sx={{ flexGrow: 1, px: { xs: 2, sm: 3, md: 4 } }}>
          <Grid item xs={6}>
            <Grid container direction="column" justifyContent="center" sx={{ height: '65%' }}>
              <Grid item>
                <Typography variant="subtitle1" sx={{ fontSize: '4.5rem' }}>Ellie Tiglao</Typography>
                <Typography variant="h3" component="p" sx={{ textTransform: 'uppercase' }}>
                  <Link href="#" underline="none">LinkedIn</Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ pr: 2, maxHeight: '40em', overflowY: 'auto' }}>
              <AboutBio />
            </Box>
          </Grid> 
          <Grid item xs={2} container justifyContent="flex-end" alignItems="flex-start">
            <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>
              <Link href="/blog" underline="none">Blog</Link>
            </Typography>
          </Grid>
        </Grid>
  
        <Grid item>
          <Footer isCompact={true} />
        </Grid>
      </Grid>
    );
  };

  export default About;
