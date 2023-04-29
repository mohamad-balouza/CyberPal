import React from 'react';
import { Avatar } from 'primereact/avatar';
import './index.css';


function ProfileInfoBlock() {
  return (
    <div className='profile-info-block'>
        <div className='profile-picture-block'>
            <Avatar label="P" size="xlarge" shape="circle" />
        </div>
        <div className='profile-details-block'>
            <h3>Username</h3>
            <p>Account Type</p>
            <a>Edit</a>
        </div>
    </div>
  )
}

export default ProfileInfoBlock