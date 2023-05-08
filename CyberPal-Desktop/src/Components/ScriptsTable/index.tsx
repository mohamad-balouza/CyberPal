import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useQuery } from '@tanstack/react-query';
import { getAllScripts } from 'Apis/Scripts';
import type { RootState } from '../../Redux/store';
import { useSelector } from 'react-redux';
import './index.css';
import { Button } from 'primereact/button';


function ScriptsTable() {
    const [visible, setVisible] = useState(false);
    const [selectedScript, setSelectedScript] = useState(null);
    const user_token = useSelector((state: RootState) => state.userToken.access_token); 
    const token_type = useSelector((state: RootState) => state.userToken.token_type); 
    const username = useSelector((state: RootState) => state.loggedInUserInfo.username);
    const scripts = useQuery(['user_scripts'],() => getAllScripts(user_token, token_type));

    const scriptInformation = {
        scriptContents: "",
        scriptName: "",
        username: username
    }

    const handleScriptExecution = () => {
        if(selectedScript) {
            scriptInformation.scriptContents = selectedScript.script_content;
            scriptInformation.scriptName = selectedScript.script_title;
        }
        window.electron.ipcRenderer.send('run-script', scriptInformation);
    }

    const paginatorLeft = <Button type="button" icon="pi pi-play" text onClick={handleScriptExecution} />;
    const paginatorRight = <Button type="button" icon="pi pi-plus" text onClick={() => {console.log(selectedScript)}} />;

    return (
        <div className="card profile-content-table">
            <div className="card">
                <DataTable size='small' value={scripts.data} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}
                        selectionMode="single" selection={selectedScript} onSelectionChange={(e) => setSelectedScript(e.value)}
                        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                        currentPageReportTemplate="{first} to {last} of {totalRecords}" emptyMessage="No Scripts Found!"  paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                    <Column field="id" header="ID" style={{ width: '10%' }}></Column>
                    <Column field="script_title" header="Title" style={{ width: '30%' }}></Column>
                    <Column field="script_content" header="Content" style={{ width: '60%' }}></Column>
                </DataTable>
            </div>
        </div>
    )
}

export default ScriptsTable