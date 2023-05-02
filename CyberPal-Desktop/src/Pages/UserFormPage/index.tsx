import AdminNavbar from 'Components/AdminNavbar';
import AdminSidebar from 'Components/AdminSidebar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Password } from 'primereact/password';
import React, { useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import './index.css';

function UserFormPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUsertype] = useState(null);
  const [isactive, setIsActive] = useState("");

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
    user_type_id: yup
      .number()
      .positive('User Type ID should be a positive integer')
      .max(4, 'User Type ID should be less than 4'),
    is_active: yup
      .boolean(),
  });

  return (
    <div className='admin-page-block'>
      <AdminSidebar />
      <div className='admin-page-content-block'>
        <AdminNavbar />
        <h3>User Form</h3>
        <div className='form-block'>
            <div className="form-input-block">
                <div className="p-float-label" style={{width: "100%", display: "flex"}}>
                    <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)}  style={{flex: "1"}}/>
                    <label htmlFor="username">Username</label>
                </div>
                <div className="p-float-label" style={{width: "49.2%", display: "flex"}}>
                    <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)}  style={{flex: "1"}}/>
                    <label htmlFor="email">Email</label>
                </div>
                <div className="p-float-label" style={{width: "49.2%", display: "flex"}}>
                    <Password  inputId="password" value={password} onChange={(e) => setPassword(e.target.value)} toggleMask style={{flex: "1"}} inputStyle={{flex: "1"}} panelStyle={{flex: "1"}} />
                    <label htmlFor="password">Password</label>
                </div>
                <div className="p-float-label" style={{flex: "1", display: "flex"}}>
                    <InputNumber id="usertype" value={usertype} onChange={(e) => setUsertype(e.value)}  style={{flex: "1"}}/>
                    <label htmlFor="usertype">User Type ID</label>
                </div>
                <div className="p-float-label" style={{flex: "1",display: "flex"}}>
                    <InputText id="isactive" value={isactive} onChange={(e) => setIsActive(e.target.value)}  style={{flex: "1"}}/>
                    <label htmlFor="isactive">Is Active</label>
                </div>
            </div>
            <div className='form-buttons'>
                <Button label='Add User' style={{flex: "1"}} />
                <Button label='Update User' style={{flex: "1"}} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default UserFormPage