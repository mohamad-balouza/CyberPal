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
  const [btnClicked, setBtnClicked] = useState('');

  const validationSchema = yup.object({
    flag_name: yup
      .string()
      .required('Flag name is required')
      .min(4, 'Too short!'),
    tool_id: yup
      .number()
      .required('Tool id is required')
      .positive('Tool id should be a positive integer'),
    flag_description: yup
      .string()
      .required('Flag description is required'),
  });

  const formik = useFormik({
    initialValues: {
      flag_name: '',
      tool_id: '',
      flag_description: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if(btnClicked == "add flag"){
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
        <h3>Flag Form</h3>
        <form className='form-block' onSubmit={formik.handleSubmit}>
            <div className="form-input-block">
                <div className="p-float-label" style={{width: "49.2%", display: "flex", flexDirection: "column"}}>
                    <InputText id="flag_name" value={formik.values.flag_name} onChange={formik.handleChange}  style={{flex: "1"}} className={formik.touched.flag_name && Boolean(formik.errors.flag_name) ? "p-invalid" : ""}/>
                    <label htmlFor="flag_name">Flag Name</label>
                    <small className="p-error">{formik.touched.flag_name && formik.errors.flag_name}</small>
                </div>
                <div className="p-float-label" style={{width: "49.2%", display: "flex", flexDirection:"column"}}>
                    <InputText id="tool_id" value={formik.values.tool_id} onChange={formik.handleChange}  style={{flex: "1"}} keyfilter="int" className={formik.touched.tool_id && Boolean(formik.errors.tool_id) ? "p-invalid" : ""} />
                    <label htmlFor="tool_id">Tool ID</label>
                    <small className="p-error">{formik.touched.tool_id && formik.errors.tool_id}</small>
                </div>
                <div className="p-float-label" style={{width: "49.2%", display: "flex", flexDirection:"column"}}>
                    <InputTextarea id="flag_description" value={formik.values.flag_description} onChange={formik.handleChange} rows={5} cols={30}  className={formik.touched.flag_description && Boolean(formik.errors.flag_description) ? "p-invalid" : ""} />
                    <label htmlFor="flag_description">Flag Description</label>
                    <small className="p-error">{formik.touched.flag_description && formik.errors.flag_description}</small>
                </div>
            </div>
            <div className='form-buttons'>
                <Button label='Add Flag' style={{flex: "1"}} onClick={(event) => setBtnClicked("add flag")} />
                <Button label='Update Flag' style={{flex: "1"}} onClick={(event) => setBtnClicked("update flag")} />
            </div>
        </form>
      </div>
    </div>
  )
}

export default FlagFormPage