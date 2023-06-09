import AdminNavbar from 'Components/AdminNavbar';
import AdminSidebar from 'Components/AdminSidebar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Toast } from 'primereact/toast';
import React, { useRef, useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import './index.css';
import { createUser } from '../../Apis/Auth';
import { useMutation } from '@tanstack/react-query';
import { Dialog } from 'primereact/dialog';
import { updateUser } from '../../Apis/Users';
import type { RootState } from '../../Redux/store';
import { useSelector } from 'react-redux';


function UserFormPage() {
  const [btnClicked, setBtnClicked] = useState('');
  const [userid, setUserid] = useState(0);
  const [visible, setVisible] = useState(false); 
  const [userData, setUserData] = useState(null);
  const user_token = useSelector((state: RootState) => state.userToken.access_token); 
  const token_type = useSelector((state: RootState) => state.userToken.token_type); 
  const toast = useRef(null);
  let finished_user_data;

  const createUserMutation = useMutation(createUser,{
    onSuccess: () => showUserCreatedSuccessfully(),
    onError: () => showUserNotCreated(),
  });

  const updateUserMutation = useMutation({
    mutationFn: ([userid, user_data, user_token, token_type]) => updateUser(userid, user_data, user_token, token_type),
    onSuccess:  () => {
      showUserUpdatedSuccessfully();
      setVisible(false);
    },
    onError: () => showUserNotCreated(),
  })

  const showUserCreatedSuccessfully = () => {
    toast.current.show({severity:'success', summary: 'Success', detail:'User Created Successfully!', life: 2000});
  }

  const showUserUpdatedSuccessfully = () => {
    toast.current.show({severity:'success', summary: 'Success', detail:'User Updated Successfully!', life: 2000});
  }

  const showUserNotCreated = () => {
    toast.current.show({severity:'error', summary: 'Error', detail:'User Not Created, an Error Has Occured', life: 2000});
  }

  const validationSchema = yup.object({
    username: yup
      .string()
      .required('Username is required')
      .min(4, 'Too short!'),
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
    user_type_id: yup
      .number()
      .positive('User Type ID should be a positive integer')
      .max(3, 'User Type ID should be less than 4'),
    is_active: yup
      .boolean(),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      user_type_id: 2,
      is_active: true,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if(btnClicked == "add user"){
        finished_user_data = JSON.stringify(values);
        createUserMutation.mutate(finished_user_data);
        formik.resetForm();
      } else {
        const user_data = JSON.stringify(values);
        setUserData(user_data);
        setVisible(true);
      }
    },
  });

  const handleUpdateUser = () => {
    updateUserMutation.mutate([userid, userData, user_token, token_type]);

  }

  const footerContent = (
    <div>
        <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
        <Button label="Yes" icon="pi pi-check" onClick={handleUpdateUser} autoFocus />
    </div>
  );

  return (
    <div className='admin-page-block'>
      <Toast ref={toast} />
      <AdminSidebar />
      <div className='admin-page-content-block'>
        <AdminNavbar />
        <h3>User Form</h3>
        <form className='form-block' onSubmit={formik.handleSubmit}>
            <div className="form-input-block">
                <div className="p-float-label" style={{width: "100%", display: "flex", flexDirection: "column"}}>
                    <InputText id="username" value={formik.values.username} onChange={formik.handleChange}  style={{flex: "1"}}  className={formik.touched.username && Boolean(formik.errors.username) ? "p-invalid" : ""}/>
                    <label htmlFor="username">Username</label>
                    <small className="p-error">{formik.touched.username && formik.errors.username}</small>
                </div>

                <div className="p-float-label" style={{width: "49.2%", display: "flex", flexDirection: "column"}}>
                    <InputText id="email" value={formik.values.email} onChange={formik.handleChange}  style={{flex: "1"}} className={formik.touched.email && Boolean(formik.errors.email) ? "p-invalid" : ""}/>
                    <label htmlFor="email">Email</label>
                    <small className="p-error">{formik.touched.email && formik.errors.email}</small>
                </div>

                <div className="p-float-label" style={{width: "49.2%", display: "flex", flexDirection: "column"}}>
                    <Password  inputId="password" value={formik.values.password} onChange={formik.handleChange} toggleMask style={{flex: "1"}} inputStyle={{flex: "1"}} panelStyle={{flex: "1"}} className={formik.touched.password && Boolean(formik.errors.password) ? "p-invalid" : ""} />
                    <label htmlFor="password">Password</label>
                    <small className="p-error">{formik.touched.password && formik.errors.password}</small>
                </div>
                
                <div className="p-float-label" style={{flex: "1", display: "flex", flexDirection: "column"}}>
                    <InputText id="user_type_id" value={formik.values.user_type_id} onChange={formik.handleChange}  style={{flex: "1"}} className={formik.touched.user_type_id && Boolean(formik.errors.user_type_id) ? "p-invalid" : ""} keyfilter="int"/>
                    <label htmlFor="user_type_id">User Type ID</label>
                    <small className="p-error">{formik.touched.user_type_id && formik.errors.user_type_id}</small>
                </div>
                <div className="p-float-label" style={{flex: "1",display: "flex", flexDirection: "column"}}>
                    <InputText id="is_active" value={formik.values.is_active} onChange={formik.handleChange}  style={{flex: "1"}} className={formik.touched.is_active && Boolean(formik.errors.is_active) ? "p-invalid" : ""}/>
                    <label htmlFor="is_active">Is Active</label>
                    <small className="p-error">{formik.touched.is_active && formik.errors.is_active}</small>
                </div>
            </div>
            <div className='form-buttons'>
                <Button label='Add User' style={{flex: "1"}} type='submit' onClick={(event) => setBtnClicked("add user")} />
                <Button label='Update User' style={{flex: "1"}} type='submit' onClick={(event) => setBtnClicked("update user")} />
            </div>
        </form>
        <Dialog header="Update User" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} footer={footerContent}>
                <h3>Provide the user id</h3>
                <div className="p-float-label" style={{width: "100%", display: "flex", flexDirection: "column", marginTop: "24px"}}>
                    <InputText id="userid" value={userid} onChange={(e) => setUserid(e.target.value)}  style={{flex: "1"}} />
                    <label htmlFor="userid">Userid</label>
                </div>
        </Dialog>
      </div>
    </div>
  )
}

export default UserFormPage