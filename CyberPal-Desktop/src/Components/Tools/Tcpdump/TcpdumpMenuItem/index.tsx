import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import TcpdumpLogo from "../../../../../assets/TcpdumpLogo.png";
import { Image } from 'primereact/image';
import './index.css';


function TcpdumpMenuItem() {

    return (
        <div className='tool-menu-item-block'>
            <div className='tool-menu-item-contents'>
                <h4>Tcpdump</h4>
                <p>Packet capturing and analysis</p>
            </div>
            <Image src={TcpdumpLogo} width="100%" className='tool-menu-item-image' />
        </div>
  )
}

export default TcpdumpMenuItem