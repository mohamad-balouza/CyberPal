import React, { useState } from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import './index.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


function NmapItemContents() {
  const [installingNmap, setInstallingNmap] = useState(false);

  const handleNmapInstallation = async () => {
    setInstallingNmap(true);
    try {
      window.electron.ipcRenderer.send('install-nmap');
    } catch (error) {
      console.error('Failed to install Nmap:', error);
    } finally {
      setInstallingNmap(false);
    }
  };

  const handleNmapCommandExecution = () => {
    const nmap_command = "ipconfig";
    window.electron.ipcRenderer.send('execute-nmap-command', nmap_command);
  }

  return (
    <ScrollPanel style={{ width: '100%', height: '250px'}} className="tool-panel-block">
        <div style={{margin: "20px"}}>
            <Button label={installingNmap ? "installing" : "install Nmap"} loading={installingNmap} onClick={handleNmapInstallation} />
            <Button label="Execute Nmap" onClick={handleNmapCommandExecution} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aut quas, possimus ratione nulla facere assumenda, quae fuga quibusdam ab ea delectus non debitis ipsum nemo est in quia magni. Itaque nisi quo debitis aliquid fuga, animi aperiam excepturi, accusamus officia maxime quia neque, non impedit! Illo perferendis culpa assumenda nulla, corporis expedita dolore saepe veniam nam rerum dolorem soluta. Ipsam fugit officiis rem sunt quas? Cum, eligendi! Ipsum nemo, a nulla asperiores exercitationem non reprehenderit vitae, qui adipisci voluptas eligendi quae harum illo! Incidunt eum est quas officiis consectetur molestiae iusto sunt labore quis temporibus. Nulla doloribus beatae distinctio!</p>
        </div>
    </ScrollPanel>
  )
}

export default NmapItemContents