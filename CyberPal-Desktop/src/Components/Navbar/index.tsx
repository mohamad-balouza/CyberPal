import React from 'react'
import Logo from '../../../assets/Logo.svg';
import { Image } from 'primereact/image';
import "./index.css";


function Navbar() {
  return (
    <div className='navbar'>
        <Image src={Logo} width="60" />
        <div className='navigation'>
            <a>Home</a>
            <a>About</a>
            <a>Tools</a>
            <a>Advanced</a>
            <a>Contact</a>
        </div>
        <div className='profile-zone'>
            <a>Signup</a>
            <a id='chosen-one'>Signin</a>
        </div>
    </div>
  )
}

export default Navbar