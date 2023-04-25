import React from 'react';
import Logo from '../../../assets/Logo.svg';
import { Image } from 'primereact/image';
import Navbar from 'Components/Navbar';
import LoginBlock from 'Components/Loginblock';
        
function LoginPage() {
  return (
    <div>
        <Navbar />
        <LoginBlock />
    </div>
  )
}

export default LoginPage