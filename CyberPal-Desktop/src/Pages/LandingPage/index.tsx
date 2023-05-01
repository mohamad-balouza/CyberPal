import React from 'react';
import Navbar from 'Components/Navbar';
import './index.css'
import HeroBlock from 'Components/HeroBlock';
import ExtraInfoBlock from 'Components/ExtraInfoBlock';
import HomeToolsBlock from 'Components/HomeToolsBlock';
import Footer from 'Components/Footer';
        
function LandingPage() {
  const api_url = window.process_env.REACT_APP_API_BASE_URL; 
  console.log(api_url);

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