import React from 'react';
import Navbar from 'Components/Navbar';
import './index.css';
import ProfileInfoBlock from 'Components/ProfileInfoBlock';
import ProfileContentsBlock from 'Components/ProfileContentsBlock';


function ProfilePage() {
  return (
    <div>
        <Navbar />
        <div className='profile-block'>
            <ProfileInfoBlock />
            <ProfileContentsBlock />
        </div>
    </div>
  )
}

export default ProfilePage