import React, { useState } from 'react';
import LoginImage from '../../../assets/LoginImage.png';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';                             
import { Password } from 'primereact/password';
import './index.css';        
import * as yup from 'yup';
import { useFormik } from 'formik';

        
function SignupBlock() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validationSchema = yup.object({
    username: yup
      .string()
      .required()
      .min(4, 'Too short!'),
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });


  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });


  return (
    <div className='login-block'>
      <div className='login-image-block'>
        <img src={LoginImage} className='login-image' />
      </div>

      <form className='login-content-block' >
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
        <Button label="Signup" size='small' type='submit' />
        <a style={{"color":"black"}}>Already Have an Account?</a>
      </form>
    </div>
)
}

export default SignupBlock