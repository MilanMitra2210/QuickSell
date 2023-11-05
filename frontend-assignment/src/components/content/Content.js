import {React, useState, useEffect} from "react";
import "./Content.css";
import { BsExclamationSquareFill } from "react-icons/bs";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { LuSignalHigh, LuSignalLow } from "react-icons/lu";
import { PiCellSignalMediumBold } from "react-icons/pi";
import {FaUserAlt} from "react-icons/fa";
import {PiCircleDuotone} from "react-icons/pi";
import {TbProgress} from "react-icons/tb";
import {IoCheckmarkDoneCircleOutline} from "react-icons/io5";
import {GiCancel} from "react-icons/gi";
import {FaExclamationCircle} from "react-icons/fa";
import axios from 'axios';

import Column from './Column';

const Content =  (props) => {
    const {group, order} = props;
    const [data, setData] = useState([]);
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
            setData(response.data);
            if(group === "User"){
                  const fData = data.users.map((user) => ({
                    ...user,
                    data: [],
                  })) ;
            
                  data.tickets.forEach((ticket) => {
                    const { status, id, title, tag, priority, userId } = ticket;
                    const foundIndex = fData.findIndex((item) => item.id === userId);
                    if (foundIndex !== -1) {
                      fData[foundIndex].data.push({ id, title, tag: tag[0], priority });
                    }
                  });
                  setUserData(fData);
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [group]);

    //   console.log(data);
  return (
    <>
        {
            data.length!=0 && group==="Priority" && 
            <div className="row">
                <Column title="No priority" count={data.tickets.length} ChildComponent={BiDotsHorizontalRounded} data={data} num={0} group={group}/>
                <Column title="Urgent" count={data.tickets.length} ChildComponent={BsExclamationSquareFill} data={data} num={4} group={group}/>
                <Column title="High" count={data.tickets.length} ChildComponent={LuSignalHigh} data={data} num={3} group={group}/>
                <Column title="Medium" count={data.tickets.length} ChildComponent={PiCellSignalMediumBold} data={data} num={2} group={group}/>
                <Column title="Low" count={data.tickets.length} ChildComponent={LuSignalLow} data={data} num={1} group={group}/>
            </div>
        }

        {
            data.length!=0 && group==="Status" &&
            <div className="row">
                <Column title="Backlog" count={data.tickets.length} ChildComponent={FaExclamationCircle} data={data} group={group} order={order}/>
                <Column title="Todo" count={data.tickets.length} ChildComponent={PiCircleDuotone} data={data} group={group} order={order}/>
                <Column title="In progress" count={data.tickets.length} ChildComponent={TbProgress} data={data} group={group} order={order}/>
                <Column title="Done" count={data.tickets.length} ChildComponent={IoCheckmarkDoneCircleOutline} data={data} group={group} order={order}/>
                <Column title="Canceled" count={data.tickets.length} ChildComponent={GiCancel} data={data} group={group} order={order}/>
            </div>    
        }

        {
            userData.length!=0 && group === "User" && 
            <div className="row">
                {userData.map((item, index) => {
                    return <Column title={item.name} count={item.data.length} ChildComponent={FaUserAlt} data={item.data} group={group} order={order}/>;
                })}
            </div>
        }
    </>
  );
};

export default Content;
