import React from 'react';
import './index.css';
import ToolsMenuInLandingPage from '../../../assets/ToolsMenuInLandingPage.svg';


function HomeToolsBlock() {
  return (
    <div className='home-tools-block'>
        <h3>Tools Available</h3>
        <img src={ToolsMenuInLandingPage} className='home-tools-image' />
    </div>
  )
}

export default HomeToolsBlock