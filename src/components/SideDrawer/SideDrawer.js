import React from "react";
import "./SideDrawer.css";
const sideDrawer = props => {
  let drawerClasses = "side_drawer";
  if (props.show) {
    drawerClasses = "side_drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <div
            className="side_drawer_div"
            onClick={() => props.url("al-jazeera-english")}
          >
            AlJazeera
          </div>
        </li>
        <li>
          <div
            className="side_drawer_div"
            onClick={() => props.url("bbc-news")}
          >
            BBC
          </div>
        </li>
        <li>
          <div className="side_drawer_div" onClick={() => props.url("cnn")}>
            CNN
          </div>
        </li>

        <li>
          <div
            className="side_drawer_div"
            onClick={() => props.url("fox-news")}
          >
            Fox News
          </div>
        </li>

        <li>
          <div
            className="side_drawer_div"
            onClick={() => props.url("techcrunch")}
          >
            TechCrunch
          </div>
        </li>
        <li>
          <div
            className="side_drawer_div"
            onClick={() => props.url("the-hindu")}
          >
            The Hindu
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default sideDrawer;
