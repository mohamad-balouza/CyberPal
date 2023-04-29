import AdminNavbar from 'Components/AdminNavbar';
import AdminSidebar from 'Components/AdminSidebar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import React, { useState } from 'react';
import './index.css';

function UserFormPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUsertype] = useState("");
  const [isactive, setIsActive] = useState("");

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
                <div className="p-float-label" style={{flex: "1", display: "flex"}}>
                    <InputText id="usertype" value={usertype} onChange={(e) => setUsertype(e.target.value)}  style={{flex: "1"}}/>
                    <label htmlFor="usertype">User Type</label>
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