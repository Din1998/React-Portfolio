import Container from '@mui/material/Container';
import {Grid} from '@mui/material'
import CardUi from './Card';
import '../styles/portfolio.css'
import CardImg from '../Assist/weather-app.png'
import CardImg1 from '../Assist/default.jpg'
import CardImg2 from '../Assist/portfolio.png'
import CardImg3 from '../Assist/default.jpg'
import CardImg4 from '../Assist/task-m.png'

function Portfolio() {
  return (
    <div className="container">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
            <h1 className='section-title'>Portfolio</h1>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <CardUi 
              Img={CardImg}
              Title={'WatherApp'}
              Link={'https://tinney-weather-app.vercel.app/'}
            />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <CardUi 
            Img={CardImg4} 
            Title={'Task_M'}
            Link={'https://task-m.vercel.app/'}
            />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <CardUi Img={CardImg2} Title={'PortFolioApp'} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <CardUi Img={CardImg3} Title={'SnackGame (Comming Soon)'} />
            </Grid>
            <div className='bottom-baseLine'></div>
          </Grid>
          
      </Container>
      
    </div>
  );
}


export default Portfolio;