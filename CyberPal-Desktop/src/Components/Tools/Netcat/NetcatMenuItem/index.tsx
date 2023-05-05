import React from 'react';
import NetcatLogo from "../../../../../assets/NetcatLogo.png"
import { Image } from 'primereact/image';
import './index.css';


function NetcatMenuItem() {

    return (
        <div className='tool-menu-item-block'>
            <div className='tool-menu-item-contents'>
                <h4>Netcat</h4>
                <p>Network Connection Utility</p>
            </div>
            <Image src={NetcatLogo} width="100%" className='tool-menu-item-image' />
        </div>
  )
}

export default NetcatMenuItem