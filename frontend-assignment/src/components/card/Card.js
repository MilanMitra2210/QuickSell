import React from 'react';
import { CgProfile } from "react-icons/cg";
import './Card.css' 
import { PiCircleDuotone } from 'react-icons/pi';

const Card = (props) => {
  
  return (
    <div className='card'>
      <div>
        <div id='id' className='card-content'>CAM II</div>
        <div id='title' className='card-content'>Update User Profile Page UI</div>
        <div id='feature' className='card-content'>
          <div>
            <PiCircleDuotone/>
          </div>
          <div>
          Feature Request
          </div>
        </div>
      </div>
      <div>
        <CgProfile/>
      </div>
    </div>
  )
}

export default Card
