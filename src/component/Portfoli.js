import Container from '@mui/material/Container';
import {Grid} from '@mui/material'
import CardUi from './Card';
import '../styles/portfolio.css'
import CardImg from '../Assist/weather-app.png'
import CardImg1 from '../Assist/html-css-bootstrap.png'
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
              Title={'WatherApp It build with <ReactJs,Axios,Open Weather API,Html,Css />'}
              Link={'https://tinney-weather-app.vercel.app/'}
            />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <CardUi 
              Img={CardImg4} 
              Title={'Task_M It build with <ReactJs,React D&D,React Hooks,Html,Css,Css(Flex Box) />'}
              Link={'https://task-m.vercel.app/'}
            />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <CardUi Img={CardImg2} Title={'Portfolio App It build with <ReactJs,Hrml,Css,Mui />'} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <CardUi 
              Img={CardImg1} 
              Title={'Html,Css,Bootstrap (static)'}
              Link={'https://html-css-bootstrap-eight.vercel.app/'}
            />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <CardUi 
              Img={CardImg3} 
              Title={'Coming soon'}
              // Link={'https://html-css-bootstrap-eight.vercel.app/'}
            />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <CardUi 
              Img={CardImg3} 
              Title={'Comming soon'}
              // Link={'https://html-css-bootstrap-eight.vercel.app/'}
            />
            </Grid>
            
            <div className='bottom-baseLine'></div>
          </Grid>
          
      </Container>
      
    </div>
  );
}


export default Portfolio;