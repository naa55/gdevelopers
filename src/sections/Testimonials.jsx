import React from 'react'
import Testimonial from '../components/Testimonial'
import Title from '../components/Title'
import '../styles/sections/Testimonials.scss'
import {textAnimation, cardAnimation} from '../Animation';
import { useScroll } from '../components/useScroll'; 
import { motion } from 'framer-motion';
const Testimonials = () => {
  const [element, controlls] = useScroll();
  return (
    <div className="testimonials-container" id="testimonials" ref={element}>
    <div className="container">
      <motion.div className="title-container" variants={textAnimation} animate={controlls} transition={{duration: 1}}>
        <Title title="Testimonials" color="blue" lineCenter={true} />
        <p>See what our clients are saying about us.</p>
      </motion.div>
      <div className="testimonials">
        <Testimonial
          content="The best on the net! Software development saved my business. I use
      Software development often. I am really satisfied with my Software
      Development."
          name="Betty Ablorh"
          designation="Co-Founder"
          variants={cardAnimation}
          animate={controlls}

        />
        <Testimonial
          content="Mobile application developer is exactly what out business has been lacing. I have gotten at least 50 times the value from mobile apllication."
          name="J Armah"
          designation="Founder & CEO"
          variants={cardAnimation}
          animate={controlls}

        />
        <Testimonial
          content="Logo Design is the next killer app. We've used logo design for the last five years. Best. Product. Ever! Definetly worth the investment"
          name="Joe Armah"
          designation="Founder"
          variants={cardAnimation}
          animate={controlls}
        />
      </div>
    </div>
  </div>
  )
}

export default Testimonials