import AdminNavbar from 'Components/AdminNavbar';
import AdminSidebar from 'Components/AdminSidebar';
import React from 'react';
import './index.css';

function ManageUsersPage() {
  return (
    <div className='admin-page-block'>
      <AdminSidebar />
      <div className='admin-page-content-block'>
        <AdminNavbar />
      </div>
    </div>
  )
}

export default ManageUsersPage