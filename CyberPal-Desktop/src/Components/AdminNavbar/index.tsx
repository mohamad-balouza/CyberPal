import React from 'react';
import { InputText } from "primereact/inputtext";
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeCurrentPage } from '../../Redux/slices/currentPageSlice';
import { changeLoggedInStateToFalse } from 'Redux/slices/userIsLoggedInSlice';
import { resetToken } from 'Redux/slices/userTokenSlice';
import { useNavigate } from 'react-router-dom';
import { changeCurrentAdminPage } from 'Redux/slices/currentAdminPageSlice';


function AdminNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(changeLoggedInStateToFalse());
    dispatch(resetToken());
    dispatch(changeCurrentPage("Home"));
    dispatch(changeCurrentAdminPage("Manage Users"));
    navigate("/");
  }

  return (
    <div className='admin-navbar'>
        <div className='admin-search-input'>
            <div className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText placeholder="Search" />
            </div>
        </div>

        <div className='admin-navigation-icons'>
            <i className='pi pi-moon' style={{cursor: "pointer"}} />
            <i className='pi pi-cog' style={{cursor: "pointer"}} />
            <i className='pi pi-sign-out' style={{cursor: "pointer"}} onClick={handleLogout} />
        </div>
    </div>
  )
}

export default AdminNavbar