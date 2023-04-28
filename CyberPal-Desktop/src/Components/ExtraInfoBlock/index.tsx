import ExtraInfoCard from 'Components/ExtraInfoCard';
import React from 'react';
import './index.css';

function ExtraInfoBlock() {
  return (
    <div className='extra-info-block'>
        <h3>What We Do</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nulla, nobis voluptate optio sapiente aspernatur impedit consequuntur itaque tempore harum.</p>
        <div className='extra-info-cards-block'>
            <ExtraInfoCard title="Information Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." button_label="click here" color="cyan" />
            <ExtraInfoCard title="Information Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." button_label="click here" color="cyan" />
            <ExtraInfoCard title="Information Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." button_label="click here" color="cyan" />
        </div>
    </div>  
  )
}

export default ExtraInfoBlock