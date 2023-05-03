import React from 'react';
import './index.css';
import HeroImage from '../../../assets/HeroImage.png';
import { Button } from 'primereact/button';
        
function HeroBlock() {
  return (
    <div className='hero-block'>
        <div className='hero-content-block'>
            <h1>CyberPal: Your Testing Buddy</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet nostrum nihil totam laboriosam odio esse, quo facilis repellendus nobis quos cupiditate sequi, sed praesentium fugit eligendi! Unde corrupti veniam eos!</p>
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