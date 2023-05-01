import React from 'react'
import Logo from '../../../assets/Logo.svg';
import { Image } from 'primereact/image';
import { Divider } from 'primereact/divider';
import './index.css';
import { useNavigate } from 'react-router-dom';
import type { RootState } from '../../Redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { changeCurrentPage } from '../../Redux/slices/currentPageSlice';


function Navbar() {
  const navigate = useNavigate();
  const current_page = useSelector((state: RootState) => state.currentPage.value); 
  const dispatch = useDispatch();

  console.log(current_page);

  const handleLoginNavigation = () => {
    navigate("/login")
  }

  const handleHomeNavigation = () => {
    navigate("/")
  }

  const handleToolsNavigation = () => {
    navigate("/tools")
  }

  const handleSignupNavigation = () => {
    navigate("/signup")
  }

  return (
    <div className='navbar'>
        <Image src={Logo} width="60" />
        <div className='navigation'>
            <a onClick={handleHomeNavigation}>Home</a>
            <a>About</a>
            <a onClick={handleToolsNavigation}>Tools</a>
            <a>Advanced</a>
            <a>Contact</a>
        </div>
        <div className='profile-zone'>
            <a onClick={handleSignupNavigation}>Signup</a>
            <Divider layout='vertical' style={{height: "1px"}}/>
            <a className='chosen-one' onClick={handleLoginNavigation}>Signin</a>
        </div>
    </div>
  )
}

export default Navbar