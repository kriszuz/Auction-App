import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <h2 className='fail-page'>404: Ta strona nie istnieje. Wróć na <Link to="/"><span>stronę główną.</span></Link ></h2>
  )
}

export default ErrorPage