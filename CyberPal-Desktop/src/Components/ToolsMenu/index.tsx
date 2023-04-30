import React, { useState } from 'react';
import { motion } from "framer-motion";
import './index.css';

function ToolsMenu() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className='tools-menu-block'>
      <motion.div className='tools-menu-carousel'
          drag="x" 
          dragConstraints={{right: 0, left: -1600}} 
          dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }} 
      >
        <motion.div
            layout
            data-isOpen={isOpen}
            initial={{ borderRadius: 50 }}
            className="tool-menu-item"
            onTap={() => setIsOpen(!isOpen)}
        >
          <motion.div layout className="child">{isOpen ? "hello" : "How are you"}</motion.div>
          
        </motion.div>
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