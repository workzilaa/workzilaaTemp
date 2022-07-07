import React from 'react'
import Header from '../header/header'
import Landing from '../landing/landing'
import './mainbg.css'

const Mainbg = () => {
  return (
    <div>
      <div className="main">
        <Header/>
        <Landing/>
      </div>
    </div>
  )
}

export default Mainbg
