import React from 'react';
import ArachniLogo from "../../../../../assets/ArachniLogo.png";
import { Image } from 'primereact/image';
import './index.css';


function ArachniMenuItem() {

    return (
        <div className='tool-menu-item-block'>
            <div className='tool-menu-item-contents'>
                <h4>Arachni</h4>
                <p>Web application security scanner</p>
            </div>
            <Image src={ArachniLogo} width="100%" className='tool-menu-item-image' />
        </div>
  )
}

export default ArachniMenuItem