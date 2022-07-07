import React from 'react'
import { MdPlumbing, MdCarpenter, MdArchitecture } from 'react-icons/md';
import { AiFillFormatPainter } from 'react-icons/ai';
import { GiVacuumCleaner } from 'react-icons/gi';
import { RiParentFill } from 'react-icons/ri';
import './services.css'

const Services = () => {
  return (
    <div>
      <div className="services container">
        <div className='servHead'>
          <h1 className='mainHead'>Services We Provide</h1>
          <p className='mainPara'>we are day to day service providers for your well being and maintaining your society at idle level.</p>
        </div>
        <div className="ServBody">
          <div className="card">
            <MdPlumbing className='cardIcon' />
            <h3>Plumbing<br />Services</h3>
          </div>
          <div className="card">
            <AiFillFormatPainter className='cardIcon' />
            <h3>Plumbing<br />Services</h3>
          </div>
          <div className="card">
            <MdArchitecture className='cardIcon' />
            <h3>Plumbing<br />Services</h3>
          </div>
          <div className="card">
            <MdCarpenter className='cardIcon' />
            <h3>Plumbing<br />Services</h3>
          </div>
          <div className="card">
            <GiVacuumCleaner className='cardIcon' />
            <h3>Plumbing<br />Services</h3>
          </div>
          <div className="card">
            <RiParentFill className='cardIcon' />
            <h3>Plumbing<br />Services</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
