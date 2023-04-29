import AdminNavbar from 'Components/AdminNavbar';
import AdminSidebar from 'Components/AdminSidebar';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import React, { useState } from 'react';
import './index.css';

function ManageSchedulesPage() {
  const [schedules, setSchedules] = useState([]);

  return (
    <div className='admin-page-block'>
      <AdminSidebar />
      <div className='admin-page-content-block'>
        <AdminNavbar />
        <h3>Schedules</h3>
        <div className="card">
            <DataTable value={schedules} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} to {last} of {totalRecords}">
                <Column field="id" header="ID" style={{ width: '10%' }}></Column>
                <Column field="title" header="Title" style={{ width: '20%' }}></Column>
                <Column field="date_and_time" header="Date and Time" style={{ width: '20%' }}></Column>
                <Column field="schedule_type" header="Type" style={{ width: '20%' }}></Column>
                <Column field="email_contents" header="Email Contents" style={{ width: '20%' }}></Column>
                <Column field="user_id" header="User" style={{ width: '10%' }}></Column>
            </DataTable>
        </div>
      </div>
    </div>
  )
}

export default ManageSchedulesPage