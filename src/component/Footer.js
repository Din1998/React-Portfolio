import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/footer.css'

function Footer() {
  return (
    <div className="Footer">
      <Container maxWidth="lg">
        <div className='baseline'></div>
        <Grid container spacing={1}>
          <Grid item xs={4} md={4} sx={{height: '15vh'}}>
            <h1 className='footer-text'>Copyright © 2022 || Din</h1>
          </Grid>
          <Grid item xs={8} md={8} sx={{height: '15vh'}}>
            <div className='link-container'>
              <ul>
                <li>
                  <a href='https://www.facebook.com/din803/' target='blank'>
                    <FacebookIcon fontSize='large' color='success'/>
                  </a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/din1998/' target='blank'>
                    <LinkedInIcon fontSize='large' color='success' />
                  </a>
                </li>
                <li>
                  <a href='https://github.com/Din1998' target='blank'>
                    <GitHubIcon fontSize='large' color='success' />
                  </a>
                </li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
