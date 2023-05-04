import React, { useState } from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import './index.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


function NmapItemContents() {
  const [installingNmap, setInstallingNmap] = useState(false);
  const [nmapPath, setNmapPath] = useState("");
  const [nmapArgs, setNmapArgs] = useState("");

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
    const nmap_command = `"C:\\Program Files (x86)\\Nmap\\nmap.exe" --version`;
    window.electron.ipcRenderer.send('execute-nmap-command', nmap_command);
  }

  return (
    <ScrollPanel style={{ width: '100%', height: '250px'}} className="tool-panel-block">
        <div style={{margin: "20px", display: 'flex', flexWrap: "wrap", gap: "24px", justifyContent: "center"}}>
            <Button label={installingNmap ? "installing" : "install Nmap"} loading={installingNmap} onClick={handleNmapInstallation} />
            <Button label="Execute Nmap" onClick={handleNmapCommandExecution} />
            {/* <InputText placeholder='Nmap Path' style={{flex: 1}} onChange /> */}
            <div className="p-float-label"  style={{width: "100%"}}>
                <InputText id="nmap-path" value={nmapPath} onChange={(e) => setNmapPath(e.target.value)} style={{width: "100%"}} />
                <label htmlFor="nmap-path">Nmap Path</label>
            </div>
            <div className="p-float-label"  style={{width: "100%"}}>
                <InputText id="nmap-args" value={nmapArgs} onChange={(e) => setNmapArgs(e.target.value)} style={{width: "100%"}} />
                <label htmlFor="nmap-args">Nmap Arguments</label>
            </div>
        </div>
    </ScrollPanel>
  )
}

export default NmapItemContents