import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './index.css';

function SchedulesTable() {
    const[userschedules, setUserschedules] = useState([]);

    return (
        <div className="card profile-content-table">
            <DataTable size='small' value={userschedules} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} to {last} of {totalRecords}" emptyMessage="No Schedules Found!">
                <Column field="id" header="ID" style={{ width: '10%' }}></Column>
                <Column field="title" header="Title" style={{ width: '20%' }}></Column>
                <Column field="date_and_time" header="Date and Time" style={{ width: '20%' }}></Column>
                <Column field="schedule_type" header="Type" style={{ width: '20%' }}></Column>
                <Column field="email_contents" header="Email Contents" style={{ width: '20%' }}></Column>
                <Column field="appointed_flags_in_schedule" header="Flags" style={{ width: '10%' }}></Column>
            </DataTable>
        </div>
    )
}

export default SchedulesTable