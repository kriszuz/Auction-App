import React from 'react'
import data from '../data/categories'
import CountUp from 'react-countup'
import { motion } from "framer-motion"

const About = () => {
  return (
    <section className='categories-container container'>Obecnie dostępnych jest <CountUp start={1} end={data.categories.length} duration={1}/> kategorii </section>
  )
}

export default About