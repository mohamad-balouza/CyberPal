import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './index.css';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';


function ConnectVpnTable() {
    const[openvpnRunning, setOpenvpnRunning] = useState(false);
    const[openvpnPath, setOpenvpnPath] = useState("");
    const[openvpnFilePath, setOpenvpnFilePath] = useState("");    
    const[visible, setVisible] = useState(false);
    const[userfile, setUserfile] = useState([
        {
            "file_detail": "OpenVPN File Uploaded",
            "status": "0"
        },
        {
            "file_detail": "Connected",
            "status": "0"
        },
        {
            "file_detail": "Internal Virtual IP Address",
            "status": "0.0.0.0"
        }
    ]);

    const temp_openvpn_command = {
        openvpnPath: "C:\\Program Files\\OpenVPN Connect\\OpenVPNConnect.exe",
        openvpnArgs: []
    }

    const footerContent = (
        <div>
            <Button label="Cancel" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
            <Button label="Save" icon="pi pi-check" onClick={() => updateOpenvpnCommand()}  />
        </div>
    )

    const updateOpenvpnCommand = () => {
        temp_openvpn_command.openvpnPath = openvpnPath;
        temp_openvpn_command.openvpnArgs.pop();
        temp_openvpn_command.openvpnArgs.push(openvpnFilePath);
        console.log(temp_openvpn_command);
        setVisible(false);
    }



    const handleOpenvpnInstallation = () => {
        try {
            window.electron.ipcRenderer.send('install-openvpn');
            } catch (error) {
            console.error('Failed to install Openvpn:', error);
        }
    }

    const handleOpenvpnExecution = () => {
        if(openvpnRunning){
            window.electron.ipcRenderer.send('stop-openvpn');
          }else{
            window.electron.ipcRenderer.send('start-openvpn', temp_openvpn_command);
          }
          setOpenvpnRunning(!openvpnRunning);
    }

    return (
        <div className="card profile-content-table">
            <div className="card">
                <DataTable size='small' tableStyle={{ width: '30rem' }} value={userfile} >
                    <Column field="file_detail" header="OpenVPN Access Details" style={{ width: '50%' }}></Column>
                    <Column field="status" style={{ width: '3%' }}></Column>
                </DataTable>
            </div>
            <div className='profile-openvpn-buttons' >
                <Button label='Install Openvpn' onClick={handleOpenvpnInstallation} />
                <Button label='Openvpn Path' onClick={() => setVisible(true)} />
                <Dialog header="Openvpn Path" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={footerContent}>
                    <div className='openvpn-paths-model-block'>
                        <h3>Enter the Following Paths</h3>
                        <div className="p-float-label" style={{width: "70%"}}>
                            <InputText style={{width: "100%"}} id="openvpn-command-path" value={openvpnPath} onChange={(e) => setOpenvpnPath(e.target.value)} />
                            <label htmlFor="openvpn-command-path">Openvpn Command Path</label>
                        </div>
                        <div className="p-float-label" style={{width: "70%"}}>
                            <InputText style={{width: "100%"}} id="openvpn-file-path" value={openvpnFilePath} onChange={(e) => setOpenvpnFilePath(e.target.value)} />
                            <label htmlFor="openvpn-file-path">Openvpn File Path</label>
                        </div>
                    </div>
                </Dialog>
                <Button label={openvpnRunning ? "Disconnect" : "Connect"} onClick={handleOpenvpnExecution} />
            </div>
        </div>
    )
}

export default ConnectVpnTable