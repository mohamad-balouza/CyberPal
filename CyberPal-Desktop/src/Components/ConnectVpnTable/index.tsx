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
                <DataTable size='small' tableStyle={{ width: '50rem' }} value={userfile} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                        currentPageReportTemplate="{first} to {last} of {totalRecords}">
                    <Column field="file_detail" header="OpenVPN Access Details" style={{ width: '50%' }}></Column>
                    <Column field="status" style={{ width: '3%' }}></Column>
                </DataTable>
            </div>
        </div>
    )
}

export default ConnectVpnTable