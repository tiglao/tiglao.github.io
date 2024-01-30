  // Header.tsx
  import * as React from 'react';
  import { Link } from 'react-router-dom';
  import AppBar from '@mui/material/AppBar';
  import Toolbar from '@mui/material/Toolbar';
  import Typography from '@mui/material/Typography';
  import Container from '@mui/material/Container';
  import Box from '@mui/material/Box';
  import Button from '@mui/material/Button';

  const Header = () => {

    return (
      <AppBar position="static" elevation={0} sx={{ background: 'none', border: 0 }}>
      <Container maxWidth={false}>
        <Toolbar disableGutters sx={{ color: 'black', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="subtitle1" noWrap sx={{ flexGrow: 0, fontSize: '20px'}}>
            ellie tiglao
          </Typography>
          <Typography variant="body1" noWrap sx={{ flexGrow: 0, fontSize: '20px'}}>
            FULL STACK DEVELOPER
          </Typography>
          <Box sx={{ flexGrow: 0 }}>
            <nav style={{ display: 'flex' }}>
              {/* Separator and Link as plain text */}
              <span>//</span>
              <Link to="#portfolio" style={{ textDecoration: 'none', color: 'inherit', marginLeft: '1.5em' }}>
                PORTFOLIO
              </Link>
              <span style={{ marginLeft: '1.5em', marginRight: '1.5em' }}>//</span>
              <Link 
  to="/about" 
  sx={{ 
    textDecoration: 'none', color: (location.pathname === '/about') ? 'orange' : 'inherit' 
  }}
>
                ABOUT
              </Link>
              <span style={{ marginLeft: '1.5em', marginRight: '1.5em' }}>//</span>
              <Link to="#contact" style={{ textDecoration: 'none', color: 'inherit' }}>
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
