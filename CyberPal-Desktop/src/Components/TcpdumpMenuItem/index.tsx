import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
// import NmapLogo from "../../../assets/NmapLogo.png"
import { Image } from 'primereact/image';
import './index.css';


function TcpdumpMenuItem() {

    return (
        <div className='tool-menu-item-block'>
            <div className='tool-menu-item-contents'>
                <h4>Tcpdump</h4>
                <p>Scanning Ports</p>
            </div>
            {/* <Image src={TcpdumpLogo} width="100%" className='tool-menu-item-image' /> */}
        </div>
  )
}

export default TcpdumpMenuItem