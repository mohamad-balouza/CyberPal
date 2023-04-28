import { Button } from 'primereact/button';
import React from 'react';
import './index.css';

function ExtraInfoCard(props) {
  return (
    <div className='extra-info-card'>
        <div className={`card-info-block info-${props.color}`} >
            <h5>{props.title}</h5>
            <p>{props.description}</p>
            <Button label={props.button_label} />
        </div>
        <div className={`card-image-block image-${props.color}`}></div>
    </div>  
  )
}

export default ExtraInfoCard