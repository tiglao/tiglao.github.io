import React, { useState, Dispatch, SetStateAction } from 'react';
import { Box, Card, Paper, CardMedia, CardContent, Typography, Grid, Button, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { motion, useDragControls, useMotionValue } from 'framer-motion';
import data from '../assets/portfolioData.json';

const imgs = data.map( project => project.images[project.defaultImageIndex]);



export const Slider = () => {
    const [imgIndex, setimgIndex] = useState(0);
    const [dragging, setDragging] = useState(false);

    const dragX = useMotionValue(0);

    const DRAG_BUFFER = 50;

    const onDragStart = () => {
        setDragging(true);
        console.log('start')
    }

    const onDragEnd = () => {
        setDragging(false);
        console.log('end')
        
        const x = dragX.get();

        if (x < DRAG_BUFFER) {
            setimgIndex((prev) => (prev + 1) % data.length);
        } else if (x >= DRAG_BUFFER) {
            setimgIndex((prev) => (prev - 1 + data.length) % data.length);
        }

    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            overflow: 'hidden',
            cursor: dragging ? 'grabbing' : 'grab',
        }}>
        <motion.div
            drag='x'
            dragConstraints={{ left: 0, right: 0 }}
            style={{
                x: dragX,
            }}
            animate={{ translateX: -imgIndex * 600, }}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}

        >
            <Images />
        </motion.div>
        <DotNav imgIndex={imgIndex} setImgIndex={setimgIndex} />
            
        </Box>

    );
};

// flex shrink allows for items to be off screen
const Images = () => {
    return (
        <Box 
            sx={{
                minHeight: '100%',
                display: 'flex',
                width: '600px'
            }}

        >
            {imgs.map((imgSrc, id) => {
                return (
                    <Paper
                        key={id}
                        sx={{
                            aspectRatio: '16/9',
                            width: '100%',
                            flexShrink: 0,
                            borderRadius: '1rem',
                            backgroundImage: `url(${imgSrc})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            bgcolor: 'grey.800' 
                        }} 
                    />
                );
            })}
        </Box>
    );
};

const DotNav = ({
    imgIndex, 
    setImgIndex
} : {
    imgIndex: number;
    setImgIndex: Dispatch<SetStateAction<number>>; 
}) => {
    return (
        <Box sx={{
            mt: 4,
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            gap: 2,
        }}>
            hello world.
        </Box>
        
    );
};