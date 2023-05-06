import React, { useState } from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import './index.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


function JohnItemContents() {
  const [johnRunning, setJohnRunning] = useState(false);
  const [johnPath, setJohnPath] = useState("");
  const [johnArgs, setJohnArgs] = useState("");

  const temp_john_command = {
    johnPath: "C:\\Users\\void\\Downloads\\john-1.9.0-jumbo-1-win64\\john-1.9.0-jumbo-1-win64\\run\\john.exe",
    johnArgs: []
  }

  const handleJohnExecution = () => {
    if(johnRunning){
      window.electron.ipcRenderer.send('stop-john');
    }else{
      window.electron.ipcRenderer.send('start-john', temp_john_command);
    }
    setJohnRunning(!johnRunning);
  }

  const handleJohnInstallation = async () => {
    try {
      window.electron.ipcRenderer.send('install-john');
    } catch (error) {
      console.error('Failed to install John The Ripper:', error);
    }
  }

  return (
    <ScrollPanel style={{ width: '100%', height: '250px'}} className="tool-panel-block">
        <div style={{margin: "20px", display: 'flex', flexWrap: "wrap", gap: "24px", justifyContent: "center", textAlign: "center"}}>
            <h3 style={{width: "100%",}}>John the Ripper</h3>
            <Button label="install John" onClick={handleJohnInstallation} />
            <Button label={johnRunning ? "Stop John" : "Start John"} onClick={handleJohnExecution} />
            <div className="p-float-label"  style={{width: "100%"}}>
                <InputText id="john-path" value={johnPath} onChange={(e) => setJohnPath(e.target.value)} style={{width: "100%"}} />
                <label htmlFor="john-path">John the Ripper Path</label>
            </div>
            <div className="p-float-label"  style={{width: "100%"}}>
                <InputText id="john-args" value={johnArgs} onChange={(e) => setJohnArgs(e.target.value)} style={{width: "100%"}} />
                <label htmlFor="john-args">John the Ripper Arguments</label>
            </div>
        </div>
    </ScrollPanel>
  )
}

export default JohnItemContents