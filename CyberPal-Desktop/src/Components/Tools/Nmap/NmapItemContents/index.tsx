import React, { useEffect, useState } from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import './index.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';


function NmapItemContents() {
  const [visible, setVisible] = useState(false);
  const [installingNmap, setInstallingNmap] = useState(false);
  const [nmapRunning, setNmapRunning] = useState(false);
  const [nmapPath, setNmapPath] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [port, setPort] = useState("");
  const [nmapAdditionalArgs, setNmapAdditionalArgs] = useState("");
  const [output, setOutput] = useState("");
  const [downloadProgress, setDownloadProgress] = useState(0);

  const temp_nmap_command = {
    nmapPath: "C:\\Program Files (x86)\\Nmap\\nmap.exe",
    nmapArgs: []
  }

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

  const buildTheNmapCommand = () => {
    if(nmapPath){
      let nmap_path = nmapPath.split("\\");
      let nmap_path_fixed = nmap_path.join("\\\\");
      temp_nmap_command.nmapPath = nmap_path_fixed;
    }

    if(port){
      temp_nmap_command.nmapArgs.push(`-p ${port}`);
    }

    if(nmapAdditionalArgs){
      temp_nmap_command.nmapArgs.push(nmapAdditionalArgs);
    }

    if(ipAddress){
      temp_nmap_command.nmapArgs.push(ipAddress);
    }
  }

  const handleNmapCommandExecution = async () => {

    buildTheNmapCommand();

    if(nmapRunning){
      window.electron.ipcRenderer.send('stop-nmap');
    }else{
      try {
        const output = await window.electron.ipcRenderer.invoke('start-nmap', temp_nmap_command);
        setOutput(output);
      } catch (err) {
        console.error("Error executing Nmap command:", err.message);
      }

    }
    setNmapRunning(!nmapRunning);
  }
  

  return (
    <ScrollPanel style={{ width: '100%', height: '250px'}} className="tool-panel-block">
        <div style={{margin: "20px", display: 'flex', flexWrap: "wrap", gap: "24px", justifyContent: "center", textAlign: "center"}}>
            <h3 style={{width: "100%",}}>Nmap</h3>
            <Button label={installingNmap ? "installing" : "install Nmap"} onClick={handleNmapInstallation} />
            <Button label="Execute Nmap" onClick={handleNmapCommandExecution} />
            <div className="p-float-label"  style={{width: "100%"}}>
                <InputText id="nmap-path" value={nmapPath} onChange={(e) => setNmapPath(e.target.value)} style={{width: "100%"}} />
                <label htmlFor="nmap-path">Nmap Path*</label>
            </div>
            <div className="p-float-label"  style={{width: "47%"}}>
                <InputText id="ip-address" value={ipAddress} onChange={(e) => setIpAddress(e.target.value)} style={{width: "100%"}} />
                <label htmlFor="ip-address">Ip Address to scan*</label>
            </div>
            <div className="p-float-label"  style={{width: "47%"}}>
                <InputText id="nmap-port" tooltip='For multiple ports use "," for specific ports and "-" for port ranges' tooltipOptions={{ position: 'top' }} value={port} onChange={(e) => setPort(e.target.value)} style={{width: "100%"}} />
                <label htmlFor="nmap-port">Ports</label>
            </div>
            <div className="p-float-label"  style={{width: "100%"}}>
                <InputText id="nmap-args" tooltip='Enter the arguments seperated by space' tooltipOptions={{ position: 'top' }} value={nmapAdditionalArgs} onChange={(e) => setNmapAdditionalArgs(e.target.value)} style={{width: "100%"}} />
                <label htmlFor="nmap-args">Nmap Additional Arguments</label>
            </div>
            <Button label="Show Output" icon="pi pi-external-link" onClick={() => setVisible(true)} />
        </div>
        <Dialog header="Nmap Output" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
            {output ? output : "Run the Command to Get your output"}
        </Dialog>
    </ScrollPanel>
  )
}

export default NmapItemContents