import React from 'react'
import data from '../data/categories'
import CountUp from 'react-countup'
import { motion } from "framer-motion"

const About = () => {
  return (
    <section className='categories-container container'>
      <motion.h2
        initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{delay: 0.2, duration: 1}}
      >Obecnie dostępnych jest <CountUp className='counting' start={1} end={data.categories.length} duration={1.2}/> kategorii</motion.h2>
      <motion.div className="categories-list-container"
        initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{delay: 1.4, duration: 0.6}}
      > <ul>{data.categories.map((category => 
          <li key={category.name}>{category.name}</li>))}
        </ul>
      </motion.div>
    </section>
  )
}

export default About