import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import SearchsploitLogo from "../../../../../assets/SearchsploitLogo.png";
import { Image } from 'primereact/image';
import './index.css';


function SearchsploitMenuItem() {

    return (
        <div className='tool-menu-item-block'>
            <div className='tool-menu-item-contents'>
                <h4>Searchsploit</h4>
                <p>Exploit Database Search</p>
            </div>
            <Image src={SearchsploitLogo} width="100%" className='tool-menu-item-image' />
        </div>
  )
}

export default SearchsploitMenuItem