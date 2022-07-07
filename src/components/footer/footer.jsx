import React from 'react'
import './footer.css'
import { BsFacebook } from 'react-icons/bs';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container footerContainer">
        <div className="logo">
            <h1>WorkZilaa</h1>
        </div>
        <div className="footerNav textNav">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Carriers</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className="footerNav social">
            <ul>
                <li><img src="img/facebook.svg" alt="" /></li>
                <li><img src="img/insta.svg" alt="" /></li>
                <li><img src="img/twitter.svg" alt="" /></li>
                <li><img src="img/youtube.svg" alt="" /></li>
            </ul>
        </div>
        <p className='copyright'>Copyright &#169; 2022 Workzilaa | All Rights are Reserved</p>
      </div>
    </div>
  )
}

export default Footer
