import React from 'react';
import { InputText } from "primereact/inputtext";
import './index.css';


function AdminNavbar() {
  return (
    <div className='admin-navbar'>
        <div className='admin-search-input'>
            <div className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText placeholder="Search" />
            </div>
        </div>

        <div className='admin-navigation-icons'>
            <i className='pi pi-moon' />
            <i className='pi pi-cog' />
            <i className='pi pi-sign-out' />
        </div>
    </div>
  )
}

export default AdminNavbar