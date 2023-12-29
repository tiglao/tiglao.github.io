// Header.tsx
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box'; // Import Box

const Header = () => {
  return (
    <AppBar position="static" color="default" elevation={0} sx={{ border: 0, borderBottom: 1, borderColor: 'divider' }}>
      <Container>
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Left Aligned - Ellie Tiglao */}
          <Typography variant="h6" color="inherit" noWrap sx={{ flex: 1 }}>
            Ellie Tiglao
          </Typography>

          {/* Right Aligned - Links */}
          <Box sx={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
            <nav>
              <Link variant="button" color="text.primary" href="#portfolio" sx={{ mx: 1.5 }}>
                PORTFOLIO
              </Link>
              <Link variant="button" color="text.primary" href="#about" sx={{ mx: 1.5 }}>
                ABOUT
              </Link>
              <Link variant="button" color="text.primary" href="#contact" sx={{ mx: 1.5 }}>
                CONTACT
              </Link>
            </nav>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
