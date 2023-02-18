import Container from '@mui/material/Container';
import {Grid} from '@mui/material'
import CardV2 from './Cardv2';
import '../styles/portfolio.css'
import CardImg from '../Assist/bdWeather.png'
import CardImg1 from '../Assist/html-css-bootstrap.png'
import CardImg2 from '../Assist/portfolio.png'
import CardImg3 from '../Assist/default.jpg'
import CardImg4 from '../Assist/task-m.png'
import CardImg5 from '../Assist/play-snake.png'
import CardImg6 from '../Assist/price-card.png'

function Portfolio() {
  return (
    <div className="container">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
            <Grid item xs={12} md={12}>
            <h1 className='section-title'>Portfolio Showcase</h1>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
            <CardV2 
                img={CardImg}
                heading={'Weather App'}
                title={'This App Build With <React,Axios,Open Weather,Mui />'}
                Link={'https://tinney-weather-app.vercel.app/'}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
            <CardV2 
                img={CardImg1}
                heading={'HTML Template'}
                title={'This Template Build With <Html,Css,BootStrap />'}
                Link={'https://html-css-bootstrap-eight.vercel.app/'}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
            <CardV2 
                img={CardImg2}
                heading={'Portfolio'}
                title={'This App Build with <React,Bootstrap,Mui />'}
                // Link={'https://tinney-weather-app.vercel.app/'}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
            <CardV2 
                img={CardImg5}
                heading={'Snack Game'}
                title={'Play Snak Build with <Html,Css,JavaScript />'}
                Link={'https://snack-game-eight.vercel.app/'}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
            <CardV2 
                img={CardImg4}
                heading={'Task M.'}
                title={'This App Build with <Html,Css,JavaScript />'}
                Link={'https://task-m.vercel.app/'}
              />
            </Grid>
            
            <Grid item xs={12} sm={6} md={6}>
              <CardV2 
                img={CardImg3}
                heading={'Blog App'}
                title={'This project was coming soon <React,Express,MongoDB />'}
                // Link={'https://tinney-weather-app.vercel.app/'}
              />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <CardV2 
                img={CardImg6}
                heading={'Pricing Card'}
                title={'This project was build with <React,Redux,Mui />'}
                Link={'https://react-redux-pricecard.vercel.app/'}
              />
            </Grid>
            
            <div className='bottom-baseLine'></div>
          </Grid>
          
      </Container>
      
    </div>
  );
}


export default Portfolio;