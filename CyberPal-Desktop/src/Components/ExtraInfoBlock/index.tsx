import ExtraInfoCard from 'Components/ExtraInfoCard';
import React from 'react';
import './index.css';

function ExtraInfoBlock() {
  return (
    <div className='extra-info-block'>
        <h3>What We Do</h3>
        <p>CyberPal offers an all-in-one cybersecurity solution, enabling seamless automation and integration of popular tools.</p>
        <div className='extra-info-cards-block'>
            <ExtraInfoCard title="Integrated Tools" description="CyberPal integrates popular cybersecurity tools, providing a unified platform for enhanced security management." button_label="View Tools" color="blue" />
            <ExtraInfoCard title="Scheduling Features" description="Schedule specific scripts and automate email notifications and communication, optimizing your security workflow." button_label="Explore Scheduling" color="pink" />
            <ExtraInfoCard title="Automation & Scripts" description="Leverage the power of automation and custom scripts to improve efficiency and streamline security operations." button_label="Discover Automation" color="cyan" />
        </div>
    </div>  
  )
}

export default ExtraInfoBlock