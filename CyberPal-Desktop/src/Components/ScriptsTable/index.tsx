import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './index.css';

function ScriptsTable() {
    const[userscripts, setUserscripts] = useState([]);

    return (
        <div className="card profile-content-table">
            <div className="card">
                <DataTable size='small' value={userscripts} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                        currentPageReportTemplate="{first} to {last} of {totalRecords}" emptyMessage="No Scripts Found!">
                    <Column field="id" header="ID" style={{ width: '10%' }}></Column>
                    <Column field="script_title" header="Title" style={{ width: '30%' }}></Column>
                    <Column field="script_content" header="Content" style={{ width: '60%' }}></Column>
                </DataTable>
            </div>
        </div>
    )
}

export default ScriptsTable