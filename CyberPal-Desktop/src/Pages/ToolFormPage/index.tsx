import AdminNavbar from 'Components/AdminNavbar';
import AdminSidebar from 'Components/AdminSidebar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import React, { useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import './index.css';

function ToolFormPage() {
  const [toolname, setToolname] = useState("");
  const [toolimage, setToolimage] = useState("");

  const validationSchema = yup.object({
    tool_name: yup
      .string()
      .required('Tool name is required')
      .min(4, 'Too short!'),
    tool_image_url: yup
      .string()
      .required('Tool image url is required'),
  });

  return (
    <div className='admin-page-block'>
      <AdminSidebar />
      <div className='admin-page-content-block'>
        <AdminNavbar />
        <h3>Tool Form</h3>
        <div className='form-block'>
            <div className="form-input-block">
                <div className="p-float-label" style={{width: "49.2%", display: "flex"}}>
                    <InputText id="tool_name" value={toolname} onChange={(e) => setToolname(e.target.value)}  style={{flex: "1"}}/>
                    <label htmlFor="tool_name">Tool Name</label>
                </div>
                <div className="p-float-label" style={{width: "49.2%", display: "flex"}}>
                    <InputText id="tool_image_url" value={toolimage} onChange={(e) => setToolimage(e.target.value)}  style={{flex: "1"}}/>
                    <label htmlFor="tool_image_url">Tool Image URL</label>
                </div>
            </div>
            <div className='form-buttons'>
                <Button label='Add Tool' style={{flex: "1"}} />
                <Button label='Update Tool' style={{flex: "1"}} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default ToolFormPage