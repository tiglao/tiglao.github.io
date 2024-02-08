import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Box, IconButton, Paper, CardMedia, CardContent, Typography, Grid, Button } from '@mui/material';
import { motion, useDragControls, useMotionValue } from 'framer-motion';
import CircleIcon from '@mui/icons-material/Circle';
import data from '../assets/portfolioData.json';

const imgs = data.map( project => project.images[project.defaultImageIndex]);



export const Slider = () => {
    const [imgIndex, setimgIndex] = useState(0);
    const [dragging, setDragging] = useState(false);

    const dragX = useMotionValue(0);

    const DRAG_BUFFER = 50;

    const onDragStart = () => {
        setDragging(true);
    }

    const onDragEnd = () => {
        setDragging(false);
        
        const x = dragX.get();

        if (x < DRAG_BUFFER) {
            setimgIndex((prev) => (prev + 1) % data.length);
        } else if (x >= DRAG_BUFFER) {
            setimgIndex((prev) => (prev - 1 + data.length) % data.length);
        }

    }

    useEffect(() => {
        const handleKeyNav = (event) => {
            if (event.key === 'ArrowRight') {
                setimgIndex((prev) => (prev + 1) % data.length);
            } else if (event.key === 'ArrowLeft') {
                setimgIndex((prev) => (prev - 1 + data.length) % data.length);
            }
        };

        window.addEventListener('keydown', handleKeyNav);

        return () => {
            window.removeEventListener('keydown', handleKeyNav);
        };
    }, [imgs.length]);

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
            {imgs.map((_, id) => {
                return (
                    <IconButton
                    key={id}
                    onClick={() => setImgIndex(id)}
                    sx={{
                        bgcolor: imgIndex === id ? 'primary.main' : 'grey.300',
                        '&:hover': {
                            bgcolor: 'primary.dark',
                        },
                        p: 0, 
    
                    }}
                    ><CircleIcon sx={{ fontSize: '12px' }}
                    /></IconButton>
                );
            })}
        </Box>
        
    );
};


