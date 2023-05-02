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
import { useNavigate } from 'react-router-dom';
import { changeLoggedInStateToFalse, changeLoggedInStateToTrue } from 'Redux/slices/userIsLoggedInSlice';

        
function LandingPage() {
  const current_page = useSelector((state: RootState) => state.currentPage.value); 
  const user_is_logged_in = useSelector((state: RootState) => state.userIsLoggedIn.value); 
  const user_token = useSelector((state: RootState) => state.userToken.access_token); 
  const token_type = useSelector((state: RootState) => state.userToken.token_type); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isUserLoggedIn = async () => {
    try {
      const current_user = await getCurrentUser(user_token, token_type);
      console.log(current_user);
      dispatch(changeLoggedInStateToTrue());
      console.log(user_is_logged_in);
      if(current_user.user_type_id == 1){
        navigate("/admin");
      }
    }catch(err){
      dispatch(changeLoggedInStateToFalse());
      console.error('Error fetching user:', err);
    }
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