import React from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import './index.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';



function NmapItemContents() {

  const handleInstallNmap = async () => {
    try {
      console.log(window.electron.ipcRenderer)
      const response = await window.electron.ipcRenderer.invoke('install-nmap');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollPanel style={{ width: '100%', height: '250px'}} className="tool-panel-block">
        <div style={{margin: "20px"}}>
            <Button label='Install Nmap' onClick={handleInstallNmap} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aut quas, possimus ratione nulla facere assumenda, quae fuga quibusdam ab ea delectus non debitis ipsum nemo est in quia magni. Itaque nisi quo debitis aliquid fuga, animi aperiam excepturi, accusamus officia maxime quia neque, non impedit! Illo perferendis culpa assumenda nulla, corporis expedita dolore saepe veniam nam rerum dolorem soluta. Ipsam fugit officiis rem sunt quas? Cum, eligendi! Ipsum nemo, a nulla asperiores exercitationem non reprehenderit vitae, qui adipisci voluptas eligendi quae harum illo! Incidunt eum est quas officiis consectetur molestiae iusto sunt labore quis temporibus. Nulla doloribus beatae distinctio!</p>
            <InputText />
        </div>
    </ScrollPanel>
  )
}

export default NmapItemContents