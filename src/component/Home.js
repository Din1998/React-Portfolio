import{ useState } from 'react';
import Container from '@mui/material/Container';

import { Grid  } from '@mui/material';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFingerprint} from '@fortawesome/free-solid-svg-icons';
import { createTheme, ThemeProvider,  styled  } from '@mui/material/styles';
import { Typewriter } from 'react-simple-typewriter'
import { deepPurple } from '@mui/material/colors';


import '../styles/home.css'
import HeroCard from './HeroCard';


const theme = createTheme({
  palette: {
    neutral: {
      main: '#777777',
      contrastText: '#fff',
    },
  },
});

function Home() {

  const [ setCount] = useState(0);

    const handleDone = () => {
    console.log("done from typewriter component");
  };
  const handleType = (counter) => {
    setCount(counter);
    console.log("this function run every type on Component");
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[400],
    '&:hover': {
      backgroundColor: deepPurple[500],
    },
  }));
  


  return (
    <div className="Home">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <HeroCard />
          </Grid>
          <Grid item xs={12} md={8}>
            <div className='hero-container'>
              <Grid container>
                <Grid item xs={12} md={12} lg={12} >
                  <h1>Hello !</h1>
                  <h1 className='name'>I'm DinIslam</h1>
                </Grid>
                <Grid item xs={12} md={12} lg={12} >
                  <div className='bar'></div>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                
                  <h1 className='hero-title' style={{  margin: 'auto 0', fontWeight: 'normal' }}>
                      Creative{' '}
                      <span style={{ color: 'black' }}>
                        
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
                      <a className='pdf-anchor' href='Dinislam.pdf' download='Dinislam.pdf'>
                        <ColorButton
                          color="neutral"
                          variant="outlined" 
                          startIcon={<FontAwesomeIcon icon={faFingerprint} />}>
                            View Resume
                        </ColorButton>
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
