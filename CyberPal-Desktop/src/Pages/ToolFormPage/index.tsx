import AdminNavbar from 'Components/AdminNavbar';
import AdminSidebar from 'Components/AdminSidebar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import React, { useState } from 'react';
import './index.css';

function UserFormPage() {
  const [toolname, setToolname] = useState("");
  const [toolimage, setToolimage] = useState("");

  return (
    <div className='admin-page-block'>
      <AdminSidebar />
      <div className='admin-page-content-block'>
        <AdminNavbar />
        <h3>Tool Form</h3>
        <div className='form-block'>
            <div className="form-input-block">
                <div className="p-float-label" style={{width: "49.2%", display: "flex"}}>
                    <InputText id="toolname" value={toolname} onChange={(e) => setToolname(e.target.value)}  style={{flex: "1"}}/>
                    <label htmlFor="toolname">Tool Name</label>
                </div>
                <div className="p-float-label" style={{width: "49.2%", display: "flex"}}>
                    <InputText id="toolimage" value={toolimage} onChange={(e) => setToolimage(e.target.value)}  style={{flex: "1"}}/>
                    <label htmlFor="toolimage">Tool Image</label>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default UserFormPage