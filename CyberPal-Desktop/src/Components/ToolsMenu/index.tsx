import React, { useState } from 'react';
import { motion } from "framer-motion";
import './index.css';
import ToolMenuItem from 'Components/ToolMenuItem';

function ToolsMenu() {
  const [selectedid, setSelectedid] = useState(null);


  return (
    <div className='tools-menu-block'>
      <motion.div className='tools-menu-carousel'
          drag="x" 
          // dragConstraints={{right: 0, left: -1600}} 
          // dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }} 
      >
        <ToolMenuItem  />
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