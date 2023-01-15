import Container from '@mui/material/Container';
import {Grid} from '@mui/material'
import '../styles/about.css'

function About() {
  return (
    <div className="main-container">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <div className='page-title'>
              <h1>About Myself</h1>
            </div>
            <div className='my-bio'>
              <h1>Biography</h1>
              <div className='bar'></div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className='objective'>
              <h3>I’ve found interest in software engineering almost 2 years ago, especially in Front-end development. After that, I’ve self taught myself coding. I tried to build websites, different applications using HTML, CSS, Javascript and React.Then I dived into some backend things such as Express Js,MongoDB to understand how applications work from end-to-end.
              </h3>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
          <div className='details'>
            <ul className='details-ul'>
              <li className='list'>
                <span className='frist'>Name:</span>
                <span className='second'>Dinislam</span>
              </li>
              <li className='list'>
                <span className='frist'>Address:</span>
                <span className='second'>Ashulia,Dhaka-1341</span>
              </li>
              <li className='list'>
                <span className='frist'>Study:</span>
                <span className='second'>City University</span>
              </li>
              <li className='list'>
                <span className='frist'>Degree:</span>
                <span className='second'>Diploma in CSE</span>
              </li>
              <li className='list'>
                <span className='frist'>Mail:</span>
                <span className='second'>dinislam8803@gmail.com</span>
              </li>
              <li className='list'>
                <span className='frist'>Phone:</span>
                <span className='second'>+880 1777 12 88 03</span>
              </li>
            </ul>
          </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div>
                <h1 className='title-text'>What I Do</h1>
                <div className='bar'></div>
                <div>
                <ul className='lan_ul'>
                <li className='lan_li'>
                  <span className='lan_sp_second'>Front-End Develop</span>
                </li>
                <li className='lan_li'>                 
                  <span className='lan_sp_second'>Web App Develop</span>
                </li>
                <li className='lan_li'>                 
                  <span className='lan_sp_second'>Web Design</span>
                </li>
                <li className='lan_li'>                 
                  <span className='lan_sp_second'>Web Analysis</span>
                </li>
                <li className='lan_li'>                
                  <span className='lan_sp_second'>Problem Solving</span>
                </li>
                <li className='lan_li'>                  
                  <span className='lan_sp_second'>Effective Design Sense</span>
                </li>
              </ul>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <div className='lan_section'>
              <h1 className='title-text'>Programming</h1>
              <div className='bar'></div>
              <ul className='lan_ul'>
                <li className='lan_li'>
                  <span className='lan_sp_second'>Javacsript</span>
                </li>
                <li className='lan_li'>                 
                  <span className='lan_sp_second'>React</span>
                </li>
                <li className='lan_li'>                 
                  <span className='lan_sp_second'>Html</span>
                </li>
                <li className='lan_li'>                 
                  <span className='lan_sp_second'>Css</span>
                </li>
                <li className='lan_li'>                
                  <span className='lan_sp_second'>Bootstrap</span>
                </li>
                <li className='lan_li'>                  
                  <span className='lan_sp_second'>Material ui</span>
                </li>
                <li className='lan_li'>                  
                  <span className='lan_sp_second'>Github</span>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className='lan_section'>
              <h1 className='title-text'>Other Skill</h1>
              <div className='bar'></div>
              <ul className='lan_ul'>
                <li className='lan_li'>
                  <span className='lan_sp_second'>Ms Excel</span>
                </li>
                <li className='lan_li'>                 
                  <span className='lan_sp_second'>Ms Power Point</span>
                </li>
                <li className='lan_li'>                 
                  <span className='lan_sp_second'>Canva</span>
                </li>
                <li className='lan_li'>                 
                  <span className='lan_sp_second'>Figma</span>
                </li>
                <li className='lan_li'>                 
                  <span className='lan_sp_second'>Windows</span>
                </li>
                <li className='lan_li'>                 
                  <span className='lan_sp_second'>Linux</span>
                </li>
                
              </ul>
            </div>
          </Grid>
          
          <div className='bottom-baseLine'></div>
        </Grid>
      </Container>
    </div>
  );
}

export default About;
