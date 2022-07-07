import React from 'react'
import './header.css'

const Header = () => {
    return (
        <div>
            <div className="headContainer">
                <h1>WorkZilaa</h1>
                <ul>
                    {/* <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li> */}
                    <li><button className='primBtn'>Book Service</button></li>
                </ul>
            </div>
        </div>
    )
}

export default Header
