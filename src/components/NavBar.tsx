import React, { useState} from 'react'
import { BiMenuAltRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const NavBar = () => {

  const [responsiveNavOpen, setResponsiveNavOpen] = useState(false)

  const closeNav = () => {
    if (responsiveNavOpen){
      setResponsiveNavOpen(false)
    }
  }
  
  return (
    <nav className='container'>
        <span><Link to="/">LICYTACJA</Link ></span>
         <div className={responsiveNavOpen ? "nav-links-container active" : "nav-links-container"}>
            <Link to="/gra" className='nav-link' onClick={() => closeNav()}>Graj</Link>
            <Link to="/jakgrac" className='nav-link' onClick={() => closeNav()}>Jak grać?</Link>
            <Link to="/tworca" className='nav-link' onClick={() => closeNav()}>Twórca</Link>
         </div >
        <BiMenuAltRight className='hamburger' onClick={() => setResponsiveNavOpen(!responsiveNavOpen)}/>
    </nav>
  )
}

export default NavBar 