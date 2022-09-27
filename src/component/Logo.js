import Container from '@mui/material/Container';
import {Grid} from '@mui/material'
import '../styles/logo.css'
function Logo() {
  return (
    <div className="container">
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} md={12}>
            <div className='logo'>
            <h1 className='logo-text'>DIN</h1>
            </div>
          </Grid>
        </Grid>
      </Container>
      
    </div>
  );
}

export default Logo;
