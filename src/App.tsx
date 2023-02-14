import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Hero from './pages/Hero'
import Footer from './components/Footer'
import Game from './pages/Game'
import Categories from './pages/Categories'
import HowToPlay from './pages/HowToPlay'
import ErrorPage from './pages/404'



const App = () => {
  return (
    <>
    <NavBar />
    
    <Routes>
        {/* pages */}
        <Route path='/' element={<Hero />}/>
        <Route path='/gra' element={<Game />}/>
        <Route path='/jakgrac' element={<HowToPlay />}/>
        <Route path='/kategorie' element={<Categories /> }/>
        {/* 404 page */}
        <Route path="*" element={<ErrorPage />} /> 
    </Routes>

    <Footer />

    </>
  )
}

export default App
