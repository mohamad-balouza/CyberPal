import React, { useState } from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import './index.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


function TcpdumpItemContents() {
  const [tcpdumpRunning, setTcpdumpRunning] = useState(false);
  const [tcpdumpPath, setTcpdumpPath] = useState(`"C:\\Users\\void\\Downloads\\tcpdump_trial_license\\tcpdump.exe"`);
  const [tcpdumpArgs, setTcpdumpArgs] = useState("");
  const [snapLength, setSnapLength] = useState("");
  const [interfaceName, setInterfaceName] = useState("");
  const [packetCount, setPacketCount] = useState("");

  const temp_tcpdump_command = {
    tcpdumpPath: "C:\\Users\\void\\Downloads\\tcpdump_trial_license\\tcpdump.exe",
    tcpdumpArgs: []
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

  const buildTheTcpdumpCommand = () => {
    if(tcpdumpPath){
      let tcpdump_path = tcpdumpPath.split("\\");
      let tcpdump_path_fixed = tcpdump_path.join("\\\\");
      temp_tcpdump_command.tcpdumpPath = tcpdump_path_fixed;
    }

    if(snapLength){
      temp_tcpdump_command.tcpdumpArgs.push(`-s ${snapLength}`);
    }

    if(interfaceName){
      temp_tcpdump_command.tcpdumpArgs.push(`-i ${interfaceName}`);
    }

    if(packetCount){
      temp_tcpdump_command.tcpdumpArgs.push(`-c ${packetCount}`);
    }

    if(tcpdumpArgs){
      temp_tcpdump_command.tcpdumpArgs.push(tcpdumpArgs);
    }
  }

  const handleRunTest = () => {
    buildTheTcpdumpCommand();
    let test_contents = temp_tcpdump_command.tcpdumpPath + " " + temp_tcpdump_command.tcpdumpArgs.join(" ") + "\n pause";
    window.electron.ipcRenderer.send('run-test', test_contents, "tcpdump.bat");
  }

  return (
    <ScrollPanel style={{ width: '100%', height: '250px'}} className="tool-panel-block">
        <div style={{margin: "20px", display: 'flex', flexWrap: "wrap", gap: "24px", justifyContent: "center", textAlign: "center"}}>
            <h3 style={{width: "100%",}}>Tcpdump</h3>
            <Button label="install Tcpdump" onClick={handleTcpdumpInstallation} />
            <Button label="Start Tcpdump" onClick={handleRunTest} />
            <div className="p-float-label"  style={{width: "100%"}}>
                <InputText id="tcpdump-path" value={tcpdumpPath} onChange={(e) => setTcpdumpPath(e.target.value)} style={{width: "100%"}} />
                <label htmlFor="tcpdump-path">Tcpdump Path</label>
            </div>
            <div className="p-float-label"  style={{width: "47%"}}>
                <InputText id="snap-length" tooltip='Snap length is the number of bytes to capture' tooltipOptions={{ position: 'top' }} value={snapLength} onChange={(e) => setSnapLength(e.target.value)} style={{width: "100%"}} />
                <label htmlFor="snap-length">Snap Length</label>
            </div>
            <div className="p-float-label"  style={{width: "47%"}}>
                <InputText id="interface-name" value={interfaceName} onChange={(e) => setInterfaceName(e.target.value)} style={{width: "100%"}} />
                <label htmlFor="interface-name">Interface Name</label>
            </div>
            <div className="p-float-label"  style={{width: "47%"}}>
                <InputText id="packet-count" tooltip='Specify the number of packets to capture before tcpdump exits' tooltipOptions={{ position: 'top' }} value={packetCount} onChange={(e) => setPacketCount(e.target.value)} style={{width: "100%"}} />
                <label htmlFor="packet-count">Packet Count</label>
            </div>
            <div className="p-float-label"  style={{width: "47%"}}>
                <InputText id="tcpdump-args" tooltip='Enter the arguments seperated by space' tooltipOptions={{ position: 'top' }} value={tcpdumpArgs} onChange={(e) => setTcpdumpArgs(e.target.value)} style={{width: "100%"}} />
                <label htmlFor="tcpdump-args">Tcpdump Arguments</label>
            </div>
        </div>
    </ScrollPanel>
  )
}

export default TcpdumpItemContents