// About.tsx
import * as React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import sunImage from '../assets/images/sun.PNG';

const Contact = () => {
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden'
    }}>
      <Header />
      {/* Sun and Highlight Background */}
      <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
      }}>
        {/* Black Sun */}
        <Box
            component="img"
            sx={{
                maxWidth: '300%', // Bigger than the screen to move it off-center
                maxHeight: '300%', // Bigger than the screen
                objectFit: 'contain',
                position: 'absolute',
                left: '-35%', // Adjust as needed
                bottom: '-20%' // Closer to the bottom
            }}
            alt="Sun"
            src={sunImage}
        />
        {/* Orange Rectangle */}
        <Box sx={{
            width: '10%', // Adjusted for vertical orientation
            height: '70%', // Adjusted for vertical orientation
            background: '#FFA629',
            position: 'absolute',
            bottom: 0, // Starts from the bottom
            zIndex: 2,
            left: '10%',
        }} />
        {/* Grey Circle */}
        <Box sx={{
            width: '20%', // Fixed size for no transformation
            height: '20%', // Fixed size for no transformation
            borderRadius: '50%',
            background: 'grey',
            position: 'absolute',
            left: '60%', // Adjust as needed for fixed positioning
            top: '60%', // Adjust as needed for fixed positioning
            opacity: 0.5
        }} />
      </Box>
      {/* Content Grid */}
      <Grid container sx={{ flexGrow: 1, p: 3, overflow: 'auto' }}>
        {/* Column 1 - Ellie Tiglao */}
        <Grid item xs={12} md={4} sx={{ position: 'absolute', left: '60%', transform: 'translateX(-50%)', top: '15%' }}>
          <Typography>Ellieeeeeee</Typography>
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-end', height: '100%' }}>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            Ellie Tiglao
          </Typography>
          <Link href="https://www.linkedin.com" target="_blank" sx={{ textTransform: 'uppercase' }}>
            Linkedin
          </Link>
        </Grid>
        {/* Column 2 - Content */}
        {/* Column 2 - Content */}
        <Grid item xs={12} md={4} sx={{ overflowY: 'auto' }}>
          {/* Lorem Ipsum with example links and images */}

        </Grid>
        {/* Column 3 - BIO/BLOG */}
        <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-end', height: '100%' }}>
          <Typography variant="subtitle1" component={Link} href="#bio" sx={{ mr: 2 }}>
            BIO
          </Typography>
          <Typography variant="subtitle1" component={Link} href="#blog">
            BLOG
          </Typography>
        </Grid>
      </Grid>
      <Footer isCompact={true} />
    </Box>
  );
};

export default Contact;
