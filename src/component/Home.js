import{ useState } from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea,Grid  } from '@mui/material';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFingerprint} from '@fortawesome/free-solid-svg-icons';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typewriter } from 'react-simple-typewriter'


import '../styles/home.css'


const theme = createTheme({
  palette: {
    neutral: {
      main: '#777777',
      contrastText: '#fff',
    },
  },
});

function Home() {

  const [count, setCount] = useState(0);

    const handleDone = () => {
    console.log("done from typewriter component");
  };
  const handleType = (counter) => {
    setCount(counter);
    console.log("this function run every type on Component");
  };



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
                
                  <h1 className='hero-title' style={{  margin: 'auto 0', fontWeight: 'normal' }}>
                      Creative{' '}
                      <span style={{ color: 'black', fontWeight: 'bold' }}>
                        
                        <Typewriter
                          words={['Front-End Developer', 'Web Developer', 'Web Designer']}
                          loop={10}
                          cursor
                          cursorStyle='_'
                          typeSpeed={70}
                          deleteSpeed={50}
                          delaySpeed={1000}
                          onLoopDone={handleDone}
                          onType={handleType}
                        />
                      </span>
                    </h1>
              
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <div className='hero-button'>
                    <ThemeProvider theme={theme}>
                      <a className='pdf-anchor' href='Dinislam-Frontend.pdf' download='Dinislam-FrontEnd.pdf'>
                        <Button
                          color="neutral"
                          variant="outlined" 
                          startIcon={<FontAwesomeIcon icon={faFingerprint} />}>
                            View Cv
                        </Button>
                      </a>
                    </ThemeProvider>
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
