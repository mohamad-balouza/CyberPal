import React from 'react';
import Navbar from 'Components/Navbar';
import ToolsMenu from 'Components/ToolsMenu';
import { Image } from 'primereact/image';
import ToolsDeskImage from '../../../assets/ToolsDeskImage.png';
import './index.css'

function ToolsPage() {
  return (
    <div className='tools-page-block'>
        <Navbar />
        <div  className='tools-page-content-block'>
            <ToolsMenu />
            <Image src={ToolsDeskImage} width="550"/>
        </div>
    </div>
  )
}

export default ToolsPage