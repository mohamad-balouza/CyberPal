import React, { useState } from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import './index.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


function ZapItemContents() {
  const [zapRunning, setZapRunning] = useState(false);
  const [zapPath, setZapPath] = useState("");
  const [zapArgs, setZapArgs] = useState("");

  const temp_zap_command = {
    zapPath: "",
    zapArgs: []
  }

  const handleZapExecution = () => {

  }

  const handleZapInstallation = async () => {

  }

  return (
    <ScrollPanel style={{ width: '100%', height: '250px'}} className="tool-panel-block">
        <div style={{margin: "20px", display: 'flex', flexWrap: "wrap", gap: "24px", justifyContent: "center", textAlign: "center"}}>
            <h3 style={{width: "100%",}}>OWASP ZAP</h3>
            <Button label="install Zap" onClick={handleZapInstallation} />
            <Button label={zapRunning ? "Stop Zap" : "Start Zap"} onClick={handleZapExecution} />
            <div className="p-float-label"  style={{width: "100%"}}>
                <InputText id="zap-path" value={zapPath} onChange={(e) => setZapPath(e.target.value)} style={{width: "100%"}} />
                <label htmlFor="zap-path">Zap Path</label>
            </div>
            <div className="p-float-label"  style={{width: "100%"}}>
                <InputText id="zap-args" value={zapArgs} onChange={(e) => setZapArgs(e.target.value)} style={{width: "100%"}} />
                <label htmlFor="zap-args">Zap Arguments</label>
            </div>
        </div>
    </ScrollPanel>
  )
}

export default ZapItemContents