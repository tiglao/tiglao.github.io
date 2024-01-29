import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import sunImage from '../assets/images/sun.PNG'; // Corrected path

const Sun = () => {
    return (
        <Grid container justifyContent="center" alignItems="center" sx={{ height: '100%', width: '100%' }}>
            <Grid item xs={12} sx={{ position: 'absolute', top: '30%', left: '75%', transform: 'translate(-50%, -50%)' }}>
                <Box
                    component="img"
                    sx={{
                        maxWidth: '300px', // Set a maximum width that fits your design
                        maxHeight: '300px', // Set a maximum height that fits your design
                        objectFit: 'contain'
                    }}
                    alt="Sun"
                    src={sunImage}
                />
            </Grid>
        </Grid>
    );
}

export default Sun;
