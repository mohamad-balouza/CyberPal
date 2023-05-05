import React, { useState } from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import './index.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


function AircrackItemContents() {
  const [aircrackArgs, setAircrackArgs] = useState("");


  const handleAircrackExecution = () => {
    
  }

  return (
    <ScrollPanel style={{ width: '100%', height: '250px'}} className="tool-panel-block">
        <div style={{margin: "20px", display: 'flex', flexWrap: "wrap", gap: "24px", justifyContent: "center", textAlign: "center"}}>
            <h3 style={{width: "100%",}}>Aircrack-ng</h3>
            <Button label="Start Aircrack-ng" onClick={handleAircrackExecution} />
            <div className="p-float-label"  style={{width: "100%"}}>
                <InputText id="aircrack-args" value={aircrackArgs} onChange={(e) => setAircrackArgs(e.target.value)} style={{width: "100%"}} />
                <label htmlFor="aircrack-args">Aircrack-ng Arguments</label>
            </div>
        </div>
    </ScrollPanel>
  )
}

export default AircrackItemContents