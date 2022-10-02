import React, { useRef } from 'react';
import Container from '@mui/material/Container';
import {Grid} from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin,faMessage,faMobileAndroid,faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import '../styles/contact.css'

const theme = createTheme({
  palette: {
    neutral: {
      main: '#777777',
      contrastText: '#fff',
    },
  },
});



function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6igtnxn', 'template_8i0k6o8', form.current, 'user_NsdDDI4N0M3jHPqNjaJhQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };



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
                  <p className='contact-box-text'>+88 01627 61 95 04</p>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={8}>
          <form ref={form} onSubmit={sendEmail}>
            <Grid   >
            <TextField margin='normal' id="outlined-basic" label="Name" variant="outlined" name="from_name" />
            </Grid>
            <Grid >
            <TextField fullWidth  margin='normal' id="outlined-basic" label="Subject" variant="outlined" name="from_name" />
            </Grid>
            <Grid >
            <TextField fullWidth  margin='normal' id="outlined-basic" label="Email" variant="outlined" name="from_name" />
            </Grid>
            <Grid  >
            <TextField fullWidth  margin='normal' id="outlined-basic" multiline rows={4} label="Message" variant="outlined" name="message" />
            </Grid>
            <ThemeProvider theme={theme}>
              <Button type='submit' color="neutral" variant="contained" startIcon={<FontAwesomeIcon icon={faPaperPlane} />}>
                Send
              </Button>
            </ThemeProvider>
            
          </form>
          </Grid>
        </Grid>
      </Container>
      
    </div>
  );
}

export default Contact;


