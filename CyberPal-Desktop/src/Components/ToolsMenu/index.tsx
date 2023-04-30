import React, { useState } from 'react';
import { motion } from "framer-motion";
import './index.css';
import ToolMenuItem from 'Components/ToolMenuItem';

function ToolsMenu() {
  const [selectedid, setSelectedid] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const tools = [
    {
      "id": 1,
      "name": "nmap"
    },
    {
      "id": 2,
      "name": "Metasploit"
    },
    {
      "id": 3,
      "name": "nmap"
    },
    {
      "id": 4,
      "name": "nmap"
    },
    {
      "id": 5,
      "name": "nmap"
    }
  ];


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

        {tools.map((tool) => (
          <motion.div
                layout
                data-isOpen={selectedid == tool.id}
                initial={{ borderRadius: 50 }}
                className="tool-menu-item"
                onTap={() => setSelectedid(tool.id)}
            >
            <motion.div layout className="child">
                <ToolMenuItem tool_name={tool.name} />
            </motion.div>

          </motion.div>
        ))}

      </motion.div>
    </div>
  )
}

export default ToolsMenu