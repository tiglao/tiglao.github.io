import * as React from 'react';
import { Box, Typography, Link } from '@mui/material';

const AboutBio = () => {
  return (
    <Box sx={{ overflowY: 'auto', maxHeight: '100%', padding: 2 }}>
        <Typography>
          Ellie is a curious and dynamic full-stack software engineer with a wealth of experience in creative problem-solving and collaborative work for social good. In her current role, she leverages the FARM stack, Python, and JavaScript to rapidly design and develop scalable databases and user interfaces. Ellie’s passion for strategic optimization drives projects like her latest: transitioning frontend code from Javascript and Bootstrap to TypeScript and Material UI. 
          <br /><br />
          Previously, she led and supported a cross-functional team of 10, using keen observation of existing inefficiencies and knowledge gaps to develop and maintain a Notion-based custom toolset using Javascript and Node.js. This toolset significantly streamlined inventory, waste, and labor management, boosting time and cost efficiency. 
          <br /><br />
          Committed to building products that positively impact both people and planet, Ellie is enthusiastic about bringing her comprehensive skillset to new challenges and old problems.
        </Typography>
    </Box>
  );
};

export default AboutBio;
