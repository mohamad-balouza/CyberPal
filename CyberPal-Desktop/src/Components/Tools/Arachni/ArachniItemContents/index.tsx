import React, { useState } from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import './index.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


function ArachniItemContents() {
  const [arachniRunning, setArachniRunning] = useState(false);
  const [arachniPath, setArachniPath] = useState("");
  const [arachniArgs, setArachniArgs] = useState("");

  const temp_arachni_command = {
    arachniPath: "",
    arachniArgs: []
  }

  const handleArachniExecution = () => {
    if(arachniRunning){
      window.electron.ipcRenderer.send('stop-arachni');
    }else{
      window.electron.ipcRenderer.send('start-arachni', temp_arachni_command);
    }
    setArachniRunning(!arachniRunning);
  }

  const handleArachniInstallation = async () => {
    try {
      window.electron.ipcRenderer.send('install-arachni');
    } catch (error) {
      console.error('Failed to install Arachni:', error);
    }
  }

  return (
    <ScrollPanel style={{ width: '100%', height: '250px'}} className="tool-panel-block">
        <div style={{margin: "20px", display: 'flex', flexWrap: "wrap", gap: "24px", justifyContent: "center", textAlign: "center"}}>
            <h3 style={{width: "100%",}}>Arachni</h3>
            <Button label="install Arachni" onClick={handleArachniInstallation} />
            <Button label={arachniRunning ? "Stop Arachni" : "Start Arachni"} onClick={handleArachniExecution} />
            <div className="p-float-label"  style={{width: "100%"}}>
                <InputText id="arachni-path" value={arachniPath} onChange={(e) => setArachniPath(e.target.value)} style={{width: "100%"}} />
                <label htmlFor="arachni-path">Arachni Path</label>
            </div>
            <div className="p-float-label"  style={{width: "100%"}}>
                <InputText id="arachni-args" value={arachniArgs} onChange={(e) => setArachniArgs(e.target.value)} style={{width: "100%"}} />
                <label htmlFor="arachni-args">Arachni Arguments</label>
            </div>
        </div>
    </ScrollPanel>
  )
}

export default ArachniItemContents