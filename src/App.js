import './App.css';
import About from './sections/About';
import { Starter } from './sections/Starter';
import Why from './sections/Why';
import Testimonials from './sections/Testimonials';
import Footer from './sections/Footer';
import ScrollToTop from './components/ScrollToTop';
import {motion} from 'framer-motion';
function App() {
  return (
        <motion.div initial='hidden' animate="show">
        <ScrollToTop/>
          <Starter/>
          <About/>
          <Why/>
          <Testimonials/>
          <Footer/>
        </motion.div>
  );
}

export default App;
