import React from "react";
import "./Content.css";
import { BsExclamationSquareFill } from "react-icons/bs";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { LuSignalHigh, LuSignalLow } from "react-icons/lu";
import { PiCellSignalMediumBold } from "react-icons/pi";

import Column from './Column';

const Content = () => {
  return (
    <div className="row">
        <Column data="No Priority" count="2" ChildComponent={BiDotsHorizontalRounded}/>
        <Column data="Urgent" count="2" ChildComponent={BsExclamationSquareFill}/>
        <Column data="High" count="2" ChildComponent={LuSignalHigh}/>
        <Column data="Medium" count="2" ChildComponent={PiCellSignalMediumBold}/>
        <Column data="Low" count="2" ChildComponent={LuSignalLow}/>
    </div>
  );
};

export default Content;
