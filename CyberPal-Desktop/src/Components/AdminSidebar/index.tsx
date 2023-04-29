import React, { useState } from 'react';
import './index.css';
import { Avatar } from 'primereact/avatar';
import { NavLink } from 'react-router-dom';


function AdminSidebar() {
    const [activated_item, useActivated_item] = useState("Manage Users");

    const handleActivation = (name) => {
        useActivated_item(name)
    }
    
    const sidebar_manage_data = [
        {
            path:"/",
            name:"Manage Users",
            icon:"pi pi-users"
        },
        {
            path:"/",
            name:"Manage Tools",
            icon:"pi pi-wrench"
        },
        {
            path:"/",
            name:"Manage Tool Flags",
            icon:"pi pi-flag"
        },
        {
            path:"/",
            name:"Manage Schedules",
            icon:"pi pi-clock"
        },
        {
            path:"/",
            name:"Manage Scripts",
            icon:"pi pi-hashtag"
        },
    ]

    const sidebar_forms = [
        {
            path:"/",
            name:"User Form",
            icon:"pi pi-user"
        },
        {
            path:"/",
            name:"Tool Form",
            icon:"pi pi-wrench"
        },
        {
            path:"/",
            name:"Flag Form",
            icon:"pi pi-flag"
        }
    ]

  return (
    <div className='sidebar-block'>
        <div className='sidebar-header-block'>
            <h4>Admin Panel</h4>
            <div className='admin-profile-block'>
                <Avatar label="P" size="xlarge" shape="circle" />
                <h4>Username</h4>
            </div>
        </div>
        <div className='sidebar-data-block'>
            <p>Data</p>
            {
                sidebar_manage_data.map((item, index)=>(
                    <NavLink to={item.path} key={index} onClick={() => handleActivation(item.name)} className="link">
                        <div className={item.name == activated_item ? "active" : "sidebar-item"}>
                            <span className={item.icon}></span>
                            <span className="link_text">{item.name}</span>
                        </div>
                    </NavLink>
                ))
            }
        </div>
        <div className='sidebar-forms-block'>
            <p>Forms</p>
            {
                sidebar_forms.map((item, index)=>(
                    <NavLink to={item.path} onClick={() => handleActivation(item.name)} key={index} className="link">
                        <div className={item.name == activated_item ? "active" : "sidebar-item"}>
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