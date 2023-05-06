import React, { useState } from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import './index.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


function WiresharkItemContents() {
  const [wiresharkRunning, setWiresharkRunning] = useState(false);
  const [wiresharkPath, setWiresharkPath] = useState("");
  const [wiresharkArgs, setWiresharkArgs] = useState("");

  const temp_wireshark_command = {
    wiresharkPath: "",
    wiresharkArgs: []
  }

  const handleWiresharkExecution = () => {
    if(wiresharkRunning){
      window.electron.ipcRenderer.send('stop-wireshark');
    }else{
      window.electron.ipcRenderer.send('start-wireshark', temp_wireshark_command);
    }
    setWiresharkRunning(!wiresharkRunning);
  }

  const handleWiresharkInstallation = async () => {
    try {
      window.electron.ipcRenderer.send('install-wireshark');
    } catch (error) {
      console.error('Failed to install Wireshark:', error);
    }
  }

  return (
    <ScrollPanel style={{ width: '100%', height: '250px'}} className="tool-panel-block">
        <div style={{margin: "20px", display: 'flex', flexWrap: "wrap", gap: "24px", justifyContent: "center", textAlign: "center"}}>
            <h3 style={{width: "100%",}}>Wireshark</h3>
            <Button label="install Wireshark" onClick={handleWiresharkInstallation} />
            <Button label={wiresharkRunning ? "Stop Wireshark" : "Start Wireshark"} onClick={handleWiresharkExecution} />
            <div className="p-float-label"  style={{width: "100%"}}>
                <InputText id="wireshark-path" value={wiresharkPath} onChange={(e) => setWiresharkPath(e.target.value)} style={{width: "100%"}} />
                <label htmlFor="wireshark-path">Wireshark Path</label>
            </div>
            <div className="p-float-label"  style={{width: "100%"}}>
                <InputText id="wireshark-args" value={wiresharkArgs} onChange={(e) => setWiresharkArgs(e.target.value)} style={{width: "100%"}} />
                <label htmlFor="wireshark-args">Wireshark Arguments</label>
            </div>
        </div>
    </ScrollPanel>
  )
}

export default WiresharkItemContents