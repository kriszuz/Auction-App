import React from 'react'

const HowToPlay = () => {
  return (
    <div className='container rules-page-container'>
    <h2 className='rules-h2'>Zasady Gry</h2>
    <div className='rules-container'>
      <ol>
        <li>Gracze wspólnie losują kategorię, w której będą licytować.</li>
        <li>Gracze licytują ile potrafią wymienić przedmiotów z wylosowanej kategorii.</li>
        <li>Gracz, który wygrał licytacje i tym samym zadeklarował się że zna najwięcej 
            przedmiotów z wylosowanej kategorii ma 60 sekund na ich wymienienie.</li>
        <li>Jeśli gracz, który wygrał licytacje zdoła wymienić zadeklarowaną ilość 
            przedmiotów z wylosowanej kategorii otrzymuje 1 punkt*.</li>
      </ol>
      <p>*Gracze liczą punkty we własnym zakresie, aplikacja służy jedynie do losowania kategorii, zobaczenia
          przykładowych odpowiedzi, a także do odmierzenia czasu. Ilość graczy jest dowolna.</p>
    </div>
    </div>
  )
}

export default HowToPlay