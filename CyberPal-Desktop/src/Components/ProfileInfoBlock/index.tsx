import React from 'react';
import { Avatar } from 'primereact/avatar';
import './index.css';
import type { RootState } from '../../Redux/store';
import { useSelector } from 'react-redux';


function ProfileInfoBlock() {
  const username = useSelector((state: RootState) => state.loggedInUserInfo.username);
  const user_type = useSelector((state: RootState) => state.loggedInUserInfo.user_type);


  return (
    <div className='profile-info-block'>
        <div className='profile-picture-block'>
            <Avatar label="P" size="xlarge" shape="circle" style={{transform: "scale(1.3)"}} />
        </div>
        <div className='profile-details-block'>
            <h3>{username}</h3>
            <p>{user_type}</p>
            {/* <a>Edit</a> */}
        </div>
    </div>
  )
}

export default ProfileInfoBlock