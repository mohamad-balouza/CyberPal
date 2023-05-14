import React, { useState } from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import './index.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


function AircrackItemContents() {
  const [aircrackArgs, setAircrackArgs] = useState("");
  const [aircrackPath, setAircrackPath] = useState("");
  const [aircrackRunning, setAircrackRunning] = useState(false);

  const temp_aircrack_command = {
    aircrackPath: "C:\\Users\\void\\Downloads\\aircrack\\aircrack-ng-1.7-win\\bin\\aircrack-ng.exe",
    aircrackArgs: []
  }

  const handleAircrackExecution = () => {
    if(aircrackRunning){
      window.electron.ipcRenderer.send('stop-aircrack');
    }else{
      console.log(temp_aircrack_command);
      window.electron.ipcRenderer.send('start-aircrack', temp_aircrack_command);
    }
    setAircrackRunning(!aircrackRunning);
  }

  const handleAircrackInstallation = () => {
    try {
      window.electron.ipcRenderer.send('install-aircrack');
    } catch (error) {
      console.error('Failed to install Aircrack:', error);
    }

  }

  const handleExternalExecution = () => {
    let test_contents = aircrackPath + " " + aircrackArgs + "\n pause";
    window.electron.ipcRenderer.send('run-test', test_contents, "aircrack.bat");
  }

  return (
    <ScrollPanel style={{ width: '100%', height: '250px'}} className="tool-panel-block">
        <div style={{margin: "20px", display: 'flex', flexWrap: "wrap", gap: "24px", justifyContent: "center", textAlign: "center"}}>
            <h3 style={{width: "100%",}}>Aircrack-ng</h3>
            <Button label="Install Aircrack" onClick={handleAircrackInstallation}  />
            <Button label="Start Tcpdump" onClick={handleExternalExecution} />
            <div className="p-float-label"  style={{width: "100%"}}>
                <InputText id="aircrack-path" value={aircrackPath} onChange={(e) => setAircrackPath(e.target.value)} style={{width: "100%"}} />
                <label htmlFor="aircrack-path">Aircrack-ng paths</label>
            </div>
            <div className="p-float-label"  style={{width: "100%"}}>
                <InputText id="aircrack-args" value={aircrackArgs} onChange={(e) => setAircrackArgs(e.target.value)} style={{width: "100%"}} />
                <label htmlFor="aircrack-args">Aircrack-ng Arguments</label>
            </div>
        </div>
    </ScrollPanel>
  )
}

export default AircrackItemContents