import React from 'react'
import { BiMenuAltRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='container'>
        <span><Link to="/">LICYTACJA</Link ></span>
        <Link to="/gra" className='nav-link'>Graj</Link>
        <Link to="/jakgrac" className='nav-link'>Jak grać?</Link>
        <Link to="/tworca" className='nav-link'>Twórca</Link>
        <BiMenuAltRight className='hamburger'/>
    </nav>
  )
}

export default NavBar 