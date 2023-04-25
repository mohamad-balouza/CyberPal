import React from 'react'
import LoginImage from '../../../assets/LoginImage.svg';
import { Image } from 'primereact/image';
import "./index.css";
        
function LoginBlock() {
  return (
    <div className='login-block'>
        {/* <Image src={LoginImage} width="436.13" height='434.73'/> */}
      <div className='login-image-block'>
        <img src={LoginImage} className='login-image' />
      </div>
    </div>
)
}

export default LoginBlock