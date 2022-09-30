import Container from '@mui/material/Container';
import {Grid} from '@mui/material'
import CardUi from './Card';
import '../styles/portfolio.css'
function Portfolio() {
  return (
    <div className="container">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
            <h1>Portfolio</h1>
            </Grid>
            
            <Grid item xs={12} sm={6} md={4}>
            <CardUi  />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <CardUi />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <CardUi />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <CardUi />
            </Grid>
          </Grid>
      </Container>
    </div>
  );
}


export default Portfolio;