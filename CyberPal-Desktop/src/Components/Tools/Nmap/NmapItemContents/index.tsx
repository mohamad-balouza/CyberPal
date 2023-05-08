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
  const [nmapArgs, setNmapArgs] = useState("");
  const [output, setOutput] = useState("");
  const [downloadProgress, setDownloadProgress] = useState(0);

  const temp_nmap_command = {
    nmapPath: "C:\\Users\\void\\Downloads\\nmap_trial_license\\nmap.exe",
    nmapArgs: ["--version"]
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

  const handleNmapCommandExecution = () => {
    let nmap_path = nmapPath.split("\\");
    let nmap_path_fixed = nmap_path.join("\\\\");
    temp_nmap_command.nmapPath = nmap_path_fixed;

    if(nmapRunning){
      window.electron.ipcRenderer.send('stop-nmap');
    }else{
      console.log(temp_nmap_command);
      window.electron.ipcRenderer.send('start-nmap', temp_nmap_command);
    }
    setNmapRunning(!nmapRunning);
  }

  useEffect(() => {

    const handleOutput = (event, { type, data }) => {
      setOutput(prevOutput => prevOutput + `\n[${type.toUpperCase()}] ${data}`);
    };

    window.electron.ipcRenderer.on('nmap-output', handleOutput);
  
    return () => {
      window.electron.ipcRenderer.remove('nmap-output', handleOutput);
    }
  }, [])
  

  return (
    <ScrollPanel style={{ width: '100%', height: '250px'}} className="tool-panel-block">
        <div style={{margin: "20px", display: 'flex', flexWrap: "wrap", gap: "24px", justifyContent: "center", textAlign: "center"}}>
            <h3 style={{width: "100%",}}>Nmap</h3>
            <Button label={installingNmap ? "installing" : "install Nmap"} onClick={handleNmapInstallation} />
            <Button label="Execute Nmap" onClick={handleNmapCommandExecution} />
            <Button label="Show Output" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <div className="p-float-label"  style={{width: "100%"}}>
                <InputText id="nmap-path" value={nmapPath} onChange={(e) => setNmapPath(e.target.value)} style={{width: "100%"}} />
                <label htmlFor="nmap-path">Nmap Path</label>
            </div>
            <div className="p-float-label"  style={{width: "100%"}}>
                <InputText id="nmap-args" value={nmapArgs} onChange={(e) => setNmapArgs(e.target.value)} style={{width: "100%"}} />
                <label htmlFor="nmap-args">Nmap Arguments</label>
            </div>
        </div>
        <Dialog header="Nmap Output" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
            {output}
        </Dialog>
    </ScrollPanel>
  )
}

export default NmapItemContents