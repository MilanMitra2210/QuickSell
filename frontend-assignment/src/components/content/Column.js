import React from 'react'
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import Card from '../card/Card';

const Column = (props) => {
    const {title , count, ChildComponent, data} = props;
  return (
    <>
        <div className='col'>
            <div className='top'>
                <div className='left'>
                    <div>{ChildComponent && <ChildComponent />}</div>
                    <div>{title}</div>
                    <div id='count'>{count}</div>
                </div>
                <div className='right'>
                    <div><AiOutlinePlus/></div>
                    <div><BiDotsHorizontalRounded/></div>
                </div>
            </div>
            {data.map((item) => (
                <Card data={item}/>
            ))}
        </div>
    </>
  )
}

export default Column
