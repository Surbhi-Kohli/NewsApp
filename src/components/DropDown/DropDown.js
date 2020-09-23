import React from "react";
import "./DropDown.css";
//import logo from "../../assets/images/globe.jpeg";
const dropDown = props => (
  <select className="DropDown" onChange={props.country}>
    <option className="options" value="us">
      U.S
    </option>
    <option className="options" value="in">
      India
    </option>
    <option value="au" className="options">
      Australia
    </option>
    <option className="options" value="gb">
      U.K
    </option>

    
  </select>
);

export default dropDown;
