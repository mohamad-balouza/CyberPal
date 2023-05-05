import React, { useState } from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import './index.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';


function SearchsploitItemContents() {
  const [searchsploitArgs, setSearchsploitArgs] = useState("");


  const handleSearchsploitExecution = () => {
    
  }

  return (
    <ScrollPanel style={{ width: '100%', height: '250px'}} className="tool-panel-block">
        <div style={{margin: "20px", display: 'flex', flexWrap: "wrap", gap: "24px", justifyContent: "center", textAlign: "center"}}>
            <h3 style={{width: "100%",}}>Searchsploit</h3>
            <Button label="Start Searchsploit" onClick={handleSearchsploitExecution} />
            <div className="p-float-label"  style={{width: "100%"}}>
                <InputText id="searchsploit-args" value={searchsploitArgs} onChange={(e) => setSearchsploitArgs(e.target.value)} style={{width: "100%"}} />
                <label htmlFor="searchsploit-args">Tcpdump Arguments</label>
            </div>
        </div>
    </ScrollPanel>
  )
}

export default SearchsploitItemContents