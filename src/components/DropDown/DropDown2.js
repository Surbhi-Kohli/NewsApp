import React from "react";
import "./DropDown.css";
//import logo from "../../assets/images/globe.jpeg";
const dropDown = props => (
  <select className="DropDown" onChange={props.category}>
  { /*<option className="options" value="">
      Category
</option>*/} 
    <option
      className="options"
      value="business"
      onClick={console.log("called")}
    >
      Business
    </option>
    <option className="options" value="entertainment">
      Entertainment
    </option>
    <option value="sports" className="options">
      Sports
    </option>
    <option className="options" value="science">
      Science
    </option>

    {/*</div>*/}
  </select>
);

export default dropDown;
