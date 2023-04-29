import AdminNavbar from 'Components/AdminNavbar';
import AdminSidebar from 'Components/AdminSidebar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import React, { useState } from 'react';
import './index.css';

function FlagFormPage() {
  const [flagname, setflagname] = useState("");
  const [toolid, setToolid] = useState("");
  const [flagdescription, setflagdescription] = useState("");

  return (
    <div className='admin-page-block'>
      <AdminSidebar />
      <div className='admin-page-content-block'>
        <AdminNavbar />
        <h3>Flag Form</h3>
        <div className='form-block'>
            <div className="form-input-block">
                <div className="p-float-label" style={{width: "49.2%", display: "flex"}}>
                    <InputText id="flagname" value={flagname} onChange={(e) => setflagname(e.target.value)}  style={{flex: "1"}}/>
                    <label htmlFor="flagname">Flag Name</label>
                </div>
                <div className="p-float-label" style={{width: "49.2%", display: "flex"}}>
                    <InputText id="toolid" value={toolid} onChange={(e) => setToolid(e.target.value)}  style={{flex: "1"}}/>
                    <label htmlFor="toolid">Tool ID</label>
                </div>
                <span className="p-float-label">
                    <InputTextarea id="flagdescription" value={flagdescription} onChange={(e) => setflagdescription(e.target.value)} rows={5} cols={30} />
                    <label htmlFor="flagdescription">Flag Description</label>
                </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FlagFormPage