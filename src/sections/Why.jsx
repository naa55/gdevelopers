import React from 'react'
import Title from '../components/Title'
import "../styles/sections/Why.scss"
import {GoPlay} from 'react-icons/go';
import {motion} from 'framer-motion';
import {useScroll} from '../components/useScroll';
import { topContainerAnimaton, videoAnimation, reasonAnimate } from '../Animation';
const Why = () => {
    const [element, controlls] = useScroll();
  return (
    <div className='why-container' id='service' ref={element}>
        <div className="container">
            <motion.div className="top" variants={topContainerAnimaton} animate={controlls} transition={{duration:1}}>
                <Title title="Why d-g developers" color="pink" lineCenter={true}/>
                <div className="subTitle">
                    <p>Always stay updated with the technologies thus we help our clients by giving the best solutions for thier needs</p>
                </div>
            </motion.div>
            <div className="content">
                <motion.div className='' variants={videoAnimation} animate={controlls} transition={{type:"tween", duration:0.5}}>
                    <div className="video">
                        <GoPlay/>
                    </div>
                </motion.div>
                <motion.div className='reasons' variants={reasonAnimate} animate={controlls} transition={{type:'tween', duration:0.5}}>
                        <ul>
                            <li>Accessible</li>
                            <li>Accessible</li>
                            <li>Accessible</li>
                            <li>Accessible</li>
                        </ul>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Why