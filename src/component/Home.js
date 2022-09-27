import * as React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea,Grid  } from '@mui/material';
// import Button from '@mui/material/Button';

// import { createTheme, ThemeProvider } from '@mui/material/styles';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import '../styles/home.css'


// const theme = createTheme({
//   palette: {
//     neutral: {
//       main: '#64748B',
//       contrastText: '#fff',
//     },
//   },
// });

function Home() {
  return (
    <div className="Home">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '70vh' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="500"
                  image="/Assist/din.png"
                  alt="green iguana"
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <div className='hero-container'>
              <Grid container>
                <Grid item xs={12} md={12} lg={12} >
                  <h1 className='name'>DinIslam</h1>
                </Grid>
                <Grid item xs={12} md={12} lg={12} >
                  <div className='bar'></div>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <h1 className='hero-title'>Front-End Developer</h1>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <div className='hero-objective'>
                    {/*  */}
                    {/* <ThemeProvider theme={theme}>
                      <Button
                        color="neutral"
                        className='hero-button'
                        variant="outlined" 
                        startIcon={<FingerprintIcon />}>
                        <NavLink className='hero-button' to='/Contact'>
                          <p className=''>Get In Touch</p>
                        </NavLink>
                      </Button>
                    </ThemeProvider> */}
                  </div>
                 
                </Grid>
                
              </Grid>
            </div>
          </Grid>
          <div className='bottom-baseLine'></div>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
