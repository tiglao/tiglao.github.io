import React, { useState } from 'react';
import { Box, Grid, Typography, Link, Modal, Card, CardContent, Button } from '@mui/material';
import Sun from './Sun';
import { Slider } from './Slider';
import Header from './Header';
import Footer from './Footer';
import data from '../assets/portfolioData.json';

const filterList = data.reduce<string[]>((acc, item) => {
  item.categories.forEach(category => {
      if (!acc.includes(category)) {
          acc.push(category);
      };
  });
  return acc;
}, []).sort((a, b) => a.localeCompare(b)); 

const Portfolio = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const handleCategorySelect = (category) => {
    const isCategorySelected = selectedCategories.includes(category);
    let updatedCategories = [];

    if (isCategorySelected) {
      updatedCategories = selectedCategories.filter(c => c !== category);
    } else {
      updatedCategories = [...selectedCategories, category];
    }

    setSelectedCategories(updatedCategories);
    console.assert(
      isCategorySelected ? !updatedCategories.includes(category) : updatedCategories.includes(category),
      `Error in updating selectedCategories with category "${category}". Expected ${!isCategorySelected}, found ${isCategorySelected}.`
    );
  };
 
  const filterData = data.filter(item => 
    selectedCategories.length === 0 ||
    selectedCategories.every(c => item.categories.includes(c))
  );
  
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
            <Slider filterData={filterData} />
          </Grid>
          <Grid container spacing={2} sx={{ mt: 3 }}>
            <Grid item xs={4} sx={{
              display: 'flex',
              px: 3
            }}>
              <Box sx={{
                display: 'grid',
                gridAutoFlow: 'column',
                gridTemplateRows: 'repeat(auto-fill, minmax(20px, auto))',
                maxHeight: '200px', 
                overflowY: 'auto'
              }}>
                {filterList.map((category, index) => {
                  return (
                    <Link
                      key={index}
                      component='button'
                      onClick={() => handleCategorySelect(category)}
                      sx={{
                        fontSize: '0.75rem',
                        color: selectedCategories.includes(category) ? 'primary.main' : 'grey',
                        fontColor: selectedCategories.includes(category) ? 'primary.light' : 'grey.300',
                        '&:hover': {
                          fontColor: selectedCategories.includes(category) ? 'primary.dark' : 'grey.400',
                        },
                        textDecoration: 'none',
                        cursor: 'pointer',
                      }}>{category}</Link>
                  );
                })}
              </Box>
            </Grid>
            <Grid item xs={5}>
              {/* {filterData.map((item) => (
                <Box key={item.id}>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography>{item.shortDescription}</Typography>
                  <Link href="#" onClick={() => handleOpen(item)}>View More</Link>
                </Box>
              ))} */}
            </Grid>
          </Grid>



        </Box>
        <Footer isCompact={true} />
      </Box>
    </Grid>
  );
}

export default Portfolio;
