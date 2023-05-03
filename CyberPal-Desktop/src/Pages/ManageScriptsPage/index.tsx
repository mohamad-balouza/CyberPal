import AdminNavbar from 'Components/AdminNavbar';
import AdminSidebar from 'Components/AdminSidebar';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import React, { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getAllScripts } from 'Apis/Scripts';
import type { RootState } from '../../Redux/store';
import { useSelector } from 'react-redux';
import './index.css';

function ManageScriptsPage() {
  const user_token = useSelector((state: RootState) => state.userToken.access_token); 
  const token_type = useSelector((state: RootState) => state.userToken.token_type); 
  const queryClient = useQueryClient();
  const scripts = useQuery(['scripts'],() => getAllScripts(user_token, token_type));

  return (
    <div className='admin-page-block'>
      <AdminSidebar />
      <div className='admin-page-content-block'>
        <AdminNavbar />
        <h3>Scripts</h3>
        <div className="card">
            <DataTable value={scripts.data} loading={scripts.isLoading} emptyMessage="No Scripts Found!" paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                    currentPageReportTemplate="{first} to {last} of {totalRecords}">
                <Column field="id" header="ID" style={{ width: '10%' }}></Column>
                <Column field="script_title" header="Title" style={{ width: '20%' }}></Column>
                <Column field="author_id" header="Author" style={{ width: '20%' }}></Column>
                <Column field="script_content" header="Content" style={{ width: '50%' }}></Column>
            </DataTable>
        </div>
      </div>
    </div>
  )
}

export default ManageScriptsPage