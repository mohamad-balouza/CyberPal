import AdminNavbar from 'Components/AdminNavbar';
import AdminSidebar from 'Components/AdminSidebar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import React, { useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import './index.css';

function FlagFormPage() {
  const [flagname, setflagname] = useState("");
  const [toolid, setToolid] = useState("");
  const [flagdescription, setflagdescription] = useState("");

  const validationSchema = yup.object({
    flag_name: yup
      .string()
      .required('Flag name is required')
      .min(4, 'Too short!'),
    flag_id: yup
      .number()
      .required('Flag id is required'),
    flag_description: yup
      .string()
      .required('Flag description is required'),
  });

  return (
    <div className='admin-page-block'>
      <AdminSidebar />
      <div className='admin-page-content-block'>
        <AdminNavbar />
        <h3>Flag Form</h3>
        <div className='form-block'>
            <div className="form-input-block">
                <div className="p-float-label" style={{width: "49.2%", display: "flex"}}>
                    <InputText id="flag_name" value={flagname} onChange={(e) => setflagname(e.target.value)}  style={{flex: "1"}}/>
                    <label htmlFor="flag_name">Flag Name</label>
                </div>
                <div className="p-float-label" style={{width: "49.2%", display: "flex"}}>
                    <InputText id="tool_id" value={toolid} onChange={(e) => setToolid(e.target.value)}  style={{flex: "1"}}/>
                    <label htmlFor="tool_id">Tool ID</label>
                </div>
                <div className="p-float-label">
                    <InputTextarea id="flag_description" value={flagdescription} onChange={(e) => setflagdescription(e.target.value)} rows={5} cols={30} />
                    <label htmlFor="flag_description">Flag Description</label>
                </div>
            </div>
            <div className='form-buttons'>
                <Button label='Add Flag' style={{flex: "1"}} />
                <Button label='Update Flag' style={{flex: "1"}} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default FlagFormPage