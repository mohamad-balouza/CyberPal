import AdminNavbar from 'Components/AdminNavbar';
import AdminSidebar from 'Components/AdminSidebar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Toast } from 'primereact/toast';
import React, { useRef, useState } from 'react';
import type { RootState } from '../../Redux/store';
import { useSelector } from 'react-redux';
import * as yup from 'yup';
import { useFormik } from 'formik';
import './index.css';
import { createTool, updateTool } from 'Apis/Tools';
import { useMutation } from '@tanstack/react-query';
import { Dialog } from 'primereact/dialog';


function ToolFormPage() {
  const [btnClicked, setBtnClicked] = useState('');
  const [visible, setVisible] = useState(false); 
  const [toolid, setToolid] = useState(0);
  const [toolData, setToolData] = useState(null);
  const user_token = useSelector((state: RootState) => state.userToken.access_token); 
  const token_type = useSelector((state: RootState) => state.userToken.token_type); 
  const toast = useRef(null);

  const createToolMutation = useMutation(([tool_data, user_token, token_type]) => createTool(tool_data, user_token, token_type));

  const updateToolMutation = useMutation({
    mutationFn: ([toolid, tool_data, user_token, token_type]) => updateTool(toolid, tool_data, user_token, token_type),
    onSuccess:  () => showToolUpdatedSuccessfully(),
    onError: () => showToolNotCreated(),
  })

  const showToolCreatedSuccessfully = () => {
    toast.current.show({severity:'success', summary: 'Success', detail:'Tool Created Successfully!', life: 2000});
  }

  const showToolNotCreated = () => {
    toast.current.show({severity:'error', summary: 'Error', detail:'Tool Not Created, an Error Has Occured', life: 2000});
  }

  const showToolUpdatedSuccessfully = () => {
    toast.current.show({severity:'success', summary: 'Success', detail:'Tool Updated Successfully!', life: 2000});
  }

  const showToolNotUpdated = () => {
    toast.current.show({severity:'error', summary: 'Error', detail:'Tool Not Updated, an Error Has Occured', life: 2000});
  }

  const validationSchema = yup.object({
    tool_name: yup
      .string()
      .required('Tool name is required')
      .min(4, 'Too short!'),
    image_url: yup
      .string()
      .required('Tool image url is required'),
  });

  const formik = useFormik({
    initialValues: {
      tool_name: '',
      image_url: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if(btnClicked == "add tool"){
        const tool_data = JSON.stringify(values);
        console.log(tool_data)
        createToolMutation.mutate([tool_data, user_token, token_type]);
        showToolCreatedSuccessfully();
        formik.resetForm();
      } else {
        const tool_data = JSON.stringify(values);
        setToolData(tool_data);
        setVisible(true);
      }
    },
  });

  const footerContent = (
    <div>
        <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
        <Button label="Yes" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
    </div>
  );

  return (
    <div className='admin-page-block'>
      <Toast ref={toast} />
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
                    <InputText id="image_url" value={formik.values.image_url} onChange={formik.handleChange}  style={{flex: "1"}}  className={formik.touched.image_url && Boolean(formik.errors.image_url) ? "p-invalid" : ""}/>
                    <label htmlFor="image_url">Tool Image URL</label>
                    <small className="p-error">{formik.touched.image_url && formik.errors.image_url}</small>
                </div>
            </div>
            <div className='form-buttons'>
                <Button label='Add Tool' style={{flex: "1"}} type='submit' onClick={(event) => setBtnClicked("add tool")} />
                <Button label='Update Tool' style={{flex: "1"}} type='submit' onClick={(event) => setBtnClicked("update tool")}  />
            </div>
        </form>
        <Dialog header="Update Tool " visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={footerContent}>
                <h3>Provide the tool id</h3>
                <div className="p-float-label" style={{width: "100%", display: "flex", flexDirection: "column", marginTop: "24px"}}>
                    <InputText id="toolid" value={toolid} onChange={(e) => setToolid(e.target.value)}  style={{flex: "1"}} />
                    <label htmlFor="toolid">Tool id</label>
                </div>
        </Dialog>
      </div>
    </div>
  )
}

export default ToolFormPage