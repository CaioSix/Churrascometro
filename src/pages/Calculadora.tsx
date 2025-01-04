import React from 'react'
import CalculadoraChurrasco from '../components/CalculadoraChurrasco'

import bgImage from "../assets/bg-1.jpg"

const Calculadora = () => {
  return (
    <div 
    className='page-container'
    style={{backgroundImage: `url(${bgImage})`}}
    
    >
      <h1>Cacluladora de Churrasco!</h1>
      <CalculadoraChurrasco />
    </div>
  )
}

export default Calculadora