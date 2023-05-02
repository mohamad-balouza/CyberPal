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
  const [btnClicked, setBtnClicked] = useState('');

  const validationSchema = yup.object({
    tool_name: yup
      .string()
      .required('Tool name is required')
      .min(4, 'Too short!'),
    tool_image_url: yup
      .string()
      .required('Tool image url is required'),
  });

  const formik = useFormik({
    initialValues: {
      tool_name: '',
      tool_image_url: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if(btnClicked == "add tool"){
        alert("from add");
      } else {
        alert("from update");
      }
    },
  });

  return (
    <div className='admin-page-block'>
      <AdminSidebar />
      <div className='admin-page-content-block'>
        <AdminNavbar />
        <h3>Tool Form</h3>
        <form className='form-block' onSubmit={formik.handleSubmit}>
            <div className="form-input-block">
                <div className="p-float-label" style={{width: "49.2%", display: "flex", flexDirection: "column"}}>
                    <InputText id="tool_name" value={formik.values.tool_name} onChange={formik.handleChange}  style={{flex: "1"}}/>
                    <label htmlFor="tool_name">Tool Name</label>
                    <small className="p-error">{formik.touched.tool_name && formik.errors.tool_name}</small>
                </div>
                <div className="p-float-label" style={{width: "49.2%", display: "flex", flexDirection: "column"}}>
                    <InputText id="tool_image_url" value={formik.values.tool_image_url} onChange={formik.handleChange}  style={{flex: "1"}}/>
                    <label htmlFor="tool_image_url">Tool Image URL</label>
                    <small className="p-error">{formik.touched.tool_image_url && formik.errors.tool_image_url}</small>
                </div>
            </div>
            <div className='form-buttons'>
                <Button label='Add Tool' style={{flex: "1"}} type='submit' />
                <Button label='Update Tool' style={{flex: "1"}} type='submit'  />
            </div>
        </form>
      </div>
    </div>
  )
}

export default ToolFormPage