import React from 'react';
import Navbar from 'Components/Navbar';
import './index.css'
import HeroBlock from 'Components/HeroBlock';
import ExtraInfoBlock from 'Components/ExtraInfoBlock';
        
function LandingPage() {
  return (
    <div className='landing-page-block'>
        <Navbar />
        <HeroBlock />
        <ExtraInfoBlock />
    </div>
  )
}

export default LandingPage