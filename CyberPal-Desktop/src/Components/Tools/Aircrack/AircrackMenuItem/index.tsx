import React from 'react';
import AircrackLogo from "../../../../../assets/AircrackLogo.png"
import { Image } from 'primereact/image';
import './index.css';


function AircrackMenuItem() {

    return (
        <div className='tool-menu-item-block'>
            <div className='tool-menu-item-contents'>
                <h4>Aircrack-ng</h4>
                <p>Wireless Network Security Auditing</p>
            </div>
            <Image src={AircrackLogo} width="100%" className='tool-menu-item-image' />
        </div>
  )
}

export default AircrackMenuItem