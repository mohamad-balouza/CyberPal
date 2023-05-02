import React, { useState } from 'react';
import LoginImage from '../../../assets/LoginImage.png';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';                             
import { Password } from 'primereact/password';
import "./index.css";       
import * as yup from 'yup';

        
function LoginBlock() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  return (
    <div className='login-block'>
      <div className='login-image-block'>
        <img src={LoginImage} className='login-image' />
      </div>

      <div className='login-content-block'>
        <h4 className='login-title'>Login your account</h4>
        <div className="p-float-label"  style={{width: "80%", display: "flex"}}>
          <InputText id="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{flex: "1"}} />
          <label htmlFor="Email">Email</label>
        </div>
        <div className="p-float-label" style={{width: "80%", display: "flex"}}>
          <Password inputId="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{flex: "1"}} inputStyle={{flex: "1"}} panelStyle={{flex: "1"}} toggleMask/>
          <label htmlFor="Password">Password</label>
        </div>
        <Button label="Login" size='small'/>
        <a style={{"color":"black"}}>Create Account</a>
      </div>
    </div>
)
}

export default LoginBlock