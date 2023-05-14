import React from 'react';
import './index.css';
import { TabView, TabPanel } from 'primereact/tabview';
import SchedulesTable from 'Components/SchedulesTable';
import ScriptsTable from 'Components/ScriptsTable';
import ConnectVpnTable from 'Components/ConnectVpnTable';
        

function ProfileContentsBlock() {
  return (
    <TabView className='profile-tabview-block'>

      {/* Schedules table will be added when adding tools to the backend so we can schedule them */}

        {/* <TabPanel header="Schedules" className='schedules-panel'>
          <SchedulesTable />
        </TabPanel> */}
        
        <TabPanel header="Scripts">
          <ScriptsTable />
        </TabPanel>
        <TabPanel header="Connect VPN" contentStyle={{display: "flex", justifyContent: "center"}}>
          <ConnectVpnTable />
        </TabPanel>
    </TabView>
  )
}

export default ProfileContentsBlock