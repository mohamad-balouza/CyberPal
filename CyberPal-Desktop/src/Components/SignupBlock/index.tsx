import React, { useState } from 'react';
import LoginImage from '../../../assets/LoginImage.png';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';                             
import { Password } from 'primereact/password';
import "./index.css";        
        
function SignupBlock() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='login-block'>
      <div className='login-image-block'>
        <img src={LoginImage} className='login-image' />
      </div>

      <div className='login-content-block'>
        <h4 className='login-title'>Create your account</h4>
        <div className="p-float-label"  style={{width: "80%", display: "flex"}}>
          <InputText id="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={{flex: "1"}} />
          <label htmlFor="Username">Username</label>
        </div>
        <div className="p-float-label"  style={{width: "80%", display: "flex"}}>
          <InputText id="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{flex: "1"}} />
          <label htmlFor="Email">Email</label>
        </div>
        <div className="p-float-label" style={{width: "80%", display: "flex"}}>
          <Password inputId="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{flex: "1"}} inputStyle={{flex: "1"}} panelStyle={{flex: "1"}} toggleMask/>
          <label htmlFor="Password">Password</label>
        </div>
        <Button label="Signup" size='small'/>
        <a style={{"color":"black"}}>Already Have an Account?</a>
      </div>
    </div>
)
}

export default SignupBlock