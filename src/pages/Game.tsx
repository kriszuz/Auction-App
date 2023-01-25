import React, { useState } from 'react'
import { motion, useAnimation } from "framer-motion"
import { FaPlay, FaPause, FaRedo } from 'react-icons/fa'
import Countdown from "../components/Countdown"
import data from '../data/categories'
import Button from '../components/HeroButton'

const Game = () => {
    
    const [category, setCategory] = useState<{ name: string; items: string[]; description: string; }>();
    // stan przechowujący aktualnie wylosowaną kategorię
    
    const [showMoreItems, setShowMoreItems] = useState(false)
    const [isStarted, setIsStarted] = useState(false)
    const startingButtonAnimation = useAnimation();
  
    const randomizeCategory = () => {
        const randomIndex = Math.floor(Math.random() * data.categories.length);
        const randomCategory = data.categories[randomIndex];
        setCategory(randomCategory);
        setShowMoreItems(false);

        if(!isStarted){
          setIsStarted(true)
          startingButtonAnimation.start({ y: 0})
        }}

  return (
    <motion.section 
      className='game-section container'
      initial={{scale:0.99, opacity:0}}
      animate={{scale:1, opacity: 1}}
      transition={{delay: 0.2, duration: 1}}>
        <motion.button 
          className='game-button' 
          onClick={randomizeCategory}
          initial={{y: 100}}
          animate={startingButtonAnimation}
          transition={{duration: 0.7}}
          >
          {isStarted? "POWTÓRZ LOSOWANIE" : "ROZPOCZNIJ"}
        </motion.button>
        {isStarted && (
        <>
        <motion.div 
          className="current-category-container"
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{duration: 0.7, delay: 0.8}}>
          {category && <span>{category.name}</span>}
        </motion.div>
        <motion.div 
          className="timer-info-container"
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{duration: 0.7, delay: 0.9}}>
          {category && 
          <Countdown category={category}/>} 
          {/* sprawdzamy czy jest wybrana kategoria aby nie przekazywac do komponentu undefinded category */}
          <div className="info-container">
            <span>{category?.description}</span>
          </div>
        </motion.div>
        <motion.button 
          className='game-button' 
          onClick={() => setShowMoreItems(!showMoreItems)}
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{duration: 0.7, delay: 0.95}}>
          ODPOWIEDZI
        </motion.button>
        {showMoreItems && 
        <motion.div 
          className="examples"
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{duration: 0.5}}>
          <span>{category?.items.join(', ')}</span>
        </motion.div>
        }</>
        )}
    </motion.section>
  )
}

export default Game