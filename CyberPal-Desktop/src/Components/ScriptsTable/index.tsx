import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useQuery } from '@tanstack/react-query';
import { getAllScripts } from 'Apis/Scripts';
import type { RootState } from '../../Redux/store';
import { useSelector } from 'react-redux';
import './index.css';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';


function ScriptsTable() {
    const [visible, setVisible] = useState(false);
    const [selectedScript, setSelectedScript] = useState(null);
    const [scriptTitle, setScriptTitle] = useState("");
    const [scriptContent, setScriptContent] = useState("");    
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

    const handleAddingScript = () => {

    }
    

    const paginatorLeft = <Button type="button" icon="pi pi-play" text onClick={handleScriptExecution} />;
    const paginatorRight = <Button type="button" icon="pi pi-plus" text onClick={() => setVisible(true)} />;

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
            <Dialog header="Script Creation" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                <div className='openvpn-paths-model-block'>
                    <h3>Enter Script Details</h3>
                    <div className="p-float-label" style={{width: "70%"}}>
                        <InputText keyfilter={/^[a-zA-Z0-9\s._-]+$/} style={{width: "100%"}} id="script_title" value={scriptTitle} onChange={(e) => setScriptTitle(e.target.value)} />
                        <label htmlFor="script_title">Script Title</label>
                    </div>
                    <div className="p-float-label" style={{width: "70%"}}>
                        <InputTextarea rows={7} style={{width: "100%"}} id="script_contents" value={scriptContent} onChange={(e) => setScriptContent(e.target.value)} />
                        <label htmlFor="script_contents">Script Contents</label>
                    </div>
                    <div style={{width: "100%",display: "flex", justifyContent: "flex-end"}}>
                        <Button label="Cancel" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
                        <Button label="Save" type='submit' icon="pi pi-check" onClick={() => setVisible(false)}  />
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

export default ScriptsTable