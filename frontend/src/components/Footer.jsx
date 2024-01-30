import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'; // Import Grid

const Footer = ({isCompact}) => {
  console.log('Is Compact:', isCompact);
  return (
    <Container maxWidth={false}>
      <Grid container>
        {isCompact ? (
          <>

            <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography variant="subtitle1" component="p" sx={{
                fontWeight: 'bold',
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.4rem', lg: '1.7rem', xl: '2rem' },
                lineHeight: { xs: '1.3rem', sm: '1.7rem', md: '2.2rem', lg: '2.7rem', xl: '3.2rem' }
              }}>
                systems-oriented
              </Typography>
              <Typography variant="h1" component="p" sx={{
                fontWeight: 'bold',
                fontSize: { xs: '3rem', sm: '2.5rem', md: '3rem', lg: '3.5rem', xl: '4rem' },
                // lineHeight: { xs: '2.6rem', sm: '4.5rem', md: '6.3rem', lg: '7.3rem', xl: '8.3rem' }
              }}>
                CONSULTANT
              </Typography>
              <Typography variant="h1" component="p" sx={{
                fontWeight: 'bold',
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem', xl: '4rem' },
                // lineHeight: { xs: '2rem', sm: '5rem', md: '7rem', lg: '8rem', xl: '9rem' }
              }}> 
                DEVELOPER
              </Typography>
            </Grid>
            <Grid item xs={12} md={7}>
            <Grid container alignItems="flex-end" justifyContent="space-between">
            <Grid item xs={10} sm={7} md={9} lg={9} xl={9} sx={{ display: 'flex', alignItems: 'flex-end' }}>
    <Typography variant="body1" textAlign="right" sx={{ 
      fontSize: {
        xs: '0.8rem',
        sm: '0.8rem',
        md: '0.8rem',
        lg: '1rem',
        xl: '1.2rem'
      }
    }}>
                    I’M A CONSULTANT AND DEVELOPER BASED IN BOSTON. WITH RICH EXPERIENCE IN DATA SCIENCE AND COLLECTIVE LEADERSHIP, I BRING BUSINESS SENSE AND FUTURE-FORWARD PRINCIPLES INTO ALL MY WORK. I LOVE FOOD, ART AND THE INTENTIONAL TRANSFORMATION OF SYSTEMS. CHAOTIC GOOD?
                  </Typography>
                </Grid>
                <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', mr: 2 }}>
                  <Button href="#contact" variant="contained">
                    Contact Me
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            {/* <Grid item xs={12} sm={12} md={7} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Typography variant="subtitle1" component="p" sx={{
              fontWeight: 'bold',
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem', xl: '3.5rem' },
              lineHeight: { xs: '1.3rem', sm: '1.7rem', md: '2.2rem', lg: '2.7rem', xl: '3.2rem' }
            }}>
              systems-oriented
            </Typography>
            <Typography variant="h1" component="p" sx={{
              fontWeight: 'bold',
              fontSize: { xs: '3rem', sm: '5rem', md: '7rem', lg: '8rem', xl: '9rem' },
              lineHeight: { xs: '2.6rem', sm: '4.5rem', md: '6.3rem', lg: '7.3rem', xl: '8.3rem' }
            }}>
              CONSULTANT
            </Typography>
            <Typography variant="h1" component="p" sx={{
              fontWeight: 'bold',
              fontSize: { xs: '3rem', sm: '5rem', md: '7rem', lg: '8rem', xl: '9rem' },
              lineHeight: { xs: '3rem', sm: '5rem', md: '7rem', lg: '8rem', xl: '9rem' }
            }}> 
              DEVELOPER
            </Typography>
          </Grid>
          <Grid item xs={0} sm={0} md={1} lg={1} xl={2} />
          <Grid item xs={12} sm={12} md={4} lg={4} xl={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
          <Typography variant="body1" textAlign="right" sx={{ mb: 2, 
            fontSize: {
              xs: '0.8rem', // smaller font size for xs screens
              sm: '0.8rem', // slightly larger for sm screens
              md: '0.8rem',   // default size for md screens
              lg: '1rem', // slightly larger for lg screens
              xl: '1.2rem'  // largest size for xl screens
            } 
          }}>
              I’M A CONSULTANT AND DEVELOPER BASED IN BOSTON. WITH RICH EXPERIENCE IN DATA SCIENCE AND COLLECTIVE LEADERSHIP, I BRING BUSINESS SENSE AND FUTURE-FORWARD PRINCIPLES INTO ALL MY WORK. I LOVE FOOD, ART AND THE INTENTIONAL TRANSFORMATION OF SYSTEMS. CHAOTIC GOOD?
            </Typography>
            <Button href="#contact" variant="contained" sx={{ mt: 2 }}>
              Contact Me
            </Button>
          </Grid> */}

          </>
        ) : (
          <>
            <Grid item xs={12} md={7} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Typography variant="subtitle1" component="p" sx={{
              fontWeight: 'bold',
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '3rem', xl: '3.5rem' },
              lineHeight: { xs: '1.3rem', sm: '1.7rem', md: '2.2rem', lg: '2.7rem', xl: '3.2rem' }
            }}>
              systems-oriented
            </Typography>
            <Typography variant="h1" component="p" sx={{
              fontWeight: 'bold',
              fontSize: { xs: '3rem', sm: '5rem', md: '7rem', lg: '8rem', xl: '9rem' },
              lineHeight: { xs: '2.6rem', sm: '4.5rem', md: '6.3rem', lg: '7.3rem', xl: '8.3rem' }
            }}>
              CONSULTANT
            </Typography>
            <Typography variant="h1" component="p" sx={{
              fontWeight: 'bold',
              fontSize: { xs: '3rem', sm: '5rem', md: '7rem', lg: '8rem', xl: '9rem' },
              lineHeight: { xs: '3rem', sm: '5rem', md: '7rem', lg: '8rem', xl: '9rem' }
            }}> 
              DEVELOPER
            </Typography>
          </Grid>
          <Grid item xs={0} sm={0} md={1} lg={1} xl={2} />
          <Grid item xs={12} sm={12} md={4} lg={4} xl={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
          <Typography variant="body1" textAlign="right" sx={{ mb: 2, 
            fontSize: {
              xs: '0.8rem', // smaller font size for xs screens
              sm: '0.8rem', // slightly larger for sm screens
              md: '0.8rem',   // default size for md screens
              lg: '1rem', // slightly larger for lg screens
              xl: '1.2rem'  // largest size for xl screens
            } 
          }}>
              I’M A CONSULTANT AND DEVELOPER BASED IN BOSTON. WITH RICH EXPERIENCE IN DATA SCIENCE AND COLLECTIVE LEADERSHIP, I BRING BUSINESS SENSE AND FUTURE-FORWARD PRINCIPLES INTO ALL MY WORK. I LOVE FOOD, ART AND THE INTENTIONAL TRANSFORMATION OF SYSTEMS. CHAOTIC GOOD?
            </Typography>
            <Button href="#contact" variant="contained" sx={{ mt: 2 }}>
              Contact Me
            </Button>
          </Grid>
        </>
        )}
        
      </Grid>
    </Container>
  );
};

export default Footer;