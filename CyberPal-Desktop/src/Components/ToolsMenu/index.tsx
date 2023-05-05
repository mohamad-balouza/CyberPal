import React, { useState } from 'react';
import { motion } from "framer-motion";
import './index.css';
import ToolMenuItem from 'Components/ToolMenuItem';
import { is } from 'immer/dist/internal';
import ToolMenuContents from 'Components/ToolMenuContents';
import NmapMenuItem from 'Components/Tools/Nmap/NmapMenuItem';
import NmapItemContents from 'Components/Tools/Nmap/NmapItemContents';
import TcpdumpItemContents from 'Components/Tools/Tcpdump/TcpdumpItemContents';
import TcpdumpMenuItem from 'Components/Tools/Tcpdump/TcpdumpMenuItem';

function ToolsMenu() {
  const [selectedid, setSelectedid] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const tools = [
    {
      "id": 3,
      "name": "Metasploit"
    },
    {
      "id": 4,
      "name": "nmap"
    },
    {
      "id": 5,
      "name": "nmap"
    },
    {
      "id": 6,
      "name": "nmap"
    },
    {
      "id": 7,
      "name": "nmap"
    },
    {
      "id": 8,
      "name": "nmap"
    },
    {
      "id": 9,
      "name": "nmap"
    },
  ];

  // const handleItemToggle = (tool_id: number) => {
  //   setIsOpen(true)
  //   if(tool_id == selectedid && isOpen){
  //     setIsOpen(!isOpen)
  //   }
  //   setSelectedid(tool_id);
  // }

  return (
    <div className='tools-menu-block'>
      <motion.div className='tools-menu-carousel'
          drag="x" 
          dragConstraints={{right: 0, left: -1600}} 
          dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }} 
        >
            <motion.div
                layout
                data-isOpen={selectedid == 1}
                initial={{ borderRadius: 10 }}
                className="tool-menu-item"
                onTap={() => setSelectedid(1)}
            >
            <motion.div layout className="child">
                {selectedid == 1 ? 
                  <NmapItemContents /> :
                  <NmapMenuItem />
                } 
            </motion.div>

          </motion.div>

            <motion.div
                layout
                data-isOpen={selectedid == 2}
                initial={{ borderRadius: 10 }}
                className="tool-menu-item"
                onTap={() => setSelectedid(2)}
            >
            <motion.div layout className="child">
                {selectedid == 2 ? 
                  <TcpdumpItemContents /> :
                  <TcpdumpMenuItem />
                } 
            </motion.div>

          </motion.div>


        {tools.map((tool) => (
          <motion.div
                layout
                data-isOpen={selectedid == tool.id}
                initial={{ borderRadius: 10 }}
                className="tool-menu-item"
                onTap={() => setSelectedid(tool.id)}
            >
            <motion.div layout className="child">
                {selectedid == tool.id ? 
                  <ToolMenuContents /> :
                  <ToolMenuItem tool_name={tool.name} /> 
                } 
            </motion.div>

          </motion.div>
        ))}

      </motion.div>
    </div>
  )
}

export default ToolsMenu