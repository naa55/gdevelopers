import React from 'react';
// import WorkImage from '../assets/work.svg'
import WorkImage from '../assets/web-dev.svg'
import '../styles/sections/Starter.scss'
import Button from '../components/Button'
import {GoPlay} from 'react-icons/go';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import Navbar from '../components/Navbar';
import {motion} from 'framer-motion';
import {headerAnimation, imageAnimation } from "../Animation";
import { useScroll } from '../components/useScroll';
export const Starter = () => {
    const [element, controlls] = useScroll();
  return (
    <div className='main-container' ref={element}>
        <Navbar />
            <div className="container">
               <motion.div className='content' variants={headerAnimation} animate={controlls} transition={{delay:0.2, type: 'tween'}}>
               <h1>
                    We Provide Solutions to Help You Build Your Business
                </h1>
                    <p>A professional web and graphic designing agency. We provide a high-quality servive in a web and mobile app development as well as website deveopment</p>
              
                <div className="button-container">
                    <Button content="Watch Video" icon={<GoPlay/>}/>
                    <Button content="Request Quote" icon={<HiOutlineArrowNarrowRight/>} color="pink"></Button>
                </div>
                </motion.div>
                <motion.div className="image" variants={imageAnimation} animate={controlls} transition={{delay:0.2, type: 'tween'}}>
                    <img src={WorkImage} alt="work" />
                </motion.div>
            </div>
    </div>
  )
}
