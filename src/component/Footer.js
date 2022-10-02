import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faLinkedinIn,faGithub} from '@fortawesome/free-brands-svg-icons';
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
                  <FontAwesomeIcon className='footer-icon'  icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/din1998/' target='blank'>
                  <FontAwesomeIcon className='footer-icon' icon={faLinkedinIn} />
                  </a>
                </li>
                <li>
                  <a href='https://github.com/Din1998' target='blank'>
                   <FontAwesomeIcon className='footer-icon' icon={faGithub} />
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
