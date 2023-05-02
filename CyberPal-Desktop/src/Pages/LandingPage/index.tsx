import React from 'react';
import Navbar from 'Components/Navbar';
import './index.css'
import HeroBlock from 'Components/HeroBlock';
import ExtraInfoBlock from 'Components/ExtraInfoBlock';
import HomeToolsBlock from 'Components/HomeToolsBlock';
import Footer from 'Components/Footer';
import type { RootState } from '../../Redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { changeCurrentPage } from '../../Redux/slices/currentPageSlice';
import { useEffect } from 'react';
import { getCurrentUser } from '../../Apis/Users';

        
function LandingPage() {
  const current_page = useSelector((state: RootState) => state.currentPage.value); 
  const user_token = useSelector((state: RootState) => state.userToken.access_token); 
  const token_type = useSelector((state: RootState) => state.userToken.token_type); 
  const dispatch = useDispatch();

  const isUserLoggedIn = async () => {
    const current_user = await getCurrentUser(user_token, token_type);
    console.log(current_user);
    console.log(user_token);
  }

  useEffect( () => {
    dispatch(changeCurrentPage("Home"));
    isUserLoggedIn();
  }, []);
  


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