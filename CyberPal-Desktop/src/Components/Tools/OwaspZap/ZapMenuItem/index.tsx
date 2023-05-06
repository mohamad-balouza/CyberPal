import React from 'react';
import ZapLogo from "../../../../../assets/ZapLogo.png";
import { Image } from 'primereact/image';
import './index.css';


function ZapMenuItem() {

    return (
        <div className='tool-menu-item-block'>
            <div className='tool-menu-item-contents'>
                <h4>OWASP ZAP</h4>
                <p>Web application security scanner</p>
            </div>
            <Image src={ZapLogo} width="100%" className='tool-menu-item-image' />
        </div>
  )
}

export default ZapMenuItem