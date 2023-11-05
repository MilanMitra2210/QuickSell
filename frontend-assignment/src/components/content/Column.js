import React, { useEffect, useState } from 'react'
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import Card from './../card/Card';

const Column = (props) => {
    const {title , count, ChildComponent, data, group} = props;
    const [filteredData,setFilteredData] = useState([]);
    console.log(group);
    useEffect(()=>{
        if(group === "Priority"){
              const tempData = [];
              data.tickets.forEach((ticket) => {
                if (ticket.priority === props.num) {
                  tempData.push(ticket);
                }
              });
              setFilteredData(tempData);
        }
        else if(group === "Status"){
            const tempData = [];
        
            data.tickets.forEach((ticket) => {
              if (ticket.status === title) {
                tempData.push(ticket);
              }
            });
            setFilteredData(tempData);
        }
        else if(group === "User"){
            setFilteredData(data);
        }
    },[title]);
     console.log(data);
     console.log(filteredData);
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
            {filteredData.map((item,index) => {
                console.log(item);
                return <Card ticket={item} key={index}/>;
            })}
        </div>
    </>
  )
}

export default Column
