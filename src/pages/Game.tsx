import React, { useState } from 'react'
import { FaPlay, FaPause, FaRedo } from 'react-icons/fa'
import Countdown from "../components/Countdown"
import data from '../data/categories'
import Button from '../components/Button'

const Game = () => {
    
    const [category, setCategory] = useState<{ name: string; items: string[]; description: string; }>();
    // stan przechowujący aktualnie wylosowaną kategorię
    
    const [showMoreItems, setShowMoreItems] = useState(false)
    const [isStarted, setIsStarted] = useState(false)

    const randomizeCategory = () => {
        const randomIndex = Math.floor(Math.random() * data.categories.length);
        const randomCategory = data.categories[randomIndex];
        setCategory(randomCategory);
        setShowMoreItems(false);

        if(!isStarted){
          setIsStarted(true)
        }
        }

  return (
    <section className='game-section container'>
        <button className='game-button' onClick={randomizeCategory}>{isStarted? "POWTÓRZ LOSOWANIE" : "ROZPOCZNIJ"}</button>
        {isStarted && (
        <>
        <div className="current-category-container">
        {category && <span>{category.name}</span>}
          </div>
        <div className="timer-info-container">
        {category && <Countdown category={category}/>} 
        {/* sprawdzamy czy jest wybrana kategoria aby nie przekazywac do komponentu undefinded category */}
          <div className="info-container">
            <span>{category?.description}</span>
          </div>
        </div>
        <button className='game-button' onClick={() => setShowMoreItems(!showMoreItems)}>ODPOWIEDZI</button>
        {showMoreItems && 
        <div className="examples">
          <span>{category?.items.join(', ')}</span>
        </div>
        }
        </>
        )}
    </section>
  )
}

export default Game