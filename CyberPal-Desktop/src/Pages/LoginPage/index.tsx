import React from 'react';
import Logo from '../../../assets/Logo.svg';
import { Image } from 'primereact/image';
import Navbar from 'Components/Navbar';
import LoginBlock from 'Components/Loginblock';
import './index.css'
        
function LoginPage() {
  return (
    <div className='login-page'>
        <Navbar />
        <LoginBlock />
    </div>
  )
}

export default LoginPage