import React, { useState } from 'react';
import { motion } from "framer-motion";
import './index.css';
import ToolMenuItem from 'Components/ToolMenuItem';
import { is } from 'immer/dist/internal';
import ToolMenuContents from 'Components/ToolMenuContents';
// These imports will be taken care of after I finish all the tools, will move each tool to it's component
import NmapMenuItem from 'Components/Tools/Nmap/NmapMenuItem';
import NmapItemContents from 'Components/Tools/Nmap/NmapItemContents';
import TcpdumpItemContents from 'Components/Tools/Tcpdump/TcpdumpItemContents';
import TcpdumpMenuItem from 'Components/Tools/Tcpdump/TcpdumpMenuItem';
import SearchsploitItemContents from 'Components/Tools/Searchsploit/SearchsploitItemContents';
import SearchsploitMenuItem from 'Components/Tools/Searchsploit/SearchsploitMenuItem';
import AircrackItemContents from 'Components/Tools/Aircrack/AircrackItemContents';
import AircrackMenuItem from 'Components/Tools/Aircrack/AircrackMenuItem';
import NetcatItemContents from 'Components/Tools/Netcat/NetcatItemContents';
import NetcatMenuItem from 'Components/Tools/Netcat/NetcatMenuItem';
import JohnItemContents from 'Components/Tools/JohnTheRipper/JohnItemContents';
import JohnMenuItem from 'Components/Tools/JohnTheRipper/JohnMenuItem';
import ZapItemContents from 'Components/Tools/OwaspZap/ZapItemContents';
import ZapMenuItem from 'Components/Tools/OwaspZap/ZapMenuItem';
import WiresharkItemContents from 'Components/Tools/Wireshark/WiresharkItemContents';
import WiresharkMenuItem from 'Components/Tools/Wireshark/WiresharkMenuItem';


function ToolsMenu() {
  const [selectedid, setSelectedid] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const tools = [
    {
      "id": 8,
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

            <motion.div
                layout
                data-isOpen={selectedid == 3}
                initial={{ borderRadius: 10 }}
                className="tool-menu-item"
                onTap={() => setSelectedid(3)}
            >
            <motion.div layout className="child">
                {selectedid == 3 ? 
                  <SearchsploitItemContents /> :
                  <SearchsploitMenuItem />
                } 
            </motion.div>

          </motion.div>

            <motion.div
                layout
                data-isOpen={selectedid == 4}
                initial={{ borderRadius: 10 }}
                className="tool-menu-item"
                onTap={() => setSelectedid(4)}
            >
            <motion.div layout className="child">
                {selectedid == 4 ? 
                  <AircrackItemContents /> :
                  <AircrackMenuItem />
                } 
            </motion.div>

          </motion.div>

            <motion.div
                layout
                data-isOpen={selectedid == 5}
                initial={{ borderRadius: 10 }}
                className="tool-menu-item"
                onTap={() => setSelectedid(5)}
            >
            <motion.div layout className="child">
                {selectedid == 5 ? 
                  <NetcatItemContents /> :
                  <NetcatMenuItem />
                } 
            </motion.div>

          </motion.div>

            <motion.div
                layout
                data-isOpen={selectedid == 6}
                initial={{ borderRadius: 10 }}
                className="tool-menu-item"
                onTap={() => setSelectedid(6)}
            >
            <motion.div layout className="child">
                {selectedid == 6 ? 
                  <JohnItemContents /> :
                  <JohnMenuItem />
                } 
            </motion.div>

          </motion.div>

            <motion.div
                layout
                data-isOpen={selectedid == 7}
                initial={{ borderRadius: 10 }}
                className="tool-menu-item"
                onTap={() => setSelectedid(7)}
            >
            <motion.div layout className="child">
                {selectedid == 7 ? 
                  <ZapItemContents /> :
                  <ZapMenuItem />
                } 
            </motion.div>

          </motion.div>

            <motion.div
                layout
                data-isOpen={selectedid == 8}
                initial={{ borderRadius: 10 }}
                className="tool-menu-item"
                onTap={() => setSelectedid(8)}
            >
            <motion.div layout className="child">
                {selectedid == 8 ? 
                  <WiresharkItemContents /> :
                  <WiresharkMenuItem />
                } 
            </motion.div>

          </motion.div>


      </motion.div>
    </div>
  )
}

export default ToolsMenu