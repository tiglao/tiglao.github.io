import * as React from 'react';
import { Box, Typography, Link } from '@mui/material';

const AboutBio = () => {
  return (
    <Box sx={{ overflowY: 'auto', maxHeight: '100%', padding: 2 }}>
        <Typography>
            YASSSSSSSS Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. <Link href="#">Sed adipiscing</Link>, diam eget facilisis lacinia, arcu augue placerat est, eget egestas dui nibh in libero.
            <br /><br />
            <img src="/path/to/example.jpg" alt="Example" style={{ width: '100%', height: 'auto'}} />
            <br />
            Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <Link href="#">commodo vitae</Link>, ornare sit amet, wisi.
            <br /><br />
            Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <Link href="#">Duis ultricies</Link> pharetra magna. Donec accumsan malesuada orci. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            <br /><br />
            <img src="/path/to/another-example.jpg" alt="Another Example" style={{ width: '100%', height: 'auto'}} />
            <br />
            Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna.
            <br /><br />
            Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            <br />
            Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna.
            <br /><br />
            Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            <br />
            Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna.
            <br /><br />
            Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            <br />
            Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna.
            <br /><br />
            Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </Typography>
    </Box>
  );
};

export default AboutBio;
