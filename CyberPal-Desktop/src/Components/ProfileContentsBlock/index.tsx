import React from 'react';
import './index.css';
import { TabView, TabPanel } from 'primereact/tabview';
import SchedulesTable from 'Components/SchedulesTable';
import ScriptsTable from 'Components/ScriptsTable';
        

function ProfileContentsBlock() {
  return (
    <TabView>
        <TabPanel header="Schedules">
          <SchedulesTable />
        </TabPanel>
        <TabPanel header="Scripts">
          <ScriptsTable />
        </TabPanel>
        <TabPanel header="Favorite Scripts">

        </TabPanel>
        <TabPanel header="Connect VPN">

        </TabPanel>
    </TabView>
  )
}

export default ProfileContentsBlock