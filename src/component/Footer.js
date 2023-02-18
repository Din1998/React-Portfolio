import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faLinkedinIn,faGithub,faHackerrank} from '@fortawesome/free-brands-svg-icons';
import '../styles/footer.css'

function Footer() {
  return (
    <>
     <div className='bottom-baseLine'></div>
    <div className="Footer">
       
        <h1 className='footer-text'>Copyright © 2022 || Din</h1>

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
            <li>
              <a href='https://www.hackerrank.com/dinislam8803' target='blank'>
                <FontAwesomeIcon className='footer-icon' icon={faHackerrank} />
              </a>
            </li>
          </ul>
        </div>
    </div>
    </>
  );
}

export default Footer;
