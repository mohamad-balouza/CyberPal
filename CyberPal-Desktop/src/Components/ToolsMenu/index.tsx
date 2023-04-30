import React, { useState } from 'react';
import { motion } from "framer-motion";
import './index.css';
import ToolMenuItem from 'Components/ToolMenuItem';

function ToolsMenu() {
  const [selectedid, setSelectedid] = useState(null);
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className='tools-menu-block'>
      <motion.div className='tools-menu-carousel'
          drag="x" 
          dragConstraints={{right: 0, left: -1600}} 
          dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }} 
          onDrag={
            (event, info) => console.log(info.offset.x)
          }
      >
        <motion.div
                    layout
                    data-isOpen={isOpen}
                    initial={{ borderRadius: 50 }}
                    className="tool-menu-item"
                    onTap={() => setIsOpen(!isOpen)}
                >
                <motion.div layout className="child">
                    <div>
                        {isOpen ? "hello" : "How are you"}  
                    </div>
                </motion.div>

            </motion.div>
        <ToolMenuItem />
        <ToolMenuItem />
        <ToolMenuItem />
        <ToolMenuItem />
        <ToolMenuItem />
        <ToolMenuItem />
        <ToolMenuItem />
        <ToolMenuItem />
        <ToolMenuItem />
        <ToolMenuItem />
      </motion.div>
    </div>
  )
}

export default ToolsMenu