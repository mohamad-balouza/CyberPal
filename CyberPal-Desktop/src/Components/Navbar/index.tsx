import React from 'react'
import Logo from '../../../assets/Logo.svg';
import { Image } from 'primereact/image';
import "./index.css";
import { useNavigate } from 'react-router-dom';


function Navbar() {
  const navigate = useNavigate()

  const handleLoginNavigation = () => {
    navigate("/login")
  }

  const handleHomeNavigation = () => {
    navigate("/")
  }

  return (
    <div className='navbar'>
        <Image src={Logo} width="60" />
        <div className='navigation'>
            <a onClick={handleHomeNavigation}>Home</a>
            <a>About</a>
            <a>Tools</a>
            <a>Advanced</a>
            <a>Contact</a>
        </div>
        <div className='profile-zone'>
            <a>Signup</a>
            <a id='chosen-one' onClick={handleLoginNavigation}>Signin</a>
        </div>
    </div>
  )
}

export default Navbar