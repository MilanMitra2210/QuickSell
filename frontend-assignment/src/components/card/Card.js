import React from 'react';
import { CgProfile } from "react-icons/cg";
import './Card.css' 
import { PiCircleDuotone } from 'react-icons/pi';

const Card = (props) => {
  const {ticket} = props;
  const {id, title, status, priority, userId} = ticket;
  // console.log(ticket);
  return (
    <div className='card'>
      <div>
        <div id='id' className='card-content'>{id}</div>
        <div id='title' className='card-content'>{title}</div>
        <div id='feature' className='card-content'>
          <div>
            <PiCircleDuotone/>
          </div>
          <div>
          Feature Request
          </div>
        </div>
      </div>
      <div className='profile'>
        <CgProfile/>
      </div>
    </div>
  )
}

export default Card
