import Container from '@mui/material/Container';
import {Grid} from '@mui/material'
import { Parallax } from 'react-parallax';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/quots.css'
function Quots() {
  return (
    <div className="container">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Parallax blur={10} bgImage="../Assist/js.jpg" bgImageAlt="the cat" strength={200}>
              <div className='carosul-container'>
                  <Carousel>
                  <Carousel.Item>
                    <div className='c-img'></div>
                    <Carousel.Caption>
                      <h2><q>When allah loves a servant,He test him.</q></h2>
                      <p>-Prophet Muhammad</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className='c-img'></div>
                    <Carousel.Caption>
                      <h2><q>It's not a faith in technology. It's faith in people.</q></h2>
                      <p>- Steve Jobs</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className='c-img'></div>
                    <Carousel.Caption>
                    <h2><q>I'm the rebel eternal</q></h2>
                      <p>
                        - Kazi Nazrul Islam 
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>

                </Carousel>
              </div>
            </Parallax>
          </Grid>
        </Grid>
        <div className='bottom-baseLine'></div>
      </Container>
    </div>
  );
}


export default Quots;