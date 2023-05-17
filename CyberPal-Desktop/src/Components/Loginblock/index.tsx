import React, { useRef, useState } from 'react';
import LoginImage from '../../../assets/LoginImage.png';
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';                             
import { Password } from 'primereact/password';
import "./index.css";       
import * as yup from 'yup';
import { useFormik } from 'formik';
import { login } from '../../Apis/Auth';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../Redux/store';
import { changeToken } from 'Redux/slices/userTokenSlice';
import { useNavigate } from 'react-router-dom';
import { changeCurrentPage } from 'Redux/slices/currentPageSlice';
import { Toast } from 'primereact/toast';


        
function LoginBlock() {
  const user_token = useSelector((state: RootState) => state.userToken.access_token); 
  const current_page = useSelector((state: RootState) => state.currentPage.value); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useRef(null);

  const handleSignupNavigation = () => {
    navigate("/signup");
    dispatch(changeCurrentPage("Signup"));
  }

  const showLoginError = () => {
    toast.current.show({severity:'error', summary: 'Error', detail:'Wrong Email or Password!', life: 3000});
  }

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

  const handleLogin = async (data: URLSearchParams) => {
    try {
      const user = await login(data);
      dispatch(changeToken(user.access_token));
      navigate("/");
    } catch(err){
      showLoginError();
      console.error('Error fetching user:', err);
    }
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const login_data = new URLSearchParams();
      login_data.append('username', values.email);
      login_data.append('password', values.password);

      handleLogin(login_data);
    },
  });


  return (
    <div className='login-block'>
      <Toast ref={toast} />
      <div className='login-image-block'>
        <img src={LoginImage} className='login-image' />
      </div>

      <form className='login-content-block' onSubmit={formik.handleSubmit} >
        <h4 className='login-title'>Login your account</h4>
        <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <div className="p-float-label"  style={{width: "80%", display: "flex"}}>
            <InputText id="email" value={formik.values.email} onChange={formik.handleChange} style={{flex: "1"}} className={formik.touched.email && Boolean(formik.errors.email) ? "p-invalid" : ""} />
            <label htmlFor="email">Email</label>
          </div>
          <small className="p-error">{formik.touched.email && formik.errors.email}</small>
        </div>

        <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}}>
          <div className="p-float-label" style={{width: "80%", display: "flex"}}>
            <Password inputId="password" value={formik.values.password} onChange={formik.handleChange} style={{flex: "1"}} inputStyle={{flex: "1"}} panelStyle={{flex: "1"}} toggleMask className={formik.touched.password && Boolean(formik.errors.password) ? "p-invalid" : ""} />
            <label htmlFor="password">Password</label>
          </div>
          <small className="p-error">{formik.touched.password && formik.errors.password}</small>
        </div>

        <Button label="Login" size='small' type='submit' />
        <a style={{"color":"black"}} onClick={handleSignupNavigation}>Create Account</a>
      </form>
    </div>
)
}

export default LoginBlock