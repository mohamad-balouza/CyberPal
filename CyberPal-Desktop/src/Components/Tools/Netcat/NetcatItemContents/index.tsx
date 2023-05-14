import React, { useState } from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import './index.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


function NetcatItemContents() {
  const [netcatArgs, setNetcatArgs] = useState("");
  const [netcatPath, setNetcatPath] = useState(`"C:\\Program Files (x86)\\Nmap\\ncat.exe"`);
  const [netcatRunning, setNetcatRunning] = useState(false);

  const temp_netcat_command = {
    netcatPath: "C:\\Program Files (x86)\\Nmap\\ncat.exe",
    netcatArgs: ["--version"]
  }

  const handleNetcatExecution = () => {
    if(netcatRunning){
        window.electron.ipcRenderer.send('stop-netcat');
      }else{
        console.log(temp_netcat_command);
        window.electron.ipcRenderer.send('start-netcat', temp_netcat_command);
      }
      setNetcatRunning(!netcatRunning);
  }

  const handleNetcatInstallation = () => {
    try {
        window.electron.ipcRenderer.send('install-netcat');
      } catch (error) {
        console.error('Failed to install Netcat:', error);
      }
  }

  const handleExternalExecution = () => {
    let test_contents = netcatPath + " " + netcatArgs + "\n pause";
    window.electron.ipcRenderer.send('run-test', test_contents, "netcat.bat");
  }

  return (
    <ScrollPanel style={{ width: '100%', height: '250px'}} className="tool-panel-block">
        <div style={{margin: "20px", display: 'flex', flexWrap: "wrap", gap: "24px", justifyContent: "center", textAlign: "center"}}>
            <h3 style={{width: "100%",}}>Netcat</h3>
            <Button label="Install Netcat" onClick={handleNetcatInstallation}  />
            <Button label="Start Netcat" onClick={handleExternalExecution} />
            <div className="p-float-label"  style={{width: "100%"}}>
                <InputText id="netcat-path" value={netcatPath} onChange={(e) => setNetcatPath(e.target.value)} style={{width: "100%"}} />
                <label htmlFor="netcat-path">Netcat Path</label>
            </div>
            <div className="p-float-label"  style={{width: "100%"}}>
                <InputText id="netcat-args" value={netcatArgs} onChange={(e) => setNetcatArgs(e.target.value)} style={{width: "100%"}} />
                <label htmlFor="netcat-args">Netcat Arguments</label>
            </div>
        </div>
    </ScrollPanel>
  )
}

export default NetcatItemContents