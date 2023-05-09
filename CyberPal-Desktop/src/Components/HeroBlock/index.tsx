import React, { useRef } from 'react';
import './index.css';
import HeroImage from '../../../assets/HeroImage.png';
import { Button } from 'primereact/button';
import type { RootState } from '../../Redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeCurrentPage } from 'Redux/slices/currentPageSlice';

        
function HeroBlock() {
  const current_page = useSelector((state: RootState) => state.currentPage.value); 
  const user_is_logged_in = useSelector((state: RootState) => state.userIsLoggedIn.value); 
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleGetStartedNavigation = () => {
    if(user_is_logged_in){
      dispatch(changeCurrentPage("Tools"));
      navigate("/tools");
    }else{
      dispatch(changeCurrentPage("Login"));
      navigate("/login");
    }
  }

  const handleMoreInfoNavigation = () => {

  }

  return (
    <div className='hero-block'>
        <div className='hero-content-block'>
            <h1>CyberPal: Your Ultimate Cybersecurity Companion</h1>
            <p>Experience seamless automation and integration of popular cybersecurity tools. Our user-friendly interface simplifies complex tasks, allowing you to enhance your security workflow with just a few clicks. Stay ahead of threats and elevate your cybersecurity game with CyberPal.</p>
            <div className='hero-action-buttons'>
                <Button label='Get Started' onClick={handleGetStartedNavigation} className='get-started-button'/>
                <Button label='More Info' onClick={handleMoreInfoNavigation} outlined className='more-info-button'/>
            </div>
        </div>
        <div className='hero-image-block'>
            <img src={HeroImage} className='hero-image'/>
        </div>
    </div>  
  )
}

export default HeroBlock