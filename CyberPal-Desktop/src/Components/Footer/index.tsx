import React from 'react'
import "./index.css";


function Footer() {
  return (
    <div className='footer-block'>
        <div className='footer-navigation-block'>
            <a>Contact us</a>
            <a>Privacy Policy</a>
            <a>Terms of use</a>
        </div>
        <div className='socials-block'>
            <i className="pi pi-github"></i>
            <i className="pi pi-linkedin"></i>
        </div>
    </div>
  )
}

export default Footer