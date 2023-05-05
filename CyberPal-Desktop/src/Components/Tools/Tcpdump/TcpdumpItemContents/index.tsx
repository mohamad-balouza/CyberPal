import React, { useState } from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import './index.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


function TcpdumpItemContents() {
  const [tcpdumpRunning, setTcpdumpRunning] = useState(false);
  const [tcpdumpPath, setTcpdumpPath] = useState("");
  const [tcpdumpArgs, setTcpdumpArgs] = useState("");

  const temp_tcpdump_command = {
    tcpdumpPath: "C:\\Users\\void\\Downloads\\tcpdump_trial_license\\tcpdump.exe",
    tcpdumpArgs: ['-l']
  }

  const handleTcpdumpExecution = () => {
    if(tcpdumpRunning){
      window.electron.ipcRenderer.send('stop-tcpdump');
    }else{
      console.log(temp_tcpdump_command);
      window.electron.ipcRenderer.send('start-tcpdump', temp_tcpdump_command);
    }
    setTcpdumpRunning(!tcpdumpRunning);
  }

  const handleTcpdumpInstallation = async () => {
    try {
      window.electron.ipcRenderer.send('install-tcpdump');
    } catch (error) {
      console.error('Failed to install Tcpdump:', error);
    }
  }

  return (
    <ScrollPanel style={{ width: '100%', height: '250px'}} className="tool-panel-block">
        <div style={{margin: "20px", display: 'flex', flexWrap: "wrap", gap: "24px", justifyContent: "center", textAlign: "center"}}>
            <h3 style={{width: "100%",}}>Tcpdump</h3>
            <Button label="install Tcpdump" onClick={handleTcpdumpInstallation} />
            <Button label={tcpdumpRunning ? "Stop Tcpdump" : "Start Tcpdump"} onClick={handleTcpdumpExecution} />
            <div className="p-float-label"  style={{width: "100%"}}>
                <InputText id="tcpdump-path" value={tcpdumpPath} onChange={(e) => setTcpdumpPath(e.target.value)} style={{width: "100%"}} />
                <label htmlFor="tcpdump-path">Tcpdump Path</label>
            </div>
            <div className="p-float-label"  style={{width: "100%"}}>
                <InputText id="tcpdump-args" value={tcpdumpArgs} onChange={(e) => setTcpdumpArgs(e.target.value)} style={{width: "100%"}} />
                <label htmlFor="tcpdump-args">Tcpdump Arguments</label>
            </div>
        </div>
    </ScrollPanel>
  )
}

export default TcpdumpItemContents