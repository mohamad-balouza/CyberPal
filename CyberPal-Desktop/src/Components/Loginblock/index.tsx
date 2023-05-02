import React, { useState } from 'react';
import LoginImage from '../../../assets/LoginImage.png';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';                             
import { Password } from 'primereact/password';
import "./index.css";       
import * as yup from 'yup';
import { useFormik } from 'formik';

        
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

  const formik = useFormik({
    initialValues: {
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

      <form className='login-content-block' onSubmit={formik.handleSubmit} >
        <h4 className='login-title'>Login your account</h4>
        <div className="p-float-label"  style={{width: "80%", display: "flex"}}>
          <InputText id="email" value={formik.values.email} onChange={formik.handleChange} style={{flex: "1"}} />
          <label htmlFor="email">Email</label>
        </div>
        <div className="p-float-label" style={{width: "80%", display: "flex"}}>
          <Password inputId="password" value={formik.values.password} onChange={formik.handleChange} style={{flex: "1"}} inputStyle={{flex: "1"}} panelStyle={{flex: "1"}} toggleMask/>
          <label htmlFor="password">Password</label>
        </div>
        <Button label="Login" size='small' type='submit' />
        <a style={{"color":"black"}}>Create Account</a>
      </form>
    </div>
)
}

export default LoginBlock