import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Hero from './pages/Hero'
import Footer from './components/Footer'
import Game from './pages/Game'
import About from './pages/About'
import HowToPlay from './pages/HowToPlay'


const App = () => {
  return (
    <>
    <NavBar />
    
    <Routes>
        {/* pages */}
        <Route path='/' element={<Hero />}/>
        <Route path='/gra' element={<Game />}/>
        <Route path='/jakgrac' element={<HowToPlay />}/>
        <Route path='/tworca' element={<About /> }/>
        {/* 404 page */}
        <Route path="*" element={<h1>404</h1>} /> 
    </Routes>

    <Footer />

    </>
  )
}

export default App
