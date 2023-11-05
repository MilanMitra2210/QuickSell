import React from 'react';
import { CgProfile } from "react-icons/cg";
import './Card.css' 

const Card = () => {
  return (
    <div className='card'>
      <div>
        <div id='id'>CAM-1</div>
        <div id='title'>Update User Profile Page UI</div>
        <div id='title'>Feature Request</div>
      </div>
      <div>
        <CgProfile/>
      </div>
    </div>
  )
}

export default Card
