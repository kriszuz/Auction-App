import React from 'react'
import Button from '../components/Button'

const Hero = () => {
  return (
    <section className='hero-section container'>
        <div className="hero-left">
            <h1>Baw Sie Licytujac Ze Znajomymi Lub Rodzina</h1>
            <p>Zajebista rozrywka dla wszystkich w kazdym wieku</p>
            <div className='heading-buttons'>
                <Button text="Zagraj" to="/gra"/>
                <Button text="O grze" to="/jakgrac"/>
            </div >
        </div>
        <div className="hero-right">
            <img src="./src/assets/heading-img.png" alt="czlowiek na licytacji" />
        </div>

    </section>
  )
}

export default Hero