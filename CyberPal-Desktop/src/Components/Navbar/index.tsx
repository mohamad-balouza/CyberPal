import React from 'react';
import Logo from '../../../assets/Logo.svg';
import { Image } from 'primereact/image';
import { Divider } from 'primereact/divider';
import './index.css';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../../Redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { changeCurrentPage } from '../../Redux/slices/currentPageSlice';
import { changeLoggedInStateToFalse } from 'Redux/slices/userIsLoggedInSlice';
import { resetToken } from 'Redux/slices/userTokenSlice';


function Navbar() {
  const navigate = useNavigate();
  const current_page = useSelector((state: RootState) => state.currentPage.value); 
  const user_is_logged_in = useSelector((state: RootState) => state.userIsLoggedIn.value); 
  const dispatch = useDispatch();
  
  const handleLoginNavigation = () => {
    dispatch(changeCurrentPage("Login"));
    navigate("/login");
  }

  const handleHomeNavigation = () => {
    dispatch(changeCurrentPage("Home"));
    navigate("/");
  }

  const handleToolsNavigation = () => {
    dispatch(changeCurrentPage("Tools"));
    navigate("/tools");
  }

  const handleSignupNavigation = () => {
    dispatch(changeCurrentPage("Signup"));
    navigate("/signup");
  }

  const handleProfileNavigation = () => {
    dispatch(changeCurrentPage("Profile"));
    navigate("/profile");
  }

  const handleLogout = () => {
    dispatch(changeLoggedInStateToFalse());
    dispatch(resetToken());
    dispatch(changeCurrentPage("Home"));
    navigate("/");
  }

  return (
    <div className='navbar'>
        <Image src={Logo} width="60" />
        <div className='navigation'>
            <a className={current_page == "Home" ? "chosen-one" : ""} onClick={handleHomeNavigation}>Home</a>
            <a>About</a>
            <a className={current_page == "Tools" ? "chosen-one" : ""} onClick={handleToolsNavigation}>Tools</a>
            <a>Advanced</a>
            <a>Contact</a>
        </div>
        {
          user_is_logged_in ?
          <div className='profile-zone'>
              <a className={current_page == "Profile" ? "chosen-one" : ""} onClick={handleProfileNavigation}>Profile</a>
              <Divider layout='vertical' style={{height: "1px"}}/>
              <a className={current_page == "Logout" ? "chosen-one" : ""} onClick={handleLogout}>Logout</a>
          </div>
          :
          <div className='profile-zone'>
              <a className={current_page == "Signup" ? "chosen-one" : ""} onClick={handleSignupNavigation}>Signup</a>
              <Divider layout='vertical' style={{height: "1px"}}/>
              <a className={current_page == "Login" ? "chosen-one" : ""} onClick={handleLoginNavigation}>Signin</a>
          </div>
        }
    </div>
  )
}

export default Navbar