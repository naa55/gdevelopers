import React, {useState} from 'react'
import Button from './Button'
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdClose} from 'react-icons/md';
import '../styles/components/Navbar.scss';
import BrandName from './BrandName';
import {motion} from 'framer-motion';
import { navbarAnimation } from '../Animation';
const Navbar = () => {
    const [toggleNavbar, setToggleNavbar] = useState(false);
    const navbarToggle = () => {
        setToggleNavbar(!toggleNavbar);
    }
    return (
    <motion.div className={`navbar ${toggleNavbar === true ? 'active' : ''}`} variants={navbarAnimation} transition={{delay:0.1}}>
        <div className="col">
            <BrandName/>
            <div className="collapseble-button">
                {!toggleNavbar ? <GiHamburgerMenu onClick={navbarToggle} /> : <MdClose onClick={navbarToggle} />}
            </div>
        </div>
        <nav>
            <div className='links'>
                <ul>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#service">Services</a>
                    </li>
                    <li>
                        <a href="#testimonials">Testimonial</a>
                    </li>
                    <li>
                        <Button content="Content"/>
                    </li>
                </ul>
            </div>
        </nav>
    </motion.div>
  )
}

export default Navbar