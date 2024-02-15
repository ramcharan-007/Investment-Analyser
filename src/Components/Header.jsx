import React from 'react'
import LogoImage from "../assets/investment-calculator-logo.png";

function Header() {
  return (
    <div id='header'>
        <img src={LogoImage} alt=''/>
        <h1>Investment Analyser</h1>
    </div>
  )
}

export default Header

