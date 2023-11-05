import React from 'react'
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import Card from '../card/Card';

const Column = (props) => {
    const {data , count, ChildComponent} = props;
  return (
    <>
        <div className='col'>
            <div className='top'>
                <div className='left'>
                    <div>{ChildComponent && <ChildComponent />}</div>
                    <div>{data}</div>
                    <div id='count'>{count}</div>
                </div>
                <div className='right'>
                    <div><AiOutlinePlus/></div>
                    <div><BiDotsHorizontalRounded/></div>
                </div>
            </div>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </>
  )
}

export default Column
