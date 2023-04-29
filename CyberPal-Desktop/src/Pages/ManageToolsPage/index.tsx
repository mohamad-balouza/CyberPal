import AdminNavbar from 'Components/AdminNavbar';
import AdminSidebar from 'Components/AdminSidebar';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import React, { useState } from 'react';
import './index.css';

function ManageToolsPage() {
  const [users, setUsers] = useState([]);

  return (
    <div className='admin-page-block'>
      <AdminSidebar />
      <div className='admin-page-content-block'>
        <AdminNavbar />
        <h3>Tools</h3>
        <div className="card">
            <DataTable value={users} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} to {last} of {totalRecords}">
                <Column field="id" header="ID" style={{ width: '10%' }}></Column>
                <Column field="tool_name" header="Tool Name" style={{ width: '45%' }}></Column>
                <Column field="image_url" header="Image" style={{ width: '45%' }}></Column>
            </DataTable>
        </div>
      </div>
    </div>
  )
}

export default ManageToolsPage