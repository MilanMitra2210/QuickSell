import React, { useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { BiChevronDown } from "react-icons/bi";
import "./navBar.css";
import Content from './content/Content';

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [group,setGroup] = useState("Status");
  const [order,setOrder] = useState("Priority");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  

  return (
    <>
      <div className="navBar">
        <div className="dropdown-menu" onClick={toggleDropdown}>
          <div className="dropdown-menu-text">
            <GiSettingsKnobs />
          </div>
          <div className="dropdown-menu-text">Display</div>
          <div className="dropdown-menu-text">
            <BiChevronDown />
          </div>
        </div>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <div className="dropdown-row">
              <div>Grouping</div>
              <div>
                <select name="Status" className="list" onChange={(e)=>{setGroup(e.target.value)}}>
                  <option value="Status">Status</option>
                  <option value="User">User</option>
                  <option value="Priority">Priority</option>
                </select>
              </div>
            </div>
            <div className="dropdown-row">
              <div>Ordering</div>
              <div>
                <select name="status" className="list" onChange={(e)=>{setOrder(e.target.value)}}>
                  <option value="Priority">Priority</option>
                  <option value="Title">Title</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
      <Content group={group} order={order}/> 
    </>
  );
};

export default NavBar;
