import React, { useState } from 'react';
import LoginImage from '../../../assets/LoginImage.png';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';                             
import { Password } from 'primereact/password';
import './index.css';        
import * as yup from 'yup';
import { useFormik } from 'formik';
import { signup } from '../../Apis/Auth';

        
function SignupBlock() {

  const validationSchema = yup.object({
    username: yup
      .string()
      .required('Username is required')
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

  const handleRegistration = async (data: string) => {
    try {
      const user = await signup(data);
    } catch(err){
      console.error('Error fetching user:', err);
    }
  }


  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const signup_data = JSON.stringify(values);
      handleRegistration(signup_data);
    },
  });


  return (
    <div className='login-block'>
      <div className='login-image-block'>
        <img src={LoginImage} className='login-image' />
      </div>

      <form className='login-content-block' onSubmit={formik.handleSubmit} >
        <h4 className='login-title'>Create your account</h4>

        <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <div className="p-float-label"  style={{width: "80%", display: "flex"}}>
            <InputText id="username" value={formik.values.username} onChange={formik.handleChange} style={{flex: "1"}}  className={formik.touched.username && Boolean(formik.errors.username) ? "p-invalid" : ""}  />
            <label htmlFor="username">Username</label>
          </div>
          <small className="p-error">{formik.touched.username && formik.errors.username}</small>
        </div>

        <div className="p-float-label"  style={{width: "80%", display: "flex"}}>
          <InputText id="email" value={formik.values.email} onChange={formik.handleChange} style={{flex: "1"}} className={formik.touched.email && Boolean(formik.errors.email) ? "p-invalid" : ""}  />
          <label htmlFor="email">Email</label>
        </div>

        <div className="p-float-label" style={{width: "80%", display: "flex"}}>
          <Password inputId="password" value={formik.values.password} onChange={formik.handleChange} style={{flex: "1"}} inputStyle={{flex: "1"}} panelStyle={{flex: "1"}} toggleMask className={formik.touched.password && Boolean(formik.errors.password) ? "p-invalid" : ""} />
          <label htmlFor="password">Password</label>
        </div>

        <Button label="Signup" size='small' type='submit' />
        <a style={{"color":"black"}}>Already Have an Account?</a>
      </form>
    </div>
)
}

export default SignupBlock