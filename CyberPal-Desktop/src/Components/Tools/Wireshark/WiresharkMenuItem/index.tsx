import React from 'react';
import Wireshark from "../../../../../assets/Wireshark.png";
import { Image } from 'primereact/image';
import './index.css';


function WiresharkMenuItem() {

    return (
        <div className='tool-menu-item-block'>
            <div className='tool-menu-item-contents'>
                <h4>Wireshark</h4>
                <p>Network protocol analyzer</p>
            </div>
            <Image src={Wireshark} width="100%" className='tool-menu-item-image' />
        </div>
  )
}

export default WiresharkMenuItem