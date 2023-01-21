import React from 'react'
import { Link } from 'react-router-dom';

const Button = ({text, to}: {text:string, to: string}) => {
  return (
    <Link to={to}>{text}</Link>           
  )
}

export default Button