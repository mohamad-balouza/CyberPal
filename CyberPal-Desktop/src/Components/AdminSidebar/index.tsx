import React from 'react'
import { Avatar } from 'primereact/avatar';
import { NavLink } from 'react-router-dom';


function AdminSidebar() {
    const sidebar_manage_data = [
        {
            path:"/",
            name:"Manage Users",
            icon:"pi pi-check"
        },
        {
            path:"/",
            name:"Manage Tools",
            icon:"pi pi-check"
        },
        {
            path:"/",
            name:"Manage Tool Flags",
            icon:"pi pi-check"
        },
        {
            path:"/",
            name:"Manage Schedules",
            icon:"pi pi-check"
        },
        {
            path:"/",
            name:"Manage Scripts",
            icon:"pi pi-check"
        },
    ]

    const sidebar_forms = [
        {
            path:"/",
            name:"User Form",
            icon:"pi pi-check"
        },
        {
            path:"/",
            name:"Tool Form",
            icon:"pi pi-check"
        },
        {
            path:"/",
            name:"Flag Form",
            icon:"pi pi-check"
        }
    ]

  return (
    <div className='sidebar-block'>
        <div className='sidebar-header-block'>
            <h3>Admin Panel</h3>
            <div className='admin-profile-block'>
                <Avatar label="P" size="xlarge" shape="circle" />
                <h3>Username</h3>
            </div>
        </div>
        <p>Data</p>
        {
            sidebar_manage_data.map((item, index)=>(
                <NavLink to={item.path} key={index} className="link">
                    <div className='sidebar-item'>
                        <span className={item.icon}></span>
                        <span className="link_text">{item.name}</span>
                    </div>
                </NavLink>
            ))
        }
    </div>
  )
}

export default AdminSidebar