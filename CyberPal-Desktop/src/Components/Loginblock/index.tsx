import React, { useState } from 'react'
import LoginImage from '../../../assets/LoginImage.png';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';                             
import "./index.css";        
        
function LoginBlock() {
  const [value, setValue] = useState('');

  return (
    <div className='login-block'>
      <div className='login-image-block'>
        <img src={LoginImage} className='login-image' />
      </div>

      <div className='login-content-block'>
        <h4 className='login-title'>Login your account</h4>
        <span className="p-float-label">
          <InputText id="Email" value={value} onChange={(e) => setValue(e.target.value)} />
          <label htmlFor="Email">Email</label>
        </span>
        <span className="p-float-label">
          <InputText id="Password" value={value} onChange={(e) => setValue(e.target.value)} />
          <label htmlFor="Password">Password</label>
        </span>
        <Button label="Login" size='small'/>
        <p style={{"color":"black"}}>Create Account</p>
      </div>
    </div>
)
}

export default LoginBlock