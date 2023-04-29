import React from 'react';
import './index.css';
import { TabView, TabPanel } from 'primereact/tabview';
import SchedulesTable from 'Components/SchedulesTable';
import ScriptsTable from 'Components/ScriptsTable';
import ConnectVpnTable from 'Components/ConnectVpnTable';
        

function ProfileContentsBlock() {
  return (
    <TabView>
        <TabPanel header="Schedules">
          <SchedulesTable />
        </TabPanel>
        <TabPanel header="Scripts">
          <ScriptsTable />
        </TabPanel>
        <TabPanel header="Connect VPN">
          <ConnectVpnTable />
        </TabPanel>
    </TabView>
  )
}

export default ProfileContentsBlock