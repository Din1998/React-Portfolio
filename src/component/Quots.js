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
                    <h2><q>Second slide label</q></h2>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className='c-img'></div>
                    <Carousel.Caption>
                      <h2><q>Second slide label</q></h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className='c-img'></div>
                    <Carousel.Caption>
                    <h2><q>Second slide label</q></h2>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>

                </Carousel>
              </div>
            </Parallax>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}


export default Quots;