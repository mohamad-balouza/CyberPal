import React from 'react';
import Navbar from 'Components/Navbar';
import { Avatar } from 'primereact/avatar';
import './index.css';


function ProfilePage() {
  return (
    <div>
        <Navbar />
        <div className='profile-block'>
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
            <div className='profile-contents-block'></div>
        </div>
    </div>
  )
}

export default ProfilePage