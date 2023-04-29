import React from 'react';
import Navbar from 'Components/Navbar';
import './index.css';
import ProfileInfoBlock from 'Components/ProfileInfoBlock';


function ProfilePage() {
  return (
    <div>
        <Navbar />
        <div className='profile-block'>
            <ProfileInfoBlock />
            <div className='profile-contents-block'></div>
        </div>
    </div>
  )
}

export default ProfilePage