import React, { useState} from 'react'
import { BiMenuAltRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavBar = () => {

  const [responsiveNavOpen, setResponsiveNavOpen] = useState(false)

  const closeNav = () => {
    if (responsiveNavOpen){
      setResponsiveNavOpen(false)
    }
  }
  
  return (
    <motion.nav className='container'
        initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{delay: 0.2, duration: 1}}>
      <span><Link to="/">LICYTACJA</Link ></span>
      <div className={responsiveNavOpen ? "nav-links-container active" : "nav-links-container"}
         >
            <Link to="/gra" className='nav-link' onClick={() => closeNav()}>Graj</Link>
            <Link to="/jakgrac" className='nav-link' onClick={() => closeNav()}>Jak grać?</Link>
            <Link to="/kategorie" className='nav-link' onClick={() => closeNav()}>Kategorie</Link>
      </div >
      <BiMenuAltRight className='hamburger' onClick={() => setResponsiveNavOpen(!responsiveNavOpen)}/>
    </motion.nav>
  )
}

export default NavBar 