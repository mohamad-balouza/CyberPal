import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import NmapLogo from "../../../assets/NmapLogo.png"
import { Image } from 'primereact/image';
import './index.css';


function NmapMenuItem() {

    return (
        <div className='tool-menu-item-block'>
            <div className='tool-menu-item-contents'>
                <h4>Nmap</h4>
                <p>Scanning Ports</p>
            </div>
            <Image src={NmapLogo} width="100%" className='tool-menu-item-image' />
        </div>
  )
}

export default NmapMenuItem