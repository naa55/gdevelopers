import React from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import Title from '../components/Title'
import "../styles/sections/About.scss"
import {HiLightBulb} from "react-icons/hi";
import {BsCalendar2Fill} from "react-icons/bs";
import {BiSupport} from "react-icons/bi";
import {SiGooglemessages} from "react-icons/si";
import { reveal } from '../Animation';
import {motion} from 'framer-motion';
import { useScroll } from '../components/useScroll'
const About = () => {
  const [element, controlls] = useScroll();
  return (
    <div className='about-container' id='about' ref={element}>
        <div className="container">
            <motion.div className="details" animate={controlls} variants={reveal} transition={{delay:0.1, stiffness:300}}>
                <Title title="About d-g developers" color="blue"/> 
                <p>We have a believe that every business gared towards online business derserve a website. Our mission is to provide our clients with that assistance</p>
                <p>We are exicted to work with you through the development process</p>
                <Button content="Why d-g developers?" />
            </motion.div>
            <div className="cards" ref={element}>
            <Card title="Innovative Ideas" logo={<HiLightBulb/>} animateCustom={controlls}/>
            <Card title="Planning" logo={<BsCalendar2Fill/>} animateCustom={controlls}/>
            <Card title="Communication" logo={<BiSupport/>} animateCustom={controlls}/>
            <Card title="24 hour Support" logo={<SiGooglemessages/>} animateCustom={controlls}/>
        </div>
        </div>
        
    </div>
  )
}

export default About