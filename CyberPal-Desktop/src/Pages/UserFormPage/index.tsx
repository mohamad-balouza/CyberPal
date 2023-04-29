import AdminNavbar from 'Components/AdminNavbar';
import AdminSidebar from 'Components/AdminSidebar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Column } from 'primereact/column';
import React, { useState } from 'react';
import './index.css';

function UserFormPage() {
  const [username, setUsername] = useState("");

  return (
    <div className='admin-page-block'>
      <AdminSidebar />
      <div className='admin-page-content-block'>
        <AdminNavbar />
        <h3>User Form</h3>
        <div className="card">
            <span className="p-float-label">
                <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="username">Username</label>
            </span>
        </div>
      </div>
    </div>
  )
}

export default UserFormPage