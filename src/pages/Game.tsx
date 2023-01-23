import React, { useState } from 'react'
import { motion, useAnimation } from "framer-motion"
import { FaPlay, FaPause, FaRedo } from 'react-icons/fa'
import Countdown from "../components/Countdown"
import data from '../data/categories'
import Button from '../components/Button'

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
    <section 
      className='game-section container'>
        <motion.button 
          className='game-button' 
          onClick={randomizeCategory}
          initial={{y: 100}}
          animate={startingButtonAnimation}
          transition={{duration: 0.2}}
          >
          {isStarted? "POWTÓRZ LOSOWANIE" : "ROZPOCZNIJ"}
        </motion.button>
        {isStarted && (
        <>
        <motion.div 
          className="current-category-container"
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{duration: 0.5, delay: 0.3}}>
          {category && <span>{category.name}</span>}
        </motion.div>
        <motion.div 
          className="timer-info-container"
          initial={{ opacity: 0}}
          animate={{ opacity: 1}}
          transition={{duration: 0.5, delay: 0.4}}>
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
          transition={{duration: 0.5, delay: 0.45}}>
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
    </section>
  )
}

export default Game