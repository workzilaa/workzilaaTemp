import React from 'react'
import './landing.css'
import { BiTimeFive } from 'react-icons/bi';

const Landing = () => {
  return (
    <div>
      <div className="container landingContainer">
        <div className="left">
          <img src="./img/repairman.svg" alt="repairman" />
        </div>
        <div className="right">
          <h1>Exclusive service at your door steps</h1>
          <h6>An Intuative & Impactful customer experience service platform.</h6>
          <button className="primBtn">Book Service <BiTimeFive className='icon' /></button>
        </div>
      </div>
    </div>
  )
}

export default Landing
