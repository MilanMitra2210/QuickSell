import React from "react";
import "./Content.css";
import { BsExclamationSquareFill } from "react-icons/bs";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { GiNetworkBars } from "react-icons/gi";
import { MdNetworkCell, MdOutlineNetworkLocked } from "react-icons/md";

import Column from './Column';

const Content = () => {
  return (
    <div className="row">
        <Column data="No Priority" count="2" ChildComponent={BiDotsHorizontalRounded}/>
        <Column data="Urgent" count="2" ChildComponent={BsExclamationSquareFill}/>
        <Column data="High" count="2" ChildComponent={GiNetworkBars}/>
        <Column data="Medium" count="2" ChildComponent={MdNetworkCell}/>
        <Column data="Low" count="2" ChildComponent={MdOutlineNetworkLocked}/>
    </div>
  );
};

export default Content;
