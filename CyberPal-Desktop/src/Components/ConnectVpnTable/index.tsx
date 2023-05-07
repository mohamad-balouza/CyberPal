import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './index.css';
import { Button } from 'primereact/button';

function ConnectVpnTable() {
    const[openvpnRunning, setOpenvpnRunning] = useState(false);
    const[userfiledb, setUserfiledb] = useState([])
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
        openvpnPath: "",
        openvpnArgs: []
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
                <Button label='Openvpn Path'  />
                <Button label='Connect' onClick={handleOpenvpnExecution} />
            </div>
        </div>
    )
}

export default ConnectVpnTable