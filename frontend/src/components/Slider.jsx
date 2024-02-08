import React, { useState } from 'react';
import { Box, Card, CardMedia, CardContent, Typography, Grid, Button, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import data from '../assets/portfolioData.json';

const Slider = () => {
    // state management using React hooks
    // useState RETURNS two values
    // 1) current state
    // 2) fnction that updates state
    const [activeSlide, setActiveSlide] = useState(0);
    // modulo works by taking how many times the divisor goes into the dividend, multiplying it by the divisor, and subtracting the result of that from the dividend.
    const handleNext = () => {
        setActiveSlide((prev) => (prev + 1) % data.length);
    };

    const handlePrev = () => {
        setActiveSlide((prev) => (prev - 1 + data.length ) % data.length);
    };

    return (
        < Box sx={{ width: '100%', overflow: 'hidden', my: 2}}>
            <Typography variant="h5" textAlign="center">{data[activeSlide].title}</Typography>
            <Typography variant="body1" textAlign="center">{data[activeSlide].shortDescription}</Typography>
            <Grid container justifyContent="center">
                <Button onClick={handlePrev} sx={{ mx: 1 }}>Prev</Button>
                <Button onClick={handlePrev} sx={{ mx: 1 }}>Next</Button>
            </Grid>
        </Box>

    );
};

export default Slider;