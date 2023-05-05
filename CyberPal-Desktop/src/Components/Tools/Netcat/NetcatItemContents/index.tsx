import React, { useState } from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import './index.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


function NetcatItemContents() {
  const [netcatArgs, setNetcatArgs] = useState("");
  const [netcatRunning, setNetcatRunning] = useState(false);

  const temp_netcat_command = {
    netcatPath: "",
    netcatArgs: []
  }

  const handleNetcatExecution = () => {

  }

  const handleNetcatInstallation = () => {

  }

  return (
    <ScrollPanel style={{ width: '100%', height: '250px'}} className="tool-panel-block">
        <div style={{margin: "20px", display: 'flex', flexWrap: "wrap", gap: "24px", justifyContent: "center", textAlign: "center"}}>
            <h3 style={{width: "100%",}}>Netcat</h3>
            <Button label="Install Netcat" onClick={handleNetcatInstallation}  />
            <Button label={netcatRunning ? "Stop Netcat" : "Start Netcat"} onClick={handleNetcatExecution} />
            <div className="p-float-label"  style={{width: "100%"}}>
                <InputText id="netcat-args" value={netcatArgs} onChange={(e) => setNetcatArgs(e.target.value)} style={{width: "100%"}} />
                <label htmlFor="netcat-args">Netcat Arguments</label>
            </div>
        </div>
    </ScrollPanel>
  )
}

export default NetcatItemContents