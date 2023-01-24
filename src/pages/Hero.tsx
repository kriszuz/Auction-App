import React from 'react'
import Button from '../components/Button'
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
                <Button text="Zagraj" to="/gra"/>
                <Button text="O grze" to="/jakgrac"/>
            </div >
        </div>
        <div className="hero-right">
            <img src="./src/assets/heading-img.png" alt="czlowiek na licytacji" />
        </div>
    </motion.section>
  )
}

export default Hero