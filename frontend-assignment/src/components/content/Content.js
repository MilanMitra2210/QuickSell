import {React, useState, useEffect} from "react";
import "./Content.css";
import { BsExclamationSquareFill } from "react-icons/bs";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { LuSignalHigh, LuSignalLow } from "react-icons/lu";
import { PiCellSignalMediumBold } from "react-icons/pi";
import axios from 'axios';

import Column from './Column';

const Content =  () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
            setData(response.data.tickets); 
            console.log(response.data.tickets); 
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

  return (
    <div className="row">
        <Column title="No Priority" count="2" ChildComponent={BiDotsHorizontalRounded} data={data}/>
        <Column title="Urgent" count="2" ChildComponent={BsExclamationSquareFill} data={data}/>
        <Column title="High" count="2" ChildComponent={LuSignalHigh} data={data}/>
        <Column title="Medium" count="2" ChildComponent={PiCellSignalMediumBold} data={data}/>
        <Column title="Low" count="2" ChildComponent={LuSignalLow} data={data}/>
    </div>
  );
};

export default Content;
