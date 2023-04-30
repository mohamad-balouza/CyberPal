import React from 'react';
import { motion } from "framer-motion";
import './index.css';

function ToolsMenu() {
  return (
    <div className='tools-menu-block'>
      <motion.div className='tools-menu-carousel'
          drag="x" 
          dragConstraints={{right: 0, left: -1600}} 
          dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }} 
      >
        <div className='tool-menu-item'>Hello</div>
        <div className='tool-menu-item'>Hello</div>
        <div className='tool-menu-item'>Hello</div>
        <div className='tool-menu-item'>Hello</div>
        <div className='tool-menu-item'>Hello</div>
        <div className='tool-menu-item'>Hello</div>
        <div className='tool-menu-item'>Hello</div>
        <div className='tool-menu-item'>Hello</div>
        <div className='tool-menu-item'>Hello</div>
      </motion.div>
    </div>
  )
}

export default ToolsMenu