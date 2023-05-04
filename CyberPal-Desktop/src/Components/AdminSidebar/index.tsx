import React, { useState } from 'react';
import './index.css';
import { Avatar } from 'primereact/avatar';
import { NavLink } from 'react-router-dom';
import type { RootState } from '../../Redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { changeCurrentAdminPage } from 'Redux/slices/currentAdminPageSlice';

const sidebar_manage_data = [
    {
        path:"/admin",
        name:"Manage Users",
        icon:"pi pi-users"
    },
    {
        path:"/admin/manage-tools",
        name:"Manage Tools",
        icon:"pi pi-wrench"
    },
    {
        path:"/admin/manage-flags",
        name:"Manage Tool Flags",
        icon:"pi pi-flag"
    },
    {
        path:"/admin/manage-schedules",
        name:"Manage Schedules",
        icon:"pi pi-clock"
    },
    {
        path:"/admin/manage-scripts",
        name:"Manage Scripts",
        icon:"pi pi-hashtag"
    },
]

const sidebar_forms = [
    {
        path:"/admin/user-form",
        name:"User Form",
        icon:"pi pi-user"
    },
    {
        path:"/admin/tool-form",
        name:"Tool Form",
        icon:"pi pi-wrench"
    },
    {
        path:"/admin/flag-form",
        name:"Flag Form",
        icon:"pi pi-flag"
    }
]

function AdminSidebar() {
    const admin_username = useSelector((state: RootState) => state.loggedInUserInfo.username); 
    const current_admin_page = useSelector((state: RootState) => state.currentAdminPage.value); 
    const dispatch = useDispatch(); 

    const handleActivation = (name: string) => {
        dispatch(changeCurrentAdminPage(name));
    }
    
  return (
    <div className='sidebar-block'>
        <div className='sidebar-header-block'>
            <h4>Admin Panel</h4>
            <div className='admin-profile-block'>
                <Avatar label="P" size="xlarge" shape="circle" />
                <h4>{admin_username}</h4>
            </div>
        </div>
        <div className='sidebar-data-block'>
            <p style={{fontWeight: "bold"}}>Data</p>
            {
                sidebar_manage_data.map((item, index)=>(
                    <NavLink to={item.path} key={index} onClick={() => handleActivation(item.name)} className="link">
                        <div className={item.name == current_admin_page ? "actived-item" : "sidebar-item"}>
                            <span className={item.icon}></span>
                            <span className="link_text">{item.name}</span>
                        </div>
                    </NavLink>
                ))
            }
        </div>
        <div className='sidebar-forms-block'>
            <p style={{fontWeight: "bold"}}>Forms</p>
            {
                sidebar_forms.map((item, index)=>(
                    <NavLink to={item.path} onClick={() => handleActivation(item.name)} key={index} className="link">
                        <div className={item.name == current_admin_page ? "actived-item" : "sidebar-item"}>
                            <span className={item.icon}></span>
                            <span className="link_text">{item.name}</span>
                        </div>
                    </NavLink>
                ))
            }
        </div>
    </div>
  )
}

export default AdminSidebar