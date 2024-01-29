import * as React from 'react';
import { Box, Grid, Typography, Link, Container } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import AboutBio from './Bio';

const About = () => {
  return (
    <Box sx={{ display: 'flex', height: `98%`, flexDirection: 'column' }}>
      <Header />
      <Box sx={{ flexGrow: 1, flexShrink: 1, overflow: 'auto' }}>
        <AboutBio />
      </Box>
      <Footer />
    </Box>
  );
};

export default About;



