import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Box, IconButton, Link, CardMedia, CardContent, Typography, Grid, Button } from '@mui/material';
import { motion, useDragControls, useMotionValue } from 'framer-motion';
import CircleIcon from '@mui/icons-material/Circle';
import data from '../assets/portfolioData.json';
import Sun from './Sun';

export const Slider = ({ filterData }) => {
    console.log("filterData", filterData)

    const imgs = filterData.map( project => project.images[project.defaultImageIndex]);
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
            setimgIndex((prev) => (prev + 1) % imgs.length);
        } else if (x >= DRAG_BUFFER) {
            setimgIndex((prev) => (prev - 1 + imgs.length) % imgs.length);
        }

    }

    useEffect(() => {
        const handleKeyNav = (event) => {
            if (event.key === 'ArrowRight') {
                setimgIndex((prev) => (prev + 1) % imgs.length);
            } else if (event.key === 'ArrowLeft') {
                setimgIndex((prev) => (prev - 1 + imgs.length) % imgs.length);
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
                style={{ x: dragX }}
                animate={{ translateX: -imgIndex * 600, }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}

            >
                <Images imgIndex={imgIndex} imgs={imgs}/>
            </motion.div>
            <Grid container sx={{
                flexDirection: 'row',
                mt: 5,
                px: 3
            }}>
                <Grid item xs={12}>
                    <DotNav imgIndex={imgIndex} setImgIndex={setimgIndex} imgs={imgs}/>
                </Grid>
            </Grid>
        </Box>

    );
};

// flex shrink allows for items to be off screen
const Images = ({
    imgIndex, imgs } : { imgIndex: number; 
        imgs: { src: string; id: number }[]; 
}) => {
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
                    <motion.div
                        key={id}
                        style={{
                            aspectRatio: '16/9',
                            width: '100%',
                            flexShrink: 0,
                            borderRadius: '1rem',
                            backgroundImage: `url(${imgSrc})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            bgcolor: 'grey.800', 
                            border: imgIndex === id ? '10px solid orange' : 'none'
                        }} 
                        animate={{
                            scale: imgIndex === id ? 1 : 0.9
                        }}
                        transition={{
                            type: 'spring',
                            mass: 3,
                            stiffness: 400,
                            damping: 50
                        }}
                    />
                );
            })}
        </Box>
    );
};

const DotNav = ({
    imgIndex, 
    setImgIndex,
    imgs
} : {
    imgIndex: number;
    setImgIndex: Dispatch<SetStateAction<number>>;
    imgs: { src: string; id: number }[]; 
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
                        bgcolor: imgIndex === id ? 'primary.main' : 'grey.200',
                        '&:hover': {
                            bgcolor: 'primary.dark',
                        },
                        p: 0, 
    
                    }}
                    >
                        <CircleIcon sx={{ width: '12px', height: '12px'}}/>
                    </IconButton>
                );
            })}
        </Box>
        
    );
};


