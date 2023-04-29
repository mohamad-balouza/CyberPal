import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function ConnectVpnTable() {
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

    return (
        <div className="card">
            <div className="card">
                <DataTable size='small' tableStyle={{ width: '30rem' }} value={userfile} >
                    <Column field="file_detail" header="OpenVPN Access Details" style={{ width: '50%' }}></Column>
                    <Column field="status" style={{ width: '3%' }}></Column>
                </DataTable>
            </div>
        </div>
    )
}

export default ConnectVpnTable