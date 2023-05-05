import React from 'react';
import './index.css';
import HeroImage from '../../../assets/HeroImage.png';
import { Button } from 'primereact/button';
        
function HeroBlock() {
  return (
    <div className='hero-block'>
        <div className='hero-content-block'>
            <h1>CyberPal: Your Ultimate Cybersecurity Companion</h1>
            <p>Experience seamless automation and integration of popular cybersecurity tools. Our user-friendly interface simplifies complex tasks, allowing you to enhance your security workflow with just a few clicks. Stay ahead of threats and elevate your cybersecurity game with CyberPal.</p>
            <div className='hero-action-buttons'>
                <Button label='Get Started' className='get-started-button'/>
                <Button label='More Info' outlined className='more-info-button'/>
            </div>
        </div>
        <div className='hero-image-block'>
            <img src={HeroImage} className='hero-image'/>
        </div>
    </div>  
  )
}

export default HeroBlock