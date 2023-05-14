import AdminNavbar from 'Components/AdminNavbar';
import AdminSidebar from 'Components/AdminSidebar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import React, { useRef, useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import './index.css';
import { createFlag } from 'Apis/Flags';
import { useMutation } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import type { RootState } from '../../Redux/store';
import { Toast } from 'primereact/toast';
import { Dialog } from 'primereact/dialog';

function FlagFormPage() {
  const [btnClicked, setBtnClicked] = useState('');
  const [visible, setVisible] = useState(false); 
  const [flagid, setFlagid] = useState(0);
  const [flagData, setFlagData] = useState(null);
  const user_token = useSelector((state: RootState) => state.userToken.access_token); 
  const token_type = useSelector((state: RootState) => state.userToken.token_type); 
  const toast = useRef(null);

  const createFlagMutation = useMutation(([flag_data, user_token, token_type]) => createFlag(flag_data, user_token, token_type));

  const updateFlagMutation = useMutation({
    mutationFn: ([flagid, flag_data, user_token, token_type]) => updateFlag(flagid, flag_data, user_token, token_type),
    onSuccess:  () => {
      showFlagUpdatedSuccessfully();
      setVisible(false);
    },
    onError: () => showFlagNotCreated(),
  })

  const showFlagCreatedSuccessfully = () => {
    toast.current.show({severity:'success', summary: 'Success', detail:'Flag Created Successfully!', life: 2000});
  }

  const showFlagNotCreated = () => {
    toast.current.show({severity:'error', summary: 'Error', detail:'Flag Not Created, an Error Has Occured', life: 2000});
  }
  
  const showFlagUpdatedSuccessfully = () => {
    toast.current.show({severity:'success', summary: 'Success', detail:'Flag Updated Successfully!', life: 2000});
  }

  const showFlagNotUpdated = () => {
    toast.current.show({severity:'error', summary: 'Error', detail:'Flag Not Updated, an Error Has Occured', life: 2000});
  }



  const validationSchema = yup.object({
    flag_name: yup
      .string()
      .required('Flag name is required'),
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
        const flag_data = JSON.stringify(values);
        createFlagMutation.mutate([flag_data, user_token, token_type]);
        showFlagCreatedSuccessfully();
        formik.resetForm();
      } else {
        const flag_data = JSON.stringify(values);
        setFlagData(flag_data);
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
        <Dialog header="Update Flag " visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={footerContent}>
                <h3>Provide the flag id</h3>
                <div className="p-float-label" style={{width: "100%", display: "flex", flexDirection: "column", marginTop: "24px"}}>
                    <InputText id="flagid" value={flagid} onChange={(e) => setFlagid(e.target.value)}  style={{flex: "1"}} />
                    <label htmlFor="flagid">Flag id</label>
                </div>
        </Dialog>
      </div>
    </div>
  )
}

export default FlagFormPage