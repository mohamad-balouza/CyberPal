import AdminNavbar from 'Components/AdminNavbar';
import AdminSidebar from 'Components/AdminSidebar';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import React, { useEffect, useState } from 'react';
import './index.css';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getAllUsers } from '../../Apis/Users';

function ManageUsersPage() {
  const [users, setUsers] = useState([]);

  const queryClient = useQueryClient();
  const fetched_users = useQuery(['users'], getAllUsers);
  

  return (
    <div className='admin-page-block'>
      <AdminSidebar />
      <div className='admin-page-content-block'>
        <AdminNavbar />
        <h3>Users</h3>
        <div className="card">
            <DataTable value={fetched_users.data} loading={fetched_users.isLoading} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} to {last} of {totalRecords}">
                <Column field="id" header="ID" style={{ width: '10%' }}></Column>
                <Column field="username" header="Username" style={{ width: '15%' }}></Column>
                <Column field="email" header="Email" style={{ width: '25%' }}></Column>
                <Column field="is_active" header="Active" style={{ width: '10%' }}></Column>
                <Column field="user_type_id" header="Privileges" style={{ width: '15%' }}></Column>
            </DataTable>
        </div>
      </div>
    </div>
  )
}

export default ManageUsersPage