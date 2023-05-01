import React from 'react';
import Navbar from 'Components/Navbar';
import './index.css'
import HeroBlock from 'Components/HeroBlock';
import ExtraInfoBlock from 'Components/ExtraInfoBlock';
import HomeToolsBlock from 'Components/HomeToolsBlock';
import Footer from 'Components/Footer';
        
function LandingPage() {
  return (
    <div className='landing-page-block'>
        <Navbar />
        <HeroBlock />
        <ExtraInfoBlock />
        <HomeToolsBlock />
        <Footer />
    </div>
  )
}

export default LandingPage