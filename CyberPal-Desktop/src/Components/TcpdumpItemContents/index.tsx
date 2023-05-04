import React, { useState } from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import './index.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


function TcpdumpItemContents() {
  const [tcpdumpPath, setTcpdumpPath] = useState("");
  const [tcpdumpArgs, setTcpdumpArgs] = useState("");

  const handleTcpdumpExecution = () => {
    window.electron.ipcRenderer.send('execute-tcpdump');
  }

  return (
    <ScrollPanel style={{ width: '100%', height: '250px'}} className="tool-panel-block">
        <div style={{margin: "20px", display: 'flex', flexWrap: "wrap", gap: "24px", justifyContent: "center", textAlign: "center"}}>
            <h3 style={{width: "100%",}}>Tcpdump</h3>
            {/* <Button label={installingNmap ? "installing" : "install Nmap"} loading={installingNmap} onClick={handleNmapInstallation} />
            <Button label="Execute Nmap" onClick={handleNmapCommandExecution} /> */}
            <div className="p-float-label"  style={{width: "100%"}}>
                <InputText id="nmap-path" value={tcpdumpPath} onChange={(e) => setTcpdumpPath(e.target.value)} style={{width: "100%"}} />
                <label htmlFor="nmap-path">Tcpdump Path</label>
            </div>
            <div className="p-float-label"  style={{width: "100%"}}>
                <InputText id="nmap-args" value={tcpdumpArgs} onChange={(e) => setTcpdumpArgs(e.target.value)} style={{width: "100%"}} />
                <label htmlFor="nmap-args">Tcpdump Arguments</label>
            </div>
        </div>
    </ScrollPanel>
  )
}

export default TcpdumpItemContents