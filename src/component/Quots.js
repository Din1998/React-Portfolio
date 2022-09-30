import Container from '@mui/material/Container';
import {Grid} from '@mui/material'
import { Parallax } from 'react-parallax';
import '../styles/quots.css'
function Quots() {
  return (
    <div className="container">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Parallax blur={10} bgImage="../Assist/js.jpg" bgImageAlt="the cat" strength={200}> 
              <div className='quots-box'>
                <h1 className='qouts-text'><q>Stay hungry. Stay foolish.</q></h1>
                <p className='qouts-text'>- Steve Jobs</p>
              </div>
            </Parallax>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}


export default Quots;