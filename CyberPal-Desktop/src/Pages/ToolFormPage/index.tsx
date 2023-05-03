import AdminNavbar from 'Components/AdminNavbar';
import AdminSidebar from 'Components/AdminSidebar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import React, { useRef, useState } from 'react';
import type { RootState } from '../../Redux/store';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import { useFormik } from 'formik';
import './index.css';
import { createTool } from 'Apis/Tools';
import { useMutation } from '@tanstack/react-query';


function ToolFormPage() {
  const [btnClicked, setBtnClicked] = useState('');
  const user_token = useSelector((state: RootState) => state.userToken.access_token); 
  const token_type = useSelector((state: RootState) => state.userToken.token_type); 
  const toast = useRef(null);

  const createToolMutation = useMutation((new_tool) => createTool(new_tool.tool_data, new_tool.user_token, new_tool.token_type) );


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
        const tool_data = JSON.stringify(values);
        createToolMutation.mutate({tool_data: tool_data, user_token: user_token, token_type: token_type});
        alert("done");
        // formik.resetForm();
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
                    <InputText id="tool_name" value={formik.values.tool_name} onChange={formik.handleChange}  style={{flex: "1"}} className={formik.touched.tool_name && Boolean(formik.errors.tool_name) ? "p-invalid" : ""}/>
                    <label htmlFor="tool_name">Tool Name</label>
                    <small className="p-error">{formik.touched.tool_name && formik.errors.tool_name}</small>
                </div>
                <div className="p-float-label" style={{width: "49.2%", display: "flex", flexDirection: "column"}}>
                    <InputText id="tool_image_url" value={formik.values.tool_image_url} onChange={formik.handleChange}  style={{flex: "1"}}  className={formik.touched.tool_image_url && Boolean(formik.errors.tool_image_url) ? "p-invalid" : ""}/>
                    <label htmlFor="tool_image_url">Tool Image URL</label>
                    <small className="p-error">{formik.touched.tool_image_url && formik.errors.tool_image_url}</small>
                </div>
            </div>
            <div className='form-buttons'>
                <Button label='Add Tool' style={{flex: "1"}} type='submit' onClick={(event) => setBtnClicked("add tool")} />
                <Button label='Update Tool' style={{flex: "1"}} type='submit' onClick={(event) => setBtnClicked("update tool")}  />
            </div>
        </form>
      </div>
    </div>
  )
}

export default ToolFormPage