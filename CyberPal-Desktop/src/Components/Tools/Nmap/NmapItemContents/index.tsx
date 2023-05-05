import React, { useState } from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import './index.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


function NmapItemContents() {
  const [installingNmap, setInstallingNmap] = useState(false);
  const [nmapPath, setNmapPath] = useState("");
  const [nmapArg, setNmapArg] = useState("");

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
    let nmap_path = nmapPath.split("\\");
    let nmap_path_fixed = nmap_path.join("\\\\");
    
    const nmap_command = `"${nmap_path_fixed}" ${nmapArg}`;
    
    window.electron.ipcRenderer.send('execute-nmap-command', nmap_command);
  }

  return (
    <ScrollPanel style={{ width: '100%', height: '250px'}} className="tool-panel-block">
        <div style={{margin: "20px", display: 'flex', flexWrap: "wrap", gap: "24px", justifyContent: "center", textAlign: "center"}}>
            <h3 style={{width: "100%",}}>Nmap</h3>
            <Button label={installingNmap ? "installing" : "install Nmap"} loading={installingNmap} onClick={handleNmapInstallation} />
            <Button label="Execute Nmap" onClick={handleNmapCommandExecution} />
            <div className="p-float-label"  style={{width: "100%"}}>
                <InputText id="nmap-path" value={nmapPath} onChange={(e) => setNmapPath(e.target.value)} style={{width: "100%"}} />
                <label htmlFor="nmap-path">Nmap Path</label>
            </div>
            <div className="p-float-label"  style={{width: "100%"}}>
                <InputText id="nmap-args" value={nmapArg} onChange={(e) => setNmapArg(e.target.value)} style={{width: "100%"}} />
                <label htmlFor="nmap-args">Nmap Arguments</label>
            </div>
        </div>
    </ScrollPanel>
  )
}

export default NmapItemContents