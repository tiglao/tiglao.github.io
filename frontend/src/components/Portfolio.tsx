import React, { useState } from 'react';
import { Box, Grid, Typography, Link, Modal, Card, CardContent, Button } from '@mui/material';
import Sun from './Sun';
import { Slider } from './Slider';
import Header from './Header';
import Footer from './Footer';

const Portfolio = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    centerMode: true,
  };

  return (
    <Grid container sx={{
      height: '100%',
      flexDirection: 'column',
    }}>
      <Box sx={{ display: 'flex', height: '100%', flexDirection: 'column', overflow: 'hidden' }}>
        <Header />
        <Box sx={{ flexGrow: 1, flexShrink: 1 }}>
          <Grid item xs={12} container justifyContent="flex-end" alignItems="flex-start">
            <Typography variant="h3" sx={{ textTransform: 'uppercase' }}>
              <Link href="#" onClick={handleOpen} underline="none">LIST OF WORKS</Link>
            </Typography>
            <Modal open={openModal} onClose={handleClose}>
              <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', p: 4 }}>
                <Typography variant="h6">Modal Content</Typography>
              </Box>
            </Modal>
          </Grid>
          <Grid item xs={12}>
            <Slider />
          </Grid>


        </Box>
        <Footer isCompact={false} />
      </Box>
    </Grid>
  );
};

export default Portfolio;
