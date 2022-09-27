import Container from '@mui/material/Container';
import {Grid} from '@mui/material'
import Box from '@mui/material/Box';
import '../styles/contact.css'
function Contact() {
  return (
    <div className="container">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Box sx={{ bgcolor: '#cfe8fc', height: '70vh' }} />
            <h1>Contact</h1>
          </Grid>
        </Grid>
      </Container>
      
    </div>
  );
}

export default Contact;


