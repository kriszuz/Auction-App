import React from 'react'
import { motion } from "framer-motion"

const HowToPlay = () => {
  return (
    <motion.div className='container rules-page-container'
      initial={{ opacity: 0, y:20}}
      animate={{ opacity: 1, y:0}}
      transition={{duration: 0.7, delay: 0.2}}>
      <h2 className='rules-h2'>Zasady Gry</h2>
      <div className='rules-container'>
        <ol>
          <li>Gracze wspólnie losują kategorię, w której będą licytować.</li>
          <li>Gracze licytują ile potrafią wymienić przedmiotów z wylosowanej kategorii.</li>
          <li>Gracz, który wygrał licytacje i tym samym zadeklarował się że zna najwięcej 
              przedmiotów z wylosowanej kategorii ma 60 sekund na ich wymienienie.</li>
          <li>Jeśli gracz, który wygrał licytacje zdoła wymienić zadeklarowaną ilość 
              przedmiotów w 60 sekund otrzymuje 1 punkt*.</li>
        </ol>
        <p>*Gracze liczą punkty we własnym zakresie, aplikacja służy jedynie do losowania kategorii, sprawdzenia
            przykładowych odpowiedzi, a także do odmierzania czasu. Ilość graczy jest dowolna.</p>
      </div>
    </motion.div>
  )
}

export default HowToPlay