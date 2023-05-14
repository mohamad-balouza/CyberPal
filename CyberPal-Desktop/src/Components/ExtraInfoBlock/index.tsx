import ExtraInfoCard from 'Components/ExtraInfoCard';
import React from 'react';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeCurrentPage } from 'Redux/slices/currentPageSlice';
import type { RootState } from '../../Redux/store';

function ExtraInfoBlock() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user_is_logged_in = useSelector((state: RootState) => state.userIsLoggedIn.value); 


  const handleToolsNavigation = () => {
    dispatch(changeCurrentPage("Tools"));
    navigate("/tools");
  }

  const handleProfileNavigation = () => {
    if(user_is_logged_in){
      dispatch(changeCurrentPage("Profile"));
      navigate("/profile");
    }else{
      dispatch(changeCurrentPage("Login"));
      navigate("/login");
    }
  }

  return (
    <div className='extra-info-block'>
        <h3>What We Do</h3>
        <p>CyberPal offers an all-in-one cybersecurity solution, enabling seamless automation and integration of popular tools.</p>
        <div className='extra-info-cards-block'>
            <ExtraInfoCard title="Integrated Tools" onClick={handleToolsNavigation} description="CyberPal integrates popular cybersecurity tools, providing a unified platform for enhanced security management." button_label="View Tools" color="blue" icon="pi-wrench" />
            {/* <ExtraInfoCard title="Scheduling Features" description="Schedule specific scripts and automate email notifications and communication, optimizing your security workflow." button_label="Explore Scheduling" color="pink" /> */}
            <ExtraInfoCard title="Automation & Scripts" onClick={handleProfileNavigation} description="Leverage the power of automation and custom scripts to improve efficiency and streamline security operations." button_label="Discover Automation" color="cyan" icon="pi-file-edit" />
        </div>
    </div>  
  )
}

export default ExtraInfoBlock