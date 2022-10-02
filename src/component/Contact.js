import Container from '@mui/material/Container';
import {Grid} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin,faMessage,faMobileAndroid} from '@fortawesome/free-solid-svg-icons';
import '../styles/contact.css'
function Contact() {
  return (
    <div className="container">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <h1 className='contact-section-title'>Contact</h1>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className='contact-box-container'>
              <div className='contact-box'>
                <div className='box'>
                  <div className='contact-box-icon'>
                  <FontAwesomeIcon icon={faLocationPin} className="contact-icon" />
                  </div>
                  <p className='contact-box-text'>Ashulia,Charabag,Dhaka-1341</p>
                </div>
              </div>
              <div className='contact-box'>
                <div className='box'>
                <div className='contact-box-icon'>
                <FontAwesomeIcon icon={faMessage} className="contact-icon" />
                </div>
                <p className='contact-box-text'>dinislam8803@gmail.com</p>
                </div>
                </div>
              <div className='contact-box'>
                <div className='contact-box-icon'>
                <div className='box'>
                  <FontAwesomeIcon icon={faMobileAndroid} className="contact-icon" />
                  </div>
                  <p className='contact-box-text'>+88 01777 12 88 03</p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={8}>
              <div>Contact Form</div>
          </Grid>
        </Grid>
      </Container>
      
    </div>
  );
}

export default Contact;


