import React from 'react';
import JohnLogo from "../../../../../assets/JohnLogo.png";
import { Image } from 'primereact/image';
import './index.css';


function JohnMenuItem() {

    return (
        <div className='tool-menu-item-block'>
            <div className='tool-menu-item-contents'>
                <h4>John The Ripper</h4>
                <p>Password cracker</p>
            </div>
            <Image src={JohnLogo} width="100%" className='tool-menu-item-image' />
        </div>
  )
}

export default JohnMenuItem