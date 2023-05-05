import React, { useState } from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import './index.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import axios from 'axios';


function SearchsploitItemContents() {
  const [searchsploitArgs, setSearchsploitArgs] = useState("");


  const handleSearchsploitExecution = () => {
    const url = `https://www.exploit-db.com/search?term=${searchsploitArgs}`;

    axios.get(url)
        .then(response => {
            const search_results = response.data;
            console.log(search_results)
        })
        .catch(error => {
            console.log(`Error: ${error}`);
        });
  }

  return (
    <ScrollPanel style={{ width: '100%', height: '250px'}} className="tool-panel-block">
        <div style={{margin: "20px", display: 'flex', flexWrap: "wrap", gap: "24px", justifyContent: "center", textAlign: "center"}}>
            <h3 style={{width: "100%",}}>Searchsploit</h3>
            <Button label="Start Searchsploit" onClick={handleSearchsploitExecution} />
            <div className="p-float-label"  style={{width: "100%"}}>
                <InputText id="searchsploit-args" value={searchsploitArgs} onChange={(e) => setSearchsploitArgs(e.target.value)} style={{width: "100%"}} />
                <label htmlFor="searchsploit-args">Search for exploit</label>
            </div>
        </div>
    </ScrollPanel>
  )
}

export default SearchsploitItemContents