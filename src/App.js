import './App.css';
import Home from './component/Home';
import Footer from './component/Footer';
import About from './component/About';
import Contact from './component/Contact';
import Portfolio from './component/Portfoli';
import ScrollToTop from "react-scroll-to-top";
import Logo from './component/Logo';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


function App() {
  return (
    <div className="App">
    <Logo />
    <Home />
    <About />
    <Portfolio />
    <Contact />
    <Footer />
    <ScrollToTop smooth top="700" component={<ArrowUpwardIcon />} />

    </div>
  );
}

export default App;
