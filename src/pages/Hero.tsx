import React from 'react'
import HeroButton from '../components/HeroButton'
import { motion } from "framer-motion"


const Hero = () => {
  return (
    <motion.section 
      className='hero-section container'
      initial={{scale:0.97, opacity:0}}
      animate={{scale:1, opacity: 1}}
      transition={{delay: 0.1, duration: 1}}>
        <div className="hero-left">
            <h1>Baw Się Licytując Ze Znajomymi Lub Rodziną</h1>
            <p>Zajebista rozrywka dla wszystkich w każdym wieku</p>
            <div className='heading-buttons'>
                <HeroButton text="Zagraj" to="/gra"/>
                <HeroButton text="O grze" to="/jakgrac"/>
            </div >
        </div>
        <div className="hero-right">
            <img src="./src/assets/heading-img.png" alt="czlowiek na licytacji" />
        </div>
    </motion.section>
  )
}

export default Hero