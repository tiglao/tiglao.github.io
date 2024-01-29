import React from 'react';
import { Typography, Button, ButtonGroup, Container, Grid, Paper } from '@mui/material';
import { Brightness4, Email, Done } from '@mui/icons-material';

export default function CreateNote() {
    // const classes = useStyles();

    return (
        <div><Grid container>
            <Grid xs={12} sm={6} md={3}>
                <Paper>1</Paper>
            </Grid>
            <Grid xs={12} sm={6} md={3}>
                <Paper>2</Paper>
            </Grid>
            <Grid xs={12} sm={6} md={3}>
                <Paper>3</Paper>
            </Grid>
            <Grid xs={12} sm={6} md={3}>
                <Paper>4</Paper>
            </Grid>
            </Grid></div>
    //     <Container>
    //         <Typography 
    //             variant="h6"
    //             color="textPrimary"
    //             align="center"
    //             gutterBottom
    //         >
    //             what's on your mind?
    //         </Typography>
    //         <ButtonGroup
    //             type="submit"
    //             color="primary"
    //             variant="contained"           
    //         >   
    //             <Button
    //                 className={classes.btn}
    //                 onClick={() => console.log('clicked me')}
    //                 startIcon={<Email />}
    //             >one</Button>
    //             <Button>two</Button>
    //             <Button>three</Button>
    //         </ButtonGroup>
    //         {/* icons */}
    //         <Brightness4 
    //             fontSize="large"
    //         />
    //                     <Brightness4 
    //             fontSize="small"
    //         />
    //                     <Brightness4 
    //             fontsize="large"
    //             color="error"
    //         />
    //     </Container>
    )
};
