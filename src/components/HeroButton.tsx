import React from 'react'
import { Link } from 'react-router-dom';

const HeroButton = ({text, to}: {text:string, to: string}) => {
  return (
    <Link to={to} className="hero-button">{text}</Link>           
  )
}

export default HeroButton