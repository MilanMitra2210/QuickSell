import React, { useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { BiChevronDown } from "react-icons/bi";
import "./navBar.css";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="navBar">
        <div className="dropdown-menu" onClick={toggleDropdown}>
          <div>
            <GiSettingsKnobs />
          </div>
          <div>Display</div>
          <div>
            <BiChevronDown />
          </div>
        </div>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <div className="dropdown-row">
              <div>Grouping</div>
              <div>
                <select name="status" className="list">
                  <option value="status">Status</option>
                  <option value="status">User</option>
                  <option value="status">Priority</option>
                </select>
              </div>
            </div>
            <div className="dropdown-row">
              <div>Ordering</div>
              <div>
                <select name="status" className="list">
                  <option value="status">Priority</option>
                  <option value="status">User</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
